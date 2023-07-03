import React, { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("sunil");

  return (
    <div>
      <h4>Falsy or: {text || "hello world"}</h4>
      <h4>Falsy And: {text && "hello world"}</h4>
      <h4>Truthy or: {name || "hello world"}</h4>
      <h4>Truthy and: {name && "hello world"}</h4>
    </div>
  );
};

export default ShortCircuitOverview;
