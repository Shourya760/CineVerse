import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 relative">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"></div>

      {/* -------- Desktop -------- */}
      <div className="hidden md:grid grid-cols-4 gap-10 text-left">
        {/* About */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-3">About</h3>
          <p className="text-sm leading-relaxed">
            This platform is developed by{" "}
            <span className="text-purple-400 font-medium">
              Axon Software Pvt. Ltd.
            </span>{" "}
            for the{" "}
            <span className="text-yellow-400 font-medium">
              Government of Gujarat
            </span>{" "}
            to provide real-time information and services related to major
            temples.
          </p>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "About",
              "Meet Our Team",
              "Terms & Conditions",
              "Privacy Policy",
              "Refund Policy",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-purple-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-3">
            Helpful
          </h3>
          <p className="text-sm">📞 909 909 10 42</p>
          <p className="text-sm mb-4">📧 axon.creation@gmail.com</p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-cyan-500 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="bg-blue-600 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="bg-pink-500 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              className="bg-red-600 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-3">
            Subscribe
          </h3>
          <p className="text-sm mb-2 text-gray-400">
            Get updates in your inbox!
          </p>
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-semibold py-2 px-6 rounded-md text-sm shadow">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* -------- Mobile -------- */}
      <div className="md:hidden flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-cyan-500 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <FaTwitter className="text-white text-sm" />
          </a>
          <a
            href="#"
            className="bg-blue-600 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <FaFacebookF className="text-white text-sm" />
          </a>
          <a
            href="#"
            className="bg-pink-500 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <FaInstagram className="text-white text-sm" />
          </a>
          <a
            href="#"
            className="bg-red-600 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <FaYoutube className="text-white text-sm" />
          </a>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center text-xs text-gray-400 gap-4">
          <li>
            <a href="#" className="hover:text-purple-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs md:text-sm">
        <p>
          © 2025{" "}
          <span className="text-yellow-400">Government of Gujarat</span>
        </p>
        <p>
          Built by{" "}
          <span className="text-purple-400">Axon Software Pvt. Ltd.</span>
        </p>
      </div>
    </footer>
  );
}
