// Footer.js
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-950 text-gray-400 py-10 px-6 md:px-16 relative border-t border-purple-600/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-purple-400 font-bold text-lg mb-3">About CineVerse</h3>
          <p className="text-sm leading-relaxed">
            CineVerse is your world of <span className="text-pink-400">Movies</span>,{" "}
            <span className="text-yellow-400">Series</span>, and{" "}
            <span className="text-purple-400">Anime</span>. Explore, track, and
            fall in love with cinematic universes again.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-purple-400 font-bold text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            {["Movies", "Series", "Anime", "Watchlist", "Profile"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-pink-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-purple-400 font-bold text-lg mb-3">Connect</h3>
          <div className="flex space-x-3 mt-3">
            {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition"
              >
                <Icon className="text-white text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-purple-400 font-bold text-lg mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Get notified about new releases and trending titles.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-gray-800 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-semibold px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs md:text-sm text-gray-500">
        © 2025 <span className="text-purple-400 font-semibold">CineVerse</span> • All Rights Reserved
      </div>
    </footer>
  );
}