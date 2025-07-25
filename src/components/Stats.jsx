function StatCard(props){
  const{lg,title,children}=props
  return(
    <div className={'card stat-card ' + (lg? 'col-span-2' : '')}>
      {title}
      {/* Underneath this is the children content which is the content between the opening and the closing tag */}
      {children}
    </div>
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
        {/* if we want we can write lg like this to as the value is been defined and if we write lg={true} then it is also fine */}
    <StatCard lg title="Active Caffine Level"></StatCard>
    <StatCard title="Daily Caffine"></StatCard>
    <StatCard title="Avg # of Coffees"></StatCard>
    <StatCard title="Daily Cost(Rs)"></StatCard>
    <StatCard title="Total Cost(Rs)"></StatCard>
      </div>
    </>
  )
}