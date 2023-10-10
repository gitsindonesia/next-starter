// Next
import { Metadata } from 'next'

// Components
import {
  RootHero,
  RootFeatures,
  RootHeader,
  RootFooter
} from '@/app/_components'

export const metadata: Metadata = {
  title: 'GITS Next Starter'
}

const RootPage = () => {
  return (
    <div>
      <RootHeader />
      <RootHero />
      <RootFeatures />
      <RootFooter />
    </div>
  )
}

export default RootPage
