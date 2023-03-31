// Next
import { Metadata } from 'next'

// Components
import {
	RootHero,
	RootFeatures,
	RootCta,
	RootHeader,
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
			<RootCta />
			<RootFooter />
		</>
	)
}
