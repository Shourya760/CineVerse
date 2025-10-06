// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create a new Context
const ThemeContext = createContext();

// 2️⃣ Create the Provider (wraps the whole app)
export const ThemeProvider = ({ children }) => {
  // Check if user previously selected dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // 3️⃣ Add or remove the "dark" class from <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 4️⃣ Function to toggle the mode
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5️⃣ Custom hook for easy access in any component
export const useTheme = () => useContext(ThemeContext);
