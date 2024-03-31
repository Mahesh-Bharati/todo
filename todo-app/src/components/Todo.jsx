import React from 'react'

function Todo({todo,Index,deltodo}) {
  return (
    <div className="todo">
    <p>{todo}</p>
    <div className="Action">
      <input type="checkBox"></input>
      <button onClick={()=>deltodo(Index)}>Delete</button>
    </div>
  </div>
  )
}

export default Todo