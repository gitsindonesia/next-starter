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

const RootPage = () => {
  return (
    <div>
      <RootHeader />
      <RootHero />
      <RootFeatures />
      <RootCounter />
      <RootFooter />
    </div>
  )
}

export default RootPage
