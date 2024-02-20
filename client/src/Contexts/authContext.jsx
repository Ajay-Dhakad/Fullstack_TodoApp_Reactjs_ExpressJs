import { createContext,useContext, useEffect, useState } from "react";

const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [userstatus,setuserstatus] = useState(null);

    console.log(userstatus)


    // useEffect((() => {
    //     if(localStorage.getItem('auth_token')){
    //         setuserstatus(true)
    //     }
    // }
    // ),[])

    const login = (user) => {
        setUser(user);  
    }

    const logout = () => {

        localStorage.removeItem('auth_token');
        setUser(null);
        setuserstatus(false)
    }

    const updatestatus = () => {
        if (!userstatus){
        setuserstatus(true);
    }
    }

    return (
        <AuthContext.Provider value={{user,userstatus,updatestatus,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}

