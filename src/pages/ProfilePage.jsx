import React, { useState } from "react";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    templeName: "Sri Krishna Temple",
    visitDate: "2025-10-05",
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
    "w-full border border-gray-300 rounded-lg p-3 focus:ring-4 focus:ring-green-400 focus:border-green-500 outline-none transition-shadow shadow-sm hover:shadow-md";

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Your Profile
        </h1>

        {isEditing ? (
          <form className="space-y-4" onSubmit={handleSave}>
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
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
              <label className="block font-semibold mb-1">Email</label>
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
              <label className="block font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transform transition"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <p>
              <span className="font-semibold text-green-700">Name:</span>{" "}
              {formData.fullName}
            </p>
            <p>
              <span className="font-semibold text-green-700">Email:</span>{" "}
              {formData.email}
            </p>
            <p>
              <span className="font-semibold text-green-700">Phone:</span>{" "}
              {formData.phone || "-"}
            </p>
            <p>
              <span className="font-semibold text-green-700">Temple:</span>{" "}
              {formData.templeName}
            </p>
            <p>
              <span className="font-semibold text-green-700">Visit Date:</span>{" "}
              {formData.visitDate}
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleEdit}
                className="bg-yellow-400 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transform transition"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
