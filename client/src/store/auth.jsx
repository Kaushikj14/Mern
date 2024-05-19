import { createContext, useContext,useState,useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");


    const storeTokenInLS = (serverToken)=>{
        console.log(serverToken);
        return localStorage.setItem("token",serverToken);
    }


    let isLoggedIn = !!token; //if there is token then value set will be true else false

    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token");    
    }

    const userAuthentication = async ()=>{
        try {
            
            const response = await fetch(`http://localhost:5500/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
            }


        } catch (error) {
            console.log("Error getching the user data");
        }
    }

    // JWT Authentication :- to get the currently logged in user data
    useEffect(()=>{
        userAuthentication();
    },[]);


    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}