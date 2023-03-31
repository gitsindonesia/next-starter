// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Components
import { Buttons } from './components'

const RootHero = memo(() => {
	return (
		<section
			className='flex sm:py-20 py-14 sm:h-[calc(100vh-90px)] items-center hero relative bg-white dark:bg-neutral-900 px-4 2xl:px-0
  '
		>
			<div className='items-center flex flex-col sm:flex-row gap-10 md:gap-4 container mx-auto px-6 md:px-0'>
				<div className='flex-1 order-2 sm:order-1 text-center md:text-left'>
					<h1 className='text-4xl sm:text-7xl tracking-tight font-semibold sm:leading-snug gap-3 flex flex-wrap items-center justify-center md:justify-start'>
						<span className='bg-gradient-to-r bg-clip-text text-white'>
							Next 13
						</span>
					</h1>
					<p className='text-gray-500 dark:text-neutral-300 max-w-xl text-base sm:text-xl sm:leading-8 mt-4'>
						Quickly get started on your React project with this Next. It
						includes pre-configured setup. Perfect for React developers looking
						to create a professional web app.
					</p>

					<Buttons />
				</div>
				<div className='w-full sm:w-5/12 order-1 md:order-2'>
					<Image
						src={require('@/assets/images/logo-white.webp').default}
						alt='Logo White'
						className='w-full h-full'
						width={450}
						height={200}
					/>
				</div>
			</div>
		</section>
	)
})

RootHero.displayName = 'RootHero'

export default RootHero
