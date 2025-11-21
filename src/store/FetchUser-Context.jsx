import { createContext, useState } from "react";
import React from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [displayUsers, setDisplayUsers] = useState([]); // <-- show these users
  const [loading, setLoading] = useState(false);

  // Fetch only 1 user
  const fetchOneUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();

      setDisplayUsers(data.results); // always array
    } catch (error) {
      console.log(error);
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

  return (
    <UserContext.Provider
      value={{
        displayUsers,
        loading,
        fetchOneUser,
        fetchMultiUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
