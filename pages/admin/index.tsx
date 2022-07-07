import Admin from '../../components/Layouts/Admin';
import SidebarPage from './__Sidebar';
import Card from '../../components/Card/Card';
import { CalendarIcon, BookmarkAltIcon, DocumentSearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import PageTitle from '../../components/PageTitle';

const Dashboard = ({children}: any) => {    
    const crumbs = [
        {
            path: '/',
            name: 'Main'
        }
    ]
    return (
        <Admin>
            {{ 
                aside: <SidebarPage/>,
                main: <>
                    <Breadcrumb crumbs={crumbs} divider="/" />
                    <PageTitle>Main Dashboard</PageTitle>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                        <Card className="shadow-xl shadow-slate-100 bg-white">
                            <CalendarIcon width={33} className="text-purple-600" />
                            <p className='text-sm text-gray-600 mt-4'>Booking</p>
                            <p className='mt-1 font-bold text-xl'>2918</p>
                        </Card>
                        <Card className="shadow-xl shadow-slate-100 bg-white">
                            <BookmarkAltIcon width={33} className="text-orange-600" />
                            <p className='text-sm text-gray-600 mt-4'>Events</p>
                            <p className='mt-1 font-bold text-xl'>300</p>
                        </Card>
                        <Card className="shadow-xl shadow-slate-100 bg-white">
                            <DocumentSearchIcon width={33} className="text-cyan-600" />
                            <p className='text-sm text-gray-600 mt-4'>Researches</p>
                            <p className='mt-1 font-bold text-xl'>41</p>
                        </Card>
                        <Card className="shadow-xl shadow-slate-100 bg-white">
                            <ShoppingCartIcon width={33} className="text-blue-600" />
                            <p className='text-sm text-gray-600 mt-4'>Order</p>
                            <p className='mt-1 font-bold text-xl'>120</p>
                        </Card>
                    </div>
                </>
            }}
            
        </Admin>
    )
}

export default Dashboard;

