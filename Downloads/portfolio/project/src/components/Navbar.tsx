import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Print Media (Hindi)', href: '/print-media-hindi' },
    { name: 'Print Media (English)', href: '/print-media-english' },
    { name: 'Electronic Media', href: '/electronic-media' },
    { name: 'Social Media', href: '/social-media' },
    { name: 'Magazines', href: '/magazines' },
    { name: 'Recommendations', href: '/recommendations' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full shadow-md border-2 border-blue-200 bg-white object-cover" />
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent">Rana Vanshmani</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-white bg-gradient-to-r from-emerald-600 to-purple-600 shadow-lg'
                    : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-purple-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-purple-500 transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-white bg-gradient-to-r from-emerald-600 to-purple-600 shadow-lg'
                    : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-purple-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;