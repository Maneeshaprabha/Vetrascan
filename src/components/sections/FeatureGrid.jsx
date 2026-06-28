import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FileSpreadsheet, Image as ImageIcon, LayoutTemplate } from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        
        {/* --- LEFT COLUMN (Cards 1 & 2) --- */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Top Left Card (Dark) */}
    <motion.div 
  variants={cardVariants}
  className="bg-[#18181A] rounded-[2rem] p-8 flex flex-col justify-between flex-grow shadow-lg"
>
  <div>
    <p className="text-gray-300 text-[15px] leading-relaxed mb-6 pr-2">
      Say goodbye to manual corrections! Our OCR keeps your data accurate and Excel-ready.
    </p>
    <div className="flex gap-1 text-yellow-400 text-sm mb-12">
      ★★★★★
    </div>
  </div>
  <div>
    {/* Corrected Cyan to Green Gradient */}
    <h2 className="text-4xl lg:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#00F0FF] to-[#00FF87] leading-tight">
      99% OCR<br />Accuracy
    </h2>
  </div>
</motion.div>

          {/* Bottom Left Card (Light) */}
     <motion.div 
  variants={cardVariants}
  className="bg-[#F8F9FA] rounded-[2rem] p-8 shrink-0 shadow-sm border border-gray-100"
>
  <h3 className="text-gray-900 text-[17px] leading-snug font-medium mb-6">
    All document types.<br />One powerful converter
  </h3>
  
  {/* Recreated Branded File Type Icons */}
  <div className="flex gap-4 items-center">
    
    {/* PDF Icon */}
    <div className="w-10 h-10 bg-[#E22525] rounded-xl shadow-sm flex flex-col items-center justify-center text-white relative overflow-hidden border border-red-600/20 hover:scale-105 transition-transform">
        {/* Subtle top fold/highlight */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-red-800"></div>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mb-0.5">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.7 1.5-1.5 1.5H6.5v2H5v-7h3c.8 0 1.5.7 1.5 1.5v2zm4 1.5c0 .8-.7 1.5-1.5 1.5h-2.5v-7h2.5c.8 0 1.5.7 1.5 1.5v4zm4-3h-2v1.5h1.5v1.5H15.5v2h-1.5v-7h3.5v1.5z"/>
        </svg>
    </div>

    {/* Excel Icon */}
    <div className="w-10 h-10 bg-[#107C41] rounded-xl shadow-sm flex items-center justify-center text-white relative overflow-hidden border border-green-700/20 hover:scale-105 transition-transform">
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#0B5E31]"></div>
        <span className="text-lg font-bold ml-1 font-sans">X</span>
    </div>

    {/* Word Icon */}
    <div className="w-10 h-10 bg-[#185ABD] rounded-xl shadow-sm flex items-center justify-center text-white relative overflow-hidden border border-blue-700/20 hover:scale-105 transition-transform">
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#103F85]"></div>
        <span className="text-lg font-bold ml-1 font-sans">W</span>
    </div>

    {/* Image/Photos Icon */}
    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center relative border border-gray-100 hover:scale-105 transition-transform">
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Colorful petals simulating the Photos app icon */}
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#FF2D55] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[0deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#FF9500] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[45deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#FFCC00] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[90deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#4CD964] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[135deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#5AC8FA] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[180deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#007AFF] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[225deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#5856D6] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[270deg]"></div>
        <div className="absolute top-0 w-2.5 h-3.5 bg-[#FF2D55] rounded-full opacity-90 mix-blend-multiply origin-bottom rotate-[315deg]"></div>
      </div>
    </div>

  </div>
</motion.div>
        </div>

        {/* --- MIDDLE COLUMN (Card 3) --- */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-7 bg-gradient-to-br from-[#F4F7FF] to-[#E3EFFF] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden flex flex-col shadow-sm border border-blue-50"
        >
          {/* Main Text */}
          <div className="relative z-10 max-w-2xl mb-12">
            <h2 className="text-2xl lg:text-[28px] leading-snug font-medium text-gray-800">
              Convert any document into editable and copy-ready formats using advanced OCR technology.<br/>
              <span className="text-gray-600 block mt-2">Fast, accurate, and easy to use.</span>
            </h2>
          </div>

          {/* Graphic Element representing Scanner */}
          <div className="relative flex-grow flex items-end justify-center mt-8">
            {/* Dark background panel of the scanner */}
            <div className="w-[85%] sm:w-[320px] h-[300px] bg-[#0A1128] rounded-t-3xl border-t border-l border-r border-blue-500/30 shadow-2xl relative flex items-center justify-center overflow-hidden">
                
                {/* Tech Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 border-l border-b border-blue-500/30 bg-[#0F1C3F] rounded-bl-3xl"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#00F0FF]"></div>
                
                {/* Document Inside */}
                <div className="w-48 h-64 bg-[#E2E8F0] rounded-sm p-4 relative shadow-lg">
                  {/* Mock text lines */}
                  <div className="w-12 h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`h-1.5 bg-gray-300 rounded ${i === 7 ? 'w-1/2' : 'w-full'}`}></div>
                    ))}
                  </div>
                  
                  {/* Glowing Scanner Line */}
                  <motion.div 
                    animate={{ y: [0, 160, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-6 left-0 right-0 h-[2px] bg-[#00F0FF] shadow-[0_0_15px_3px_#00F0FF]"
                  />
                </div>
            </div>
            
            {/* Background Blue Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-400/20 blur-[80px] pointer-events-none"></div>
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN (Card 4) --- */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-2 bg-gradient-to-b from-[#011333] to-[#0047D4] rounded-[2rem] p-8 flex flex-col justify-end min-h-[400px] lg:min-h-full shadow-lg relative overflow-hidden"
        >
          {/* Subtle light streak overlay to match design */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 opacity-50"></div>

          <div className="relative z-10">
            <div className="flex gap-1 text-white text-xs mb-2">
              ★★★★★
            </div>
            <p className="text-white text-sm font-medium mb-4">Trusted by 120+</p>
            
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0047D4]" />
              <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0047D4]" />
              <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0047D4]" />
              <img src="https://i.pravatar.cc/100?img=44" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0047D4]" />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}