import { createContext, useState } from "react";

export const AdminContext = createContext({
    currentAdmin: {},
    setCurrentAdmin: () => { }
})

export const AdminProvider = ({ children }) => {
    const [currentAdmin, setCurrentAdmin] = useState(null);
    const value = { currentAdmin: currentAdmin, setCurrentAdmin: setCurrentAdmin };

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}