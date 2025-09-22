import React, { useState, useEffect } from "react";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";
import somnathImg from "../assets/somnath.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liveData, setLiveData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


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
      <Header handleLogout={handleLogout} />

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
      <Footer />
    </div>
  );
}
