import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Linkedin,
  Heart,
  Award,
  Shield,
  Globe
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    programs: [
      { name: 'Mindfulness Training', href: '/programs/mindfulness' },
      { name: 'Ayurvedic Healing', href: '/programs/ayurveda' },
      { name: 'Yoga Therapy', href: '/programs/yoga' },
      { name: 'Nutrition Coaching', href: '/programs/nutrition' },
      { name: 'Life Coaching', href: '/programs/coaching' }
    ],
    resources: [
      { name: 'Free Meditations', href: '/resources/meditations' },
      { name: 'Wellness Blog', href: '/blog' },
      { name: 'Recipe Library', href: '/resources/recipes' },
      { name: 'Exercise Routines', href: '/resources/exercises' },
      { name: 'Wellness Tools', href: '/resources/tools' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Instructors', href: '/about/instructors' },
      { name: 'Success Stories', href: '/about/stories' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Press Kit', href: '/about/press' }
    ],
    support: [
      { name: 'Help Center', href: '/support' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Community', href: '/community' },
      { name: 'Live Chat', href: '#' },
      { name: 'FAQs', href: '/support/faq' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/prakritipath', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/prakritipath', name: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/prakritipath', name: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/prakritipath', name: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/company/prakritipath', name: 'LinkedIn' }
  ];

  const trustBadges = [
    { icon: Award, text: 'ISO Certified' },
    { icon: Shield, text: 'Secure & Private' },
    { icon: Globe, text: 'Global Community' },
    { icon: Heart, text: 'Wellness Focused' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Connected to Your Wellness Journey
            </h3>
            <p className="text-gray-300 mb-8">
              Get weekly tips, exclusive content, and early access to new programs.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full hover:bg-emerald-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Join 50,000+ wellness enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <Leaf className="w-10 h-10 text-emerald-400" />
              <span className="text-2xl font-bold text-white">PrakritiPath</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted companion on the journey to holistic wellness, authentic living, 
              and inner transformation. Join our global community of wellness seekers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <a href="mailto:hello@prakritipath.com" className="hover:text-emerald-400 transition-colors">
                  hello@prakritipath.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                <a href="tel:+15551234567" className="hover:text-emerald-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                <span>123 Wellness Ave, Mindful City, MC 12345</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center text-sm text-gray-400">
                  <badge.icon className="w-4 h-4 text-emerald-400 mr-2" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 lg:mb-0">
              <p className="text-gray-300 text-center sm:text-left">
                © 2024 PrakritiPath. All rights reserved. Made with ❤️ for your wellness journey.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;