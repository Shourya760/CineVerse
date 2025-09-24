import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PassModal from "../components/PassModal";
import somnathImg from "../assets/somnath.jpg";
import dwarkaImg from "../assets/dwarka.jpg";
import ambajiImg from "../assets/ambaji.jpg";
import pavagadhImg from "../assets/pavagadh.jpg";

const temples = [
  { id: 1, name: "Somnath Temple", image: somnathImg, description: "One of the twelve Jyotirlinga shrines of Shiva." },
  { id: 2, name: "Dwarkadhish Temple", image: dwarkaImg, description: "Dedicated to Lord Krishna in Dwarka." },
  { id: 3, name: "Ambaji Temple", image: ambajiImg, description: "A major Shakti Peeth of Goddess Amba." },
  { id: 4, name: "Pavagadh Temple", image: pavagadhImg, description: "Shakti Peeth atop a hill near Champaner." },
];

export default function TempleDetails() {
  const { id } = useParams();
  const temple = temples.find((t) => t.id === parseInt(id));
  const [modalOpen, setModalOpen] = useState(false);
  const [userPasses, setUserPasses] = useState(
    JSON.parse(localStorage.getItem("userPasses")) || []
  );

  const handleGeneratePass = (passDetails) => {
    const newPass = {
      id: "pass_" + Date.now(),
      templeId: temple.id,
      templeName: temple.name,
      ...passDetails,
      status: "active",
    };
    const updatedPasses = [...userPasses, newPass];
    setUserPasses(updatedPasses);
    localStorage.setItem("userPasses", JSON.stringify(updatedPasses));
    setModalOpen(false);
    alert(`Pass for ${temple.name} generated!`);
  };

  return (
    <div className="flex flex-col min-h-screen pt-14 bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50">
      <Header userPasses={userPasses} setUserPasses={setUserPasses} handleLogout={() => {}} />

      <div className="max-w-3xl mx-auto p-4 flex flex-col gap-6">
        {/* Temple Info */}
        <img src={temple.image} alt={temple.name} className="w-full rounded-xl shadow-md" />
        <h1 className="text-3xl font-bold text-indigo-800">{temple.name}</h1>
        <p className="text-gray-700 text-lg">{temple.description}</p>

        {/* Generate Pass Section */}
        <div
          onClick={() => setModalOpen(true)}
          className="border-2 border-purple-400 text-purple-700 font-semibold px-4 py-3 rounded-lg shadow-sm hover:bg-purple-50 transition cursor-pointer text-center text-lg"
        >
          Generate Pass for this Temple
        </div>
      </div>

      <Footer />

      {modalOpen && (
        <PassModal
          temple={temple}
          onClose={() => setModalOpen(false)}
          onSubmit={handleGeneratePass}
        />
      )}
    </div>
  );
}
