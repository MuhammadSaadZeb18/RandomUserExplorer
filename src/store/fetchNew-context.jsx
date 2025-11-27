import React from "react";
import { createContext, useState, useCallback } from "react";

export const UserContext = createContext();

export const UserProviderNew = ({ children }) => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filters
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState("");

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  // To avoid refetching when returning from detail page
  const [hasFetched, setHasFetched] = useState(false);

  // Main Fetch Function
  const fetchUsers = useCallback(
    async (
      usersPerPage = 9,
      fetchPage = page,
      fetchGender = gender,
      fetchNat = nat
    ) => {
      setLoading(true);
      setError(null);

      let url = `https://randomuser.me/api/?results=${usersPerPage}&page=${fetchPage}`;
      if (fetchGender) url += `&gender=${fetchGender}`;
      if (fetchNat) url += `&nat=${fetchNat}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data.results || []);
        setHasFetched(true);
      } catch {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // UPDATE FUNCTIONS (fetch after setting values)
  const updatePage = (newPage) => {
    setPage(newPage); // Update page number
    fetchUsers(9, newPage, gender, nat); // Pass current filters explicitly
  };

  const updateGender = (newGender) => {
    setGender(newGender);
    setPage(1); // Reset to first page when filter changes
    fetchUsers(9, 1, newGender, nat); // Pass new gender explicitly
  };

  const updateNat = (newNat) => {
    setNat(newNat);
    setPage(1);
    fetchUsers(9, 1, gender, newNat); // Pass new nat explicitly
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,

        gender,
        nat,

        page,
        totalPages,

        hasFetched,

        fetchUsers,
        updatePage,
        updateGender,
        updateNat,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
