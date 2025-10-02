import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Film, Calendar, Edit3, Save } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    favoriteGenre: "Action / Sci-Fi",
    joinedDate: "2025-10-05",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  const inputClass =
    "w-full bg-gray-900/80 text-gray-200 border border-purple-600/40 rounded-xl p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/70 to-black flex flex-col items-center justify-center p-6 text-white">
      <div className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 p-8 max-w-lg w-full relative overflow-hidden">
        
        {/* Decorative gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-pink-700/10 to-yellow-500/20 blur-3xl opacity-60"></div>

        {/* Profile Avatar */}
        <div className="flex flex-col items-center relative z-10">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold shadow-lg mb-4 border-4 border-purple-600">
            {formData.fullName.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
            {formData.fullName}
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            CineVerse Member since {formData.joinedDate}
          </p>
        </div>

        {/* Profile Info */}
        <div className="relative z-10">
          {isEditing ? (
            <form className="space-y-5" onSubmit={handleSave}>
              <div>
                <label className="block text-purple-400 font-semibold mb-1">
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
                <label className="block text-purple-400 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="block text-purple-400 font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-purple-400 font-semibold mb-1">
                  Favorite Genre
                </label>
                <input
                  type="text"
                  name="favoriteGenre"
                  value={formData.favoriteGenre}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 shadow-md"
                >
                  <Save className="w-4 h-4" /> Save
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{formData.fullName}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{formData.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{formData.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Film className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{formData.favoriteGenre}</span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Joined: {formData.joinedDate}</span>
              </p>

              <div className="flex justify-end mt-4">
                <button
                  onClick={handleEdit}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 shadow-md"
                >
                  <Edit3 className="w-4 h-4" /> Edit
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Go Back Home Button at the bottom
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg text-white transition-all"
          >
            <FaArrowLeft /> Go Back Home
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
