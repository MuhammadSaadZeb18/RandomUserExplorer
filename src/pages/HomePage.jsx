import React from "react";
import Header from "../components/header/Header";
import Users from "../components/users/Users";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
