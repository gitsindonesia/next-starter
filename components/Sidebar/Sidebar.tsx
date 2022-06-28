import { useContext } from "react";
import AppContext from "../../store/AppContext";
import Image from "next/image";
import Navigation from "../Dropdown/Navigation";

const Sidebar = ({children}: any) => {
    const { toggleSidebar, showSidebar } = useContext(AppContext);

    function showHideSidebar(){
        toggleSidebar();
    }

    const defaultRoutes = [
        {
            path: '/admin',
            title: 'Dashboard'
        },
        {
            path: '/admin/user',
            title: 'Manage User',
            children: [
                {
                    path: '/',
                    title: "User's Data"
                },
                {
                    path: '/removed',
                    title: "Removed Users"
                },
                {
                    path: '/registering',
                    title: "User's Registering"
                },
            ]
        },
        {
            path: '/admin/products',
            title: 'Products'
        }
    ]

    return (
        <div className={'fixed top-0 min-h-screen left-0 transition-all duration-500 text-white bg-zinc-700 z-20' + (!showSidebar ? 'w-0 md:w-20' : 'w-4/5 md:w-72')}>
            <div className="px-8 py-5 flex items-center gap-3 relative">
            {
                children?.logo || 
                <Image
                    src="/images/logo_white.png"
                    alt="Logo GITS"
                    width={60}
                    height={27.22}
                />
            }
            {
                children?.title || 
                <p>Admin</p>
            }
            {
                children?.button ||
                <button onClick={showHideSidebar} className="rounded-full p-3 h-[34px] w-[34px] bg-zinc-700 border border-white absolute -right-4">
                </button>
            }
            </div>
            <ul className="px-4 overflow-hidden">
                {
                    children?.menus || // default Menu
                    <>
                    <Navigation href="/admin">Dashboard</Navigation>
                    <Navigation href="/admin/user" hasSubItem={true}>
                        {{
                            title: 'Manage User',
                            items: 
                                <>
                                    <Navigation href="/admin/user">
                                        User's Data
                                    </Navigation>
                                    <Navigation href="/admin/user/removed">
                                        Removed Users
                                    </Navigation>
                                    <Navigation href="/admin/user/registering">
                                        Registering
                                    </Navigation>
                                </>
                        }}
                    </Navigation>
                    <Navigation href="/admin/products">Products</Navigation>
                    <Navigation href="/admin/notes">Notes</Navigation>
                    </>
                }
            </ul>
        </div>
    )
}

export default Sidebar;