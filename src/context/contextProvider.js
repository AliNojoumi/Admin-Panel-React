import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  //----------This is for active side menu ----------
  const [activeMenu, setActiveMenu] = useState(true);

  //----------This is for size of the screen for handling active menu in mobile and desktop size ----------
  const [screenSize, setScreenSize] = useState(undefined);

  //----------This is for showing success message in add user ----------
  const [successAddUser, successAddUserHandler] = useState(false);

  //----------This is for showing fail message in add user ----------
  const [failAddUser, failAddUserHandler] = useState(false);

  //----------This is for active reset seach input button ----------
  const [activeResetSearchInput, activeResetSearchInputHandler] = useState(false);

  //----------This is for gettign data from the search input and storing it in a variable ----------
  const [formSearchInput, formSearchInputHandler] = useState("");

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        successAddUser,
        successAddUserHandler,
        failAddUser,
        failAddUserHandler,
        activeResetSearchInput,
        activeResetSearchInputHandler,
        formSearchInput,
        formSearchInputHandler,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
