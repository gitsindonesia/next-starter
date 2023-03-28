'use client'

// React
import { memo, useContext } from 'react'

// Next
import Link from 'next/link'

// Components
import Navbar from '@/components/Navbar/Navbar'
import Button from '@/components/Button/Button'

// Routes
import { mainMenu } from '@/routes'

// Contexts
import { AdminSidebarContext } from '@/contexts/AdminSidebar'

// Icons
import { SearchIcon, BellIcon } from '@heroicons/react/outline'

// Types
import { IWrapperProps } from './types'

const Wrapper = memo(({ children }: IWrapperProps) => {
	// Sidebar Context
	const { showSidebar } = useContext(AdminSidebarContext)

	return (
		<main
			className={
				'transition-all duration-500 pb-20 relative ' +
				(!showSidebar ? 'md:ml-20 ml-0' : 'md:ml-72 ml-4/5')
			}
		>
			<header>
				<Navbar flying rounded>
					{{
						menus: (
							<>
								{mainMenu.map(menu => {
									// can use Button Element or else instead of Link
									return (
										<Link
											key={menu.path}
											href={menu.path as string}
											className='px-3 py-2 hover:bg-zinc-500 rounded-lg'
										>
											{menu.title}
										</Link>
									)
								})}
							</>
						),
						toolbar: (
							<>
								<Button
									outlined={false}
									className='w-10 h-10 border-0 rounded-full !text-zinc-300 hover:bg-zinc-900 bg-zinc-800 !p-2'
								>
									<SearchIcon width={50} />
								</Button>
								<Button
									outlined={false}
									className='w-10 h-10 border-0 rounded-full !text-zinc-300 hover:bg-zinc-900 bg-zinc-800 !p-2'
								>
									<BellIcon width={50} />
								</Button>
							</>
						)
					}}
				</Navbar>
			</header>
			<div className='md:px-10 px-5'>{children}</div>
		</main>
	)
})

Wrapper.displayName = 'Wrapper'

export default Wrapper
