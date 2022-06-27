import Admin from '../../components/Layouts/Admin';
import Nav from '../../components/Dropdown/Nav'
const Dashboard = () => {
    return (
        <Admin>
            <Nav hasSubItem={true}>
                {{
                    title: 'Has Treview',
                    items: 
                        <>
                            <Nav>
                                Test
                            </Nav>
                            <Nav>
                                Test
                            </Nav>
                            <Nav>
                                Test
                            </Nav>
                        </>
                }}
            </Nav>
            <p>Dashboard</p>
        </Admin>
    )
}

export default Dashboard;

