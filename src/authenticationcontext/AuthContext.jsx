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

  const value = { globalUser, globalData, setGlobalData, isLoading, signup, login, logout }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // if there's no user, empty the user state and return from this listener
      
      if (!user) {  return }
      // if there is a user, then check if the user has data in the database, and if they do, then fetch said data and update the global state

      try{
        const data = await getUserData(user.uid)
        setGlobalData(data)
      }catch(err){
        console.log(err.message);
      }finally{

      }

    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}