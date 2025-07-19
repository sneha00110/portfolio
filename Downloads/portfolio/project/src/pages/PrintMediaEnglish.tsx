import React from 'react';

const PrintMediaEnglish = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-white flex flex-col items-center py-16 overflow-hidden">
      {/* Paper/fiber texture pattern overlay */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="paper-fiber-en" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="80" height="80" fill="#f0f9ff" fillOpacity="0.7" />
              <ellipse cx="40" cy="40" rx="2" ry="8" fill="#60a5fa" fillOpacity="0.08" />
              <ellipse cx="60" cy="20" rx="1.5" ry="6" fill="#6366f1" fillOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#paper-fiber-en)" />
        </svg>
      </div>
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 z-10" style={{background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 60%, rgba(59,130,246,0.08) 100%)'}} />
      <div className="relative z-20 w-full">
        <div className="max-w-3xl md:max-w-5xl mx-auto px-2 sm:px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2 text-center">English Print Media</h1>
          <p className="text-lg text-purple-700 mb-10 text-center">Articles and reports published in English newspapers and magazines</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Cards sorted by date, most recent first */}
            {/* 11/06/25 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">11/06/25</span>
              </div>
              <a href="https://www.hindustantimes.com/cities/lucknow-news/ordnance-factory-in-firozabad-to-export-brake-parachutes-for-sukhoi-30-mki-101718495890141.html" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 14/02/25 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">14/02/25</span>
              </div>
              <a href="https://timesofindia.indiatimes.com/city/agra/indigenous-brake-parachutes-for-fighter-planes-to-be-made-in-firozabad/articleshow/108127962.cms" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 13/02/25 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">13/02/25</span>
              </div>
              <a href="https://www.sachkahoon.com/brake-parachute-for-su-30-fighter-aircraft-will-be-made-in-hazratpur-ordnance-factory/" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 1</a>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">13/02/25</span>
              </div>
              <a href="https://www.lokshakti.in/states/uttar-pradesh/449136/" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 2</a>
            </div>
            {/* 17/07/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">17/07/24</span>
              </div>
              <a href="https://www.tarunmitra.in/drones-made-in-firozabads-ordnance-equipment-factory-will-help-in/article-45993" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 16/07/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">16/07/24</span>
              </div>
              <a href="https://www.etvbharat.com/hi/!state/airavat-2-will-now-deliver-supplies-to-the-soldiers-deployed-on-inaccessible-hills-ups24071600637" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 14/07/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">14/07/24</span>
              </div>
              <a href="https://www.sachkahoon.com/drones-made-in-firozabad-will-now-supply-supplies-to-soldiers-on-inaccessible-hills/" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 01/07/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">01/07/24</span>
              </div>
              <a href="https://zeenews.india.com/hindi/india/up-uttarakhand/kanpur/firozabad-ordnance-factory-prepared-special-parachutes-for-isro-gaganyaan-mission-2025-helping-soft-landing/2315374" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 28/06/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">28/06/24</span>
              </div>
              <a href="https://hindi.news18.com/news/uttar-pradesh/firozabad-special-parachutes-are-being-prepared-for-the-gaganyaan-mission-in-this-city-of-up-astronauts-will-return-to-earth-with-the-help-of-this-8444154.html" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 1</a>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">28/06/24</span>
              </div>
              <a href="https://www.tarunmitra.in/parachutes-made-in-firozabad-will-provide-soft-landing-of-astronauts/article-43642" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 2</a>
            </div>
            {/* 27/03/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">27/03/24</span>
              </div>
              <a href="https://hindi.news18.com/news/uttar-pradesh/firozabad-parachute-made-of-new-technology-open-automatically-capability-to-drop-from-thirty-thousand-feet-8184424.html" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 1</a>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">27/03/24</span>
              </div>
              <a href="https://www.bhaskar.com/local/uttar-pradesh/firozabad/news/high-technology-parachutes-are-being-prepared-in-firozabad-133244700.html?_branch_match_id=922402299275012701&utm_campaign=133244700&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0nMzMvM1kvKSCzOTizSS87P1a8MrsoMTI7w9vdOsq8rSk1LLSrKzEuPTyrKLy9OLbJ1TUlPBQDjd4F1PgAAAA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 2</a>
            </div>
            {/* 25/03/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">25/03/24</span>
              </div>
              <a href="https://hindi.news18.com/news/uttar-pradesh/firozabad-drone-of-new-technology-is-ready-air-ambulance-will-be-made-for-the-injured-army-on-the-border-8173818.html" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News</a>
            </div>
            {/* 22/03/24 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">22/03/24</span>
              </div>
              <a href="https://www.amarujala.com/haryana/hisar/airavat-3-will-work-air-ambulance-for-army-preparations-to-equip-military-fleet-with-drones-2024-03-22" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 1</a>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-6 border-t-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3 font-bold text-lg">📰</span>
                <span className="text-gray-500 text-sm font-medium">22/03/24</span>
              </div>
              <a href="https://www.timesnowhindi.com/india/drones-will-work-as-air-ambulances-for-army-in-inaccessible-areas-ordnance-equipment-factory-hazratpur-working-on-it-article-108704610" target="_blank" rel="noopener noreferrer" className="text-purple-800 font-semibold text-lg hover:underline">Read News 2</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintMediaEnglish;