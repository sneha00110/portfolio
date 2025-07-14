import React from 'react';

const Recommendations = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Blurred background image */}
      <img 
        src="/backgrounf.jpg" 
        alt="Recommendation Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm z-0" 
        style={{ filter: 'blur(4px)', objectPosition: 'center' }}
      />
      <div className="relative max-w-md w-full mx-auto z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center border-t-8 border-green-400 bg-opacity-90">
          <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center tracking-wide drop-shadow-lg">Recommendation Letter</h2>
          <img
            src="/WhatsApp%20Image%202025-07-01%20at%2014.02.05_1d185f5c.jpg"
            alt="Recommendation Letter"
            className="rounded-xl shadow-2xl border-4 border-green-200 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;