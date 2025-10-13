import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, useNavigate } from 'react-router-dom'; // ✅ important for navigation
import App from './App.jsx';
import { SearchContext, SearchProvider } from './context/SearchContext.jsx';
import { WatchlistContext, WatchlistProvider } from './context/WatchlistContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <ScrollToTop />
        <SearchProvider>
          <WatchlistProvider>
            <App />
          </WatchlistProvider>
        </SearchProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode >
);
