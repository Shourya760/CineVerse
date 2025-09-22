import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
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
          <Route path="/map" element={<MapView />} />          {/* Gujarat default */}
          <Route path="/map/:id" element={<MapView />} />      {/* Temple-specific */}
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
