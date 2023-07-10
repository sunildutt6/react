import React from "react";

const Person = ({ name }) => {
  console.log("render");
  return <h4>{name}</h4>;
};

export default Person;
