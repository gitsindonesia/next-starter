'use client'

// React
import { memo, useRef } from 'react'

// Store
import { useAppStore } from '@/app/_store/app/app.store'

// Types
import { TStoreInitializerProps } from './types'

const BaseStoreInitializer = memo(
  ({ storeName, state }: TStoreInitializerProps) => {
    const initialized = useRef(false)
    if (!initialized.current) {
      // Set store state for app store
      if (storeName === 'app') {
        useAppStore.setState(state)
      }

      initialized.current = true
    }
    return null
  }
)

BaseStoreInitializer.displayName = 'BaseStoreInitializer'

export { BaseStoreInitializer }
