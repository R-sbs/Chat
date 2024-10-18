import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    const [authUser, setAuthUser] = useState(savedUser || null);

    return (<AuthContext.Provider value={{ authUser, setAuthUser }}>
                {children}
            </AuthContext.Provider>)
} 