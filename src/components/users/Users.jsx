import React, { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import UserCard from "./UserCard";
import Filters from "../filters/Filters";
import Pagination from "../pagination/Pagination";
import ShimmerUserCard from "../loader/ShimerUserCard";
import { Link } from "react-router-dom";

const Users = () => {
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const {
    data: users,
    isFetching,
    isError,
    refetch,
  } = useUsers(page, gender, nat, limit);

  const fetchOneUser = () => {
    setLimit(1);
    setPage(1);
    refetch();
  };

  const fetchMultiUsers = () => {
    setLimit(8);
    refetch();
  };

  if (isError)
    return (
      <div className="container mt-20 text-center">
        <p className="text-red-500 text-2xl">Failed to fetch users</p>
        <button
          onClick={refetch}
          className="mt-4 px-6 py-3 bg-primary text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="container">
      <Filters
        gender={gender}
        setGender={(g) => {
          setGender(g);
          setPage(1);
        }}
        nat={nat}
        setNat={(n) => {
          setNat(n);
          setPage(1);
        }}
      />

      <div className="flex gap-6 my-8 flex-wrap">
        <button onClick={fetchOneUser} className="btn-primary">
          Fetch One User
        </button>
        <button onClick={fetchMultiUsers} className="btn-primary">
          Fetch Many Users
        </button>
      </div>

      {isFetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <ShimmerUserCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-[2rem]">
          {users?.map((user) => (
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

      {users?.length > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={10} />
      )}
    </div>
  );
};

export default Users;
