import react, { useContext, useState } from "react";
import { AuthContext } from "./authContext";



export const AuthProvider = ({ children }) => {
    let [token, setToken] = useState('izzeddin')
    const value = {token, setToken}
    console.log(value);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
}
export const useAuth = () => {
    const cont = useContext(AuthContext)
    console.log(cont, 'rerdsdgthttyj')
    return cont
}