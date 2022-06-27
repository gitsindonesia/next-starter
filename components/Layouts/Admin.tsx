import { useContext } from "react"
import AppContext from "../../store/AppContext"
import Sidebar from "../Sidebar/Sidebar"

const Admin = ( {children}: any ) => {
    const { showSidebar } = useContext(AppContext);
    return (
        <div>
            <aside>
                <Sidebar></Sidebar>
            </aside>
            <header>
                Header
            </header>
            <main className={'transition-all duration-500 pt-44 md:px-10 px-5 pb-20 relative ' + (!showSidebar ? 'md:ml-20 ml-0' : 'md:ml-72 ml-4/5')}>
                <div>{ children }</div>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Admin