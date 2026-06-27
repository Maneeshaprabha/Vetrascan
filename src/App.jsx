import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

// Import other sections as you build them
// import FeatureGrid from './components/sections/FeatureGrid';
// import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />

        {/* <FeatureGrid /> */}
        {/* <HowItWorks /> */}
        {/* <DetailedFeatures /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;