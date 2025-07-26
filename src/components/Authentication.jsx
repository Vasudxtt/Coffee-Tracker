import { useState } from "react"
import { useAuth } from "../authenticationcontext/AuthContext"

export default function Authentication() {

  const [isRegistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const { signup, login } = useAuth()

  async function handleAuthenticate() {
    if (!email || !email.includes('@') || !password || password.length < 6 || isAuthenticating) { return }
    try {
      setIsAuthenticating(true)

      if (isRegistration) {
        // register a user
        await signup(email, password)
      } else {
        // login a user
        await login(email, password)
      }
      handleCloseModal()
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally {
      setIsAuthenticating(false)
    }
  }


  return (
    <>
      <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
      {/* <p>Welcome to Coffee Tracker! Please sign up or login to continue.</p> */}
      <p>{isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>
      <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email" />
      <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
      <button onClick={handleAuthenticate}><p>Submit</p></button>
      {/* this is throwing a horizontal line to seprate it from the other */}
      <hr />
      <div className="register-content">
        <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
        <button onClick={() => { setIsRegistration(!isRegistration) }}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>
      </div>
    </>
  )
}