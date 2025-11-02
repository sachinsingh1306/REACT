import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      alert("Not Allowed");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default App;
