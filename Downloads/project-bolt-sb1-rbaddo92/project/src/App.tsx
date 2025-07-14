import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import PrintMediaHindi from './pages/PrintMediaHindi';
import PrintMediaEnglish from './pages/PrintMediaEnglish';
import ElectronicMedia from './pages/ElectronicMedia';
import SocialMedia from './pages/SocialMedia';
import Recommendations from './pages/Recommendations';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-emerald-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/print-media-hindi" element={<PrintMediaHindi />} />
            <Route path="/print-media-english" element={<PrintMediaEnglish />} />
            <Route path="/electronic-media" element={<ElectronicMedia />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;