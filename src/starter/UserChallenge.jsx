import React, { useState } from "react";
import { data } from "../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    // const fakeId = Date.now();
    // const newUser = { id: fakeId, name: name };
    const updateUser = [...users, { id: Date.now(), name: name }];
    setUsers(updateUser);
    setName("");
  };

  const removeUser = (id) => {
    const filterUser = users.filter((user) => user.id !== id);
    setUsers(filterUser);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add user</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h4>users</h4>
      {users.map((user) => {
        return (
          <div>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
