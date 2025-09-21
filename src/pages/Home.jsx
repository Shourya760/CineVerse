import React, { useState, useEffect } from "react";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";
import somnathImg from "../assets/somnath.jpg";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liveData, setLiveData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const temples = [
    {
      id: 1,
      name: "Somnath Temple",
      image: somnathImg,
      description: "One of the twelve Jyotirlinga shrines of Shiva.",
    },
    {
      id: 2,
      name: "Dwarkadhish Temple",
      image: dwarkaImg,
      description: "Dedicated to Lord Krishna in Dwarka.",
    },
    {
      id: 3,
      name: "Ambaji Temple",
      image: ambajiImg,
      description: "A major Shakti Peeth of Goddess Amba.",
    },
    {
      id: 4,
      name: "Pavagadh Temple",
      image: pavagadhImg,
      description: "Shakti Peeth atop a hill near Champaner.",
    },
  ];

  // Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % temples.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [temples.length]);

  // Live data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((res) => setTimeout(res, 1500));
      const newData = temples.map((temple) => {
        const statuses = ["Low", "Moderate", "High"];
        const status =
          statuses[Math.floor(Math.random() * statuses.length)];
        const wait = `${Math.floor(Math.random() * 30) + 5} mins`;
        return { ...temple, crowdStatus: status, waitTime: wait };
      });
      setLiveData(newData);
      setIsLoading(false);
    };
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => navigate("/login");
  const handleSelectTemple = (id) => navigate(`/temple/${id}`);

  const statusColor = (status) => {
    switch (status) {
      case "Low":
        return "bg-green-500";
      case "Moderate":
        return "bg-yellow-400";
      case "High":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const TempleCard = ({
    id,
    name,
    description,
    crowdStatus,
    waitTime,
    image,
  }) => (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => handleSelectTemple(id)}
    >
      <img src={image} alt={name} className="w-full h-44 object-cover" />
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span
              className={`h-3 w-3 rounded-full ${statusColor(crowdStatus)}`}
            ></span>
            <span>
              Crowd: <strong>{crowdStatus}</strong>
            </span>
          </div>
          <span>
            Wait: <strong>{waitTime}</strong>
          </span>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Select Temple
        </button>
      </div>
    </div>
  );

  const displayTemples = liveData || temples;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo + Site Name */}
          <div
            className="flex items-center gap-2 min-w-0 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0 drop-shadow-lg"
            />
            <span className="font-bold font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl truncate">
              Sudarshan
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 font-medium text-sm">
            <button
              onClick={() =>
                window.scrollTo({
                  top:
                    document.getElementById("status").offsetTop - 80,
                  behavior: "smooth",
                })
              }
              className="hover:text-yellow-300 transition"
            >
              Live Crowd
            </button>
            <button
              onClick={() => navigate("/map")}
              className="hover:text-yellow-300 transition"
            >
              Map View
            </button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Profile Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-900 px-3 py-2 rounded-full transition"
              >
                <span className="font-semibold text-white">Profile</span>
                <svg
                  className={`w-4 h-4 text-white transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </button>
                  <div className="h-px bg-gray-200 my-1"></div>
                  <button
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center p-2 rounded-lg hover:bg-indigo-800 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-indigo-800 text-white px-4 py-3 space-y-2">
            <button
              onClick={() =>
                window.scrollTo({
                  top:
                    document.getElementById("status").offsetTop - 80,
                  behavior: "smooth",
                })
              }
              className="block w-full text-left hover:text-yellow-300 transition"
            >
              Live Crowd
            </button>
            <button
              onClick={() => navigate("/map")}
              className="block w-full text-left hover:text-yellow-300 transition"
            >
              Map View
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="block w-full text-left hover:text-yellow-300 transition"
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/settings")}
              className="block w-full text-left hover:text-yellow-300 transition"
            >
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left text-red-300 hover:text-red-400 transition"
            >
              Logout
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] overflow-hidden">
        <img
          key={currentImageIndex}
          src={temples[currentImageIndex].image}
          alt={temples[currentImageIndex].name}
          className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {temples[currentImageIndex].name}
          </h2>
          <p className="mt-3 sm:mt-5 text-gray-200 text-sm sm:text-lg md:text-xl max-w-xl drop-shadow">
            {temples[currentImageIndex].description}
          </p>
          <button
            onClick={() =>
              handleSelectTemple(temples[currentImageIndex].id)
            }
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Select Temple
          </button>
        </div>
      </section>

      {/* Temple Cards */}
      <section
        id="status"
        className="py-12 px-4 sm:px-6 max-w-6xl mx-auto w-full"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center mb-10">
          Select a Temple
        </h3>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {temples.map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md h-64 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {displayTemples.map((temple) => (
              <TempleCard key={temple.id} {...temple} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white text-center py-6 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Team "AXON". All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
