import { useState } from "react"
function Counter(){
    const [count,setcount]=useState(0)
    const [factor,setfactor]=useState(0)
    function increament(){
        setcount(count+factor)
    }
    function decreament(){
        setcount(count-factor)
    }
    function increamentfactor(){
        setfactor(factor+1)
    }
    function decreamentfactor(){
        setfactor(factor-1)
    }
    return(
        <div>
            <h1>This is my counter:{count}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decrement</button>

            <h1>Set factor:{factor}</h1>
            <button onClick={increamentfactor}>Increament</button>
            <button onClick={decreamentfactor}>Decrement</button>
        </div>
    )
}
export default Counter