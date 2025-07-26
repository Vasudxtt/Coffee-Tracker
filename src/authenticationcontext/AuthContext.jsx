import { createContext, useState } from "react"

const AuthContext = createContext()

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