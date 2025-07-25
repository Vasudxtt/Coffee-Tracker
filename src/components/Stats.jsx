import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels } from "../utils"

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
//so now we will create some fake data
const stats = {
  daily_caffine:240,
  daily_cost:40.00,
  average_coffees:2.3,
  total_cost:220
}

const caffineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)

const warningLevel = caffineLevel<statusLevels['low'].maxLevel?'low':
caffineLevel<statusLevels['moderate'].maxLevel?'moderate':'high'

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple" />
        <h2>Stats</h2>
      </div>
      <div className="stats-grid">
        {/* if we want we can write lg like this to as the value is been defined and if we write lg={true} then it is also fine */}
    <StatCard lg title="Active Caffine Level">
      <div className="stats-grid">
        <p><span className="stat-text">{caffineLevel}</span>mg</p>
        <h5 style={{color:statusLevels['low'].color,background:statusLevels['low'].background}}>Low</h5>
      </div>
      <p>{statusLevels['low'].description}</p>
    </StatCard>

    <StatCard title="Daily Caffine">
      <p><span className="stat-text">{stats.daily_caffine}</span>mg</p>
    </StatCard>

    <StatCard title="Avg # of Coffees">
      <p><span className="stat-text">{stats.average_coffees}</span>mg</p>
    </StatCard>

    <StatCard title="Daily Cost(Rs)">
      <p><span className="stat-text">Rs. {stats.daily_cost}</span></p>
    </StatCard>

    <StatCard title="Total Cost(Rs)">
      <p><span className="stat-text">Rs. {stats.total_cost}</span></p>
    </StatCard>
      </div>
    </>
  )
}