export default function Layout(props){
  const {children} = props

  const header = (
    <header>
      <div>
        <h1>CAFFIEND</h1>
      </div>
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