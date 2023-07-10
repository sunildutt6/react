import React, { useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = React.createContext();
console.log(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "sunil" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logout={logout} />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
