// React
import { Suspense } from 'react'

// Next
import { Metadata } from 'next'

// Components
import {
  RootHero,
  RootFeature,
  RootHeader,
  RootTodo,
  RootZustand,
  RootFooter
} from '@/app/_components/root'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'GITS Next Starter'
}

const RootPage = () => {
  return (
    <>
      <RootHeader />
      <RootHero />
      <RootFeature />
      <RootZustand />
      <Suspense fallback={<Loading />}>
        <RootTodo />
      </Suspense>
      <RootFooter />
    </>
  )
}

export default RootPage
