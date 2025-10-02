// Footer.js
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-[11px] sm:text-[12px] py-4 px-4 sm:px-6 border-t border-purple-600/30 rounded-t-md">
      {/* About Section */}
      <div className="mb-3">
        <h3 className="text-purple-400 font-semibold text-sm mb-1">CineVerse</h3>
        <p className="text-gray-400 text-[10px] leading-snug">
          Your hub for <span className="text-pink-400">Movies</span>, <span className="text-yellow-400">Series</span>, and <span className="text-purple-400">Anime</span>. Track, explore, and enjoy cinematic universes on the go.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-3 flex flex-wrap gap-2">
        {["Movies", "Series", "Anime", "Watchlist", "Profile"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-400 text-[10px] px-2 py-1 bg-gray-800 hover:bg-purple-700 rounded transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="mb-3 flex space-x-2">
        {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="p-2 bg-gray-800 rounded hover:bg-purple-700 transition"
          >
            <Icon className="text-white text-[12px]" />
          </a>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mb-3">
        <p className="text-gray-400 text-[10px] mb-1">Subscribe for updates:</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-2 py-1 text-gray-200 bg-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-purple-500 text-[10px]"
          />
          <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-[10px]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-2 text-center text-gray-500 text-[9px]">
        © 2025 <span className="text-purple-400 font-semibold">CineVerse</span> • Made with ❤️ by Shourya Verma
      </div>
    </footer>
  );
}
