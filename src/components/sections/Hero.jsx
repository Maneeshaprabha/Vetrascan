import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#020817] overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract glowing vertical pillars */}
        <div className="absolute top-0 left-[30%] w-[10%] h-[80%] bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute top-20 left-[45%] w-[5%] h-[60%] bg-cyan-400/20 blur-[80px]"></div>
        <div className="absolute top-10 right-[10%] w-[15%] h-[90%] bg-blue-700/20 blur-[120px]"></div>
        
        {/* Curved glass overlay approximation */}
        <div className="absolute -left-[10%] top-[20%] w-[50%] h-[60%] bg-white/5 blur-3xl rounded-[100%] rotate-12 pointer-events-none border border-white/10"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto">
        <div className="text-white text-2xl font-bold tracking-wide">
          Vetrascan
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-slate-300 text-sm font-medium">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
          </button>
          <button className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            En
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-20 lg:pt-32 gap-16">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-[1.15] mb-6 tracking-tight">
            Turn Scanned Files Into <br /> Excel & More
          </h1>
          <p className="text-lg text-slate-300 max-w-md leading-relaxed">
            Use advanced OCR to convert PDFs and images into Excel, Word, and other editable formats.
          </p>
        </motion.div>

        {/* Right Column: Upload Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full max-w-[520px]"
        >
          <div className="bg-white rounded-[24px] p-8 shadow-2xl relative overflow-hidden">
            
            {/* Subtle top-right gradient accent inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/50 to-transparent pointer-events-none"></div>

            {/* Card Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-slate-50 rounded-full border border-slate-100">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-slate-800">Upload files</h3>
                  <p className="text-[13px] text-slate-500 mt-0.5">Select and upload the files of your choice</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Dropzone Area */}
            <div className="border border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center bg-[#FAFAFA] hover:bg-slate-50 transition-colors cursor-pointer mb-6 relative z-10">
              <svg className="w-8 h-8 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <p className="text-[15px] font-medium text-slate-700 mb-2">Choose a file or drag & drop it here.</p>
              <p className="text-[12px] text-slate-400 mb-5">JPEG, PNG, PDF, and MP4 formats, up to 50 MB.</p>
              <button className="bg-[#F1F5F9] text-slate-700 px-6 py-2 rounded-lg text-[13px] font-medium hover:bg-[#E2E8F0] transition">
                Browse File
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Or</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* URL Input Area */}
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-2">
                <label className="text-[12px] font-medium text-slate-600">Import from URL Link</label>
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
                <div className="pl-3 pr-2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Paste file URL" 
                  className="flex-1 py-2.5 px-2 text-[13px] text-slate-700 outline-none w-full bg-transparent placeholder:text-slate-400"
                />
                <button className="bg-[#1A1A1A] hover:bg-black text-white px-4 py-2.5 h-full flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {/* Approximation of the shield/check icon */}
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-[#1A1A1A]" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;