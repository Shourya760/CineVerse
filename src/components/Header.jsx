import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaUserCircle, FaHeart, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SearchContext } from "../context/SearchContext";
import { WatchlistContext } from "../context/WatchlistContext";
import Confetti from "react-confetti";

function SearchDropdown({ results, onSelect }) {
  return (
    <AnimatePresence>
      {results.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 w-full bg-gray-900 border border-gray-800 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto"
        >
          {results.map((item) => (
            <Link
              key={item.id}
              to={`/MovieDetails/${item.id}`}
              onClick={onSelect}
              className="block px-4 py-3 text-gray-200 hover:bg-purple-800 transition truncate rounded-md mx-2 my-1"
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-gray-400 text-sm ml-2">({item.type})</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [watchlistOpen, setWatchlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const profileRef = useRef(null);
  const watchlistRef = useRef(null);
  const searchRef = useRef(null);

  const { searchQuery, setSearchQuery, searchResults } = useContext(SearchContext);
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("cineverseUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Close dropdowns/search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
      if (watchlistRef.current && !watchlistRef.current.contains(e.target)) setWatchlistOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
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

  const dropdownVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 } };

  return (
    <>
      <header className="bg-gradient-to-r from-black via-gray-900 to-gray-950 text-gray-200 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4 relative">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              to="/home"
              className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
            >
              CineVerse
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:block relative w-80 md:w-96">
            <input
              type="text"
              placeholder="Search movies, series, anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-gray-800 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md placeholder-gray-400"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
            <SearchDropdown
              results={searchResults}
              onSelect={() => setSearchQuery("")}
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
            {/* Mobile Search Icon */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="sm:hidden text-gray-300 hover:text-yellow-400 transition"
              >
                <FaSearch className="text-lg" />
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-gray-900 border border-gray-800 rounded-xl shadow-xl z-50 p-3"
                  >
                    <input
                      type="text"
                      placeholder="Search movies, series, anime..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full px-3 py-2 rounded-full bg-gray-800 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
                    />
                    <SearchDropdown
                      results={searchResults}
                      onSelect={() => {
                        setSearchQuery("");
                        setSearchOpen(false);
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <button
              onClick={() => {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 2000);
              }}
              className="relative text-gray-300 hover:text-yellow-400 transition"
            >
              <FaBell className="text-lg" />
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[9px] rounded-full px-1.5">3</span>
            </button>

            {showConfetti && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={1000}
                recycle={false}
                style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
              />
            )}

            {/* Watchlist */}
            <div className="relative" ref={watchlistRef}>
              <button
                onClick={() => { setWatchlistOpen(!watchlistOpen); setProfileOpen(false); }}
                className="relative text-gray-300 hover:text-purple-400 transition"
              >
                <FaHeart className="text-lg" />
                {watchlist.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-purple-600 text-white text-[9px] rounded-full px-1.5">{watchlist.length}</span>
                )}
              </button>

              <AnimatePresence>
                {watchlistOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-800 rounded-xl shadow-xl w-56 z-[999]"
                  >
                    <h4 className="text-sm font-semibold text-purple-400 px-4 py-2 border-b border-gray-800">Your Watchlist</h4>
                    {watchlist.length > 0 ? (
                      <ul className="max-h-48 overflow-y-auto">
                        {watchlist.map((item) => (
                          <li key={item.id} className="flex items-center justify-between px-4 py-2 text-gray-300 text-sm hover:bg-purple-800 rounded-md mx-2 my-1 transition">
                            <Link
                              to={`/MovieDetails/${item.id}`}
                              onClick={() => setWatchlistOpen(false)}
                              className="truncate hover:text-purple-300"
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
                      <p className="text-gray-400 text-sm px-4 py-3 text-center">No movies yet.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative flex items-center space-x-2" ref={profileRef}>
              <button
                onClick={() => { setProfileOpen(!profileOpen); setWatchlistOpen(false); }}
                className="flex items-center text-gray-300 hover:text-pink-400 transition"
              >
                <FaUserCircle className="text-2xl" />
                {/* Name removed for now, will add later */}
                Profile
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden z-[999]"
                  >
                    <ul>
                      <li
                        onClick={() => { setProfileOpen(false); navigate("/profile"); }}
                        className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer rounded-md"
                      >
                        My Profile
                      </li>
                      <li
                        onClick={() => { setProfileOpen(false); navigate("/settings"); }}
                        className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer rounded-md"
                      >
                        Settings
                      </li>
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm text-gray-300 bg-red-800 hover:bg-red-900 cursor-pointer rounded-md"
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
      </header>
    </>
  );
}
