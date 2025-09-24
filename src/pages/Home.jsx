import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";
import somnathImg from "../assets/somnath.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liveData, setLiveData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userPasses, setUserPasses] = useState(
    JSON.parse(localStorage.getItem("userPasses")) || []
  );

  const temples = [
    { id: 1, name: "Somnath Temple", image: somnathImg, description: "One of the twelve Jyotirlinga shrines of Shiva." },
    { id: 2, name: "Dwarkadhish Temple", image: dwarkaImg, description: "Dedicated to Lord Krishna in Dwarka." },
    { id: 3, name: "Ambaji Temple", image: ambajiImg, description: "A major Shakti Peeth of Goddess Amba." },
    { id: 4, name: "Pavagadh Temple", image: pavagadhImg, description: "Shakti Peeth atop a hill near Champaner." },
  ];

  const handleLogout = () => navigate("/login");

  // Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % temples.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Live data simulation
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((res) => setTimeout(res, 1500));
      const newData = temples.map((temple) => {
        const statuses = ["Low", "Moderate", "High"];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
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

  const statusColor = (status) => {
    switch (status) {
      case "Low": return "bg-green-100 text-green-700 border border-green-400";
      case "Moderate": return "bg-yellow-100 text-yellow-700 border border-yellow-400";
      case "High": return "bg-red-100 text-red-700 border border-red-400";
      default: return "bg-gray-200 text-gray-700 border border-gray-400";
    }
  };

  const TempleCard = ({ id, name, description, crowdStatus, waitTime, image }) => (
    <div
      className="bg-white rounded-2xl border border-indigo-200 shadow-md overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-400 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/temple/${id}`)}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover transform hover:scale-110 transition duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-extrabold text-indigo-800 text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-xs sm:text-sm">
          <span className={`px-3 py-1 rounded-full font-medium ${statusColor(crowdStatus)}`}>
            Crowd: {crowdStatus}
          </span>
          <span className="text-gray-700">Wait: <strong>{waitTime}</strong></span>
        </div>
      </div>
    </div>
  );

  const displayTemples = liveData || temples;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50 pt-14">
      <Header userPasses={userPasses} setUserPasses={setUserPasses} handleLogout={handleLogout} />

      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] overflow-hidden">
        <img
          key={currentImageIndex}
          src={temples[currentImageIndex].image}
          alt={temples[currentImageIndex].name}
          className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-pulse">
            {temples[currentImageIndex].name}
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-200 text-sm sm:text-lg md:text-xl max-w-2xl drop-shadow">
            {temples[currentImageIndex].description}
          </p>
        </div>
      </section>

      {/* Temple Cards */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-700 mb-4">
          Select a Temple
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {displayTemples.map((temple) => (
            <TempleCard key={temple.id} {...temple} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
