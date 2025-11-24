import { createContext, useState } from "react";
import React from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [displayUsers, setDisplayUsers] = useState([]); // <-- show these users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch only 1 user
  const fetchOneUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/");
      // const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setDisplayUsers(data.results); // always array
      console.log(data.results);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch multiple users
  const fetchMultiUsers = async (count = 10) => {
    try {
      setLoading(true);
      // const res = await fetch(
      //   "https://randomuser.me/api/?page=1&results=9&seed=abc"
      // );
      const res = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await res.json();

      setDisplayUsers(data.results);
      console.log(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // Pagiantion
  const fetchByPagination = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=9&seed=abc`
      );

      const data = await res.json();

      setDisplayUsers(data.results);
      console.log(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        displayUsers,
        loading,
        fetchOneUser,
        fetchMultiUsers,
        error,
        fetchByPagination,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
