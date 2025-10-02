import { useState, useEffect, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const nameRefs = useRef([]);

  const floatingNames = [
    "Naruto", "One Piece", "Demon Slayer", "Attack on Titan", "Bleach",
    "Jujutsu Kaisen", "Death Note", "Dragon Ball", "Chainsaw Man", "Spy x Family",
    "Avengers", "Batman", "Iron Man", "Harry Potter", "Friends",
    "Breaking Bad", "Stranger Things", "The Boys", "Game of Thrones",
    "Naruto", "One Piece", "Bleach", "Avengers", "Dragon Ball",
  ];

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth cursor-based floating
  useEffect(() => {
    const interval = setInterval(() => {
      nameRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = cursor.x - (rect.left + rect.width / 2);
        const dy = cursor.y - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const moveX = -Math.cos(angle) * 2; // smaller distance
          const moveY = -Math.sin(angle) * 2;

          el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.01)`;
          el.style.transition = "transform 3s ease-out"; // slow and smooth
        } else {
          el.style.transform = `translate(0px, 0px)`;
          el.style.transition = "transform 6s ease-in-out"; // gentle floating
        }
      });
    }, 400); // slower interval
    return () => clearInterval(interval);
  }, [cursor]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    navigate("/home");
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-100 to-yellow-100 px-4">
      {/* Floating names background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingNames.map((name, i) => (
          <span
            key={i}
            ref={(el) => (nameRefs.current[i] = el)}
            className="absolute text-indigo-600 font-semibold text-xs sm:text-sm opacity-40 select-none floating-name"
            style={{
              top: `${Math.random() * 90 + 2}%`,
              left: `${Math.random() * 90 + 2}%`,
              animation: `float${i % 3} ${15 + (i % 5) * 2}s ease-in-out infinite`,
            }}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-sm border-t-4 border-indigo-600"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700 drop-shadow-md">
          Welcome Back
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition shadow-sm"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition shadow-sm"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-xl font-bold shadow-md hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </form>

      {/* Slower floating animations */}
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(2px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(4px); }
        }
        .floating-name {
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation-duration: 18s;
        }
      `}</style>
    </div>
  );
}
