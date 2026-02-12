import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  Play,
  Download,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

const ProgramsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Programs', count: 24 },
    { id: 'mindfulness', name: 'Mindfulness & Meditation', count: 8 },
    { id: 'ayurveda', name: 'Ayurvedic Healing', count: 6 },
    { id: 'yoga', name: 'Yoga Therapy', count: 5 },
    { id: 'nutrition', name: 'Nutrition & Wellness', count: 5 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const programs = [
    {
      id: 1,
      title: "Mindful Living Mastery",
      instructor: "Dr. Sarah Chen",
      description: "Comprehensive mindfulness training combining meditation, stress reduction, and present-moment awareness techniques.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "mindfulness",
      level: "beginner",
      duration: "8 weeks",
      students: 12400,
      rating: 4.9,
      price: 197,
      originalPrice: 297,
      features: ["40+ HD video lessons", "Daily meditation practices", "Stress reduction toolkit", "Private community access"],
      outcomes: ["Reduced stress by 60%", "Better sleep quality", "Improved focus", "Emotional resilience"]
    },
    {
      id: 2,
      title: "Ayurvedic Healing Arts",
      instructor: "Priya Sharma",
      description: "Ancient healing wisdom for modern wellness. Learn constitutional analysis and personalized wellness protocols.",
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "ayurveda",
      level: "intermediate",
      duration: "12 weeks",
      students: 8900,
      rating: 4.8,
      price: 297,
      originalPrice: 397,
      features: ["Complete dosha assessment", "Herbal medicine guide", "Seasonal routines", "One-on-one consultation"],
      outcomes: ["Balanced constitution", "Natural healing", "Improved digestion", "Enhanced vitality"]
    },
    {
      id: 3,
      title: "Therapeutic Yoga Journey",
      instructor: "Michael Rodriguez",
      description: "Healing-focused yoga sequences designed to restore, strengthen, and align body, mind, and spirit.",
      image: "https://images.pexels.com/photos/3984341/pexels-photo-3984341.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "yoga",
      level: "beginner",
      duration: "10 weeks",
      students: 15600,
      rating: 4.9,
      price: 247,
      originalPrice: 347,
      features: ["Therapeutic sequences", "Anatomy education", "Injury prevention", "Modification techniques"],
      outcomes: ["Pain relief", "Increased flexibility", "Better posture", "Stress reduction"]
    },
    {
      id: 4,
      title: "Holistic Nutrition Mastery",
      instructor: "Dr. Emma Wilson",
      description: "Transform your relationship with food through mindful eating and sustainable lifestyle changes.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "nutrition",
      level: "beginner",
      duration: "8 weeks",
      students: 11200,
      rating: 4.7,
      price: 177,
      originalPrice: 247,
      features: ["Personalized meal plans", "Recipe library", "Nutritional education", "Shopping guides"],
      outcomes: ["Weight management", "Increased energy", "Better digestion", "Healthy relationship with food"]
    },
    {
      id: 5,
      title: "Advanced Meditation Techniques",
      instructor: "Lama Tenzin",
      description: "Deep dive into advanced meditation practices including loving-kindness, body scanning, and breath work.",
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "mindfulness",
      level: "advanced",
      duration: "6 weeks",
      students: 5600,
      rating: 4.9,
      price: 347,
      originalPrice: 447,
      features: ["Advanced techniques", "Personal mentorship", "Retreat access", "Certification path"],
      outcomes: ["Deep inner peace", "Spiritual growth", "Enhanced awareness", "Teaching capability"]
    },
    {
      id: 6,
      title: "Panchakosha Healing System",
      instructor: "Dr. Raj Patel",
      description: "Ancient five-layer healing system addressing physical, energetic, mental, wisdom, and bliss bodies.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "ayurveda",
      level: "advanced",
      duration: "16 weeks",
      students: 3400,
      rating: 4.8,
      price: 497,
      originalPrice: 697,
      features: ["Complete assessment", "Personalized protocols", "Energy healing", "Spiritual guidance"],
      outcomes: ["Holistic healing", "Energy alignment", "Spiritual awakening", "Life transformation"]
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || program.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Life with
            <span className="block text-yellow-300">Expert-Led Programs</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Choose from 20+ comprehensive wellness programs designed by world-class experts. 
            Start your journey to optimal health and wellbeing today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              7-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Lifetime access
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Expert support
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Search Programs</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by title, instructor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Categories</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-emerald-100 text-emerald-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Difficulty Level</label>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                        selectedLevel === level.id
                          ? 'bg-blue-100 text-blue-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {level.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Offer */}
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Limited Time Offer!</h3>
                <p className="text-sm mb-4">Get 50% off all programs this month</p>
                <button className="w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Claim Discount
                </button>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredPrograms.length} Programs Found
              </h2>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Sort by Popularity</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Price (Low to High)</option>
                  <option>Sort by Price (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPrograms.map((program) => (
                <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.level}
                    </div>
                    
                    {/* Trending */}
                    {program.students > 10000 && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Trending
                      </div>
                    )}
                    
                    {/* Quick Info */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white">
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                        {program.rating}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {program.students.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm">by {program.instructor}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {program.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Outcomes Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">What You'll Achieve:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.outcomes.slice(0, 2).map((outcome, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="text-right">
                        {program.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">${program.originalPrice}</div>
                        )}
                        <div className="text-2xl font-bold text-emerald-600">${program.price}</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center">
                        <Play className="w-4 h-4 mr-2" />
                        Start Free Trial
                      </button>
                      <button className="border border-emerald-600 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center">
                        <Heart className="w-4 h-4 mr-2" />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Programs Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all programs.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                  }}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;