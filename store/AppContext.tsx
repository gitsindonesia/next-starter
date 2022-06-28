import { createContext, useState } from "react";

interface AppContextInterface {
    showSidebar: boolean,
    toggleSidebar: any,
}
const AppContext = createContext<AppContextInterface>({
    showSidebar: true,
    toggleSidebar: (): void => {}
});

export function AppContextProvider({children}: any){
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const context = {
        showSidebar: showSidebar,
        toggleSidebar: toggleSidebar
    }

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}

export default AppContext;