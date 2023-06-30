import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  //   const [name, setNames] = useState("peter");
  //   const [age, setAge] = useState(24);
  //   const [hobby, setHobby] = useState("reading books");

  //   const handleClick = () => {
  //     setNames("sunil");
  //     setAge(43);
  //     setHobby("Gaming");
  //   };
  const handleClick = () => {
    //setPerson({ name: "sunil", age: 43, hobby: "noreading" });
    setPerson({ ...person, name: "sunil" });
  };

  return (
    <div>
      <h3>Name: {person.name}</h3>
      <h4>Age: {person.age}</h4>
      <h5>Hobby: {person.hobby}</h5>
      <button className="btn" type="submit" onClick={handleClick}>
        change
      </button>
    </div>
  );
};

export default UseStateObject;
