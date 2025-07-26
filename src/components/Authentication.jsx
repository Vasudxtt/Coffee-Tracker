import { useState } from "react"

export default function Authentication(){

 const [isRegistration, setIsRegistration] = useState(false)
 const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [isAuthenticating, setIsAuthenticating] = useState(false)


  return(
    <>
    <h2 className="sign-up-text">Sign Up / Login</h2>
    <p>Welcome to Coffee Tracker! Please sign up or login to continue.</p>
    <input type="email" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <button><p>Submit</p></button>
     {/* this is throwing a horizontal line to seprate it from the other */}
    <hr />
    <div className="register-content">
    <p>Don&apos;t have an account</p>
    <button><p>Sign Up</p></button>
    </div>
    </>
  )
}