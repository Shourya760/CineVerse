import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import TempleDetails from "./pages/TempleDetails";
import ProfilePage from "./pages/ProfilePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/map/:id" element={<MapView />} />
        <Route path="/profile" element={<ProfilePage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
