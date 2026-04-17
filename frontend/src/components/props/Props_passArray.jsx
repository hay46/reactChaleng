import React from 'react'

const Props_passArray = (items) => {
  return (
    <div><ul>
            {items.map(item=><li key={item}>{item}</li>)}
        </ul></div>
  )
}

export default Props_passArray