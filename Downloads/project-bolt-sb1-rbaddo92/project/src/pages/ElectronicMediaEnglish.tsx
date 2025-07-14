import React, { useState } from 'react';
import { Calendar, ExternalLink, Search, Filter, Play, Tv } from 'lucide-react';

const ElectronicMediaEnglish = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('all');

  // Sample English electronic media coverage - replace with actual data
  const coverage = [
    {
      id: 1,
      title: 'Strategic Defense Communication in Modern India',
      channel: 'CNN-News18',
      type: 'Interview',
      date: '2024-01-30',
      month: 'january',
      url: '#',
      duration: '15:20',
      description: 'Comprehensive discussion on evolving defense communication strategies and their implementation.',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Innovation in Defense Manufacturing Sector',
      channel: 'Republic TV',
      type: 'Panel Discussion',
      date: '2024-02-20',
      month: 'february',
      url: '#',
      duration: '28:45',
      description: 'Expert panel discusses advancements in defense production and public-private partnerships.',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Digital Transformation in Government Communication',
      channel: 'Times Now',
      type: 'Feature Story',
      date: '2024-03-12',
      month: 'march',
      url: '#',
      duration: '20:30',
      description: 'Exploring how digital platforms are revolutionizing government-citizen communication.',
      thumbnail: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Excellence in Public Relations: Government Sector',
      channel: 'India Today TV',
      type: 'Documentary',
      date: '2024-03-28',
      month: 'march',
      url: '#',
      duration: '45:00',
      description: 'A comprehensive look at best practices in government public relations and media engagement.',
      thumbnail: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Career Opportunities in Defense Sector',
      channel: 'NDTV 24x7',
      type: 'Special Program',
      date: '2024-04-18',
      month: 'april',
      url: '#',
      duration: '35:15',
      description: 'Highlighting career prospects and growth opportunities in India\'s defense manufacturing sector.',
      thumbnail: 'https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'National Security and Strategic Communication',
      channel: 'News18 India',
      type: 'Expert Analysis',
      date: '2024-05-05',
      month: 'may',
      url: '#',
      duration: '25:40',
      description: 'Analysis of communication strategies in national security context and their effectiveness.',
      thumbnail: 'https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Media Relations in Defense Establishments',
      channel: 'Zee News',
      type: 'Interview',
      date: '2024-05-20',
      month: 'may',
      url: '#',
      duration: '18:25',
      description: 'Insights into effective media relations strategies for defense and government organizations.',
      thumbnail: 'https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Future of Defense Public Relations',
      channel: 'ANI News',
      type: 'Round Table',
      date: '2024-06-10',
      month: 'june',
      url: '#',
      duration: '40:10',
      description: 'Round table discussion on the future trends and challenges in defense sector public relations.',
      thumbnail: 'https://images.pexels.com/photos/1181692/pexels-photo-1181692.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

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
    { value: 'december', label: 'December' }
  ];

  const filteredCoverage = coverage.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth === 'all' || item.month === selectedMonth;
    return matchesSearch && matchesMonth;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Interview': return 'bg-blue-100 text-blue-800';
      case 'Panel Discussion': return 'bg-green-100 text-green-800';
      case 'Feature Story': return 'bg-purple-100 text-purple-800';
      case 'Documentary': return 'bg-red-100 text-red-800';
      case 'Special Program': return 'bg-orange-100 text-orange-800';
      case 'Expert Analysis': return 'bg-indigo-100 text-indigo-800';
      case 'Round Table': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            English Electronic Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Television appearances, interviews, and features on leading English news channels and digital platforms
          </p>
        </div>

        {/* Featured Social Media Links Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Featured Social Media Links</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* YouTube Links */}
            <div className="flex flex-col items-center">
              <span className="mb-2 text-red-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12C0 8.355 0 12 0 12s0 3.645.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.645 24 12 24 12s0-3.645-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></span>
              <div className="flex flex-col gap-2">
                <a href="https://youtu.be/R9ybcGleUYk?si=RskEYZ5O6YQidB1g" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 1</a>
                <a href="https://youtu.be/wU6lwBagDpE?si=_8P8mLPTlGlLiaRL" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 2</a>
                <a href="https://youtu.be/_N7o9-VYsI0?si=TFrfn3FqqW0Yt-bO" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 3</a>
                <a href="https://youtu.be/SkQbXzCDm4U?si=xGLp3fsF8fSYjPuA" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 4</a>
                <a href="https://youtu.be/SkQbXzCDm4U?si=xGLp3fsF8fSYjPuA" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 5</a>
                <a href="https://youtu.be/ZnynNi1ojLg?si=qPUv12afFirt4oN7" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 6</a>
                <a href="https://youtu.be/8uAAML5UlP4?si=oR-hNraNZUqgl2nN" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 7</a>
                <a href="https://www.youtube.com/live/2PDTNePTehU?si=YoO87q6ryEWhFZsN" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 8</a>
                <a href="https://www.youtube.com/live/l1rQ7rZ75Nw?si=IDnH0wtaxqbcH95S" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube 9</a>
              </div>
            </div>
            {/* Twitter Links */}
            <div className="flex flex-col items-center">
              <span className="mb-2 text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.007-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></span>
              <div className="flex flex-col gap-2">
                <a href="https://x.com/IndiaToday/status/1808124914215292932?t=uqE1vkZcUkLttM1dS29ORg&s=08" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Twitter 1</a>
                <a href="https://x.com/TheNewIndian_in/status/1889589599296430588?t=8Q2TAT07oGXXTxdJi38tA&s=19" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Twitter 2</a>
                <a href="https://x.com/indiatoday/status/1889746152888877157?s=48" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Twitter 3</a>
                <a href="https://x.com/aajtak/status/1890776780979437823?s=48" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Twitter 4</a>
              </div>
            </div>
            {/* Facebook Links */}
            <div className="flex flex-col items-center">
              <span className="mb-2 text-blue-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></span>
              <div className="flex flex-col gap-2">
                <a href="https://www.facebook.com/share/v/gDCFVACvuXVsKHmR/?mibextid=D5vuiz" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Facebook 1</a>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs or channels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {months.map(month => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoverage.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Tv className="h-4 w-4" />
                  <span className="font-medium text-blue-600">{item.channel}</span>
                  <span>•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(item.date)}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Watch Program
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCoverage.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No programs found matching your criteria.</p>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{coverage.length}+</div>
              <div className="text-gray-600">TV Appearances</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
              <div className="text-gray-600">Leading Channels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-gray-600">Program Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500K+</div>
              <div className="text-gray-600">Estimated Viewership</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicMediaEnglish;