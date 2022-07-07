import { createContext, useState } from "react";

interface SidebarCtxInterface {
    showSidebar: boolean,
    toggleSidebar: any,
}
const SidebarCtx = createContext<SidebarCtxInterface>({
    showSidebar: true,
    toggleSidebar: (): void => {}
});

export function SidebarCtxProvider({children}: any){
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const context = {
        showSidebar: showSidebar,
        toggleSidebar: toggleSidebar
    }

    return (
        <SidebarCtx.Provider value={context}>{children}</SidebarCtx.Provider>
    );
}

export default SidebarCtx;