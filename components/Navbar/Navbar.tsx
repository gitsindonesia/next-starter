import Image from 'next/image'
import Button from '../Button/Button'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'

interface NavbarInterfaces {
	flying?: boolean
	flyingClassName?: string
	background?: string
	mainClassName?: string
	rounded?: boolean
	roundedClassName?: string
	showLogo?: boolean
	logoSrc?: string
	children?: any
	showProfileButton?: boolean
}

const Navbar = ({
	flying = false,
	flyingClassName = 'py-5 px-10',
	mainClassName = 'bg-zinc-700 w-full px-5 py-4',
	rounded = false,
	roundedClassName = 'rounded-lg',
	showLogo = true,
	logoSrc = '/images/logo.png',
	showProfileButton = true,
	children
}: NavbarInterfaces) => {
	return (
		<div className={`sticky ${flying ? flyingClassName : ''}`}>
			<div className={`${mainClassName} ${rounded ? roundedClassName : ''}`}>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						{showLogo && (
							<Image src={logoSrc} alt='Logo GITS' width={56} height={23.22} />
						)}
						<div className='flex items-center text-white gap-4 text-sm'>
							{children.menus}
						</div>
					</div>
					<div className='flex items-center gap-2'>
						{children.toolbar || (
							<>
								<Button
									outlined={false}
									className='w-10 h-10 border-0 rounded-full !text-zinc-300 hover:bg-zinc-900 bg-zinc-800 !p-2'
								>
									<SearchIcon width={50} />
								</Button>
								<Button
									outlined={false}
									className='w-10 h-10 border-0 rounded-full !text-zinc-300 hover:bg-zinc-900 bg-zinc-800 !p-2'
								>
									<BellIcon width={50} />
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
