import React from "react";
import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      <p>Hello there, {user?.name}</p>
      <button className="btn" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default UserContainer;
