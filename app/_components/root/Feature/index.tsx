// React
import { memo } from 'react'

// Components
import { FeatureItem } from './components'

// Images
import LogoReact from '@/app/_assets/images/logo-react.webp'
import LogoNext from '@/app/_assets/images/logo-next.png'
import LogoTailwind from '@/app/_assets/images/logo-tailwind.png'
import LogoRedux from '@/app/_assets/images/logo-redux.png'
import LogoTypescript from '@/app/_assets/images/logo-typescript.png'
import LogoEslint from '@/app/_assets/images/logo-eslint.png'

// Common State
const FEATURES = [
  {
    name: 'React',
    description: 'The latest and greatest React',
    icon: LogoReact
  },
  {
    name: 'Next 13',
    description: 'The latest and greatest Next',
    icon: LogoNext
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
    icon: LogoTailwind
  },
  {
    name: 'Redux Toolkit',
    description: 'Slice and RTK integrated',
    icon: LogoRedux
  },
  {
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that scales',
    icon: LogoTypescript
  },
  {
    name: 'Linting',
    description:
      'Code analysis tool that helps maintain code quality and consistency',
    icon: LogoEslint
  }
]

const RootFeature = memo(() => {
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
            {FEATURES.map(feature => (
              <FeatureItem {...feature} key={feature.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

RootFeature.displayName = 'RootFeature'

export { RootFeature }
