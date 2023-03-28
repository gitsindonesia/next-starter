'use client'

// React
import { createContext, useState, ReactNode, useCallback } from 'react'

// Types
import { IAdminSidebarContext } from './types'

export const AdminSidebarContext = createContext<IAdminSidebarContext>({
	showSidebar: true,
	toggleSidebar: (): void => {
		//
	}
})

export const AdminSidebarContextProvider = ({
	children
}: {
	children: ReactNode
}) => {
	const [showSidebar, setShowSidebar] = useState<boolean>(true)

	/**
	 * @description Toggle sidebar on or off
	 *
	 * @return {void} void
	 */
	const toggleSidebar = useCallback((): void => {
		setShowSidebar(previousSidebar => !previousSidebar)
	}, [])

	const context = {
		showSidebar,
		toggleSidebar
	}

	return (
		<AdminSidebarContext.Provider value={context}>
			{children}
		</AdminSidebarContext.Provider>
	)
}
