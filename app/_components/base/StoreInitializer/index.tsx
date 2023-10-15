'use client'

// React
import { memo, useRef } from 'react'

// Store
import { useAppStore } from '@/app/_store/app/app.store'

// Types
import { TStoreInitializerProps } from './types'

const BaseStoreInitializer = memo(({ modules }: TStoreInitializerProps) => {
  const initialized = useRef(false)
  if (!initialized.current) {
    modules.forEach(module => {
      // Set store state for app store
      if (module.feature === 'app') {
        useAppStore.setState(module.state)
      }
    })

    initialized.current = true
  }
  return null
})

BaseStoreInitializer.displayName = 'BaseStoreInitializer'

export { BaseStoreInitializer }
