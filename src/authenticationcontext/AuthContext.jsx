import { createContext, useState, useEffect, useContext } from "react"
// intializing the context
const AuthContext = createContext()
// creating a custom hook
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const { children } = props
  const [user, setUser] = useState(null)
  const [globalData, setGlobalData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const value = { user, globalData, setGlobalData, isLoading }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}