import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import userData from "../data/userData.js"; // ✅ Default user data

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  // const nameRefs = useRef([]);

  

  useEffect(() => {
    const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert("⚠️ Please enter both name and password.");
      return;
    }

    // ✅ Load all users (default + registered)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const allUsers = [...userData, ...storedUsers];

    // ✅ Find user by name (case-insensitive)
    const user = allUsers.find(
      (u) => u.fullName.toLowerCase() === name.toLowerCase() && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/home");
    } else {
      alert("❌ Invalid name or password. Please try again.");
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-100 to-yellow-100 px-4">
    
      {/* Smooth animated gradient blobs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-400 opacity-30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>


      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-sm border-t-4 border-indigo-600"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700 drop-shadow-md">
          Welcome Back
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition shadow-sm"
            placeholder="Enter your full name"
          />
          sample: Ram
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition shadow-sm"
            placeholder="Enter your password"
          />
          sample: 123
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
