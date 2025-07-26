import { createContext, useState,useEffect,useContext } from "react"
// intializing the context
const AuthContext = createContext()

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider(props){
  const {children} = props
const[user,setUser] = useState(null)

const value = {user}

return(
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
)

}