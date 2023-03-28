// React
import { useMemo } from 'react'

// Next
import { Metadata } from 'next'

// Components
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = {
	title: 'Users - GITS Next Starter',
	description: 'User list of GITS Next Starter'
}

export default function User() {
	// Hook
	const crumbs = useMemo(() => {
		return [
			{
				path: '/admin/users',
				name: 'Users'
			}
		]
	}, [])

	return (
		<>
			<Breadcrumb crumbs={crumbs} divider='/' />
			<PageTitle>User Page</PageTitle>
		</>
	)
}
