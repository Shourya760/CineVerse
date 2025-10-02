// src/context/SearchContext.jsx
import React, { createContext, useState, useEffect } from "react";
import moviesData from "../data/moviesData"; // <-- import your unified data

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [content, setContent] = useState([]);

  // Load all movies/series/anime from moviesData
  useEffect(() => {
    setContent(moviesData);
  }, []);

  // Update search results when query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = content.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filtered);
  }, [searchQuery, content]);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, searchResults, setSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};
