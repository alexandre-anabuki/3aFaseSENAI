import {createContext, useContext, useState, useEffect} from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState("")

    //se tiver emial no localStorage, mantém login

    useEffect(() =>{
        const savedEmail = localStorage.getItem("email")
        if(savedEmail){
            setUser({email: savedEmail})
        }
    }, [])

    const login = (email) =>{
        localStorage.setItem("eamil", email)
        setUser({email})
    }

    const logout = () =>{
        localStorage.removeItem("email")
        setUser("")
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)