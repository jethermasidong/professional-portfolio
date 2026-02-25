import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext'; // Import this!

// Keep your pre-check here to prevent flashing
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap your App */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)