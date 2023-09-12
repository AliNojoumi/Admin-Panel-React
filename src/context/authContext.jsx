import React, { createContext, useContext, useState, useReducer } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let storedUserJWT;
  try {
    storedUserJWT = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    storedUserJWT = null;
  }

  const userJWTInitialState = { user: storedUserJWT || null };

  const [logInInputData, logInInputDataHandler] = useState({ phone: "", password: "" });

  const [userLogInState, dispath] = useReducer((state, action) => {
    switch (action.type) {
      case "LOG-IN":
        const newState = { ...state, user: action.payload };
        localStorage.setItem("user", action.payload.toString());
        return newState;
      case "LOG-OUT":
        localStorage.removeItem("user");
        return { ...state, user: null };
      default:
        return state;
    }
  }, userJWTInitialState);

  return (
    <AuthContext.Provider value={{ logInInputData, logInInputDataHandler, userLogInState, dispath }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
