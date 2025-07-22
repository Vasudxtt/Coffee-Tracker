import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Stats from "./components/Stats"


function App() {

const isAuthenticated = false

const authenticatedContent = (
  <>
  <Stats/>
  </>
)

  return (
    <Layout>
      <Hero/>
      <CoffeeForm/>
    </Layout>
  )
}

export default App
