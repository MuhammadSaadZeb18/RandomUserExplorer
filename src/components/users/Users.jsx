import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../store/fetchNew-context";
import UserCard from "./UserCard";
import Filters from "../filters/Filters";
import Pagination from "../pagination/Pagination";
import ShimmerUserCard from "../loader/ShimerUserCard";
import { Link } from "react-router-dom";

const Users = () => {
  const {
    users,
    fetchUsers,
    loading,
    error,
    hasFetched,
    page,
    gender,
    nat,
  } = useContext(UserContext);

  const [openGenderDropdown, setOpenGenderDropdown] = useState(false);
  const [openCountryDropdown, setOpenCountryDropdown] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // First load only
  useEffect(() => {
    if (!hasFetched) {
      fetchUsers(9, page, gender, nat);
    }
  }, [hasFetched, fetchUsers, page, gender, nat]);

  // Buttons
  const fetchOneUser = () => fetchUsers(1, 1, gender, nat); // always page 1
  const fetchMultiUsers = () => fetchUsers(9, page, gender, nat);

  if (error || errorMsg)
    return (
      <div className="container mt-20 text-center">
        <p className="text-red-500 text-2xl">{errorMsg || error}</p>
        <button
          onClick={() => {
            setErrorMsg("");
            fetchUsers(10, page, gender, nat);
          }}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="container">
      {/* FILTERS */}
      <Filters
        openGenderDropdown={openGenderDropdown}
        setOpenGenderDropdown={setOpenGenderDropdown}
        openCountryDropdown={openCountryDropdown}
        setOpenCountryDropdown={setOpenCountryDropdown}
      />

      {/* ACTION BUTTONS */}
      <div className="flex gap-6 my-8 flex-wrap">
        <button onClick={fetchOneUser} className="btn-primary">
          Fetch One User
        </button>
        <button onClick={fetchMultiUsers} className="btn-primary">
          Fetch Many Users
        </button>
      </div>

      {/* USERS GRID */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ShimmerUserCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
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

      {/* PAGINATION */}
      {users.length > 1 && <Pagination />}
    </div>
  );
};

export default Users;
