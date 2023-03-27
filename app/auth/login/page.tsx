// Next
import { Metadata } from 'next'
import Image from 'next/image'

// Components
import { AuthLoginForm } from '@/components'

export const metadata: Metadata = {
	title: 'Login - GITS Next Starter',
	description: 'Start to use GITS Next Starter'
}

export default function AuthLogin() {
	return (
		<div className='min-h-screen'>
			<div className='grid md:grid-cols-12 grid-cols-1 min-h-screen'>
				<div className='md:flex hidden col-span-7 bg-blue-500 items-center justify-center'>
					<Image
						src='/images/login_image.png'
						width={635.93}
						height={398}
						alt='Login'
					/>
				</div>
				<div className='col-span-5 flex items-center justify-center min-h-screen'>
					<div className='container px-8 md:px-20 '>
						<Image
							src={'/images/gits-logo-type-black.png'}
							alt='Logo GITS'
							width={110.23}
							height={50}
						/>
						<h5 className='text-4xl font-extrabold text-[#333333] mt-8'>
							Login Akun
						</h5>
						<p className='mt-3 text-sm font-normal'>
							Lorem ipsum dolor sit amet consectetur amet consectetur
						</p>
						<AuthLoginForm />
					</div>
				</div>
			</div>
		</div>
	)
}
