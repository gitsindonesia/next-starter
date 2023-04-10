'use client'

// Store
import { store } from '@/store'

// React Redux
import { Provider } from 'react-redux'

// Types
import { IReduxProvider } from './types'

const ReduxProvider = ({ children }: IReduxProvider) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
