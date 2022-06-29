import Admin from '../../components/Layouts/Admin';
import SidebarPage from './__Sidebar';

const Dashboard = ({children}: any) => {    
    return (
        <Admin>
            {{ 
                aside: <SidebarPage/>,
                main: <p>Dashboard</p>
            }}
            
        </Admin>
    )
}

export default Dashboard;

