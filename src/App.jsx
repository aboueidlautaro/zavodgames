import React from "react";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/routes/Home";
import Login from "./assets/routes/Login";
import Register from "./assets/routes/Register";

import GamePage from "./assets/routes/GamePage";
import SearchPage from "./assets/routes/SearchPage";
import NotFound from "./assets/routes/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <AsideMenuResponsive />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="search/:search" element={<SearchPage />} />
        <Route path="games/:slug" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
