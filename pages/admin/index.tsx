import Admin from '../../components/Layouts/Admin';
import SidebarPage from './__Sidebar';

const Dashboard = ({children}: any) => {    
    return (
        <Admin>
            {{ 
                aside: <SidebarPage/>,
                main: <>
                    
                </>
            }}
            
        </Admin>
    )
}

export default Dashboard;

