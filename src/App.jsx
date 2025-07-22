import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import Layout from "./components/Layout"


function App() {

const isAuthenticated = false


  return (
    <Layout>
      <Hero/>
      <CoffeeForm/>
    </Layout>
  )
}

export default App
