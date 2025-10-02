// Footer.js
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-950 text-gray-400 py-6 px-3 sm:py-8 sm:px-6 md:py-10 md:px-16 border-t border-purple-600/20 text-[11px] sm:text-[13px] md:text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 sm:gap-6 md:gap-10">
        {/* About */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[13px] sm:text-[15px] mb-1.5 sm:mb-2">
            About CineVerse
          </h3>
          <p className="leading-snug text-gray-300 text-[11px] sm:text-[13px]">
            CineVerse is your world of{" "}
            <span className="text-pink-400">Movies</span>,{" "}
            <span className="text-yellow-400">Series</span>, and{" "}
            <span className="text-purple-400">Anime</span>. Explore, track, and
            fall in love with cinematic universes again.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[13px] sm:text-[15px] mb-1.5 sm:mb-2">
            Explore
          </h3>
          <ul className="space-y-1 sm:space-y-1.5">
            {["Movies", "Series", "Anime", "Watchlist", "Profile"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-pink-400 transition duration-200 text-[11px] sm:text-[13px]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[13px] sm:text-[15px] mb-1.5 sm:mb-2">
            Connect
          </h3>
          <div className="flex space-x-1.5 sm:space-x-2 mt-1 sm:mt-2">
            {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-1 sm:p-1.5 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition"
              >
                <Icon className="text-white text-[10px] sm:text-xs md:text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[13px] sm:text-[15px] mb-1.5 sm:mb-2">
            Stay Updated
          </h3>
          <p className="text-[11px] sm:text-[13px] mb-2">
            Get notified about new releases and trending titles.
          </p>
          <div className="flex space-x-1 sm:space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800 rounded-md text-gray-200 text-[11px] sm:text-[13px] w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[11px] sm:text-[13px] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-3 sm:pt-4 text-center text-[10px] sm:text-[12px] text-gray-500">
        © 2025 <span className="text-purple-400 font-semibold">CineVerse</span> • Made with love by Shourya Verma
      </div>
    </footer>
  );
}
