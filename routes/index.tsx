export const mainMenu = [
    {
        path: '/admin',
        title: 'Main',
        name: 'main', // route for main menu
        children: [ // route for sub main menu
            {
                path: '/admin',
                title: 'Dashboard',
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
                title: 'Dashboard User'
            },
            {
                path: '/admin/user/', // add '/' on ending of the string if the pat has a children
                title: 'Manage User',
                children: [
                    {
                        path: '/',
                        title: "User's Data"
                    },
                    {
                        path: '/admin/user/removed',
                        title: "Removed Users"
                    },
                    {
                        path: '/admin/user/registering',
                        title: "User's Registering"
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
                title: 'Dashboard Products'
            },
        ]
    },
]