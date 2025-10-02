import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-200 p-4">
      <h1 className="text-6xl font-bold mb-4 text-purple-400">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/home"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
