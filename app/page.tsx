// Next
import { Metadata } from 'next'

// Components
import {
	RootHero,
	RootFeatures,
	RootHeader,
	RootCounter,
	RootFooter
} from '@/components'

export const metadata: Metadata = {
	title: 'GITS Next Starter'
}

export default function RootPage() {
	return (
		<>
			<RootHeader />
			<RootHero />
			<RootFeatures />
			<RootCounter />
			<RootFooter />
		</>
	)
}
