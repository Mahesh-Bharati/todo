import React from "react";

function InputContainer({inputval,writetodo,addtodo}) {
  return (
    <div className="Input-Containner">
      <input type="text" value={inputval} onChange={writetodo}></input>
      <button onClick={addtodo}>+</button>
    </div>
  );
}

export default InputContainer;
