// React
import { useMemo } from 'react'

// Next
import { Metadata } from 'next'

// Components
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = {
	title: 'Products - GITS Next Starter',
	description: 'Product list of GITS Next Starter'
}

export default function Product() {
	// Hook
	const crumbs = useMemo(() => {
		return [
			{
				path: '/admin/products',
				name: 'Products'
			}
		]
	}, [])

	return (
		<>
			<Breadcrumb crumbs={crumbs} divider='/' />
			<PageTitle>Product Page</PageTitle>
		</>
	)
}
