function StatCard(props){
  const{lg,title,children}=props
  return(
    <div></div>
  )
}




export default function Stats() {
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple" />
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
    <StatCard></StatCard>
    <StatCard></StatCard>
    <StatCard></StatCard>
    
      </div>
    </>
  )
}