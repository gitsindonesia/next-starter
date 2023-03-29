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
				icon: 'logo-react.webp'
			},
			{
				name: 'Next 13',
				description: 'The latest and greatest Next',
				icon: 'logo-next.png'
			},
			{
				name: 'Tailwind CSS',
				description: 'A utility-first CSS framework',
				icon: 'logo-tailwind.png'
			},
			{
				name: 'Customization',
				description: 'Customizable application with CSS Properties',
				icon: 'logo-css3.png'
			},
			{
				name: 'TypeScript',
				description: 'A typed superset of JavaScript that scales',
				icon: 'logo-typescript.png'
			},
			{
				name: 'Linting',
				description:
					'Code analysis tool that helps maintain code quality and consistency',
				icon: 'logo-eslint.png'
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
							<FeatureItem key={feature.name} {...feature} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
})

RootFeatures.displayName = 'RootFeatures'

export { RootFeatures }
