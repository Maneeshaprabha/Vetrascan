import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ScanLine, Download, CloudUpload } from 'lucide-react';

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(1);

  // Content configuration mapping exactly to the UI steps
  const stepsData = {
    1: {
      num: "01.",
      title: <>Upload Your<br/>Document</>,
      desc: <>Drag and drop or browse to upload<br/>PNG, JPG, or PDF files up to 10MB.</>
    },
    2: {
      num: "02.",
      title: <>AI Extracts<br/>Text</>,
      desc: <>Our advanced OCR engine processes your<br/>document instantly to extract accurate text.</>
    },
    3: {
      num: "03.",
      title: <>Export &<br/>Use Data</>,
      desc: <>Download your fully editable file in<br/>Excel, Word, or plain text formats instantly.</>
    }
  };

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 font-medium mb-4">How It Works ?</p>
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
            Easily convert any document or image<br />
            into editable text in just three simple steps..
          </h2>
        </div>

        {/* Main Gray Container */}
        <div className="bg-[#FAFAFB] rounded-[2.5rem] p-8 lg:p-12">
          
          {/* Tabs Container */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            {/* Tab 1 */}
            <button
              onClick={() => setActiveTab(1)}
              className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 1 ? 'bg-[#0B4EAE] text-white shadow-md' : 'bg-[#EEF1F5] text-gray-800 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 z-10">
                <Upload className="w-5 h-5" />
                <span>Upload Your Document</span>
              </div>
              <span className={`z-10 ${activeTab === 1 ? 'text-white' : 'text-gray-900 font-semibold'}`}>01</span>
              {activeTab === 1 && (
                <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-[#0B4EAE] -z-0" />
              )}
            </button>

            {/* Tab 2 */}
            <button
              onClick={() => setActiveTab(2)}
              className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 2 ? 'bg-[#0B4EAE] text-white shadow-md' : 'bg-[#EEF1F5] text-gray-800 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 z-10">
                <ScanLine className="w-5 h-5" />
                <span>AI Extracts Text</span>
              </div>
              <span className={`z-10 ${activeTab === 2 ? 'text-white' : 'text-gray-900 font-semibold'}`}>02</span>
              {activeTab === 2 && (
                <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-[#0B4EAE] -z-0" />
              )}
            </button>

            {/* Tab 3 */}
            <button
              onClick={() => setActiveTab(3)}
              className={`flex-1 flex items-center justify-between px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                activeTab === 3 ? 'bg-[#0B4EAE] text-white shadow-md' : 'bg-[#EEF1F5] text-gray-800 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 z-10">
                <Download className="w-5 h-5" />
                <span>Export & Use</span>
              </div>
              <span className={`z-10 ${activeTab === 3 ? 'text-white' : 'text-gray-900 font-semibold'}`}>03</span>
              {activeTab === 3 && (
                <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-[#0B4EAE] -z-0" />
              )}
            </button>
          </div>

          {/* Bottom Content Area */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Side: Text Details with AnimatePresence */}
            <div className="lg:w-1/3 w-full h-[280px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-start"
                >
                  <h3 className="text-[56px] font-bold text-[#DCDFE5] leading-none mb-4 tracking-tighter">
                    {stepsData[activeTab].num}
                  </h3>
                  <h4 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                    {stepsData[activeTab].title}
                  </h4>
                  <p className="text-gray-600 mb-8 font-medium">
                    {stepsData[activeTab].desc}
                  </p>
                  <button className="bg-[#0A0A0A] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-black transition-colors shadow-sm">
                    Get Started
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Graphic Visual with Interactive Motion States */}
            <div className="lg:w-2/3 w-full bg-white rounded-3xl overflow-hidden relative min-h-[350px] flex items-center shadow-sm">
              
              {/* Soft blue background glow in the center */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E6F0FF] to-transparent opacity-80"></div>
              
              {/* Cards Container */}
              <div className="relative z-10 flex gap-6 px-12 w-full justify-start items-center overflow-visible">
                
                {/* --- UI Card 1 (Document) --- */}
                <motion.div 
                  animate={{ 
                    scale: activeTab === 1 ? 1.05 : 0.95,
                    opacity: activeTab === 1 ? 1 : 0.6,
                    y: activeTab === 1 ? -5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-[200px] shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white flex flex-col items-center"
                >
                  {/* Document Graphic */}
                  <div className="w-full bg-[#F3F4F6] rounded-md p-3 mb-5 relative border border-gray-200 h-[140px] shadow-sm overflow-hidden">
                    {/* Paperclip Mock */}
                    <div className="absolute -top-2 left-4 w-2 h-5 border-2 border-gray-400 rounded-full bg-transparent z-10"></div>
                    <p className="text-[7px] font-bold text-center mb-3 tracking-widest text-gray-700 mt-1">DOCUMENTATION</p>
                    <div className="space-y-1.5 px-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`h-1 bg-gray-300 rounded-full ${i === 8 ? 'w-2/3' : 'w-full'}`}></div>
                      ))}
                    </div>
                    {/* Interactive Scan Laser Overlay overlay for Tab 2 */}
                    {activeTab === 2 && (
                      <motion.div 
                        initial={{ y: -10 }}
                        animate={{ y: 150 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_8px_1px_rgba(59,130,246,0.5)]"
                      />
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#1B2A4E] rounded-full overflow-hidden mb-4 shadow-inner">
                     <motion.div 
                       animate={{ width: activeTab === 1 ? "70%" : activeTab === 2 ? "100%" : "100%" }}
                       transition={{ duration: 0.8 }}
                       className="h-full bg-[#4096FF]" 
                     />
                  </div>

                  {/* Upload Button */}
                  <div className="bg-gradient-to-b from-[#4096FF] to-[#1E66E5] text-white text-[11px] font-medium px-8 py-1.5 rounded-full shadow-md">
                    Upload
                  </div>
                </motion.div>

                {/* --- UI Card 2 (Cloud Icon) --- */}
                <motion.div 
                  animate={{ 
                    scale: activeTab === 2 ? 1.05 : 0.95,
                    opacity: activeTab === 2 ? 1 : 0.6,
                    y: activeTab === 2 ? -5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-[200px] shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white flex flex-col items-center"
                >
                  {/* Cloud Graphic */}
                  <div className="w-full aspect-square bg-gradient-to-br from-[#4096FF] to-[#0B4EAE] rounded-2xl mb-5 shadow-inner flex items-center justify-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-2xl"></div>
                     <motion.div
                       animate={activeTab === 2 ? { y: [0, -4, 0] } : {}}
                       transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                     >
                       <CloudUpload className="w-14 h-14 text-white drop-shadow-md relative z-10" strokeWidth={2.5} />
                     </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#1B2A4E] rounded-full overflow-hidden mb-4 shadow-inner">
                     <motion.div 
                       animate={{ width: activeTab === 1 ? "35%" : activeTab === 2 ? "75%" : "100%" }}
                       transition={{ duration: 0.8 }}
                       className="h-full bg-[#4096FF]" 
                     />
                  </div>

                  {/* Upload Button */}
                  <div className="bg-gradient-to-b from-[#4096FF] to-[#1E66E5] text-white text-[11px] font-medium px-8 py-1.5 rounded-full shadow-md">
                    Upload
                  </div>
                </motion.div>

                {/* --- UI Card 3 (Cut off at edge / Export side) --- */}
                <motion.div 
                  animate={{ 
                    scale: activeTab === 3 ? 1.05 : 0.95,
                    opacity: activeTab === 3 ? 1 : 0.4,
                    y: activeTab === 3 ? -5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-[200px] shrink-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white flex flex-col items-center"
                >
                  <div className="w-full aspect-square bg-gradient-to-br from-[#4096FF] to-[#0B4EAE] rounded-2xl mb-5 shadow-inner flex items-center justify-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-2xl"></div>
                     {/* Preview checkmark badge inside final graphic box during export phase */}
                     {activeTab === 3 && (
                       <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-md">
                         ✓
                       </motion.div>
                     )}
                  </div>
                  <div className="w-full h-2 bg-[#1B2A4E] rounded-full overflow-hidden mb-4 shadow-inner">
                     <motion.div 
                       animate={{ width: activeTab === 3 ? "100%" : "10%" }}
                       transition={{ duration: 0.8 }}
                       className="h-full bg-[#4096FF]" 
                     />
                  </div>
                  <div className={`bg-gradient-to-b from-[#4096FF] to-[#1E66E5] text-white text-[11px] font-medium px-8 py-1.5 rounded-full shadow-md transition-opacity duration-300 ${activeTab === 3 ? 'opacity-100' : 'opacity-50'}`}>
                    Upload
                  </div>
                </motion.div>

              </div>
              
              {/* White fade overlay on the right to blend the cut-off card */}
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}