import { useContext } from "react"
import SidebarCtx from "../Sidebar/context"
import Link from "next/link";
import { mainMenu, RoutesInterface } from '../../routes'
import Navbar from "../Navbar/Navbar"
import Button from '../Button/Button'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'

const Admin = ( {children, rootClassName}: any ) => {
    const { showSidebar } = useContext(SidebarCtx);
    return (
        <div className="bg-gray-100 min-h-screen">
            <aside>
                {children.aside}
            </aside>
            <main className={'transition-all duration-500 pb-20 relative ' + (!showSidebar ? 'md:ml-20 ml-0' : 'md:ml-72 ml-4/5')}>
                <header>
                    <Navbar flying rounded>
                        {{
                            menus: <>
                                {
                                    mainMenu.map((menu: RoutesInterface, index) => { // can use Button Element or else instead of Link
                                        return (
                                            <Link href={menu.path}>
                                                <a className="px-3 py-2 hover:bg-zinc-500 rounded-lg">{menu.title}</a>
                                            </Link>
                                        )
                                    })
                                }
                            </>,
                            toolbar: <>
                                <Button outlined={false} className="w-10 h-10 border-0 rounded-full !text-zinc-300 hover:bg-zinc-900 bg-zinc-800 !p-2">
                                    <SearchIcon width={50} />
                                </Button>
                                <Button outlined={false} className="w-10 h-10 border-0 rounded-full !text-zinc-300 hover:bg-zinc-900 bg-zinc-800 !p-2">
                                    <BellIcon width={50} />
                                </Button>
                            </>
                        }}
                    </Navbar>
                </header>
                <div className="md:px-10 px-5">{ children.main }</div>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

export default Admin