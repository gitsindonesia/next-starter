'use client'

// React
import { useContext } from 'react'

// Next
import Image from 'next/image'

// Contexts
import { AdminSidebarContext } from '@/contexts'

// Icons
import { ChevronLeftIcon } from '@heroicons/react/solid'

// Routes
import { mainMenu } from '@/routes'

// Components
import Navigation from '@/components/Navigation/Navigation'

const Sidebar = () => {
	// Admin Sidebar Context
	const { toggleSidebar, showSidebar } = useContext(AdminSidebarContext)

	return (
		<aside>
			<div
				className={
					'fixed top-0 min-h-screen left-0 transition-all duration-500 text-white bg-zinc-700 z-20' +
					(!showSidebar ? 'w-0 md:w-20' : 'w-4/5 md:w-72')
				}
			>
				<div className='px-8 py-5 flex items-center gap-3 relative'>
					<Image
						src='/images/gits-logo-type-white.png'
						alt='Logo GITS'
						width={60}
						height={27.22}
					/>
					{showSidebar && <p>Admin</p>}
					<button
						onClick={toggleSidebar}
						className='rounded-full h-[34px] w-[34px] bg-zinc-700 border border-white absolute flex items-center justify-center z-40 shadow-lg -right-4'
					>
						<ChevronLeftIcon
							className={
								!showSidebar ? 'transition-transform transform rotate-180' : ''
							}
							width={20}
						/>
					</button>
				</div>
				<ul className='px-4 overflow-hidden'>
					{mainMenu.map((menu, index) => {
						if (menu.children && menu.children.length > 0) {
							return (
								<Navigation
									key={`parent-menu-${index}`}
									sidebarCtx={AdminSidebarContext}
									hasSubItem
									href={menu.path}
									icon={menu.icon}
								>
									{{
										title: menu.title,
										items: menu.children.map((child, index) => {
											return (
												<Navigation
													key={`children-menu-${index}`}
													sidebarCtx={AdminSidebarContext}
													icon={child.icon}
													href={child.path}
												>
													{child.title}
												</Navigation>
											)
										})
									}}
								</Navigation>
							)
						} else {
							return (
								<Navigation
									key={`parent-menu-${index}`}
									sidebarCtx={AdminSidebarContext}
									icon={menu.icon}
									href={menu.path}
								>
									{menu.title}
								</Navigation>
							)
						}
					})}
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
