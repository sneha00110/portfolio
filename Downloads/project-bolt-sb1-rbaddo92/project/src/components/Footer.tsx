import React from 'react';
import { Mail, Phone, MapPin, Shield, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Rana Vanshmani</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Defense Public Relations Strategist, Former Editor-In-Chief at Lok Stambh, and Former Media Advisor panel member to VC, GJUST, Hisar. Dedicated to excellence in government communication and public affairs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/RanaVanshMani1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://twitter.com/RanaVanshMani1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">+91 6202234379</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">Vanshmani108@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1" />
                <div>
                  <p className="text-slate-300 font-medium">Present:</p>
                  <p className="text-slate-400 text-sm">DDA Flats Kalkaji, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-300">Professional Areas</h3>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Defense Public Relations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Editorial Leadership
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Strategic Communication
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Media Advisory
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Government Affairs
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Rana Vanshmani. Official portfolio for professional representation.
            </p>
            <div className="text-slate-400 text-sm">
              <p>Permanent Address: 31/8 Ordnance Equipment Factory, Hazratpur, Firozabad, UP</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;