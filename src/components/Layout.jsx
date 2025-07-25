export default function Layout(props){
  const {children} = props

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
    <footer></footer>
  )
  return(
    <>
    {header}
    <main>
      {children}
    </main>
    {footer}
    </>
  )
}