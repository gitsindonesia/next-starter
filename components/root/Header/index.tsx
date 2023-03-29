// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Components
import { MenuItem } from './components'

const menus = [
	{
		text: 'Home',
		to: '/'
	},
	{
		text: 'Features',
		to: '/#features'
	},
	{
		text: 'i18n',
		to: '/i18n'
	}
]

const RootHeader = memo(() => {
	return (
		<div className='w-full' style={{ background: '#171717' }}>
			<div
				className='hidden lg:container mx-auto py-4 lg:flex gap-4 xl:gap-8
      items-center py-1 justify-between '
			>
				<Image
					src={require('@/assets/images/logo-white.webp')}
					width={80}
					height={36}
					alt={'GITS-White'}
				/>

				<nav aria-label='Desktop Navigation'>
					<ul className='flex justify-center gap-4'>
						{menus.map(menu => (
							<MenuItem text={menu.text} to={menu.to} key={menu.to} />
						))}
					</ul>
				</nav>

				<div className='flex items-center gap-1'>
					{/* <ColorModeSwitcher /> */}
					{/* <LangSwitcher /> */}
				</div>
			</div>
		</div>
	)
})

RootHeader.displayName = 'RootHeader'

export { RootHeader }
