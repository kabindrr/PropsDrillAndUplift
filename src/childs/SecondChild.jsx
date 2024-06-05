import React from "react";

export const SecondChild = ({ changeBook }) => {
  const handleButton = () => {
    console.log("ggg");
    changeBook("Python Basic");
  };

  //uplifting
  return (
    <div>
      <button onClick={handleButton}>Click Me</button>
    </div>
  );
};
