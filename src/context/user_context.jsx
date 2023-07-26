import React, { useContext, useEffect, useReducer } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value="user context">{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
