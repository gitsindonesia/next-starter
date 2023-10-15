'use client'

// React
import { memo } from 'react'

// Components
import { BaseButton } from '@/app/_components/base'

const ButtonItem = memo(() => {
  return (
    <div className='flex justify-center md:justify-start gap-2 md:gap-4 mt-10'>
      <BaseButton
        className='text-white hover:text-slate-300'
        onClick={() =>
          window.open('https://github.com/gitsindonesia/next-starter')
        }
      >
        Open on GitHub
      </BaseButton>
    </div>
  )
})

ButtonItem.displayName = 'ButtonItem'

export { ButtonItem }
