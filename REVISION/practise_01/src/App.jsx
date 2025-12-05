import React, { useState } from "react";
import FristComponent from "./FristComponent";

const App = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const showName = () => {
    setDisplayName(name);
  };

  let a = 10;
  let b = 20;

  function onClick() {
    alert("Hello On Click !!");
  }

  return (
    <div>
      <h1>Hello from React !</h1>
      <p>
        {a} + {b} = {a + b}
      </p>
      <button onClick={onClick}>Click Me</button>
      <br />
      <div className="name">
        <input
          type="text"
          placeholder="Enter Your name :"
          onChange={handleNameChange}
        />
        <button onClick={showName}>Show Name</button>
        <h1>{displayName}</h1>
      </div>
      <FristComponent />
      <App01 />
    </div>
  );
};

export const App01 = () => {
  return <h1>Hello from the App01 it is inside the App.jsx</h1>;
};

export default App;
