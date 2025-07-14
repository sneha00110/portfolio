import { Link } from 'react-router-dom';

const highlights = [
  {
    title: 'Gallery',
    description: 'Explore a curated collection of personal, professional, event, and news photos.',
    link: '/gallery',
  },
  {
    title: 'Print Media',
    description: 'Read the latest news and features in Hindi and English print media.',
    link: '/print-media-hindi',
  },
  {
    title: 'Electronic Media',
    description: 'Watch and discover TV and digital media coverage.',
    link: '/electronic-media',
  },
  {
    title: 'Social Media',
    description: 'Connect on Twitter, YouTube, Facebook, and more.',
    link: '/social-media',
  },
  {
    title: 'Recommendations',
    description: 'Read professional recommendations and testimonials.',
    link: '/recommendations',
  },
];

const HomePage = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col justify-center items-center py-16 overflow-hidden">
    {/* Blurred background image */}
    <img 
      src="/backgrounf.jpg" 
      alt="Background" 
      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-lg z-0" 
      style={{ filter: 'blur(16px)', objectPosition: 'center' }}
    />
    {/* Hero Section */}
    <div className="text-center mb-16 animate-fade-in flex flex-col items-center justify-center relative z-10">
      <div className="flex items-center justify-center mb-4 gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg">Hello,Rana Vanshmani Here</h1>
      </div>
      <p className="text-xl md:text-2xl text-blue-700 mb-8 max-w-2xl mx-auto">Defense Public Relations Strategist | Former PRO, OEF Hazratpur, Ministry of Defense</p>
      <Link
        to="/gallery"
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 animate-bounce"
      >
        View Gallery
      </Link>
    </div>
    {/* Highlights Section */}
    <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in-up relative z-10">
      {highlights.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:bg-blue-50 transition-all duration-300 border border-blue-100 hover:scale-105"
        >
          <div className="text-3xl font-bold text-blue-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">{item.title}</div>
          <div className="text-blue-600 text-center mb-4">{item.description}</div>
          <span className="mt-auto text-blue-700 font-semibold group-hover:underline">Go to {item.title} &rarr;</span>
        </Link>
      ))}
    </div>
  </div>
);

export default HomePage;