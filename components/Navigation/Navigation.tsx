'use-client'

// React
import { useContext, useState, useMemo, createRef } from 'react'

// Next
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// Contexts
import { IAdminSidebarContext } from '@/contexts'

// Style Modules
import styles from './Navigation.module.css'

export interface NavigationProps {
	children?: any
	hasSubItem?: boolean
	href?: any
	icon?: JSX.Element
	sidebarCtx: any
	ulRef?: any
}

const Navigation = ({
	children = 'Link',
	hasSubItem = false,
	href = '/',
	icon,
	sidebarCtx
}: NavigationProps) => {
	const [height, setHeight] = useState<number | string>(0)
	const [showSub, setShowSub] = useState<boolean>(false)
	const { showSidebar } = useContext(sidebarCtx) as IAdminSidebarContext
	const pathname = usePathname()
	const _pathname = useMemo((): string => {
		return pathname === '/admin' ? '/admin' : pathname || ''
	}, [pathname])

	const ulRef = createRef<HTMLUListElement>()

	const [ulStyles, setUlStyles] = useState({
		height: height + 'px'
	})

	const toggle = () => {
		setShowSub(!showSub)
		const menu = ulRef.current
		if (!showSub) {
			setUlStyles({
				height: menu?.scrollHeight + 'px'
			})
		} else {
			setUlStyles({
				height: '0px'
			})
		}
	}

	return (
		<div className='text-sm'>
			{hasSubItem && (
				<div className='flex flex-col w-full'>
					<div
						onClick={toggle}
						className={`flex items-center gap-x-2 w-full hover:bg-zinc-500 px-4 py-3 rounded-md duration-300 whitespace-nowrap mb-2 cursor-pointer ${
							_pathname === href ? styles.treeviewButtonActive : ''
						}`}
					>
						{icon ?? (
							<span className='h-4 w-4 rounded-full border border-white'></span>
						)}
						{showSidebar && (
							<div className='flex items-center justify-between w-full'>
								{children.title}
								<span
									className={
										'icon ml-auto transition-transform duration-300 dark:text-white' +
										(showSub ? 'transform rotate-180' : '')
									}
								>
									<svg
										className='fill-current'
										xmlns='http://www.w3.org/2000/svg'
										height='20'
										viewBox='0 0 24 24'
										width='20'
									>
										<path d='M0 0h24v24H0V0z' fill='none' />
										<path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
									</svg>
								</span>
							</div>
						)}
					</div>
					<ul
						style={ulStyles}
						ref={ulRef}
						className={'list-none treeview ' + styles.treeview}
					>
						{children.items}
					</ul>
				</div>
			)}
			{!hasSubItem && (
				<li className='mb-2 whitespace-nowrap'>
					<Link
						href={href ?? '/'}
						className={`${styles.treeviewButton} ${
							_pathname === href ? styles.treeviewButtonActive : ''
						}`}
					>
						{!icon ? (
							<span className='h-4 w-4 rounded-full border border-white'></span>
						) : (
							icon
						)}
						{showSidebar && <span>{children}</span>}
					</Link>
				</li>
			)}
		</div>
	)
}

export default Navigation
