import { useContext } from "react";
import AppContext from "../../store/AppContext";

const Sidebar = () => {
    const { toggleSidebar, showSidebar } = useContext(AppContext);

    function showHideSidebar(){
        toggleSidebar();
    }

    return (
        <div className={'fixed top-0 min-h-screen left-0 transition-all duration-500 text-white shadow-xl z-20' + (!showSidebar ? 'w-0 md:w-20' : 'w-4/5 md:w-72')}>
            <button onClick={showHideSidebar}>Toggle Sidebar</button>
            {
                showSidebar && <p>Show Sidebar</p>
            }
        </div>
    )
}

export default Sidebar;