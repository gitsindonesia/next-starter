import { DocumentTextIcon, FolderRemoveIcon, TemplateIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/solid'

export type RoutesInterface = {
    path?: string | any,
    title?: string,
    name?: string,
    icon?: JSX.Element,
    children?: RoutesInterface[]
}

export const mainMenu: RoutesInterface[] = [
    {
        path: '/admin',
        title: 'Main',
        name: 'main', // route for main menu,
        children: [ // route for sub main menu
            {
                path: '/admin',
                title: 'Dashboard',
                icon: <TemplateIcon width={20} />
            }
        ]
    },
    {
        path: '/admin/user',
        title: 'Users',
        name: 'users', // route for main menu
        children: [ // route for sub main menu
            {
                path: '/admin/user',
                title: 'Dashboard User',
                icon: <TemplateIcon width={20} />
            },
            {
                path: '/admin/user/', // add '/' on ending of the string if the pat has a children
                title: 'Manage User',
                icon: <UserGroupIcon width={20} />,
                children: [
                    {
                        path: '/',
                        title: "User's Data",
                        icon: <UsersIcon width={20} />
                    },
                    {
                        path: '/admin/user/removed',
                        title: "Removed Users",
                        icon: <FolderRemoveIcon width={20} />
                    },
                    {
                        path: '/admin/user/registering',
                        title: "User's Registering",
                        icon: <DocumentTextIcon width={20} />
                    },
                ]
            },
        ]
    },
    {
        path: '/admin/products',
        title: 'Products',
        name: 'products', // route for main menu
        children: [ // route for sub main menu
            {
                path: '/admin/products',
                title: 'Dashboard Products',
                icon: <TemplateIcon width={20} />
            },
        ]
    },
]