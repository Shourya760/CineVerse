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
          className="absolute top-full left-0 w-full bg-gray-800 text-white border border-gray-700 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto"
        >
          {results.map((item) => (
            <Link
              key={item.id}
              to={`/MovieDetails/${item.id}`}
              onClick={onSelect}
              className="block px-4 py-3 hover:bg-yellow-600/20 transition truncate rounded-md mx-2 my-1"
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-gray-300 text-sm ml-2">({item.type})</span>
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
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/home"
              className="flex items-center space-x-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-2xl sm:text-3xl md:text-4xl"
            >
              <span>CineVerse</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:flex relative flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Search movies, series, anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 md:py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <SearchDropdown results={searchResults} onSelect={() => setSearchQuery("")} />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">

            {/* Mobile Search */}
            <div className="sm:hidden relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                <FaSearch className="text-lg" />
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-0 left-0 w-full px-4 pt-4 z-50 bg-gray-900 shadow-md"
                  >
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Search movies, series, anime..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        className="ml-2 text-gray-400 hover:text-white transition"
                      >
                        ✕
                      </button>
                    </div>

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
              className="relative text-gray-300 hover:text-yellow-500 transition"
            >
              <FaBell className="text-lg" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[9px] rounded-full px-1.5"></span>
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
                    className="absolute top-full right-0 mt-2 bg-gray-800 text-white border border-gray-700 rounded-xl shadow-lg w-56 z-[999]"
                  >
                    <h4 className="text-sm font-semibold text-yellow-400 px-4 py-2 border-b border-gray-700">Your Watchlist</h4>
                    {watchlist.length > 0 ? (
                      <ul className="max-h-48 overflow-y-auto">
                        {watchlist.map((item) => (
                          <li key={item.id} className="flex items-center justify-between px-4 py-2 hover:bg-yellow-500/20 rounded-md mx-2 my-1 transition">
                            <Link
                              to={`/MovieDetails/${item.id}`}
                              onClick={() => setWatchlistOpen(false)}
                              className="truncate"
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
                      <p className="text-gray-300 text-sm px-4 py-3 text-center">No movies yet.</p>
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
                <span className="hidden sm:inline ml-1 text-sm">{user?.name || "Profile"}</span>
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-gray-800 text-white border border-gray-700 rounded-xl shadow-lg overflow-hidden z-[999]"
                  >
                    <ul>
                      <li
                        onClick={() => { setProfileOpen(false); navigate("/profile"); }}
                        className="px-4 py-2 text-sm hover:bg-yellow-500/20 cursor-pointer rounded-md"
                      >
                        My Profile
                      </li>
                      <li
                        onClick={() => { setProfileOpen(false); navigate("/settings"); }}
                        className="px-4 py-2 text-sm hover:bg-yellow-500/20 cursor-pointer rounded-md"
                      >
                        Settings
                      </li>
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 cursor-pointer rounded-md"
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
