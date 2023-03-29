// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Types
import { ILogoProps } from './types'

const Logo = memo((props: ILogoProps) => {
	return (
		<>
			<Image
				{...props}
				src='/logo.webp'
				alt='Logo Base'
				className='dark:hidden'
			/>
			<Image
				{...props}
				src='/logo-white.webp'
				alt='Logo White'
				className='hidden dark:block'
			/>
		</>
	)
})

Logo.displayName = 'Logo'

export { Logo }
