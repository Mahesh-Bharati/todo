import React,{ useState } from "react";

import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputval,setInputval] = useState('')
  const [todos,settodos] = useState([])
   function writetodo(e){
    setInputval(e.target.value)
   } 
   function addtodo(){
    if(inputval!='')
    {
    settodos((pretodos)=>[...pretodos,inputval])
    setInputval('')
    }
   }
   function deltodo(todoIndex){
    settodos((pretodos)=>pretodos.filter((pretodos,pretodosIndex)=>{
      return pretodosIndex!=todoIndex
    }))
   }
  return (
    <main>
      <h1>To do list</h1>
      <InputContainer inputval={inputval} writetodo={writetodo} addtodo={addtodo}></InputContainer>
      <TodoContainer todos={todos} deltodo={deltodo}></TodoContainer>
      
    </main>
  );
}

export default App;
