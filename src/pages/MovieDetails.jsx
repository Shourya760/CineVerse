import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { FaHeart, FaPlay, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { WatchlistContext } from "../context/WatchlistContext";
import moviesData from "../data/moviesData";



export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState("synopsis");
  const trailerRef = useRef(null);
  const navigate = useNavigate();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useContext(WatchlistContext);

  // Error handling for invalid movie ID

  useEffect(() => {
    const selectedMovie = moviesData.find((m) => m.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      // Redirect to NotFound page
      navigate("/404");
    }
  }, [id, navigate]);

  useEffect(() => {
    const selectedMovie = moviesData.find((m) => m.id === parseInt(id));
    if (selectedMovie) setMovie(selectedMovie);
  }, [id]);

  if (!movie)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        Movie not found.
      </div>
    );

  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistClick = () => {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const scrollToTrailer = () => {
    setActiveTab("synopsis");
    setTimeout(() => {
      trailerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 text-gray-200 flex justify-center">
      <div className="max-w-4xl w-full bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex md:gap-6 p-4 md:p-6">
          {/* Poster */}
          <motion.img
            src={movie.poster}
            alt={movie.title}
            className="w-full md:w-1/4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />

          {/* Info */}
          <div className="flex-1 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">
              {movie.title}
            </h1>

            <p className="text-gray-400 mb-2 text-sm md:text-base">
              {movie.releaseDate} •{" "}
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="bg-purple-700 px-2 py-1 rounded-full text-xs md:text-sm mr-1"
                >
                  {g}
                </span>
              ))}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3 text-sm md:text-base">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(movie.rating) ? "fill-current" : "text-gray-700"}
                  />
                ))}
              </div>
              <span className="text-gray-400">({movie.reviewsCount} reviews)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={scrollToTrailer}
                className="bg-purple-600 hover:bg-purple-700 px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center gap-2 transition transform hover:scale-105 text-sm md:text-base"
              >
                <FaPlay /> Watch Trailer
              </button>

              <button
                onClick={handleWatchlistClick}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center gap-2 transition transform hover:scale-105 text-sm md:text-base ${inWatchlist ? "bg-gray-700 hover:bg-gray-600" : "bg-pink-500 hover:bg-pink-600"
                  }`}
              >
                <FaHeart /> {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
              </button>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-4 border-b border-gray-700 mb-3 text-sm md:text-base">
                {["synopsis", "cast", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-1 md:py-2 ${activeTab === tab
                      ? "text-purple-400 border-b-2 border-purple-400"
                      : "text-gray-400 hover:text-purple-400"
                      } transition-colors`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "synopsis" && (
                  <p className="text-gray-300 text-sm md:text-base">{movie.description}</p>
                )}

                {activeTab === "cast" && (
                  <ul className="list-disc list-inside text-sm md:text-base">
                    {movie.cast.map((actor) => (
                      <li key={actor}>{actor}</li>
                    ))}
                  </ul>
                )}

                {activeTab === "reviews" && (
                  <ul className="space-y-2 text-sm md:text-base">
                    {movie.reviews.map((review) => (
                      <li key={review.id} className="bg-gray-800 p-2 md:p-3 rounded-lg shadow-sm">
                        <span className="font-semibold text-purple-400">{review.user}:</span>{" "}
                        {review.text}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trailer */}
        {activeTab === "synopsis" && (
          <div className="p-4 md:p-6" ref={trailerRef}>
            <h2 className="text-lg md:text-xl font-bold mb-2">Trailer</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={movie.trailer}
                title="Trailer"
                allowFullScreen
                className="w-full h-64 md:h-80 rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
