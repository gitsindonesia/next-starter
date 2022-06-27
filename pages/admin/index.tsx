import Admin from '../../components/Layouts/Admin';
import Navigation from '../../components/Dropdown/Navigation'
const Dashboard = () => {
    return (
        <Admin>
            <Navigation hasSubItem={true}>
                {{
                    title: 'Has Treview',
                    items: 
                        <>
                            <Navigation>
                                Test
                            </Navigation>
                            <Navigation>
                                Test
                            </Navigation>
                            <Navigation>
                                Test
                            </Navigation>
                        </>
                }}
            </Navigation>
            <p>Dashboard</p>
        </Admin>
    )
}

export default Dashboard;

