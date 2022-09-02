import { useContext, useState } from "react";
import { AuthContext } from "./authContext";



export const AuthProvider = ({ children }) => {
    let [token, setToken] = useState(null)
    const value = {token, setToken}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
}
export const useAuth = () => {
    const cont = useContext(AuthContext)
    return cont
}