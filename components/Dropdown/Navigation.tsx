import styles from './Navigation.module.css'
import Link from 'next/link'
import React, { RefObject, useContext, useState } from 'react'
import NavigationItem from './NavigationItem'
import AppContext from '../../store/AppContext'
import { useRouter } from 'next/router'

export interface Nav {
    children: any,
    hasSubItem: boolean,
    href: string
}

const Nav = ({children = 'Link', hasSubItem = false, href = '/'}:Nav) => {
    
    const [height, setHeight] = useState<number | string>(0);
    const [showSub, setShowSub] = useState<boolean>(false);
    const { showSidebar } = useContext(AppContext);
    const router = useRouter();

    const ulRef = React.createRef<HTMLUListElement>();

    const [ ulStyles, setUlStyles ] = useState({
        height: height+'px'
    });

    const toggle = () => {
        setShowSub(!showSub);
        const menu = ulRef.current
        if (!showSub) {
            setUlStyles({
                height: menu?.scrollHeight+'px'
            });
        } else {
            setUlStyles({
                height: '0px'
            });
        }
    }

    return(
        <div className='text-sm'>
            {
                hasSubItem && 
                    <div className='flex flex-col w-full'>                
                        <div
                        onClick={toggle}
                            className={`
                                flex items-center justify-between w-full
                                hover:bg-zinc-500
                                px-4 py-3 rounded-md
                                duration-300 whitespace-nowrap mb-2 cursor-pointer
                             ${ router.pathname.includes(href) ? styles.treeviewButtonActive : '' }`}
                            
                        >
                            {children.title}
                            <span
                                className={'icon ml-auto transition-transform duration-300 dark:text-white' + (showSub? 'transform rotate-180': '')}
                            >
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    width="20"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <ul
                            style={ulStyles}
                            ref={ulRef}
                            className={'list-none treeview ' + styles.treeview}
                        >
                            {children.items}
                        </ul>
                    </div>

            }
            {
                !hasSubItem && 
                <li className='mb-2 whitespace-nowrap'>
                    <Link href={href ?? '/'} passHref>
                        <NavigationItem className={`${styles.treeviewButton} ${(router.pathname == href ? styles.treeviewButtonActive : '')}`}>
                            {
                                children.icon || 
                                <span className='h-4 w-4 rounded-full border border-white'></span>
                            }
                            {
                                showSidebar &&
                                <span>{children}</span>
                            }
                        </NavigationItem>
                    </Link>          
                </li>
            }
        </div>
    )
}

export default Nav