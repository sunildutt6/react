import React from "react";

const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className={img} />
      <div>
        <h4></h4>
      </div>
    </article>
  );
};

export default Person;
