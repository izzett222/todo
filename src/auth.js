import { useContext, useState } from "react";
import { AuthContext } from "./authContext";



export const AuthProvider = ({ children }) => {
    let [token, setToken] = useState(() => localStorage.getItem('token'))
    const saveToken = (value) => {
        localStorage.setItem('token', value)
        setToken(value)
    }
    const value = {token, setToken: saveToken}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
}
export const useAuth = () => {
    const cont = useContext(AuthContext)
    return cont
}