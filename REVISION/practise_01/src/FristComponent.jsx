import React from "react";
import SecondComponent from "./SecondComponent";

const FristComponent = () => {
  const userName = "Sachin Singh";
  return (
    <div>
      <h1>Hello From Frist Component </h1>
      <h1>User Name : {userName}</h1>
      <SecondComponent />
    </div>
  );
};

export default FristComponent;
