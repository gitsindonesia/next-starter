// Icons
import { TemplateIcon } from '@heroicons/react/solid'

export type RoutesInterface = {
	path?: string
	title?: string
	name?: string
	icon?: JSX.Element
	children?: RoutesInterface[]
}

export const mainMenu: RoutesInterface[] = [
	{
		path: '/admin',
		title: 'Main',
		name: 'main',
		children: [
			{
				path: '/admin',
				title: 'Dashboard',
				icon: <TemplateIcon width={20} />
			}
		]
	},
	{
		path: '/admin/users',
		title: 'Users',
		name: 'users',
		children: [
			{
				path: '/admin/users',
				title: 'User List',
				icon: <TemplateIcon width={20} />
			}
		]
	},
	{
		path: '/admin/products',
		title: 'Products',
		name: 'products',
		children: [
			{
				path: '/admin/products',
				title: 'Product List',
				icon: <TemplateIcon width={20} />
			}
		]
	}
]
