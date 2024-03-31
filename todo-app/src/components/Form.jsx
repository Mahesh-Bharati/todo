import React,{useState} from 'react'

function Form() {
    const[name,setname]=useState({FirstName : '',LastName : ''})
    function SubmitHandle(e){
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>
        <form>
            <lable>First Name :</lable>
            <input onChange={(e)=>setname({...name , FirstName : e.target.value})} type="text" value={name.FirstName}/>
            <br/>
            <lable>Last Name :</lable>
            <input onChange={(e)=>setname({...name , LastName : e.target.value})} type="text" value={name.LastName}/>
            <br/>
            <button onClick={(e)=>SubmitHandle(e)}>Submit</button>
        </form>
        <h2>{name.FirstName } {name.LastName }</h2>
    </div>
  )
}

export default Form