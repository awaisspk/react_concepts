import React, { useState } from 'react';
const Counter = (value1, value2) => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount((count) => count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        increment
      </button>
    </div>
  );
};
export default Counter;
