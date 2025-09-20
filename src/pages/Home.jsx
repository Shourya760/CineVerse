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

    // Temple data
    const initialTemples = [
        { id: 1, name: "Somnath Temple", image: somnathImg, description: "One of the twelve Jyotirlinga shrines of Shiva." },
        { id: 2, name: "Dwarkadhish Temple", image: dwarkaImg, description: "Dedicated to Lord Krishna in Dwarka." },
        { id: 3, name: "Ambaji Temple", image: ambajiImg, description: "A major Shakti Peeth of Goddess Amba." },
        { id: 4, name: "Pavagadh Temple", image: pavagadhImg, description: "Shakti Peeth atop a hill near Champaner." },
    ];

    const heroImages = initialTemples.map((temple) => temple.image);

    // Hero carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    // Simulate live data updates
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await new Promise((res) => setTimeout(res, 2000));
            const newData = initialTemples.map((temple) => {
                const statuses = ["Low", "Moderate", "High"];
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                const wait = `${Math.floor(Math.random() * 30) + 5} mins`;
                return { ...temple, crowdStatus: status, waitTime: wait };
            });
            setLiveData(newData);
            setIsLoading(false);
        };

        fetchData();
        const interval = setInterval(fetchData, 25000);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        // You would typically clear user session data here
        console.log("Logging out...");
        navigate('/login'); // Navigate to the login page
    };

    // Temple card component
    const TempleCard = ({ name, description, waitTime, crowdStatus, image }) => {
        const statusColor = (status) => {
            switch (status) {
                case "Low":
                    return "bg-green-500";
                case "Moderate":
                    return "bg-yellow-500";
                case "High":
                    return "bg-red-500";
                default:
                    return "bg-gray-400";
            }
        };

        return (
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative">
                    <img src={image} alt={name} className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 py-2 text-center">
                        <h3 className="text-sm font-bold text-gray-800">{name}</h3>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between text-sm font-medium mb-2">
                        <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full ${statusColor(crowdStatus)}`}></span>
                            <span className="text-gray-700">Crowd: <span className="font-semibold">{crowdStatus}</span></span>
                        </div>
                        <span className="text-gray-500">Wait: <span className="text-gray-700 font-semibold">{waitTime}</span></span>
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        View Details
                    </button>
                </div>
            </div>
        );
    };

    const templesToRender = liveData || initialTemples;

    return (
        <div className="font-sans bg-blue-50 text-gray-800 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-white text-gray-800 shadow-sm flex justify-between items-center px-6 py-4 md:px-12 md:py-4">
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">Darshan</h1>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </header>

            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-center items-center overflow-hidden bg-blue-100 p-0">
                <div className="absolute inset-0 z-0 overflow-hidden shadow-xl rounded-b-3xl"> 
                    <img
                        src={initialTemples[currentImageIndex].image}
                        alt={initialTemples[currentImageIndex].name}
                        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
                    />
                </div>

                {/* Overlay with text */}
                <div className="relative z-10 text-white text-center p-6 max-w-xl mx-auto"> 
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_70%)]">
                        {initialTemples[currentImageIndex].name}
                    </h2>
                    <p className="mt-4 text-sm md:text-xl [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
                        {initialTemples[currentImageIndex].description}
                    </p>
                </div>
            </section>

            {/* Live Status Section */}
            <section className="relative z-20 -mt-3 bg-white py-12 px-4 md:px-8 rounded-3xl shadow-2xl mx-auto max-w-5xl"> {/* Adjusted -mt-16 to -mt-8 */}
                <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10">
                    Live Temple Status
                </h3>
                {isLoading ? (
                    <div className="text-center py-8 text-lg text-gray-500 animate-pulse">Loading live data...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {templesToRender.map((temple) => (
                            <TempleCard key={temple.id} {...temple} />
                        ))}
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="bg-indigo-900 text-white text-center py-6 mt-auto">
                <p className="text-sm">© {new Date().getFullYear()} A Work By Team "AXON" All Rights Reserved.</p>
            </footer>
        </div>
    );
}