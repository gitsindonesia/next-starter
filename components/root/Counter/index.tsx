'use client'

// React
import { memo, useCallback, useEffect } from 'react'

// Next
import Image from 'next/image'

// Components
import { BaseButton } from '@/components'

// Redux
import { useAppSelector, useAppDispatch } from '@/store'
import { app_HANDLE_COUNTER, appGetCounter } from '@/store/app/slice'
import { EAppSliceHandleCounterType } from '@/store/app/slice/types'
import { useLazyTodo_indexQuery } from '@/store/app/rtk'

const RootCounter = memo(() => {
  // Dispatcher
  const dispatch = useAppDispatch()

  // Selector
  const appCounter = useAppSelector(appGetCounter)

  // Get todo list
  const [
    getTodoList,
    { isLoading: isTodoListLoading, isSuccess: isTodoListSuccess }
  ] = useLazyTodo_indexQuery()

  useEffect(() => {
    getTodoList()
  }, [getTodoList])

  /**
   * @description Counter handler
   *
   * @param {EAppSliceHandleCounterType} type
   *
   * @return {void} void
   */
  const onCounter = useCallback(
    (type: EAppSliceHandleCounterType): void => {
      dispatch(app_HANDLE_COUNTER({ type }))
    },
    [dispatch]
  )

  return (
    <section className='py-10 sm:py-24 px-6 2xl:px-0 bg-white dark:bg-neutral-900'>
      <div className='sm:max-w-4xl mx-auto text-center space-y-8'>
        <div className='space-y-3'>
          <h3 className='text-slate-800 dark:text-neutral-200 text-3xl sm:text-4xl font-medium'>
            Redux Toolkit Integration{' '}
            {isTodoListLoading ? '🔃' : isTodoListSuccess ? '✅' : '❌'}
          </h3>
          <Image
            className='mx-auto'
            src={require('@/assets/images/logo-redux.png').default}
            width={100}
            height={100}
            alt={'redux'}
          />
          <p className='text-slate-600 dark:text-white text-base sm:max-w-md leading-relaxed mx-auto'>
            {appCounter}
          </p>
        </div>
        <BaseButton
          onClick={() => onCounter(EAppSliceHandleCounterType.INCREASE)}
        >
          Increment
        </BaseButton>
        <BaseButton
          onClick={() => onCounter(EAppSliceHandleCounterType.DECREASE)}
          className='ml-3'
        >
          Decrement
        </BaseButton>
      </div>
    </section>
  )
})

RootCounter.displayName = 'RootCounter'

export default RootCounter
