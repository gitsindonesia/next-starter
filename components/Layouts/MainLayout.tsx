import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function MainLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className='main-layout min-height'>{children}</main>
			<Footer />
		</>
	)
}
