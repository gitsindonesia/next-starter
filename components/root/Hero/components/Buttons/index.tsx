'use client'

// React
import { memo } from 'react'

// Components
import { BaseButton } from '@/components/base'

const Buttons = memo(() => {
	return (
		<div className='flex justify-center md:justify-start gap-2 md:gap-4 mt-10'>
			<BaseButton className='btn-getting-started rounded'>
				Get started
			</BaseButton>
			<BaseButton className='btn-open-github rounded'>
				Open on GitHub
			</BaseButton>
		</div>
	)
})

Buttons.displayName = 'DisplayName'

export default Buttons
