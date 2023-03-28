// React
import { ReactNode } from 'react'

// Components
import { AdminSidebar, AdminWrapper, AdminFooter } from '@/components'

// Contexts
import { AdminSidebarContextProvider } from '@/contexts/AdminSidebar'

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<AdminSidebarContextProvider>
			<div className='bg-gray-100 min-h-screen'>
				{/* Sidebar */}
				<AdminSidebar />

				{/* Wrapper / Content */}
				<AdminWrapper>{children}</AdminWrapper>

				{/* Footer */}
				<AdminFooter />
			</div>
		</AdminSidebarContextProvider>
	)
}
