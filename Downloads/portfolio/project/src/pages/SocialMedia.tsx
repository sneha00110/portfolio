import React, { useState } from 'react';
import { Calendar, ExternalLink, Search, Filter, Heart, MessageCircle, Share, Users, TrendingUp, Eye, Instagram, Twitter, Shield } from 'lucide-react';

const SocialMedia = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // Sample social media engagement data - replace with actual data
  const posts = [
    {
      id: 1,
      platform: 'Twitter',
      content: 'Proud to serve the nation through strategic defense communication. Every initiative towards transparency strengthens our democracy. #DefenseExcellence #NationalService',
      date: '2024-06-15',
      likes: 2847,
      comments: 156,
      shares: 423,
      url: 'https://twitter.com/RanaVanshMani1',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      platform: 'Instagram',
      content: 'Reflecting on the journey from OEF Hazratpur to becoming India\'s Defense Public Relations Strategist. The commitment to excellence in government communication continues.',
      date: '2024-06-10',
      likes: 1923,
      comments: 87,
      shares: 234,
      url: 'https://instagram.com/RanaVanshMani1',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      platform: 'Instagram',
      content: 'Behind the scenes at the Defense Ministry press briefing. Ensuring accurate information reaches every citizen. #DefenseIndia #PublicService',
      date: '2024-06-08',
      likes: 5634,
      comments: 298,
      shares: 567,
      url: 'https://instagram.com/RanaVanshMani1',
      image: 'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      platform: 'Twitter',
      content: 'Innovation in defense manufacturing requires effective communication strategies. Proud to contribute to India\'s Atmanirbhar Bharat vision. #MakeInIndia #DefenseProduction',
      date: '2024-06-05',
      likes: 3567,
      comments: 189,
      shares: 456,
      url: 'https://twitter.com/RanaVanshMani1',
      image: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      platform: 'Instagram',
      content: 'Former Editor-In-Chief at Lok Stambh, now serving as Defense Public Relations Strategist. The evolution of government communication in the digital age.',
      date: '2024-06-02',
      likes: 2145,
      comments: 112,
      shares: 345,
      url: 'https://instagram.com/RanaVanshMani1',
      image: 'https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      platform: 'Twitter',
      content: 'Meeting with defense correspondents to discuss upcoming initiatives. Transparency and accuracy remain our top priorities. #MediaRelations #DefenseNews',
      date: '2024-05-28',
      likes: 4123,
      comments: 234,
      shares: 423,
      url: 'https://twitter.com/RanaVanshMani1',
      image: 'https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const platforms = [
    { value: 'all', label: 'All Platforms' },
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Instagram', label: 'Instagram' }
  ];

  const filteredPosts = selectedPlatform === 'all' 
    ? posts 
    : posts.filter(post => post.platform === selectedPlatform);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Twitter': return 'bg-blue-100 text-blue-800';
      case 'Instagram': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter': return <Twitter className="h-4 w-4" />;
      case 'Instagram': return <Instagram className="h-4 w-4" />;
      default: return null;
    }
  };

  const getTotalEngagement = () => {
    return posts.reduce((total, post) => total + post.likes + post.comments + post.shares, 0);
  };

  const getAverageEngagement = () => {
    const total = getTotalEngagement();
    return Math.round(total / posts.length);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 bg-white/80 rounded-2xl px-4 py-6 shadow-md max-w-2xl mx-auto backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Social Media Engagement
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional social media presence focused on defense communication, public service, and national development
          </p>
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://twitter.com/RanaVanshMani1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Twitter className="h-5 w-5" />
              <span className="font-medium">@RanaVanshMani1</span>
            </a>
            <a 
              href="https://instagram.com/RanaVanshMani1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">@RanaVanshMani1</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;