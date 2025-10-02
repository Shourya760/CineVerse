import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBell, FaPalette, FaHeart, FaFilm, FaArrowLeft } from "react-icons/fa";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [favoriteGenre, setFavoriteGenre] = useState("Action");
  const [themeColor, setThemeColor] = useState("purple");

  return (
    <div className="min-h-screen p-8 text-gray-200 bg-gradient-to-b from-black via-gray-900 to-gray-950 flex flex-col">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
        Settings              (for now it is not working  )
      </h1>

      {/* Profile Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaUser /> Profile
        </h2>
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="font-medium mb-2">Full Name</p>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium mb-2">Email</p>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaBell /> Notifications
        </h2>
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex items-center justify-between">
          <p className="font-medium">Enable Notifications</p>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer-checked:bg-purple-500 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform shadow-md"></div>
          </label>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaPalette /> Preferences
        </h2>

        {/* Favorite Genre */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-4 items-center mb-4">
          <p className="font-medium flex items-center gap-2">
            <FaFilm /> Favorite Genre
          </p>
          <select
            value={favoriteGenre}
            onChange={(e) => setFavoriteGenre(e.target.value)}
            className="ml-auto p-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {["Action", "Comedy", "Horror", "Anime", "Drama", "Sci-Fi"].map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Theme Color Picker */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-4 items-center">
          <p className="font-medium flex items-center gap-2">
            <FaHeart /> Theme Color
          </p>
          <div className="flex gap-3 ml-auto">
            {["purple", "pink", "yellow", "blue", "green"].map((color) => (
              <button
                key={color}
                onClick={() => setThemeColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  themeColor === color ? "border-white" : "border-gray-600"
                } bg-${color}-500 transition-transform hover:scale-110`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex justify-end mb-6">
        <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all">
          Save Changes
        </button>
      </div>

      {/* Go Back Home Button at the bottom */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg text-white transition-all"
        >
          <FaArrowLeft /> Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Settings;
