'use client'

// React
import { memo } from 'react'

// Next
import Link from 'next/link'

// Types
import { IMenuItemProps } from './types'

const MenuItem = memo(({ text, to }: IMenuItemProps) => {
	return (
		<li>
			<Link
				href={to}
				className='text-base px-3 py-2 rounded-full dark:text-gray-400 dark:hover:text-gray-100 text-gray-600 hover:text-gray-900 flex items-center gap-2'
			>
				{text}
			</Link>
		</li>
	)
})

MenuItem.displayName = 'MenuItem'

export default MenuItem
