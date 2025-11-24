import React, { useEffect, useState, useContext } from "react";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { UserContext } from "../../store/FetchUser-Context";
import Filters from "../filters/Filters";
import Pagination from "../pagination/Pagination";
import ShimmerUserCard from "../loader/ShimerUserCard"; // <-- NEW

const Users = () => {
  const { displayUsers, fetchOneUser, fetchMultiUsers, loading, error } =
    useContext(UserContext);

  const [errorMsg, setErrorMsg] = useState("");

  const [openGenderDropdown, setOpenGenderDropdown] = useState(false);
  const [openCountryDropdown, setOpenCountryDropdown] = useState(false);

  const [genderType, setGenderType] = useState("");
  const [countryType, setCountryType] = useState("");

  // Load 1 user initially
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchOneUser();
      } catch (err) {
        setErrorMsg("Failed to fetch user. Please try again.");
      }
    };
    fetchData();
  }, []);

  if (error || errorMsg)
    return (
      <div className="container mt-20 text-center">
        <p className="text-red-500 dark:text-red-400 text-[1.8rem] font-semibold">
          {errorMsg || "Something went wrong while fetching users."}
        </p>
        <button
          onClick={() => {
            setErrorMsg("");
            fetchOneUser();
          }}
          className="mt-4 px-6 py-3 bg-primary dark:bg-yellow-500 text-white rounded-md hover:bg-secondary dark:hover:bg-yellow-400 transition-colors duration-300"
        >
          Retry
        </button>
      </div>
    );

  // FILTER USERS
  const filteredUsers = displayUsers.filter((user) => {
    const genderMatch =
      genderType === "" ||
      user.gender.toLowerCase() === genderType.toLowerCase();

    const countryMatch =
      countryType === "" ||
      user.nat.toLowerCase() === countryType.toLowerCase();

    return genderMatch && countryMatch;
  });

  return (
    <div className="container">
      {/* FILTERS */}
      <Filters
        openGenderDropdown={openGenderDropdown}
        openCountryDropdown={openCountryDropdown}
        setOpenGenderDropdown={setOpenGenderDropdown}
        setOpenCountryDropdown={setOpenCountryDropdown}
        genderType={genderType}
        countryType={countryType}
        setGenderType={setGenderType}
        setCountryType={setCountryType}
        allCountries={[...new Set(displayUsers.map((u) => u.nat))]}
      />

      {/* BUTTONS */}
      <div className="flex gap-6 my-8 flex-wrap">
        <button onClick={fetchOneUser} className="btn-primary rounded-Sm">
          Fetch One User
        </button>

        <button
          onClick={() => fetchMultiUsers(9)}
          className="btn-primary rounded-Sm"
        >
          Fetch Many Users
        </button>
      </div>

      {/* USERS GRID */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 gap-6 mb-40! mt-20!">
          {[...Array(3)].map((_, i) => (
            <ShimmerUserCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 gap-6 mb-40! mt-20!">
          {filteredUsers.map((user) => (
            <Link
              key={user.login.uuid}
              to={`/user/${user.login.uuid}`}
              state={{ user }}
            >
              <UserCard
                user={{
                  name: `${user.name.first} ${user.name.last}`,
                  email: user.email,
                  phone: user.phone,
                  adress: `${user.location.street.number} ${user.location.street.name}`,
                  gender: user.gender,
                  dob: user.dob.date.slice(0, 10),
                  country: user.location.country,
                  img: user.picture.large,
                }}
              />
            </Link>
          ))}
        </div>
      )}

      {filteredUsers.length > 1 && <Pagination />}
    </div>
  );
};

export default Users;
