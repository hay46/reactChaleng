import React from 'react'
import './Day1_project.css'
const Day1_project = ({sale,imaglink,alternativNave,titleFrute,rating,price}) => {
  return (
    <div className='banana-card'>
        <h1>{sale}</h1>
      <a href="/"><img src={imaglink} alt={alternativNave} /></a>
      <h2>{titleFrute }</h2>
      <h3>{rating}</h3>
      <h4>${price}</h4>
      <button>Add to Cart</button>
    </div>
  )
}

export default Day1_project