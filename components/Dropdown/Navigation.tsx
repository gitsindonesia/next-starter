import styles from './Navigation.module.css'
import Link from 'next/link'
import React, { RefObject, useState } from 'react'

const Nav = ({children = 'Link', hasSubItem = false, href = '/'}:any) => {
    const [height, setHeight] = useState<number | string>(0);
    const [showSub, setShowSub] = useState<boolean>(false);

    const ulRef = React.createRef<HTMLUListElement>();

    const [ ulStyles, setUlStyles ] = useState({
        height: height+'px'
    });

    const toggle = () => {
        setShowSub(!showSub);
        console.log(ulRef)
        const menu = ulRef.current
        console.log(menu)
        if (showSub) {
            setUlStyles({
                height: menu?.scrollHeight+'px'
            });

            console.log(ulStyles);
        } else {
            setUlStyles({
                height: '0px'
            });
            console.log(ulStyles);
        }
		
        console.log(showSub)
    }

    return(
        <li className={styles.treeviewButton}>
            {
                !hasSubItem && 
                <Link href={href ?? '/'} className="
                    py-3
                    px-7
                    text-sm text-gray-50
                    flex
                    items-center
                    hover:bg-gray-600 hover:bg-opacity-10
                    hover:text-white
                    transition-colors
                    duration-300 whitespace-nowrap">
                    { children }
                </Link>
            }
            {
                hasSubItem && <div className='flex flex-col'>                
                    <div
                    onClick={toggle}
                        className="
                            mobile
                            py-3
                            px-7
                            text-sm text-gray-100
                            flex
                            items-center
                            hover:bg-gray-600 hover:bg-opacity-10
                            hover:text-white
                            transition-colors
                            duration-300 whitespace-nowrap
                        "
                    >
                        {children.title}
                        <span
                            className="
                                icon
                                ml-auto
                                transition-transform
                                duration-300
                                dark:text-white
                            "
                        >
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
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
            

            
        </li>
    )
}

export default Nav