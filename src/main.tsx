import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx'; // Your main App component
import FormPage from './pages/application-request.tsx';

// Create root and render the app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Define your route(s) here */}
        <Route path="/" element={<App />} />
        <Route path="/application/request/:formId" element={<FormPage />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  </StrictMode>
);
