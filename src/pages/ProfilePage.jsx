import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Phone, Film, Calendar, Edit3, Save } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";

const ProfilePage = () => {
  const navigate = useNavigate();

  // ✅ Get user from localStorage
  const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // ✅ Redirect to login if no user found
  useEffect(() => {
    if (!savedUser) {
      navigate("/login");
    }
  }, [navigate, savedUser]);

  // ✅ Set initial form data from logged-in user
  const [formData, setFormData] = useState(savedUser || {});
  const [isEditing, setIsEditing] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // ✅ Update localStorage when saved
  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    localStorage.setItem("loggedInUser", JSON.stringify(formData));
    alert("✅ Profile updated successfully!");
  };

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (-y / height) * 15;
    const rotateY = (x / width) * 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  const inputClass =
    "w-full bg-black/60 text-gray-200 border border-purple-600/40 rounded-xl p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm sm:text-base";

  // ✅ Handle case when savedUser is missing
  if (!formData.fullName) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-950 to-purple-950 p-4 sm:p-8 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.15),_transparent_70%),_radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),_transparent_70%)]"></div>

      {/* Motion card */}
      <motion.div
        className="relative z-10 w-full max-w-md sm:max-w-lg bg-black/70 backdrop-blur-xl border border-purple-600/30 rounded-3xl shadow-[0_0_25px_rgba(168,85,247,0.3)] p-6 sm:p-10 transition-all duration-300"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-pink-400 transition text-xs sm:text-sm"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 mt-4">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white shadow-lg ring-4 ring-purple-500/30">
            {formData.fullName?.charAt(0)?.toUpperCase()}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-xl"></div>
          </div>
          <h1 className="mt-3 text-2xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-lg text-center">
            {formData.fullName}
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center">
            Logged in as <span className="text-pink-400">{formData.email}</span>
          </p>
        </div>

        {/* Profile Info / Edit Form */}
        <div className="bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 rounded-2xl border border-purple-700/40 p-4 sm:p-6 shadow-inner">
          {isEditing ? (
            <form className="space-y-3 sm:space-y-5" onSubmit={handleSave}>
              <div>
                <label className="block text-purple-400 font-semibold mb-1 text-xs sm:text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-purple-400 font-semibold mb-1 text-xs sm:text-sm">
                  Email (read-only)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className={`${inputClass} opacity-70 cursor-not-allowed`}
                />
              </div>
              <div>
                <label className="block text-purple-400 font-semibold mb-1 text-xs sm:text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-purple-400 font-semibold mb-1 text-xs sm:text-sm">
                  Favorite Genre
                </label>
                <input
                  type="text"
                  name="favoriteGenre"
                  value={formData.favoriteGenre || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 shadow-md text-xs sm:text-base"
                >
                  <Save className="w-4 h-4" /> Save
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3 sm:space-y-5 text-xs sm:text-base">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-300 break-all">
                <User className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" /> {formData.fullName}
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-300 break-all">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" /> {formData.email}
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" /> {formData.phone || "—"}
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                <Film className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" /> {formData.favoriteGenre || "—"}
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" /> Joined on {formData.joinedDate}
              </div>

              <div className="flex justify-end pt-3">
                <button
                  onClick={handleEdit}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 shadow-md text-xs sm:text-base"
                >
                  <Edit3 className="w-4 h-4" /> Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
