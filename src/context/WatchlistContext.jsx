import React, { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cineverseWatchlist");
    if (saved) setWatchlist(JSON.parse(saved));
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cineverseWatchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter((m) => m.id !== movieId));
  };

  const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}
