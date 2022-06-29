import { useContext } from "react";
import AppContext from "../../store/AppContext";
import Image from "next/image";

export interface SidebarInterface {
    children: any
}

const Sidebar = ({children}: SidebarInterface) => {
    const { toggleSidebar, showSidebar } = useContext(AppContext);

    function showHideSidebar(){
        toggleSidebar();
    }

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
                    children?.menus
                }
            </ul>
        </div>
    )
}

export default Sidebar;