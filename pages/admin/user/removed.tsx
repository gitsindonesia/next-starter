import Admin from "../../../components/Layouts/Admin";
import SidebarPage from "./__Sidebar";
const UserRemoved = () => {
    return (
        <Admin>
            {{
                aside: <SidebarPage />,
                main: <div>Removed</div> 
            }}
        </Admin>
    )
}

export default UserRemoved;