'use client'

// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Interfaces
import { IFeatureItemProps } from './types'

const FeatureItem = memo(({ icon, name, description }: IFeatureItemProps) => {
  return (
    <div
      className='space-y-4 rounded-xl p-8 shadow-card hover:shadow-xl transition
    duration-300bg-white dark:bg-neutral-800'
    >
      <Image src={icon} height={40} width={40} alt={name} />
      <h3 className='text-gray-900 dark:text-neutral-200 font-medium'>
        {name}
      </h3>
      <p className='text-sm text-gray-700 dark:text-neutral-400'>
        {description}
      </p>
    </div>
  )
})

FeatureItem.displayName = 'FeatureItem'

export default FeatureItem
