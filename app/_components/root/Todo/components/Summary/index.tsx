'use client'

// React
import { memo } from 'react'

// Store
import { useAppStore } from '@/app/_store/app/app.store'

const TodoSummary = memo(() => {
  const todoList = useAppStore(state => state.todoList)

  return (
    <p className='text-3xl text-white'>
      Total of {todoList.length} todo fetched ✅
    </p>
  )
})

TodoSummary.displayName = 'TodoSummary'

export { TodoSummary }
