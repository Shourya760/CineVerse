import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import TempleDetails from "./pages/TempleDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

