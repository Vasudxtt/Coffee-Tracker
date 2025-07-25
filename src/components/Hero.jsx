export default function Hero(){
  return(
    <>
    <h1>Track your coffee <abbr title="An enthusiast or devotee">Fiends</abbr></h1>
    <div className="benefits-list">
    <h3 className="font-bolder">Try<span className="text-gradient">Caffiend</span> and start...</h3>
    <p>✅Tracking Every Coffee</p>
    <p>✅Measuring Your Blood Caffine Levels</p>
    <p>✅Costing and Quantifying Your Addiction</p>
    </div>
    <div className="card info-card">
      <div>
         <i className="fa-solid fa-circle-info"></i>
      <h3>Did You Know...</h3>
      </div>
      <h5>That Caffine&apos;s half-time is about 5 hours?</h5>
      {/* <p>This means that after 5 hours, half the caffeine you consumed is still in your system, keeping you alert longer! So if you drink a cup of coffee with 200 mg of caffeine, 5 hours, later, you&apos;ll still have about 100 mg of caffeine in your system.</p> */}
    </div>
    </>
  )
}