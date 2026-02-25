import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Leaf, 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingCart,
  Bell,
  Moon,
  Sun
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Programs',
      href: '/programs',
      dropdown: [
        { name: 'Mindfulness & Meditation', href: '/programs/mindfulness' },
        { name: 'Ayurvedic Healing', href: '/programs/ayurveda' },
        { name: 'Yoga Therapy', href: '/programs/yoga' },
        { name: 'Nutrition & Wellness', href: '/programs/nutrition' },
        { name: 'Life Coaching', href: '/programs/coaching' }
      ]
    },
    {
      name: 'Ayurveda',
      href: '/ayurveda',
      dropdown: [
        { name: 'What is Ayurveda?', href: '/ayurveda#introduction' },
        { name: 'Dosha Assessment', href: '/ayurveda#doshas' },
        { name: 'Ayurvedic Therapies', href: '/ayurveda#therapies' },
        { name: 'Sacred Herbs', href: '/ayurveda#herbs' },
        { name: 'Learn Ayurveda', href: '/ayurveda#courses' }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'AI Diagnosis', href: '/ai-diagnosis' },
        { name: '24/7 Herb Shop', href: '/herb-pharmacy' },
        { name: 'Wellness Tracker', href: '/wellness-tracker' },
        { name: 'Health Resources', href: '/health-resources' },
        { name: 'Find Doctors', href: '/nearby-doctors' },
        { name: 'Ayurveda Store', href: '/store' },
        { name: 'Health Assistant', href: '/help' }
      ]
    },
    { name: 'Careers', href: '/jobs' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Leaf className={`w-10 h-10 transition-colors duration-300 ${
                scrolled ? 'text-emerald-600' : 'text-white'
              } group-hover:text-emerald-500`} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              PrakritiPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`font-medium transition-all duration-300 hover:text-emerald-500 flex items-center ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  } ${location.pathname === item.href ? 'text-emerald-500' : ''}`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-4">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-6 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-emerald-100 ${
                scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-emerald-100 ${
                scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className={`p-2 rounded-full transition-all duration-300 hover:bg-emerald-100 relative ${
              scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
            }`}>
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className={`p-2 rounded-full transition-all duration-300 hover:bg-emerald-100 ${
              scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
            }`}>
              <ShoppingCart className="w-5 h-5" />
            </button>

            <button className={`p-2 rounded-full transition-all duration-300 hover:bg-emerald-100 ${
              scrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
            }`}>
              <User className="w-5 h-5" />
            </button>

            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="pb-4">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search programs, articles, resources..."
                className="w-full px-4 py-3 pl-12 bg-white rounded-full border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 font-medium hover:text-emerald-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-emerald-600 text-white py-3 rounded-full hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;