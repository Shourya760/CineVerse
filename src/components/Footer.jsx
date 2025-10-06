// Footer.js
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-[14px] sm:text-[15px] py-4 px-4 sm:px-6 border-t border-yellow-600/40 rounded-t-md">
      {/* About Section */}
      <div className="mb-3">
        <h3 className="text-yellow-400 font-bold text-sm mb-1">CineVerse</h3>
        <p className="text-gray-400 text-[11px] leading-snug">
          Your hub for <span className="text-pink-400 font-medium">Movies</span>,{" "}
          <span className="text-yellow-400 font-medium">Series</span>, and{" "}
          <span className="text-purple-400 font-medium">Anime</span>. Explore the
          cinematic universe — anytime, anywhere.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-3 flex flex-wrap gap-2">
        {["Movies", "Series", "Anime", "Watchlist", "Profile"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-300 text-[11px] px-2 py-1 bg-gray-800/70 hover:bg-yellow-500 hover:text-black rounded transition-all duration-200"
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
            className="p-2 bg-gray-800 rounded hover:bg-yellow-500 transition-all duration-200"
          >
            <Icon className="text-white text-[13px]" />
          </a>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mb-3">
        <p className="text-gray-400 text-[11px] mb-1">Subscribe for updates:</p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-2 py-1 text-gray-200 bg-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 text-[11px]"
          />
          <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded text-[11px] transition-all duration-200">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-2 text-center text-gray-500 text-[10px]">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">CineVerse</span> • Made with ❤️ by{" "}
        <span className="text-gray-300 font-medium">Shourya Verma</span>
      </div>
    </footer>
  );
}
