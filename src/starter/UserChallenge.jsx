import React, { useState } from "react";

const UserChallenge = () => {
  const [users, setUsers] = useState(null);

  const Login = () => {
    setUsers({ name: "sunil" });
  };

  const Logout = () => {
    setUsers(null);
  };

  return (
    <div>
      {users ? (
        <div>
          <h4>Welcome there, {users.name}</h4>
          <button className="btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={Login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default UserChallenge;
