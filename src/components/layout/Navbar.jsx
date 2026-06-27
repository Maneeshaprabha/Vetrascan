import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto left-0 right-0">
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide">
        Vetrascan
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-10 text-slate-300 text-sm font-medium">
        <a href="#home" className="hover:text-white transition-colors">Homegggggg</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors shadow-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Login
        </button>
        <button className="flex items-center bg-blue-500/20 text-blue-100 border border-blue-400/30 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-colors backdrop-blur-sm">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
          En
        </button>
      </div>
    </nav>
  );
};

export default Navbar;