import React from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Landing from "./components/landing";
import ResponsiveAppBar from "./components/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
