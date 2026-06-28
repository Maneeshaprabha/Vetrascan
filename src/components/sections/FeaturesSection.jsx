import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, History, ArrowLeftToLine, TextSelect, Zap, BarChart3, Edit3 } from 'lucide-react';

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Dark Card */}
        <div className="bg-[#111111] rounded-[2.5rem] p-8 lg:p-14 text-white shadow-2xl overflow-hidden">
          
          {/* Top Row: Heading and Graphic */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 relative">
            
            {/* Left: Text Content */}
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl lg:text-[44px] font-medium leading-tight mb-6 tracking-tight">
                Everything you need to<br />digitize documents
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                Powerful OCR tools designed for speed, accuracy, and simplicity. Built for developers and businesses.
              </p>
            </div>

            {/* Right: Abstract UI Graphic (CSS Recreation) */}
            <div className="lg:w-1/2 w-full h-[240px] relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner flex items-center justify-center [perspective:1000px]">
                
                {/* 3D Skewed Document Container */}
                <motion.div 
                  initial={{ rotateX: 20, rotateY: -15, rotateZ: 5, scale: 0.9 }}
                  whileInView={{ rotateX: 25, rotateY: -20, rotateZ: 10, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative w-[120%] h-[150%] bg-white rounded-xl shadow-2xl p-6 border border-gray-200"
                >
                  {/* Mock Background Text */}
                  <div className="text-gray-300 text-sm opacity-50 space-y-4 whitespace-nowrap rotate-[-5deg] mt-8 ml-8">
                     <p>sting and I am interested in exploring available am</p>
                     <p>nvenience? I available will be available</p>
                     <p>djust my schedule. Gran should be available eas or</p>
                     <p>rtment is can be at your disposal he application</p>
                  </div>

                  {/* Floating OCR Highlight Boxes */}
                  <div className="absolute top-[80px] left-[150px] space-y-3 z-10 rotate-[-5deg]">
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-blue-100/80 backdrop-blur-md border border-blue-300 px-4 py-1.5 rounded-md shadow-lg w-fit transform -translate-x-4">
                      <span className="text-blue-600 font-bold text-sm">available am</span>
                    </motion.div>
                    
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-[#4096FF]/90 backdrop-blur-md px-4 py-1.5 rounded-md shadow-[0_4px_15px_rgba(64,150,255,0.4)] w-fit">
                      <span className="text-white font-bold text-sm">will be available</span>
                    </motion.div>
                    
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-blue-300/80 backdrop-blur-md border border-blue-400 px-4 py-1.5 rounded-md shadow-lg w-fit transform translate-x-4">
                      <span className="text-white font-bold text-sm">should be available</span>
                    </motion.div>
                    
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="bg-blue-200/80 backdrop-blur-md border border-blue-300 px-4 py-1.5 rounded-md shadow-lg w-fit transform translate-x-8 flex items-center gap-2">
                      <span className="text-blue-700 font-bold text-sm">can be at your disposal</span>
                      <div className="bg-white/80 rounded px-2 py-0.5 flex items-center gap-1">
                         <Edit3 className="w-3 h-3 text-blue-600" />
                         <span className="text-blue-600 text-[10px] font-bold">Editor</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Fake Cursor */}
                  <motion.div 
                    animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute top-[180px] left-[320px] z-20"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                      <path d="M5.5 3.21V20.8C5.5 21.46 6.27 21.82 6.77 21.4L11.5 17L15 23L17.5 21.5L14 15.5H19.3C19.96 15.5 20.32 14.73 19.9 14.23L5.5 3.21Z" fill="#2563EB" stroke="white" strokeWidth="2"/>
                    </svg>
                  </motion.div>

                </motion.div>
            </div>
          </div>

          {/* Features Grid with Dividers */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-[#2A2A2A]">
              <motion.div variants={itemVariants} className="flex items-start gap-5 group cursor-default">
                <div className="shrink-0 text-white mt-1 group-hover:text-blue-400 transition-colors"><TextSelect className="w-7 h-7" strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Instant Text Extraction</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">Upload any image or PDF and get accurate text in seconds. Supports any languages</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-5 group cursor-default">
                <div className="shrink-0 text-white mt-1 group-hover:text-blue-400 transition-colors"><Zap className="w-7 h-7" strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Lightning Fast</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">Process documents in under 3 seconds. Batch upload support for multiple files.</p>
                </div>
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-[#2A2A2A]">
              <motion.div variants={itemVariants} className="flex items-start gap-5 group cursor-default">
                <div className="shrink-0 text-white mt-1 group-hover:text-blue-400 transition-colors"><ArrowLeftToLine className="w-7 h-7" strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Export Anywhere</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">Download results as Excel, PDF, or plain text. Copy to clipboard with one click.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-5 group cursor-default">
                <div className="shrink-0 text-white mt-1 group-hover:text-blue-400 transition-colors"><History className="w-7 h-7" strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Full History</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">Access all your previous scans anytime. Search, filter, and re-download past results.</p>
                </div>
              </motion.div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-[#2A2A2A]">
              <motion.div variants={itemVariants} className="flex items-start gap-5 group cursor-default">
                <div className="shrink-0 text-white mt-1 group-hover:text-blue-400 transition-colors"><ShieldCheck className="w-7 h-7" strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Secure & Private</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">Your documents are processed securely and never stored. Enterprise-grade encryption.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-5 group cursor-default">
                <div className="shrink-0 text-white mt-1 group-hover:text-blue-400 transition-colors"><BarChart3 className="w-7 h-7" strokeWidth={1.5} /></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Analytics Dashboard</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-sm font-light">Track your usage, accuracy rates, and processing times with detailed insights.</p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}