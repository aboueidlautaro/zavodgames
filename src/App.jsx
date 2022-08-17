import React from "react";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/routes/Home";
import Login from "./assets/routes/Login";
import Register from "./assets/routes/Register";
import TestAPI from "./assets/routes/TestAPI";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="test" element={<TestAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
