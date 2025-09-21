import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";
import somnathImg from "../assets/somnath.jpg";

export default function TempleDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Same temple list as Home
    const temples = [
        { id: "1", name: "Somnath Temple", image: somnathImg, description: "One of the twelve Jyotirlinga shrines of Shiva." },
        { id: "2", name: "Dwarkadhish Temple", image: dwarkaImg, description: "Dedicated to Lord Krishna in Dwarka." },
        { id: "3", name: "Ambaji Temple", image: ambajiImg, description: "A major Shakti Peeth of Goddess Amba." },
        { id: "4", name: "Pavagadh Temple", image: pavagadhImg, description: "Shakti Peeth atop a hill near Champaner." },
    ];

    const temple = temples.find((t) => t.id === id);

    if (!temple) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold text-red-600">Temple not found</h2>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="bg-indigo-800 text-white p-4 shadow-md">
                <h1 className="text-2xl font-bold">{temple.name}</h1>
            </header>

            <main className="flex-1 max-w-5xl mx-auto p-6">
                <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-80 object-cover rounded-xl shadow-md"
                />
                <h2 className="text-3xl font-bold mt-6 text-indigo-700">{temple.name}</h2>
                <p className="mt-4 text-gray-700 text-lg">{temple.description}</p>

                {/* Example temple features */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-5 bg-white shadow rounded-xl">
                        <h3 className="font-semibold text-lg">Live Crowd Status</h3>
                        <p className="text-gray-600 mt-2">Integration with live API here...</p>
                    </div>
                    <div className="p-5 bg-white shadow rounded-xl">
                        <h3 className="font-semibold text-lg">VIP Pass Booking</h3>
                        <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                            Book Now
                        </button>
                    </div>
                    <div className="p-5 bg-white shadow rounded-xl">
                        <h3 className="font-semibold text-lg">Nearby Places</h3>
                        <p className="text-gray-600 mt-2">Hotels, Parking, Restaurants…</p>
                    </div>
                    <div className="p-5 bg-white shadow rounded-xl">
                        <h3 className="font-semibold text-lg">Live Darshan</h3>
                        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg">
                            Watch Now
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-indigo-900 text-white text-center py-4">
                <p>© {new Date().getFullYear()} Sudarshan</p>
            </footer>
        </div>
    );
}
