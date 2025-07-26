import { createContext } from "react"

const AuthContext = createContext()

export function AuthProvider(props){
  const {children} = props


const value = {}

return(
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
)

}