import { motion } from 'framer-motion';
import { CloudUpload, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#001428] overflow-hidden flex items-center pt-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white max-w-xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-semibold leading-tight mb-6"
          >
            Turn Scanned Files Into <br/> Excel & More
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 max-w-md"
          >
            Use advanced OCR to convert PDFs and images into Excel, Word, and other editable formats.
          </motion.p>
        </motion.div>

        {/* Right Content - Upload Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <CloudUpload className="w-5 h-5" />
                Upload files
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center mb-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <CloudUpload className="w-10 h-10 text-gray-400 mb-4" />
              <p className="text-gray-800 font-medium mb-1">Choose a file or drag & drop it here.</p>
              <p className="text-gray-500 text-sm mb-4">JPEG, PNG, PDF, and MP4 formats, up to 50 MB.</p>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Browse File
              </button>
            </div>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-xs font-medium uppercase">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Import from URL Link</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Paste file URL" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}