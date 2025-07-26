import { createContext } from "react"

const AuthContext = createContext()

export function AuthProvider(props){
  const {children} = props

return(
  <AuthContext.Provider>
    {children}
  </AuthContext.Provider>
)

}