import Sidebar from "../../../components/Sidebar/Sidebar"
import Navigation from "../../../components/Navigation/Navigation";
import { mainMenu } from "../../../routes"
import { RoutesInterface } from "../../../routes";
import SidebarCtx from "../../../components/Sidebar/context";

export default function SidebarPage () {
    const subMenu = mainMenu?.find((sub: RoutesInterface) => sub.path === '/admin/user'); // change the equal depending on page parent directory

    return (
        <Sidebar>{{
            title: 'Users',  // Edit the title of sidebar
            menus: subMenu?.children?.map(menu => {
                if (menu.children) {
                    return (
                        <Navigation sidebarCtx={SidebarCtx} hasSubItem={true} href={menu.path} icon={menu.icon}>
                            {{
                                title: menu.title,
                                items: menu.children.map(child => {
                                    return (
                                        <Navigation sidebarCtx={SidebarCtx} icon={child.icon} href={child.path}>{ child.title }</Navigation>
                                    )
                                })
                            }}
                        </Navigation>
                    )
                }
                return (
                    <Navigation sidebarCtx={SidebarCtx} icon={menu.icon} href={menu.path}>{ menu.title }</Navigation>
                )
            })
        }}</Sidebar>
    )
}