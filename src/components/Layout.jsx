import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"

export default function Layout(props){
  const {children} = props

  const[showModal,useShowModal] = useState(false)

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign Up Free</p>
         <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  )

  const footer = (
    <footer>
      <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://www.vasuduttpareek.com">Vasudutt Pareek</a> <br />Using the <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library.<br />Check out the project on <a target="_black" href="https://github.com/Vasudxtt/Coffee-Tracker">GitHub</a>!</p>
    </footer>
  )
  return(
    <>
    {showModal && (<Modal>
      <Authentication />
    </Modal>)}
    {header}
    <main>
      {children}
    </main>
    {footer}
    </>
  )
}