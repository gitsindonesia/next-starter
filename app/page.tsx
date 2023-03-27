// Next
import { Metadata } from 'next'
import Link from 'next/link'

// Components
import MainLayout from '@/components/Layouts/MainLayout'

export const metadata: Metadata = {
	title: 'GITS Next Starter'
}

export default function RootPage() {
	return (
		<MainLayout>
			<div className='container mx-auto py-4 grid place-items-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-semibold'>
						Welcome to your <span className='text-blue-600'>Next</span> Project!
					</h1>
					<Link href='/admin'>Admin</Link>
					<p className='mt-5'>You are ready to rock!</p>
				</div>
			</div>
		</MainLayout>
	)
}
