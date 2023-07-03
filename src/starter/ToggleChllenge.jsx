import React, { useState } from "react";

const ToggleChllenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div>
      <p className="alert alert-danger">welcome page</p>
    </div>
  );
};

export default ToggleChllenge;
