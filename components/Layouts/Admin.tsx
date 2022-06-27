import Sidebar from "../Sidebar/Sidebar"

const Admin = ( {children}: any ) => {
    return (
        <div>
            <aside>
                <Sidebar></Sidebar>
            </aside>
            <header>
                Header
            </header>
            <main>
                <div>{ children }</div>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Admin