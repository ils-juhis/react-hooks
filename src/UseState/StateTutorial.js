import React, { useEffect, useState } from "react";

const StateTutorial = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
};

export default StateTutorial;
