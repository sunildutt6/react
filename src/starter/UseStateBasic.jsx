import React, { useState } from "react";

const UseStateBasic = () => {
  console.log(useState(1));
  const [count, setCount] = useState(0);
  const [names, setnames] = useState("sunil");

  const handleClick = () => {
    setTimeout(() => {
      setCount((currentValue) => {
        return currentValue + 1;
      });
    }, 1000);

    // setCount((currentValue) => {
    //   const newValue = currentValue + 1;
    //   console.log(newValue);
    //   return newValue;
    // });
    // setnames("Aman");
  };
  return (
    <div>
      <h2>
        {count}
        {names}
      </h2>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateBasic;
