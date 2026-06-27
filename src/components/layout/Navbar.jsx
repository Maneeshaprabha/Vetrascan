import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between text-white">
      <div className="text-2xl font-bold tracking-tight">Vetrascan</div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#home" className="hover:text-blue-300 transition-colors">Home</a>
        <a href="#features" className="hover:text-blue-300 transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-blue-300 transition-colors">How It Works</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-slate-100 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span>Login</span>
        </button>
        <button className="bg-white/10 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
          En v
        </button>
      </div>
    </nav>
  );
};

export default Navbar;