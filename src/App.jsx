import { useAuth } from "./authenticationcontext/AuthContext"
import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import History from "./components/History"
import Layout from "./components/Layout"
import Stats from "./components/Stats"


function App() {
const {globalUser,globalData} = useAuth()
const isAuthenticated = globalUser
const isData = globalData

const authenticatedContent = (
  <>
  <Stats/>
  <History/>
  </>
)

  return (
    <Layout>
      <Hero/>
      <CoffeeForm isAuthenticated={isAuthenticated}/>
      {isAuthenticated && (authenticatedContent)}
    </Layout>
  )
}

export default App
