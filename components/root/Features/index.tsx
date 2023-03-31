// React
import { memo, useMemo } from 'react'

// Components
import { FeatureItem } from './components'

const RootFeatures = memo(() => {
	// Common State
	const features = useMemo(() => {
		return [
			{
				name: 'React',
				description: 'The latest and greatest React',
				icon: require(`@/assets/images/logo-react.webp`).default
			},
			{
				name: 'Next 13',
				description: 'The latest and greatest Next',
				icon: require(`@/assets/images/logo-next.png`).default
			},
			{
				name: 'Tailwind CSS',
				description: 'A utility-first CSS framework',
				icon: require(`@/assets/images/logo-tailwind.png`).default
			},
			{
				name: 'Customization',
				description: 'Customizable application with CSS Properties',
				icon: require(`@/assets/images/logo-css3.png`).default
			},
			{
				name: 'TypeScript',
				description: 'A typed superset of JavaScript that scales',
				icon: require(`@/assets/images/logo-typescript.png`).default
			},
			{
				name: 'Linting',
				description:
					'Code analysis tool that helps maintain code quality and consistency',
				icon: require(`@/assets/images/logo-eslint.png`).default
			}
		]
	}, [])

	return (
		<section
			id='features'
			className='py-10 sm:py-24 px-6 2xl:px-0 bg-gray-50 dark:bg-neutral-900'
		>
			<div className='container mx-auto'>
				<div className='max-w-3xl space-y-5 mx-auto text-center'>
					<h2 className='text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-200'>
						Every feature you need
					</h2>
					<p className='text-base sm:text-lg text-gray-700 dark:text-neutral-400'>
						Focus on adding features and functionality to your app.
					</p>
				</div>
				<div className='mt-10 sm:mt-24'>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
						{features.map(feature => (
							<FeatureItem {...feature} key={feature.name} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
})

RootFeatures.displayName = 'RootFeatures'

export default RootFeatures
