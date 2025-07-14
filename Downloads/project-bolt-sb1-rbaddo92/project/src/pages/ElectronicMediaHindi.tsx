import React, { useState } from 'react';
import { Calendar, ExternalLink, Search, Filter, Play, Tv } from 'lucide-react';

const ElectronicMediaHindi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('all');

  // Sample Hindi electronic media coverage - replace with actual data
  const coverage = [
    {
      id: 1,
      title: 'रक्षा मंत्रालय में नवाचार की चर्चा',
      channel: 'आज तक',
      type: 'Interview',
      date: '2024-01-25',
      month: 'january',
      url: '#',
      duration: '12:30',
      description: 'रक्षा क्षेत्र में जनसंपर्क की नई रणनीति पर विस्तृत चर्चा',
      thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'सैन्य उत्पादन में आत्मनिर्भरता की दिशा',
      channel: 'एनडीटीवी इंडिया',
      type: 'Panel Discussion',
      date: '2024-02-18',
      month: 'february',
      url: '#',
      duration: '25:45',
      description: 'OEF हज़रतपुर की भूमिका और भविष्य की योजनाओं पर चर्चा',
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'रक्षा संचार में डिजिटल क्रांति',
      channel: 'जी न्यूज़',
      type: 'Feature Story',
      date: '2024-03-08',
      month: 'march',
      url: '#',
      duration: '18:20',
      description: 'सोशल मीडिया और डिजिटल प्लेटफॉर्म के माध्यम से रक्षा संचार',
      thumbnail: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'जनसंपर्क में प्रभावी रणनीति का प्रयोग',
      channel: 'इंडिया टीवी',
      type: 'News Report',
      date: '2024-03-22',
      month: 'march',
      url: '#',
      duration: '8:15',
      description: 'सरकारी संस्थानों में जनसंपर्क की बेहतर तकनीकों का विश्लेषण',
      thumbnail: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'युवाओं के लिए रक्षा क्षेत्र में अवसर',
      channel: 'एबीपी न्यूज़',
      type: 'Special Program',
      date: '2024-04-15',
      month: 'april',
      url: '#',
      duration: '30:00',
      description: 'रक्षा उत्पादन और संबंधित क्षेत्रों में करियर की संभावनाएं',
      thumbnail: 'https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'राष्ट्रीय सुरक्षा में प्रभावी संचार का महत्व',
      channel: 'न्यूज़18 इंडिया',
      type: 'Expert Analysis',
      date: '2024-05-10',
      month: 'may',
      url: '#',
      duration: '22:30',
      description: 'राष्ट्रीय सुरक्षा के संदर्भ में जनसंपर्क की भूमिका पर विशेषज्ञ मत',
      thumbnail: 'https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const months = [
    { value: 'all', label: 'सभी महीने' },
    { value: 'january', label: 'जनवरी' },
    { value: 'february', label: 'फरवरी' },
    { value: 'march', label: 'मार्च' },
    { value: 'april', label: 'अप्रैल' },
    { value: 'may', label: 'मई' },
    { value: 'june', label: 'जून' },
    { value: 'july', label: 'जुलाई' },
    { value: 'august', label: 'अगस्त' },
    { value: 'september', label: 'सितंबर' },
    { value: 'october', label: 'अक्टूबर' },
    { value: 'november', label: 'नवंबर' },
    { value: 'december', label: 'दिसंबर' }
  ];

  const filteredCoverage = coverage.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMonth = selectedMonth === 'all' || item.month === selectedMonth;
    return matchesSearch && matchesMonth;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hi-IN', { 
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
      case 'News Report': return 'bg-orange-100 text-orange-800';
      case 'Special Program': return 'bg-red-100 text-red-800';
      case 'Expert Analysis': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            हिंदी इलेक्ट्रॉनिक मीडिया
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            हिंदी टेलीविजन चैनलों और डिजिटल प्लेटफॉर्म पर प्रसारित कार्यक्रम और साक्षात्कार
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
                placeholder="कार्यक्रम या चैनल खोजें..."
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
                  देखें
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCoverage.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">कोई कार्यक्रम नहीं मिला।</p>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{coverage.length}+</div>
              <div className="text-gray-600">टीवी कार्यक्रम</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
              <div className="text-gray-600">प्रमुख चैनल</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">कार्यक्रम प्रकार</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2L+</div>
              <div className="text-gray-600">अनुमानित दर्शक</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicMediaHindi;