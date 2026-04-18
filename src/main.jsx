import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)