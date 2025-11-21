import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailedPage from "./pages/UserDetailedPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="user/:id" element={<UserDetailedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
