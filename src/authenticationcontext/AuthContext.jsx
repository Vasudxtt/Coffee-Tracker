import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useState, useEffect, useContext } from "react"
import { auth } from "../../firebase"
// intializing the context
const AuthContext = createContext()
// creating a custom hook
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const { children } = props
  const [globalUser, setGlobalUser] = useState(null)
  const [globalData, setGlobalData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function logout() {
    setUser(null)
    setGlobalData(null)
    return signOut(auth)
  }

  const value = { user, globalData, setGlobalData, isLoading,signup,login,logout }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,async()=>{})
    return unsubscribe
  },[])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}