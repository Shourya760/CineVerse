import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SearchContext } from "../context/SearchContext";
import { WatchlistContext } from "../context/WatchlistContext";

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [watchlistOpen, setWatchlistOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const profileRef = useRef(null);
  const watchlistRef = useRef(null);
  const { searchQuery, setSearchQuery, searchResults } = useContext(SearchContext);
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const savedUser = localStorage.getItem("cineverseUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
      if (watchlistRef.current && !watchlistRef.current.contains(e.target)) setWatchlistOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("cineverseUser");
    setUser(null);
    setProfileOpen(false);
    navigate("/login");
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-950 text-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4 relative">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          

          {/* Logo */}
          <Link
            to="/home"
            className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
          >
            CineVerse
          </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center px-6 relative">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search movies, series, anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-full text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute right-4 top-2.5 text-gray-400" />

            {/* Search Results */}
            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-1 w-full bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto"
                >
                  {searchResults.map((item) => (
                    <Link
                      key={item.id}
                      to={`/MovieDetails/${item.id}`}
                      onClick={() => setSearchQuery("")}
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-800 transition"
                    >
                      {item.title}{" "}
                      <span className="text-gray-500 text-sm">({item.type})</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
          {/* Mobile Search Icon */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-400 transition"
          >
            <FaSearch className="text-lg" />
          </button>

          {/* Notifications */}
          <button className="relative text-gray-300 hover:text-yellow-400 transition">
            <FaBell className="text-lg" />
            <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[9px] rounded-full px-1.5">
              3
            </span>
          </button>

          {/* Watchlist */}
          <div className="relative" ref={watchlistRef}>
            <button
              onClick={() => {
                setWatchlistOpen(!watchlistOpen);
                setProfileOpen(false);
              }}
              className="relative text-gray-300 hover:text-purple-400 transition"
            >
              <FaHeart className="text-lg" />
              {watchlist.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-[9px] rounded-full px-1.5">
                  {watchlist.length}
                </span>
              )}
            </button>

            {/* Watchlist Dropdown */}
            <AnimatePresence>
              {watchlistOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-xl w-52 sm:w-56 z-50"
                >
                  <h4 className="text-sm font-semibold text-purple-400 px-4 py-2 border-b border-gray-800">
                    Your Watchlist
                  </h4>
                  {watchlist.length > 0 ? (
                    <ul className="max-h-48 overflow-y-auto">
                      {watchlist.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between px-4 py-2 text-gray-300 text-xs sm:text-sm hover:bg-gray-800 transition"
                        >
                          <Link
                            to={`/MovieDetails/${item.id}`}
                            onClick={() => setWatchlistOpen(false)}
                            className="truncate hover:text-purple-400"
                          >
                            {item.title}
                          </Link>
                          <button
                            onClick={() => removeFromWatchlist(item.id)}
                            className="text-red-500 hover:text-red-600 ml-2 text-xs"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm px-4 py-3 text-center">
                      No movies yet.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setWatchlistOpen(false);
              }}
              className="flex items-center text-gray-300 hover:text-pink-400 transition"
            >
              <FaUserCircle className="text-xl sm:text-2xl" />
              <span className="ml-2 text-xs sm:text-sm hidden sm:block">
                {user ? user.fullName : "Profile"}
              </span>
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 sm:w-44 bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  <ul>
                    <li
                      onClick={() => {
                        setProfileOpen(false);
                        navigate("/profile");
                      }}
                      className="px-4 py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-800 cursor-pointer"
                    >
                      My Profile
                    </li>
                    <li
                      onClick={() => {
                        setProfileOpen(false);
                        navigate("/settings");
                      }}
                      className="px-4 py-2 text-xs sm:text-sm text-gray-300 hover:bg-gray-800 cursor-pointer"
                    >
                      Settings
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 text-xs sm:text-sm text-gray-300 bg-red-800 hover:bg-red-900 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900 px-4 py-3 border-t border-gray-800"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, series, anime..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 rounded-full text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <FaSearch className="absolute right-4 top-2.5 text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
