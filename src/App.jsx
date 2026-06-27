import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; // Double check this path
import Home from './components/sections/Home';   // Make sure this matches your folder structure

function App() {
  return (
    <Router>
      {/* Add semantic div and styling if needed, matching your design */}
      <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-900">
        
        {/* The Navbar is persistent and appears on all routes */}
        <Navbar />
        
        {/* Routes define which component renders based on the URL */}
        <Routes>
          {/* When users visit the root path "/", render the Home component */}
          <Route path="/" element={<Home />} />
          
          {/* Example of adding another route later:
          <Route path="/login" element={<Login />} />
          */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;