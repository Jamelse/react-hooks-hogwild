import React from "react";

function HogFilter({setFilteredHogs, filteredHogs}){
  
  function hogFilterHandler(e){
		setFilteredHogs(e.target.value)
    console.log(filteredHogs)
	}
  
  return (
    <label>
        Is Greased?:
        <select name="category" onChange={hogFilterHandler}>
        <option value="All">All</option>
          <option value="true">Greased</option>
          <option value="false">Not Greased</option>
        </select>
      </label>
  )
}

export default HogFilter