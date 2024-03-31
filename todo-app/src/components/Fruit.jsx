import React from 'react'

function Fruit({name,price}) {
  return (
    //<li>Price of the {name} is {price}</li>
    <li>{price>100?<h3>Price of the {name} is {price}</h3>:" "}</li>
  )
}

export default Fruit