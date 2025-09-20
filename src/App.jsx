import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import dwarkaImg from "./assets/dwarka.jpg";
import ambajiImg from "./assets/ambaji.jpg";
import pavagadhImg from "./assets/pavagadh.jpg";
import somnathImg from "./assets/somnath.jpg";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

