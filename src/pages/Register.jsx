import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !favoriteGenre) {
      alert("⚠️ Please fill out all fields.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(
      (user) => user.fullName.toLowerCase() === name.toLowerCase()
    );

    if (userExists) {
      alert("⚠️ User with this name already exists. Please log in.");
      navigate("/");
      return;
    }

    const newUser = {
      id: Date.now(),
      fullName: name,
      email,
      password,
      phone,
      favoriteGenre,
      joinedDate: new Date().toISOString().split("T")[0],
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    alert("✅ Registration successful! You can now log in.");
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Left Side (only visible on large screens) */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10">
        <div className="max-w-sm text-center">
          <h1 className="text-4xl font-bold mb-3">🎬 Welcome to MovieVerse</h1>
          <p className="text-indigo-100 text-base mb-5">
            Discover, save, and explore your favorite Movies, Anime, and Series.
          </p>
          <p className="italic text-indigo-200 text-sm">
            “A great story stays with you forever.”
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 md:p-12">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
        >
          <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Create Account
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Join and start your entertainment journey 🚀
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Create a password"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Favorite Genre */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">
              Favorite Genre
            </label>
            <select
              value={favoriteGenre}
              onChange={(e) => setFavoriteGenre(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            >
              <option value="">Select your favorite genre</option>
              <option value="Action / Adventure">Action / Adventure</option>
              <option value="Comedy / Romance">Comedy / Romance</option>
              <option value="Horror / Thriller">Horror / Thriller</option>
              <option value="Sci-Fi / Fantasy">Sci-Fi / Fantasy</option>
              <option value="Anime / Manga">Anime / Manga</option>
              <option value="Drama / Mystery">Drama / Mystery</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Register
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
