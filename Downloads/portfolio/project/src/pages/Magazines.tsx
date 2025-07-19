import React from 'react';

const Magazines = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 flex flex-col items-center py-16 overflow-hidden">
      <div className="relative z-20 w-full">
        <div className="max-w-3xl md:max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">Magazines</h1>
          <p className="text-xl text-blue-700 mb-10 text-center">Read and download featured magazines including Lok Stambh and Hindi Magazine.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <a
              href="/Lok%20Stambh%20Magazine-compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-8 border-t-4 border-blue-500 hover:scale-105"
            >
              <div className="text-2xl font-semibold text-blue-700 mb-2">Lok Stambh Magazine</div>
              <div className="text-blue-500 mb-2">PDF Download</div>
            </a>
            <a
              href="/Hindi.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-8 border-t-4 border-orange-500 hover:scale-105"
            >
              <div className="text-2xl font-semibold text-orange-700 mb-2">Hindi Magazine</div>
              <div className="text-orange-500 mb-2">Text File</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazines; 