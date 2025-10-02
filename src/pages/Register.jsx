import { useState, useEffect } from "react";
import React from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [particles, setParticles] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", password);
    // 🔑 Later: send data to backend or Firebase
  };

  // --- Floating Movie/Anime Icons ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const icons = ["🎬", "🍿", "🧙‍♂️", "🦸‍♀️", "🐉", "⭐", "🪄", "⚔️"];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        emoji: randomIcon,
      };
      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-200 via-indigo-100 to-pink-100">
      {/* Floating icons */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-2xl animate-rise pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
            opacity: 0.8,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Form Container */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl p-8 sm:p-10 rounded-3xl w-full max-w-sm transition-transform hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">
          🎥 Join the Multiverse
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Create your account to explore your favorite Movies, Anime, and Series
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 shadow-sm"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 shadow-sm"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 shadow-sm"
            placeholder="Enter your password"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-[1.03] transition"
        >
          Register Now 🚀
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <a href="/" className="text-indigo-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>

      {/* Floating Animation */}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
        }
        .animate-rise {
          animation: rise 1.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
