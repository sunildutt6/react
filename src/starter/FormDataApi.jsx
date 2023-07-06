import React, { useState } from "react";

const FormDataApi = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const password = formData.get("password");
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>form data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormDataApi;
