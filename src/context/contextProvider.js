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

  //----------This is for showing the message that user want to delete or not ----------
  const [askingForDeleting, askingForDeletingHandler] = useState(false);

  //----------This is for showing the edit modal to user ----------
  const [editModalState, editModalStateHandler] = useState(false);

  //----------This is for getting id of the item we wanna edit ----------
  const [editUserItemId, editUserItemIdHandler] = useState(null);

  //----------This is for getting the data from the backend with the api based the user id ----------
  const [dataById, dataByIdHandler] = useState([]);

  //----------This is for getting id of the item we wanna delete ----------
  const [userItemId, userItemIdHandler] = useState(null);

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

  //----------This is for getting data by id from the back-end with GET fetch api ----------
  const fetchingDataById = async (editUserItemId) => {
    try {
      fetch(`http://localhost:6630/api/v1/user/${editUserItemId}`, {
        method: "GET",
        headers: { accept: "*/*" },
      })
        .then((response) => response.json())
        .then((result) => {
          dataByIdHandler(result.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  //----------This is for deleting data at the back-end with DELETE fetch api ----------
  const deleteItemHandler = async (itemId) => {
    try {
      fetch(`http://localhost:6630/api/v1/user/${itemId}`, { method: "DELETE", headers: { accept: "*/*" } }).then((response) => {
        if (response.status === 200) {
          fetchedDataHandler((prevItems) => prevItems.filter((item) => item.id !== itemId));
          askingForDeletingHandler(false);
        } else {
          throw new Error("Something went wrong while deleting the item");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  //---------- This is for updating the data by id ----------
  const updateUserDataById = async (editUserItemId) => {
    try {
      fetch(`http://localhost:6630/api/v1/user/${editUserItemId}`, {
        method: "PATCH",
        headers: { accept: "*/*" },
        body: JSON.stringify(dataById),
      }).then((response) => {
        if (response.statusCode === 200) {
          fetchingDataApi();
          editModalStateHandler(false);
        } else {
          throw new Error("we have an error");
        }
      });
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
        askingForDeleting,
        askingForDeletingHandler,
        deleteItemHandler,
        userItemId,
        userItemIdHandler,
        editModalState,
        editModalStateHandler,
        fetchingDataById,
        editUserItemId,
        editUserItemIdHandler,
        dataByIdHandler,
        dataById,
        updateUserDataById,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
