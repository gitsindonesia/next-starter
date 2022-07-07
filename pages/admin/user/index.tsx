import { BreadcrumbType } from "../../../components/Breadcrumb/Breadcrumb";
import Admin from "../../../components/Layouts/Admin";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb";
import __Sidebar from './__Sidebar'
import PageTitle from "../../../components/PageTitle";
const User = () => {
    const crumbs: BreadcrumbType[] = [
        {
            path: '/admin',
            name: 'Home'
        },
        {
            path: '/admin/user',
            name: 'User'
        },
    ]
    return (
        <Admin>
            {{
                aside: <__Sidebar></__Sidebar>,

                main: <>
                    <Breadcrumb crumbs={crumbs} divider="/" />
                    <PageTitle>Main Dashboard</PageTitle>
                </>
            }}
        </Admin>
    )
}

export default User;