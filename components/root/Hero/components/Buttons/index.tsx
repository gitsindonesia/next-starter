'use client'

// React
import { memo } from 'react'

// Components
import { BaseButton } from '@/components/base'

const Buttons = memo(() => {
  return (
    <div className='flex justify-center md:justify-start gap-2 md:gap-4 mt-10'>
      <BaseButton
        className='btn-open-github rounded'
        onClick={() =>
          window.open('https://github.com/gitsindonesia/next-starter')
        }
      >
        Open on GitHub
      </BaseButton>
    </div>
  )
})

Buttons.displayName = 'DisplayName'

export default Buttons
