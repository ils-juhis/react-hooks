import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  const changeHandler = (e)=>{
    inputRef.current.value = e.target.value;
  }

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} onChange={changeHandler}/>
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
