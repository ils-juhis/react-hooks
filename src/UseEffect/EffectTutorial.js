import React, { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalcutation]= useState(0)

  useEffect(()=>{
    setCalcutation(count*count)
  },[count])

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
};

export default EffectTutorial;
