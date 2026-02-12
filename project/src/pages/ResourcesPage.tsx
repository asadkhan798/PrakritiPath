import React, { useState } from 'react';
import { 
  Download, 
  Play, 
  BookOpen, 
  Headphones, 
  Video, 
  FileText,
  Star,
  Clock,
  Users,
  Search,
  Filter,
  Heart,
  Share2,
  Calendar,
  Zap
} from 'lucide-react';

const ResourcesPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resourceTypes = [
    { id: 'all', name: 'All Resources', count: 156, icon: BookOpen },
    { id: 'meditations', name: 'Guided Meditations', count: 45, icon: Headphones },
    { id: 'videos', name: 'Video Tutorials', count: 38, icon: Video },
    { id: 'ebooks', name: 'E-books & Guides', count: 28, icon: FileText },
    { id: 'podcasts', name: 'Podcast Episodes', count: 25, icon: Headphones },
    { id: 'worksheets', name: 'Worksheets & Tools', count: 20, icon: Download }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "21-Day Mindfulness Challenge",
      description: "Transform your daily routine with this comprehensive mindfulness program featuring guided meditations, journaling prompts, and practical exercises.",
      type: "meditations",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "21 days",
      downloads: 12500,
      rating: 4.9,
      featured: true,
      free: true,
      author: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "Complete Ayurvedic Lifestyle Guide",
      description: "150-page comprehensive guide covering dosha assessment, daily routines, seasonal eating, and herbal remedies for optimal wellness.",
      type: "ebooks",
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "150 pages",
      downloads: 8900,
      rating: 4.8,
      featured: true,
      free: false,
      price: "$19.99",
      author: "Priya Sharma"
    }
  ];

  const resources = [
    {
      id: 3,
      title: "Morning Meditation: Gentle Awakening",
      description: "Start your day with this peaceful 15-minute guided meditation designed to center your mind and set positive intentions.",
      type: "meditations",
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "15 min",
      downloads: 15600,
      rating: 4.9,
      free: true,
      author: "Lama Tenzin"
    },
    {
      id: 4,
      title: "Therapeutic Yoga for Back Pain",
      description: "Professional instructional video demonstrating gentle yoga sequences specifically designed for back pain relief and prevention.",
      type: "videos",
      image: "https://images.pexels.com/photos/3984341/pexels-photo-3984341.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "45 min",
      downloads: 11200,
      rating: 4.7,
      free: true,
      author: "Michael Rodriguez"
    },
    {
      id: 5,
      title: "Nutrition Planning Worksheet",
      description: "Interactive meal planning template with space for weekly menus, grocery lists, and nutritional tracking.",
      type: "worksheets",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "PDF",
      downloads: 7800,
      rating: 4.6,
      free: true,
      author: "Dr. Emma Wilson"
    },
    {
      id: 6,
      title: "The Science of Sleep Podcast Series",
      description: "5-part podcast series exploring sleep hygiene, circadian rhythms, and natural remedies for better rest and recovery.",
      type: "podcasts",
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5 episodes",
      downloads: 9400,
      rating: 4.8,
      free: true,
      author: "Dr. Sleep Wellness Team"
    },
    {
      id: 7,
      title: "Breathwork for Anxiety Relief",
      description: "Learn powerful breathing techniques to manage anxiety and stress with this comprehensive 20-minute guided session.",
      type: "meditations",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "20 min",
      downloads: 18200,
      rating: 4.9,
      free: true,
      author: "Dr. Sarah Chen"
    },
    {
      id: 8,
      title: "Seasonal Detox Recipe Collection",
      description: "50+ delicious and nutritious recipes for natural detoxification, organized by season with shopping lists and prep guides.",
      type: "ebooks",
      image: "https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "75 pages",
      downloads: 6500,
      rating: 4.7,
      free: false,
      price: "$14.99",
      author: "Chef Maria Santos"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'meditations': return Headphones;
      case 'videos': return Video;
      case 'ebooks': return FileText;
      case 'podcasts': return Headphones;
      case 'worksheets': return Download;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'meditations': return 'text-green-600 bg-green-100';
      case 'videos': return 'text-red-600 bg-red-100';
      case 'ebooks': return 'text-blue-600 bg-blue-100';
      case 'podcasts': return 'text-purple-600 bg-purple-100';
      case 'worksheets': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Free Wellness
            <span className="block text-yellow-300">Resources</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of guided meditations, educational content, 
            practical tools, and expert insights to support your wellness journey.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <input
              type="text"
              placeholder="Search meditations, guides, videos, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              156 Free Resources
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              50,000+ Downloads This Month
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              4.8 Average Rating
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Resource Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Resource Types
                </h3>
                <div className="space-y-2">
                  {resourceTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                          selectedType === type.id
                            ? 'bg-green-100 text-green-700 font-semibold'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center">
                          <IconComponent className="w-4 h-4 mr-2" />
                          <span>{type.name}</span>
                        </div>
                        <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">{type.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Quick Access
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left text-sm hover:text-yellow-200 transition-colors">
                    → 5-Minute Morning Meditation
                  </button>
                  <button className="w-full text-left text-sm hover:text-yellow-200 transition-colors">
                    → Stress Relief Breathing
                  </button>
                  <button className="w-full text-left text-sm hover:text-yellow-200 transition-colors">
                    → Daily Gratitude Journal
                  </button>
                  <button className="w-full text-left text-sm hover:text-yellow-200 transition-colors">
                    → Healthy Recipe Library
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">New Resources Weekly</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get notified when we add new meditations, guides, and tools.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Resources */}
            <section className="mb-12">
              <div className="flex items-center mb-8">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <h2 className="text-3xl font-bold text-gray-800">Featured Resources</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredResources.map((resource) => {
                  const IconComponent = getTypeIcon(resource.type);
                  return (
                    <div key={resource.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(resource.type)}`}>
                            <IconComponent className="w-4 h-4 inline mr-1" />
                            {resource.type}
                          </div>
                          {resource.free ? (
                            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              FREE
                            </div>
                          ) : (
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {resource.price}
                            </div>
                          )}
                        </div>

                        {/* Quick Stats */}
                        <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                            {resource.rating}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {resource.downloads.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {resource.duration}
                          </div>
                          <div className="text-sm text-gray-500">
                            by {resource.author}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <button className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                            <Download className="w-4 h-4 mr-2" />
                            {resource.free ? 'Download Free' : 'Purchase'}
                          </button>
                          <button className="border border-green-600 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                            <Heart className="w-4 h-4 mr-2" />
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* All Resources */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  {filteredResources.length} Resources Found
                </h2>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Sort by Popularity</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Newest</option>
                  <option>Sort by Most Downloaded</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => {
                  const IconComponent = getTypeIcon(resource.type);
                  return (
                    <div key={resource.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        
                        <div className="absolute top-3 left-3">
                          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(resource.type)}`}>
                            <IconComponent className="w-3 h-3 inline mr-1" />
                            {resource.type}
                          </div>
                        </div>

                        {resource.free && (
                          <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            FREE
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 flex items-center text-white text-xs">
                          <Star className="w-3 h-3 fill-current text-yellow-400 mr-1" />
                          {resource.rating}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {resource.duration}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {resource.downloads.toLocaleString()}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">by {resource.author}</span>
                          <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <Heart className="w-4 h-4" />
                            </button>
                            <button className="text-gray-400 hover:text-blue-500 transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors">
                              <Download className="w-3 h-3 inline mr-1" />
                              {resource.free ? 'Free' : resource.price}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-16 h-16 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No Resources Found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or browse all resource types.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedType('all');
                    }}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Load More */}
              {filteredResources.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Load More Resources
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;