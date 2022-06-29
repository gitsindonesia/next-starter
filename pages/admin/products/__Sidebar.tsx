import Sidebar from "../../../components/Sidebar/Sidebar"
import Navigation from "../../../components/Navigation/Navigation";
import { mainMenu } from "../../../routes"
import { RoutesInterface } from "../../../routes";

export default function SidebarPage () {
    const subMenu = mainMenu?.find((sub: RoutesInterface) => sub.path === '/admin/products'); // change the equal depending on page parent directory

    return (
        <Sidebar>{{
            title: 'Products',
            menus: subMenu?.children?.map(menu => {
                if (menu.children) {
                    return (
                        <Navigation hasSubItem={true} href={menu.path}>
                            {{
                                title: menu.title,
                                items: menu.children.map(child => {
                                    return (
                                        <Navigation href={child.path}>{ child.title }</Navigation>
                                    )
                                })
                            }}
                    </Navigation>
                    )
                }
                return (
                    <Navigation href={menu.path}>{ menu.title }</Navigation>
                )
            })
        }}</Sidebar>
    )
}