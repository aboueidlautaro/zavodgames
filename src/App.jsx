import React from "react";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/routes/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
