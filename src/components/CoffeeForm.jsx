import { coffeeOptions } from "../utils"



export default function CoffeeForm() {
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type</h4>
      {/* this div will have the 6 button of the drop down */}
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return(
          <button className="button-card" key={optionIndex}>
            <h4>{option.name}</h4>
            <p>{option.caffeine}mg</p>
          </button>
          )
        })}
        <button className="button-card">
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      <select name="coffee-list" id="coffee-list">
        <option value={null}>
          Select a coffee type
        </option>
        {coffeeOptions.map((option,optionIndex)=>{
          return(
            <option value={option.name} key={optionIndex}>
              {option.name}({option.caffeine}mg)
            </option>
          )
        })}
      </select>
      <h4>Select coffee amount(Rs.)</h4>
      <input type="number" placeholder="40.00" className="w-full" />
      <h4>Time Since Consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select id="hours-select">
            {[1,2,3,4,5,6,7,8,9,10,11,12,131,4,15,16,17,18,19,20,21,22,23].map((hour,hourIndex)=>{
              return(
                <option value={hour} id={hourIndex}></option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}