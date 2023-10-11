'use client'

// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Types
import { TLogoProps } from './types'

const Logo = memo((props: TLogoProps) => {
  return (
    <div>
      <Image
        {...props}
        src={require('@/app/_assets/images/logo-black.webp')}
        alt='Logo Base'
        className='dark:hidden'
      />
      <Image
        {...props}
        src={require('@/app/_assets/images/logo-white.webp')}
        alt='Logo White'
        className='hidden dark:block'
      />
    </div>
  )
})

Logo.displayName = 'Logo'

export { Logo }
