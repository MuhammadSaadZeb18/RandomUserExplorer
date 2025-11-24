import { useLocation, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import UserDetail from "../components/users/UserDetail";
import React from "react";

const UserDetailedPage = () => {
  const { state } = useLocation();
  console.log(state);
  // const { id } = useParams(); // only used for URL (optional)

  const user = state?.user;
  console.log(user);

  if (!user) return <h2>No user data found</h2>;

  return (
    <>
      <Header />
      <UserDetail user={user} />
      <Footer />
    </>
  );
};

export default UserDetailedPage;
