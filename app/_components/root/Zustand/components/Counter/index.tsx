'use client'

// React
import { memo } from 'react'

// Components
import { BaseButton } from '@/app/_components/base'

// Store
import { useAppStore } from '@/app/_store/app/app.store'

const Counter = memo(() => {
  const counter = useAppStore(state => state.counter)
  const HANDLE_COUNTER = useAppStore(state => state.HANDLE_COUNTER)

  return (
    <div className='flex items-center flex-col gap-4'>
      <p className='text-3xl text-slate-50'>{counter}</p>
      <div className='flex items-center gap-4'>
        <BaseButton onClick={() => HANDLE_COUNTER('decrement')}>
          Decrement
        </BaseButton>
        <BaseButton onClick={() => HANDLE_COUNTER('increment')}>
          Increment
        </BaseButton>
      </div>
    </div>
  )
})

Counter.displayName = 'Counter'

export { Counter }
