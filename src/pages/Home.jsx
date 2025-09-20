import React, { useState, useEffect } from "react";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";
import somnathImg from "../assets/somnath.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liveData, setLiveData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const temples = [
    { id: 1, name: "Somnath Temple", image: somnathImg, description: "One of the twelve Jyotirlinga shrines of Shiva." },
    { id: 2, name: "Dwarkadhish Temple", image: dwarkaImg, description: "Dedicated to Lord Krishna in Dwarka." },
    { id: 3, name: "Ambaji Temple", image: ambajiImg, description: "A major Shakti Peeth of Goddess Amba." },
    { id: 4, name: "Pavagadh Temple", image: pavagadhImg, description: "Shakti Peeth atop a hill near Champaner." },
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

  const handleLogout = () => navigate("/login");

  const statusColor = (status) => {
    switch (status) {
      case "Low": return "bg-green-400";
      case "Moderate": return "bg-yellow-400";
      case "High": return "bg-red-400";
      default: return "bg-gray-400";
    }
  };

  const TempleCard = ({ name, description, crowdStatus, waitTime, image }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-3 text-sm">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${statusColor(crowdStatus)}`}></span>
            <span>Crowd: <strong>{crowdStatus}</strong></span>
          </div>
          <span>Wait: <strong>{waitTime}</strong></span>
        </div>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-indigo-700 transition">
          View Details
        </button>
      </div>
    </div>
  );

  const displayTemples = liveData || temples;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white flex justify-between items-center p-4 shadow">
        <h1 className="text-2xl font-bold text-indigo-700">Darshan</h1>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {/* Hero */}
      <section className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden">
        <img
          src={temples[currentImageIndex].image}
          alt={temples[currentImageIndex].name}
          className="absolute w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">{temples[currentImageIndex].name}</h2>
          <p className="text-gray-200 mt-2 text-sm sm:text-base">{temples[currentImageIndex].description}</p>
        </div>
      </section>

      {/* Live Status */}
      <section className="py-8 px-4 max-w-5xl mx-auto w-full">
        <h3 className="text-2xl font-bold text-indigo-700 text-center mb-6">Live Temple Status</h3>
        {isLoading ? (
          <p className="text-center text-gray-500 animate-pulse">Loading live data...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayTemples.map((temple) => (
              <TempleCard key={temple.id} {...temple} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white text-center py-4 mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} Team "AXON". All Rights Reserved.</p>
      </footer>
    </div>
  );
}
