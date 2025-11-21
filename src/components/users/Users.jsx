import React, { useEffect, useState, useContext } from "react";
import UserCard from "./UserCard";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { UserContext } from "../../store/FetchUser-Context";

const Users = () => {
  const { displayUsers, fetchOneUser, fetchMultiUsers, loading } =
    useContext(UserContext);

  const [sortType, setSortType] = useState("name");

  // Load 1 user on first render
  useEffect(() => {
    fetchOneUser();
  }, []);

  if (loading) return <Loader />;

  // Sorting
  const sortedUsers = [...displayUsers].sort((a, b) => {
    if (sortType === "name")
      return `${a.name.first} ${a.name.last}`
        .toLowerCase()
        .localeCompare(`${b.name.first} ${b.name.last}`.toLowerCase());

    if (sortType === "gender") return a.gender.localeCompare(b.gender);

    if (sortType === "country")
      return a.location.country.localeCompare(b.location.country);

    return 0;
  });

  return (
    <div className="container">
    
      <div className="flex items-center justify-between mt-[3rem]!">
        <h4 className="flex items-center gap-3">
          <HiMiniUserGroup size={40} className="text-primary!" />
          Users
        </h4>

        <select
          className="border rounded-Md px-6 py-3 text-[1.6rem] bg-white"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="name">by name</option>
          <option value="gender">by gender</option>
          <option value="country">by country</option>
        </select>
      </div>

  
      <div className="flex gap-6 my-[2rem] flex-wrap">
        <button onClick={fetchOneUser} className="btn-primary rounded-Sm">
          Fetch One User
        </button>

        <button
          onClick={() => fetchMultiUsers(6)}
          className="btn-primary rounded-Sm"
        >
          Fetch Many Users
        </button>
      </div>

      {/* USER GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 gap-6 mb-[10rem]! mt-[5rem]!">
        {sortedUsers.map((user) => (
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
    </div>
  );
};

export default Users;
