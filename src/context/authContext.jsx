import React, { createContext, useContext, useState, useReducer } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [logInInputData, logInInputDataHandler] = useState({ phone: "", password: "" });

  const [userLogInState, dispath] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOG-IN":
          localStorage.setItem("user", action.payload);
          return { ...state, userJWT: action.payload };
        case "LOG-OUT":
          localStorage.removeItem("user");
          return { ...state, userJWT: null };
        default:
          console.error(`Unhandled action type: ${action.type}`);
          return state;
      }
    },
    { userJWT: localStorage.getItem("user") || null }
  );

  return (
    <AuthContext.Provider value={{ logInInputData, logInInputDataHandler, userLogInState, dispath }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
