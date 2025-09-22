import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header({ handleLogout, currentTempleId }) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Map navigation
  const goToMap = () => {
    if (currentTempleId) navigate(`/map/${currentTempleId}`);
    else navigate("/map"); // Default Gujarat
  };

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 min-w-0 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img src={logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0 drop-shadow-lg" />
          <span className="font-bold font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl truncate">Sudarshan</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <button
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("status")?.offsetTop - 80 || 0,
                behavior: "smooth",
              })
            }
            className="hover:text-yellow-300 transition"
          >
            Live Crowd
          </button>
          <button onClick={goToMap} className="hover:text-yellow-300 transition">
            Map View
          </button>
        </nav>

        {/* Profile & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Profile Dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-900 px-3 py-2 rounded-full transition"
            >
              <span className="font-semibold text-white">Profile</span>
              <svg
                className={`w-4 h-4 text-white transition-transform ${profileOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                  onClick={() => navigate("/settings")}
                >
                  Settings
                </button>
                <div className="h-px bg-gray-200 my-1"></div>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2 rounded-lg hover:bg-indigo-800 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-800 text-white px-4 py-3 space-y-2">
          <button
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("status")?.offsetTop - 80 || 0,
                behavior: "smooth",
              })
            }
            className="block w-full text-left hover:text-yellow-300 transition"
          >
            Live Crowd
          </button>
          <button onClick={goToMap} className="block w-full text-left hover:text-yellow-300 transition">
            Map View 
          </button>
          <button onClick={() => navigate("/profile")} className="block w-full text-left hover:text-yellow-300 transition">
            Profile
          </button>
          <button onClick={() => navigate("/settings")} className="block w-full text-left hover:text-yellow-300 transition">
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left text-red-300 hover:text-red-400 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
