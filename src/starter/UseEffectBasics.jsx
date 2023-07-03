import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("1hello from useffect");
  }, [value, secondValue]);

  useEffect(() => {
    console.log("2hello from useffect");
  }, [secondValue, value]);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h2>second Value: {secondValue}</h2>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};

export default UseEffectBasics;
