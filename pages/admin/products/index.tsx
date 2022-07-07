import Admin from "../../../components/Layouts/Admin";
import SidebarPage from "./__Sidebar";
const Products = () => {
    return (
        <Admin>
            {{
                aside: <SidebarPage />,
                main: <div>Dashboard Products</div>
            }}
        </Admin>
    )
}

export default Products;