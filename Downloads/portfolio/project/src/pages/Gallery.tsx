import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  // Sectioned images from the port directory
  const sections = [
    {
      title: 'Personal',
      images: [
        { url: '/port/personal/135.jpg' },
        { url: '/port/personal/130.jpg' },
        { url: '/port/personal/124.jpg' },
        { url: '/port/personal/121.jpg' },
        { url: '/port/personal/120.jpg' },
        { url: '/port/personal/119.jpg' },
        { url: '/port/personal/118.jpg' },
        { url: '/port/personal/117.jpg' },
        { url: '/port/personal/112.jpg' },
        { url: '/port/personal/111.jpg' },
        { url: '/port/personal/88.jpg' },
        { url: '/port/personal/77.jpg' },
        { url: '/port/personal/55.jpg' },
        { url: '/port/personal/33.jpg' },
      ],
    },
    {
      title: 'Events',
      images: [
        { url: '/port/events/123.jpg' },
        { url: '/port/events/122.jpg' },
        { url: '/port/events/114.jpg' },
        { url: '/port/events/115.jpg' },
        { url: '/port/events/113.jpg' },
        { url: '/port/events/10.jpg' },
        { url: '/port/events/99.jpg' },
        { url: '/port/events/22.jpg' },
      ],
    },
    {
      title: 'Professional',
      images: [
        { url: '/port/professional/131.jpg' },
        { url: '/port/professional/132.jpg' },
        { url: '/port/professional/129.jpg' },
        { url: '/port/professional/128.jpg' },
        { url: '/port/professional/125.jpg' },
        { url: '/port/professional/66.jpg' },
        { url: '/port/professional/44.jpg' },
        { url: '/port/professional/11.jpg' },
      ],
    },
    {
      title: 'News',
      images: [
        { url: '/port/news/q.jpg' },
        { url: '/port/news/WhatsApp%20Image%202025-07-01%20at%2013.15.41_9c111626.jpg' },
        { url: '/port/news/WhatsApp%20Image%202025-07-01%20at%2013.15.41_83fb7586.jpg' },
        { url: '/port/news/WhatsApp%20Image%202025-07-01%20at%2013.15.43_83f5789f.jpg' },
        { url: '/port/news/WhatsApp%20Image%202025-07-01%20at%2012.58.34_e4bea6e0.jpg' },
      ],
    },
  ];

  const [selectedImage, setSelectedImage] = useState<{ section: number; index: number } | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const openModal = (sectionIdx: number, imgIdx: number) => {
    setSelectedImage({ section: sectionIdx, index: imgIdx });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Modal navigation helpers
  const nextImage = () => {
    if (selectedImage) {
      const { section, index } = selectedImage;
      const imgs = sections[section].images;
      setSelectedImage({
        section,
        index: (index + 1) % imgs.length,
      });
    }
  };
  const prevImage = () => {
    if (selectedImage) {
      const { section, index } = selectedImage;
      const imgs = sections[section].images;
      setSelectedImage({
        section,
        index: index === 0 ? imgs.length - 1 : index - 1,
      });
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual documentation of professional achievements, events, and service to the nation
          </p>
        </div>

        {/* Section Navbar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section, idx) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(idx)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeSection === idx
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Sectioned Gallery */}
        <div className="space-y-16">
          <div key={sections[activeSection].title}>
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">{sections[activeSection].title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {sections[activeSection].images.map((image, imgIdx) => (
                <div
                  key={image.url}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white hover:bg-blue-50"
                  onClick={() => openModal(activeSection, imgIdx)}
                >
                  <div className="aspect-square overflow-hidden rounded-t-2xl">
                    <img
                      src={image.url}
                      alt="Gallery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-12 w-12" />
              </button>
              <img
                src={sections[selectedImage.section].images[selectedImage.index].url}
                alt="Gallery"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;