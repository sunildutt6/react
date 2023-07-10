import React, { useState } from "react";

const Form = ({ addPerson }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please provide name Value");
      return;
    }
    addPerson(name);
    setName("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-block" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
