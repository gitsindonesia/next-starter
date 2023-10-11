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

// Antd
import { ConfigProvider } from 'antd'

// Utils
import { antdTheme } from './_utils/antd.util'

export const metadata: Metadata = {
  title: 'GITS Next Starter'
}

const RootPage = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <RootHeader />
      <RootHero />
      <RootFeature />
      <RootZustand />
      <Suspense fallback={<Loading />}>
        <RootTodo />
      </Suspense>
      <RootFooter />
    </ConfigProvider>
  )
}

export default RootPage
