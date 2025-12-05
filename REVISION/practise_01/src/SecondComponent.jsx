import React, { useState } from "react";

const SecondComponent = () => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  const a = (e) => {
    setNum1(Number(e.target.value));
  };
  const b = (e) => {
    setNum2(Number(e.target.value));
  };

  function sum() {
    let a = 10;
    let b = 20;
    return a + b;
  }
  const result = sum();
  return (
    <>
      <h1> Hello From the Second Component</h1>
      <p>
        {` function sum() {
    let a = 10;
    let b = 20;
    return a + b;
  }`}
      </p>
      <h3>Static addition : {result}</h3>

      <div className="addition">
        <h1>Addition</h1>
        <input type="text" placeholder="Enter number 1 :" onChange={a}></input>
        <input type="text" placeholder="Enter number 1 :" onChange={b}></input>
        <p>
          Sum of {num1} + {num2} is {num1 + num2}
        </p>
      </div>
    </>
  );
};

export default SecondComponent;
