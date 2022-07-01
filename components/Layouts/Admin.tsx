import { useContext } from "react"
import AppContext from "../../store/AppContext"
import Sidebar from "../Sidebar/Sidebar"
import AppHeader from "../AppHeader"

const Admin = ( {children}: any ) => {
    const { showSidebar } = useContext(AppContext);
    return (
        <div className="bg-gray-100 min-h-screen">
            <aside>
                {children.aside}
            </aside>
            <main className={'transition-all duration-500 md:px-10 px-5 pb-20 relative ' + (!showSidebar ? 'md:ml-20 ml-0' : 'md:ml-72 ml-4/5')}>
                <header>
                    <AppHeader />
                </header>
                <div>{ children.main }</div>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Admin