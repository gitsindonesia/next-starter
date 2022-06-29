import Admin from "../../../components/Layouts/Admin";
import SidebarPage from "./__Sidebar";
const UserRegistering = () => {
    return (
        <Admin>
            {{
                aside: <SidebarPage />,
                main: <div>Registering</div>
            }}
        </Admin>
    )
}

export default UserRegistering;