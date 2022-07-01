import Admin from "../../../components/Layouts/Admin";
import SidebarPage from "./__Sidebar";
import { Breadcrumb, BreadcrumbType } from "../../../components/Breadcrumb/Breadcrumb";
import PageTitle from "../../../components/PageTitle";

const UserRegistering = () => {
    const crumbs: BreadcrumbType[] = [
        {
            path: '/admin',
            name: 'Home'
        },
        {
            path: '/admin/user',
            name: 'User'
        },
        {
            path: '/admin/user/registering',
            name: 'Registering'
        },
    ]
    return (
        <Admin>
            {{
                aside: <SidebarPage />,
                main: <>
                    <Breadcrumb crumbs={crumbs} divider="/" />
                    <PageTitle>User's Registering</PageTitle>
                </>
            }}
        </Admin>
    )
}

export default UserRegistering;