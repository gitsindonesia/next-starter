import Sidebar from "../../components/Sidebar/Sidebar"
import Navigation from "../../components/Navigation/Navigation";
import { mainMenu } from "../../routes"
import { RoutesInterface } from "../../routes";

export default function SidebarPage () {
    const subMenu = mainMenu?.find((sub: RoutesInterface) => sub.path === '/admin'); // change the equal depending on page parent directory

    return (
        <Sidebar>{{
            title: 'Admin', // Edit the title of sidebar
            menus: subMenu?.children?.map(menu => {
                if (menu.children) {
                    return (
                        <Navigation hasSubItem={true} href={menu.path} icon={menu.icon}>
                            {{
                                title: menu.title,
                                items: menu.children.map(child => {
                                    return (
                                        <Navigation icon={child.icon} href={child.path}>{ child.title }</Navigation>
                                    )
                                })
                            }}
                    </Navigation>
                    )
                }
                return (
                    <Navigation icon={menu.icon} href={menu.path}>
                        { menu.title }
                    </Navigation>
                )
            })
        }}</Sidebar>
    )
}