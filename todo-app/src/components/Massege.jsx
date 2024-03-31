import React from 'react'

function Massege() {
    function SayHello(){
            console.log('Hello')
    }
  return (
    <button onClick={SayHello}>Click me to say Hello</button>
  )
}

export default Massege