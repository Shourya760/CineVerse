// Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import PassCard from "./PassCard";
import { toPng } from "html-to-image";

export default function Header({ userPasses, setUserPasses, handleLogout }) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [passesOpen, setPassesOpen] = useState(false);

  const downloadPass = (passId) => {
    const node = document.getElementById(`pass-${passId}`);
    if (!node) return;

    toPng(node, { cacheBust: true, backgroundColor: "#F3E8FF" })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Pass_${passId}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Failed to download pass:", err));
  };

  const cancelPass = (passId) => {
    if (window.confirm("Are you sure you want to cancel this pass?")) {
      const updated = userPasses.filter((p) => p.id !== passId);
      setUserPasses(updated);
      localStorage.setItem("userPasses", JSON.stringify(updated));
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full border-2 border-white"
          />
          <span className="font-bold text-xl tracking-wide drop-shadow-lg">
            Sudarshan
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <button
            onClick={() => navigate("/map")}
            className="hover:text-yellow-100 transition transform hover:scale-105"
          >
            Map View
          </button>
        </nav>

        {/* Passes */}
        {/* Passes & Profile */}
        <div className="flex items-center gap-3 relative">
          {/* Passes Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPassesOpen(!passesOpen)}
              className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-50 transition"
            >
              My Passes
              <svg
                className={`w-4 h-4 transition-transform ${passesOpen ? "rotate-180" : ""
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

            {passesOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl overflow-auto max-h-96 z-50 border border-purple-100 p-4 flex flex-col gap-3">
                {userPasses.length === 0 ? (
                  <div className="text-gray-500 text-center">No passes yet</div>
                ) : (
                  userPasses.map((pass) => (
                    <div
                      key={pass.id}
                      className="flex items-center justify-between border-b last:border-b-0 pb-2"
                    >
                      <span className="text-gray-800 font-medium">
                        {pass.templeName}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => downloadPass(pass.id)}
                          className="bg-purple-600 text-white px-2 py-1 rounded text-sm hover:bg-purple-700 transition"
                        >
                          Download
                        </button>
                        <button
                          onClick={() => cancelPass(pass.id)}
                          className="bg-red-600 text-white px-2 py-1 rounded text-sm hover:bg-red-700 transition"
                        >
                          Cancel
                        </button>
                      </div>

                      {/* Hidden pass for download */}
                      <div className="hidden">
                        <PassCard pass={pass} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-purple-50 transition"
            >
              Profile
              <svg
                className={`w-4 h-4 transition-transform ${profileOpen ? "rotate-180" : ""
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
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-purple-100">
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-50 transition"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
