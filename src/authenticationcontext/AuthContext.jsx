import { createContext, useState,useEffect,useContext } from "react"
// intializing the context
const AuthContext = createContext()
// creating a custom hook
export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider(props){
  const {children} = props
const[user,setUser] = useState(null)
const[globalData,setGlobalData] = useState(null)
const value = {user}

return(
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
)

}