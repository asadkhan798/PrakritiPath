import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  TrendingUp, 
  BookOpen,
  Heart,
  MessageCircle,
  Share2,
  Filter
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'mindfulness', name: 'Mindfulness', count: 8 },
    { id: 'ayurveda', name: 'Ayurveda', count: 6 },
    { id: 'yoga', name: 'Yoga', count: 5 },
    { id: 'nutrition', name: 'Nutrition', count: 5 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Science Behind Mindfulness: How 10 Minutes Daily Can Transform Your Brain",
    excerpt: "Groundbreaking neuroscience research reveals how just 10 minutes of daily mindfulness practice can literally rewire your brain for better emotional regulation, enhanced focus, and reduced anxiety. Discover the fascinating science behind this ancient practice.",
    content: "Recent neuroscientific studies have shown remarkable changes in brain structure and function after just 8 weeks of regular mindfulness practice...",
    image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "mindfulness",
    author: {
      name: "Dr. Sarah Chen",
      role: "Neuroscientist & Mindfulness Teacher",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    date: "2024-01-15",
    readTime: "12 min read",
    likes: 234,
    comments: 45,
    shares: 67,
    trending: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Ayurvedic Morning Rituals: Ancient Wisdom for Modern Energy",
      excerpt: "Transform your mornings with these time-tested Ayurvedic practices designed to harmonize your doshas and energize your entire day.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "ayurveda",
      author: {
        name: "Priya Sharma",
        role: "Ayurveda Practitioner"
      },
      date: "2024-01-12",
      readTime: "8 min read",
      likes: 189,
      comments: 23,
      featured: false
    },
    {
      id: 3,
      title: "Yoga for Emotional Healing: Moving Through Trauma with Compassion",
      excerpt: "How therapeutic yoga practices can help process difficult emotions and create pathways for healing from past trauma.",
      image: "https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "yoga",
      author: {
        name: "Michael Rodriguez",
        role: "Certified Yoga Therapist"
      },
      date: "2024-01-10",
      readTime: "15 min read",
      likes: 156,
      comments: 34,
      featured: false
    },
    {
      id: 4,
      title: "Plant-Based Nutrition: Fueling Your Body for Optimal Wellness",
      excerpt: "Discover how a thoughtfully planned plant-based diet can enhance energy, improve digestion, and support long-term health.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "nutrition",
      author: {
        name: "Dr. Emma Wilson",
        role: "Holistic Nutritionist"
      },
      date: "2024-01-08",
      readTime: "10 min read",
      likes: 203,
      comments: 28,
      featured: false
    },
    {
      id: 5,
      title: "The Art of Meditation: Finding Stillness in a Chaotic World",
      excerpt: "Practical strategies for developing a consistent meditation practice that fits into your busy lifestyle.",
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "mindfulness",
      author: {
        name: "Lama Tenzin",
        role: "Buddhist Monk & Teacher"
      },
      date: "2024-01-05",
      readTime: "7 min read",
      likes: 178,
      comments: 19,
      featured: false
    },
    {
      id: 6,
      title: "Seasonal Eating According to Ayurveda: Winter Wellness Guide",
      excerpt: "Learn how to adjust your diet according to seasonal changes for optimal health and energy throughout winter.",
      image: "https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "ayurveda",
      author: {
        name: "Dr. Raj Patel",
        role: "Ayurvedic Physician"
      },
      date: "2024-01-03",
      readTime: "11 min read",
      likes: 134,
      comments: 15,
      featured: false
    },
    {
      id: 7,
      title: "Breathwork for Anxiety: Simple Techniques for Instant Calm",
      excerpt: "Master these powerful breathing techniques to reduce anxiety and restore inner peace anytime, anywhere.",
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "mindfulness",
      author: {
        name: "Dr. Sarah Chen",
        role: "Neuroscientist & Mindfulness Teacher"
      },
      date: "2024-01-01",
      readTime: "6 min read",
      likes: 267,
      comments: 42,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Wellness Wisdom
            <span className="block text-yellow-300">& Expert Insights</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover the latest research, practical tips, and transformative insights from our 
            community of wellness experts. Your journey to optimal health starts here.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                <p className="text-sm mb-4 text-white/90">
                  Get weekly wellness insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-lg text-white placeholder-white/70 border border-white/30 mb-3 focus:outline-none focus:border-white/50"
                />
                <button className="w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['meditation', 'stress relief', 'healthy eating', 'yoga poses', 'ayurveda', 'mindfulness', 'wellness tips', 'self-care'].map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-purple-100 hover:text-purple-600 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-red-500 font-semibold">Featured Article</span>
              </div>
              
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {featuredPost.category}
                  </div>
                  
                  {/* Trending Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Trending
                  </div>
                </div>
                
                <div className="p-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:text-purple-600 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h1>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <img 
                        src={featuredPost.author.image} 
                        alt={featuredPost.author.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">{featuredPost.author.name}</div>
                        <div className="text-sm text-gray-500">{featuredPost.author.role}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5 mr-1" />
                        {featuredPost.likes}
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5 mr-1" />
                        {featuredPost.comments}
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors">
                        <Share2 className="w-5 h-5 mr-1" />
                        {featuredPost.shares}
                      </button>
                    </div>
                    
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Recent Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Recent Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Author & Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author.name}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                        
                        <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-16 h-16 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">No Articles Found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or browse all articles.</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Load More */}
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Load More Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;