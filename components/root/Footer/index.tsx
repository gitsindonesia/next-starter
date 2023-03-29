// React
import { memo } from 'react'

// Components
import { Logo } from './components'

const RootFooter = memo(() => {
	return (
		<footer className='dark:bg-neutral-900'>
			<div className='container px-4 2xl:px-0 py-4 mx-auto border-t dark:border-neutral-800 flex flex-col sm:flex-row gap-4 justify-between items-center'>
				<Logo width={40} height={18} />
				<div className='text-xs text-gray-600 dark:text-neutral-300 text-center md:text-right'>
					Copyright &copy; {new Date().getFullYear()}. PT GITS Indonesia.
					<br className='inline sm:hidden' />
					All rights reserved.
				</div>
			</div>
		</footer>
	)
})

RootFooter.displayName = 'RootFooter'

export default RootFooter
