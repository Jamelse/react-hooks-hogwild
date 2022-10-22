import React, {useState} from "react";

function Card({image, name, specialty, greased, weight, hma}){
  const [children, setChildren] = useState(false)
  
  function clickHandler(){
    setChildren((children) => !children)
  }
  
 return (
  <div className='ui card eight wide column' onClick={clickHandler}>
  <a className='image' href='#'>
  <img src={image} alt='hog'></img>
  </a>
  <h3 className='header'>{name}</h3>
  {children ? 
  <>
  <p>Specialty: {specialty}</p>
  <p>Greased?: {greased ? 'Greased' : 'Not Greased'}</p>
  <p>Weight: {weight}</p>
  <p>Highest Medal Achieved: {hma}</p>
  </> : ''}
</div>)
}

export default Card