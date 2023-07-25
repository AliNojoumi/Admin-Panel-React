import React, { createContext, useContext, useState, useEffect } from "react";

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

  //----------This is for fetching and storing data from the back-end in a variable ----------
  const [fetchedData, fetchedDataHandler] = useState([]);

  //----------This is for showing the loading data while api is calling ----------
  const [loadingData, loadingDataHandler] = useState(false);

  //----------This is for storing the data that we get from user input----------
  const [userData, userDataHandler] = useState({ name: "", sureName: "", message: "", city: "", age: "" });

  //----------This is for getting data from the back-end with GET fetch api ----------
  useEffect(() => {
    loadingDataHandler(true);
    fetchingDataApi();
  }, [userData]);

  const fetchingDataApi = async () => {
    try {
      fetch("http://localhost:6630/api/v1/user", {
        method: "GET",
        headers: { "Content-Type": "application/json", accept: "*/*", page: 1, pageSize: 10 },
      })
        .then((response) => response.json())
        .then((result) => result.data)
        .then((data) => data.items)
        .then((finalData) => {
          fetchedDataHandler(finalData);
          loadingDataHandler(false);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

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
        fetchedData,
        fetchedDataHandler,
        loadingData,
        loadingDataHandler,
        fetchingDataApi,
        userData,
        userDataHandler,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
