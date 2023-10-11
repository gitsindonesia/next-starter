// Next
import { Metadata } from 'next'

// Components
import {
  RootHero,
  RootFeature,
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
      <RootFeature />
      <RootFooter />
    </div>
  )
}

export default RootPage
