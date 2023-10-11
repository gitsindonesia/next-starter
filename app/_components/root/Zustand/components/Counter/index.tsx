'use client'

// React
import { memo } from 'react'

// Components
import { BaseButton } from '@/app/_components/base'

// Store
import { useAppStore } from '@/app/_store/app/app.store'

const Counter = memo(() => {
  const counter = useAppStore(state => state.counter)
  const handleCounter = useAppStore(state => state.handleCounter)

  return (
    <div className='flex items-center flex-col gap-4'>
      <p className='text-3xl text-slate-50'>{counter}</p>
      <div className='flex items-center gap-4'>
        <BaseButton onClick={() => handleCounter('decrement')}>
          Decrement
        </BaseButton>
        <BaseButton onClick={() => handleCounter('increment')}>
          Increment
        </BaseButton>
      </div>
    </div>
  )
})

Counter.displayName = 'Counter'

export { Counter }
