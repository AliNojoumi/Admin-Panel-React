import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [logInInputData, logInInputDataHandler] = useState({ phone: "", password: "" });

  return <AuthContext.Provider value={{ logInInputData, logInInputDataHandler }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
