import React, { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((d) => {
        const { id, name } = d;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        type="button"
        onClick={() => setPeople([])}
      >
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
