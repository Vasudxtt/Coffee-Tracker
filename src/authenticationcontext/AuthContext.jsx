import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useState, useEffect, useContext } from "react"
import { auth, db } from "../../firebase"
import { doc, getDoc } from "firebase/firestore"
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
        setIsLoading(true)
        // this is giving the reference of the document so that the data is being accessed in the database
        // first we create a reference for the document (labelled json object), and then we get the doc, and then we snapshot it to see if there's anything there
        const docRef = doc(db, "users", user.uid)
        // this isused to take the snapshot of the current document
        const docSnap = await getDoc(docRef)
        
        // now we are intializing them as an empty object because if we dont get any information back then we gotta used it as an empty object
      let firebaseData = {}
      if(docSnap.exists){
        console.log('found user data');
        firebaseData = docSnap.data()
      }
      setGlobalData(firebaseData)
      }catch(err){
        console.log(err.message);
      }finally{
        setIsLoading(false)
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