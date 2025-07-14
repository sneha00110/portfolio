import React, { useState } from 'react';
import { Calendar, ExternalLink, Search, Filter, Play, Tv } from 'lucide-react';

const featuredLinks = [
  {
    platform: 'YouTube',
    links: [
      { url: 'https://youtu.be/R9ybcGleUYk?si=RskEYZ5O6YQidB1g', label: 'YouTube 1' },
      { url: 'https://youtu.be/wU6lwBagDpE?si=_8P8mLPTlGlLiaRL', label: 'YouTube 2' },
      { url: 'https://youtu.be/_N7o9-VYsI0?si=TFrfn3FqqW0Yt-bO', label: 'YouTube 3' },
      { url: 'https://youtu.be/SkQbXzCDm4U?si=xGLp3fsF8fSYjPuA', label: 'YouTube 4' },
      { url: 'https://youtu.be/SkQbXzCDm4U?si=xGLp3fsF8fSYjPuA', label: 'YouTube 5' },
      { url: 'https://youtu.be/ZnynNi1ojLg?si=qPUv12afFirt4oN7', label: 'YouTube 6' },
      { url: 'https://youtu.be/8uAAML5UlP4?si=oR-hNraNZUqgl2nN', label: 'YouTube 7' },
      { url: 'https://www.youtube.com/live/2PDTNePTehU?si=YoO87q6ryEWhFZsN', label: 'YouTube 8' },
      { url: 'https://www.youtube.com/live/l1rQ7rZ75Nw?si=IDnH0wtaxqbcH95S', label: 'YouTube 9' },
    ],
    icon: (
      <span className="mb-2 text-red-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12C0 8.355 0 12 0 12s0 3.645.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.645 24 12 24 12s0-3.645-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></span>
    ),
  },
  {
    platform: 'Twitter',
    links: [
      { url: 'https://x.com/IndiaToday/status/1808124914215292932?t=uqE1vkZcUkLttM1dS29ORg&s=08', label: 'Twitter 1' },
      { url: 'https://x.com/TheNewIndian_in/status/1889589599296430588?t=8Q2TAT07oGXXTxdJi38tA&s=19', label: 'Twitter 2' },
      { url: 'https://x.com/indiatoday/status/1889746152888877157?s=48', label: 'Twitter 3' },
      { url: 'https://x.com/aajtak/status/1890776780979437823?s=48', label: 'Twitter 4' },
    ],
    icon: (
      <span className="mb-2 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.007-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></span>
    ),
  },
  {
    platform: 'Facebook',
    links: [
      { url: 'https://www.facebook.com/share/v/gDCFVACvuXVsKHmR/?mibextid=D5vuiz', label: 'Facebook 1' },
    ],
    icon: (
      <span className="mb-2 text-blue-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></span>
    ),
  },
];

// Combine coverage from both Hindi and English files (for demo, using Hindi as base)
const coverage: any[] = [];

const months = [
  { value: 'all', label: 'All Months' },
  { value: 'january', label: 'January' },
  { value: 'february', label: 'February' },
  { value: 'march', label: 'March' },
  { value: 'april', label: 'April' },
  { value: 'may', label: 'May' },
  { value: 'june', label: 'June' },
  { value: 'july', label: 'July' },
  { value: 'august', label: 'August' },
  { value: 'september', label: 'September' },
  { value: 'october', label: 'October' },
  { value: 'november', label: 'November' },
  { value: 'december', label: 'December' },
];

const tabSections = [
  { key: 'youtube', label: 'YouTube' },
  { key: 'twitter', label: 'Twitter' },
  { key: 'others', label: 'Others' },
];

const ElectronicMedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [activeTab, setActiveTab] = useState('youtube');

  // For demo, no coverage items. You can merge both Hindi and English coverage arrays here.
  const filteredCoverage = coverage.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth === 'all' || item.month === selectedMonth;
    return matchesSearch && matchesMonth;
  });

  return (
    <div className="relative py-20 min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 flex flex-col items-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="#a5b4fc" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Electronic Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Television appearances, interviews, and features on leading news channels and digital platforms
          </p>
          <div className="w-full flex justify-center mb-10">
            <video controls className="rounded-xl shadow-lg w-full max-w-2xl">
              <source src="/videos.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Tab Navbar */}
          <div className="flex justify-center gap-4 mb-8">
            {tabSections.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${activeTab === tab.key ? 'bg-blue-700 text-white border-blue-700 shadow-lg scale-105' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Cards Section for each tab */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activeTab === 'youtube' && featuredLinks[0].links.map((link, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 border-t-4 border-red-500">
                <div className="mb-4">{featuredLinks[0].icon}</div>
                <div className="text-lg font-bold text-red-700 mb-2">YouTube</div>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline text-center">{link.label}</a>
              </div>
            ))}
            {activeTab === 'twitter' && featuredLinks[1].links.map((link, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 border-t-4 border-blue-400">
                <div className="mb-4">{featuredLinks[1].icon}</div>
                <div className="text-lg font-bold text-blue-500 mb-2">Twitter</div>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline text-center">{link.label}</a>
              </div>
            ))}
            {activeTab === 'others' && featuredLinks[2].links.map((link, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 border-t-4 border-blue-800">
                <div className="mb-4">{featuredLinks[2].icon}</div>
                <div className="text-lg font-bold text-blue-800 mb-2">Facebook</div>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline text-center">{link.label}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicMedia; 