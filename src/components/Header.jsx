import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header({ handleLogout, currentTempleId }) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  // Map navigation
  const goToMap = () => {
    if (currentTempleId) navigate(`/map/${currentTempleId}`);
    else navigate("/map");
  };

  // Hide / Show header on scroll & close profile dropdown when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide header
        setIsVisible(false);
      } else {
        // scrolling up → show header & close dropdown
        setIsVisible(true);
        setProfileOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (action) => {
    setProfileOpen(false); // dropdown “goes up”
    action();
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 min-w-0 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain shrink-0 drop-shadow-md rounded-full border-2 border-white"
          />
          <span className="font-bold font-serif text-lg sm:text-xl tracking-wide drop-shadow-lg">
            Sudarshan
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <button
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("status")?.offsetTop - 70 || 0,
                behavior: "smooth",
              })
            }
            className="hover:text-yellow-100 transition transform hover:scale-105"
          >
            Contect
          </button>
          <button
            onClick={goToMap}
            className="hover:text-yellow-100 transition transform hover:scale-105"
          >
            Map View
          </button>
        </nav>

        {/* Profile & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Profile Dropdown */}
          <div className="relative hidden sm:block" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-50 transition"
            >
              Profile
              <svg
                className={`w-4 h-4 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {profileOpen && (
              <div
                className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-purple-100
                           transition-all duration-200 transform origin-top scale-100"
              >
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-50 transition"
                  onClick={() => handleItemClick(() => navigate("/profile"))}
                >
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-50 transition"
                  onClick={() => handleItemClick(() => navigate("/settings"))}
                >
                  Settings
                </button>
                <div className="h-px bg-gray-200 my-1"></div>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  onClick={() => handleItemClick(handleLogout)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2 rounded-lg hover:bg-white hover:text-purple-700 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-purple-700 px-4 py-3 space-y-2 rounded-b-xl shadow-lg">
          <button
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("status")?.offsetTop - 80 || 0,
                behavior: "smooth",
              })
            }
            className="block w-full text-left hover:text-purple-500 transition"
          >
            Live Crowd
          </button>
          <button
            onClick={goToMap}
            className="block w-full text-left hover:text-purple-500 transition"
          >
            Map View
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left hover:text-purple-500 transition"
          >
            Profile
          </button>
          <button
            onClick={() => navigate("/settings")}
            className="block w-full text-left hover:text-purple-500 transition"
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left text-red-600 hover:text-red-400 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
