import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";
import somnathImg from "../assets/somnath.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TempleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleLogout = () => navigate("/login");

  const temples = [
    {
      id: "1",
      name: "Somnath Temple",
      image: somnathImg,
      description: "One of the twelve Jyotirlinga shrines of Shiva.",
      liveDarshanUrl:
        "https://www.youtube.com/live/ugQdBtfx_ks?si=8v1n9PqURv7dHDV1",
    },
    {
      id: "2",
      name: "Dwarkadhish Temple",
      image: dwarkaImg,
      description: "Dedicated to Lord Krishna in Dwarka.",
      liveDarshanUrl:
        "https://www.youtube.com/live/xvC-xZmiItU?si=VxKJXtpkdRfEsCx7",
    },
    {
      id: "3",
      name: "Ambaji Temple",
      image: ambajiImg,
      description: "A major Shakti Peeth of Goddess Amba.",
      liveDarshanUrl: "https://www.youtube.com/embed/P2-zdM-p9o4",
    },
    {
      id: "4",
      name: "Pavagadh Temple",
      image: pavagadhImg,
      description: "Shakti Peeth atop a hill near Champaner.",
      liveDarshanUrl: "https://www.somnath.org/live-darshan",
    },
  ];

  const temple = temples.find((t) => t.id === id);

  if (!temple) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-red-600">Temple not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 pt-16">
      {/* Header */}
      <Header handleLogout={handleLogout} currentTempleId={temple.id} />

      {/* Short Image Box */}
      <div className="max-w-3xl mx-auto mt-6">
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-56 object-cover rounded-xl shadow-lg border border-gray-200"
        />
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mt-4 text-indigo-700">
          {temple.name}
        </h1>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-6xl mx-auto p-6">
        <p className="mt-4 text-gray-700 text-lg text-center max-w-3xl mx-auto">
          {temple.description}
        </p>

        {/* Temple Features */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Existing features */}
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Live Crowd Status</h3>
            <p className="text-gray-600 mt-2">Integration with live API here...</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">VIP Pass Booking</h3>
            <button className="mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-indigo-700 hover:to-purple-700 transition">
              Book Now
            </button>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Nearby Places</h3>
            <p className="text-gray-600 mt-2">Hotels, Parking, Restaurants…</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Live Darshan</h3>
            <button
              onClick={() => window.open(temple.liveDarshanUrl, "_blank")}
              className="mt-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-green-600 hover:to-emerald-700 transition"
            >
              Watch Now
            </button>
          </div>

          {/* Future Features */}
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Donation System</h3>
            <p className="text-gray-600 mt-2">Offer donations securely online.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Festival Calendar</h3>
            <p className="text-gray-600 mt-2">Upcoming events & celebrations.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Emergency Contacts</h3>
            <p className="text-gray-600 mt-2">Police, Ambulance, Fire services nearby.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl border hover:shadow-xl transition">
            <h3 className="font-bold text-indigo-700 text-lg">Temple Timings</h3>
            <p className="text-gray-600 mt-2">Darshan, Aarti, and Closing times.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
