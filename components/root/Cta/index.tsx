'use client'

// React
import { memo } from 'react'

// Components
import { BaseButton } from '@/components'

const RootCta = memo(() => {
	return (
		<section className='py-10 sm:py-24 px-6 2xl:px-0 bg-white dark:bg-neutral-900'>
			<div className='sm:max-w-4xl mx-auto text-center space-y-8'>
				<div className='space-y-3'>
					<h3 className='text-slate-800 dark:text-neutral-200 text-3xl sm:text-4xl font-medium'>
						Try our demo today
					</h3>
					<p className='text-slate-600 dark:text-neutral-500 text-base sm:max-w-md leading-relaxed mx-auto'>
						Our demo is open publicly to everyone.
					</p>
				</div>
				<BaseButton>Try demo</BaseButton>
			</div>
		</section>
	)
})

RootCta.displayName = 'RootCta'

export default RootCta
