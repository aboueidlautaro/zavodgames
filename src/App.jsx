import React from "react";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/routes/Home";
import Login from "./assets/routes/Login";
import Register from "./assets/routes/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
