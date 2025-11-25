import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [displayUsers, setDisplayUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 🔥 New state for active page
  const [activePage, setActivePage] = useState(1);

  // Fetch only 1 user
  const fetchOneUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setDisplayUsers(data.results);
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
      const res = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await res.json();
      setDisplayUsers(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // Pagination
  const fetchByPagination = async (page = 1) => {
    try {
      setLoading(true);

      // 🔥 Update active page here
      setActivePage(page);

      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=9&seed=abc`
      );
      const data = await res.json();

      setDisplayUsers(data.results);
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
        activePage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
