// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Film, Tv, Zap } from "lucide-react";
import moviesData from "../data/moviesData";

const Home = () => {
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [genre, setGenre] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    setContent(moviesData);
    setFilteredContent(moviesData);

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % moviesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let updated = [...content];
    if (genre !== "All") updated = updated.filter((item) => item.genre.includes(genre));

    if (sortOrder === "high") updated.sort((a, b) => b.rating - a.rating);
    else if (sortOrder === "low") updated.sort((a, b) => a.rating - b.rating);

    setFilteredContent(updated);
  }, [genre, sortOrder, content]);

  const renderGrid = (items) => (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/MovieDetails/${item.id}`}
          className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl bg-gradient-to-br from-purple-800/40 via-pink-800/30 to-yellow-600/20 backdrop-blur-md hover:scale-[1.03] transition-transform duration-300 border border-gray-700"
        >
          <div className="w-full aspect-[2/3]">
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 sm:p-4">
            <h2 className="text-sm sm:text-lg font-semibold text-yellow-300 text-center line-clamp-2">
              {item.title}
            </h2>
            <div className="flex items-center gap-1 mt-1 sm:mt-2">
              <Star size={14} className="text-yellow-400" />
              <span className="font-medium text-sm sm:text-base">{item.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="px-3 sm:px-6 py-6 sm:py-8 min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-black text-white">

      {/* Banner Carousel */}
      <div className="relative mb-12 overflow-hidden rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.6)] max-w-7xl mx-auto h-60 sm:h-80 md:h-[420px]">
        {content.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentBanner ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl brightness-[0.55]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-8 md:p-16 bg-gradient-to-r from-black/80 via-black/40 to-transparent rounded-2xl">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                {item.title}
              </h1>
              <p className="text-gray-300 mt-2 sm:mt-3 max-w-full sm:max-w-lg text-xs sm:text-base">
                <span className="font-semibold">{item.type}</span> | Genre:{" "}
                <span className="text-yellow-400 font-semibold">
                  {item.genre.join(", ")}
                </span>{" "}
                | Rating:{" "}
                <span className="text-yellow-400 font-semibold">
                  ⭐ {item.rating}
                </span>
              </p>
              <Link
                to={`/MovieDetails/${item.id}`}
                className="mt-3 sm:mt-5 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition shadow-md hover:shadow-yellow-500/30 text-sm sm:text-base"
              >
                Watch Now
              </Link>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentBanner
                  ? "bg-yellow-400 scale-125 shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                  : "bg-gray-600 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

      </div>

      {/* Filters & Sorting */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap justify-center sm:justify-between items-center gap-3">
        {/* Genre Dropdown */}
        <div className="relative inline-block w-full sm:w-auto">
          <select
            className="appearance-none w-full sm:w-auto bg-black/40 backdrop-blur-md text-white px-4 sm:px-6 py-2 pr-10 rounded-lg border border-gray-600 hover:border-yellow-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-300 shadow-md outline-none cursor-pointer"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>All</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Drama</option>
            <option>Sci-Fi</option>
            <option>Fantasy</option>
            <option>Crime</option>
            <option>Biography</option>
            <option>Thriller</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Sorting Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            { label: "Rating High → Low", value: "high" },
            { label: "Rating Low → High", value: "low" },
            { label: "Reset", value: "default" },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setSortOrder(btn.value)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm ${sortOrder === btn.value
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <section className="mb-10">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 border-l-4 border-yellow-400 pl-3 flex items-center gap-2">
          <Film size={22} /> Popular Movies
        </h2>
        {renderGrid(filteredContent.filter((item) => item.type === "Movie"))}
      </section>

      <section className="mb-10">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 border-l-4 border-pink-400 pl-3 flex items-center gap-2">
          <Tv size={22} /> Trending Series
        </h2>
        {renderGrid(filteredContent.filter((item) => item.type === "Series"))}
      </section>

      <section className="mb-10">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 border-l-4 border-blue-400 pl-3 flex items-center gap-2">
          <Zap size={22} /> Top Anime
        </h2>
        {renderGrid(filteredContent.filter((item) => item.type === "Anime"))}
      </section>
    </div>
  );
};

export default Home;
