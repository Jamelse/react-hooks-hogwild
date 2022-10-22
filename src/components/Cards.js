import React, {useState} from 'react'
import Card from './Card'

function Cards({hogs}){
  
  const displayHogs = hogs.map((hog) => {
    return (<Card 
      image={hog.image} 
      name={hog.name} 
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog.weight}
      hma={hog["highest medal achieved"]}/>
    )})

  return (
  <div className='ui grid container'>
    {displayHogs}
  </div>
)
}

export default Cards


