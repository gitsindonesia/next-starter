import Admin from "../../../components/Layouts/Admin";
import SidebarPage from "./__Sidebar";
import { Breadcrumb, BreadcrumbType } from "../../../components/Breadcrumb/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
const UserRemoved = () => {
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
            path: '/admin/user/removed',
            name: 'Removed'
        },
    ]
    return (
        <Admin>
            {{
                aside: <SidebarPage />,
                main: <>
                <Breadcrumb crumbs={crumbs} divider="/" />
                <PageTitle>Removed User</PageTitle>
            </>
            }}
        </Admin>
    )
}

export default UserRemoved;