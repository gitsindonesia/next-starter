import Admin from "../../../components/Layouts/Admin";
import __Sidebar from './__Sidebar'
const User = () => {
    return (
        <Admin>
            {{
                aside: <__Sidebar></__Sidebar>,

                main: <div>Dashboard User</div>
            }}
        </Admin>
    )
}

export default User;