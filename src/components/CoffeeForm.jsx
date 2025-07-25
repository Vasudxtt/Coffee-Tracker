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
    </>
  )
}