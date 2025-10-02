import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";



function App() {
  return (
    <Routes>
      {/* Auth pages */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
     


      {/* Main layout pages */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
