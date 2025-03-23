import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import HealthCheck from "./pages/HealthCheck";
import NGOs from "./pages/NGOs";

function App() {
  return (
    <div className="app-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health-check" element={<HealthCheck />} />
          <Route path="/ngos" element={<NGOs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
