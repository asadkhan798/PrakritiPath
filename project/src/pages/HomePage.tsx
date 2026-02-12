import React, { useState, useEffect, createElement } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Heart,
  Star,
  Users,
  Award,
  CheckCircle,
  X, 
  Play,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Video,
  Download,
  MessageCircle,
  Calendar,
  Timer,
  Target,
  Clock,
  Sparkles,
  Globe,
  Shield,
  Zap,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Flame,
  Mountain,
  Flower,
  TreePine,
  Sunrise,
  Brain,
  Activity
} from 'lucide-react';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const [activeDoshaTab, setActiveDoshaTab] = useState(0);

  const stats = [
    { number: "50,000+", label: "Happy Students", icon: Users, color: "text-blue-600" },
    { number: "500+", label: "Expert Instructors", icon: Award, color: "text-purple-600" },
    { number: "98%", label: "Success Rate", icon: Star, color: "text-yellow-600" },
    { number: "24/7", label: "Support Available", icon: Heart, color: "text-red-600" },
    { number: "150+", label: "Countries Served", icon: Globe, color: "text-green-600" },
    { number: "1M+", label: "Lives Transformed", icon: Sparkles, color: "text-indigo-600" },
    { number: "5000+", label: "Years of Wisdom", icon: TreePine, color: "text-amber-600" },
    { number: "108", label: "Sacred Practices", icon: Flower, color: "text-pink-600" }
  ];

  const doshas = [
    {
      name: "Vata",
      element: "Air + Space",
      icon: Wind,
      color: "from-blue-500 to-purple-500",
      description: "The energy of movement and communication",
      characteristics: ["Creative", "Energetic", "Quick thinking", "Adaptable"],
      imbalance: ["Anxiety", "Insomnia", "Digestive issues", "Restlessness"],
      balance: ["Regular routine", "Warm foods", "Oil massage", "Meditation"],
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Pitta",
      element: "Fire + Water",
      icon: Flame,
      color: "from-red-500 to-orange-500",
      description: "The energy of transformation and metabolism",
      characteristics: ["Focused", "Ambitious", "Intelligent", "Leader"],
      imbalance: ["Anger", "Inflammation", "Skin issues", "Burnout"],
      balance: ["Cool foods", "Moderate exercise", "Avoid heat", "Calm activities"],
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Kapha",
      element: "Earth + Water",
      icon: Mountain,
      color: "from-green-500 to-teal-500",
      description: "The energy of structure and stability",
      characteristics: ["Calm", "Stable", "Compassionate", "Strong"],
      imbalance: ["Weight gain", "Lethargy", "Depression", "Congestion"],
      balance: ["Light foods", "Regular exercise", "Stimulating activities", "Dry heat"],
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const ayurvedaPrinciples = [
    {
      title: "Panchamahabhuta",
      subtitle: "Five Elements Theory",
      description: "Understanding how Space, Air, Fire, Water, and Earth create all matter and influence our constitution.",
      icon: Sparkles,
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Tridosha",
      subtitle: "Three Biological Energies",
      description: "Vata, Pitta, and Kapha - the fundamental forces that govern all physiological and psychological functions.",
      icon: Activity,
      image: "https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Dinacharya",
      subtitle: "Daily Routine",
      description: "Aligning daily activities with natural rhythms for optimal health and spiritual growth.",
      icon: Sunrise,
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Ritucharya",
      subtitle: "Seasonal Living",
      description: "Adapting lifestyle and diet according to seasonal changes to maintain balance and prevent disease.",
      icon: TreePine,
      image: "https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const ayurvedaTherapies = [
    {
      name: "Panchakarma",
      description: "Five-action detoxification and rejuvenation therapy",
      benefits: ["Deep detox", "Cellular renewal", "Mental clarity", "Immune boost"],
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "7-21 days"
    },
    {
      name: "Abhyanga",
      description: "Full-body warm oil massage for nourishment and balance",
      benefits: ["Stress relief", "Better circulation", "Skin health", "Joint mobility"],
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "60-90 min"
    },
    {
      name: "Shirodhara",
      description: "Continuous stream of warm oil poured on the forehead",
      benefits: ["Mental calm", "Better sleep", "Stress reduction", "Clarity"],
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "45-60 min"
    },
    {
      name: "Nasya",
      description: "Nasal administration of medicated oils and herbs",
      benefits: ["Sinus health", "Mental clarity", "Headache relief", "Respiratory health"],
      image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "20-30 min"
    }
  ];

  const herbs = [
    {
      name: "Ashwagandha",
      sanskrit: "Withania Somnifera",
      benefits: ["Stress relief", "Energy boost", "Immune support", "Sleep quality"],
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Adaptogen"
    },
    {
      name: "Turmeric",
      sanskrit: "Curcuma Longa",
      benefits: ["Anti-inflammatory", "Antioxidant", "Joint health", "Digestion"],
      image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Spice Medicine"
    },
    {
      name: "Brahmi",
      sanskrit: "Bacopa Monnieri",
      benefits: ["Memory enhancement", "Mental clarity", "Stress reduction", "Focus"],
      image: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Brain Tonic"
    },
    {
      name: "Triphala",
      sanskrit: "Three Fruits",
      benefits: ["Digestive health", "Detoxification", "Eye health", "Immunity"],
      image: "https://images.pexels.com/photos/4021774/pexels-photo-4021774.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Digestive"
    }
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor & Wellness Coach",
      content: "PrakritiPath completely transformed my approach to holistic wellness. The comprehensive programs, expert guidance, and supportive community helped me not just personally but also enhanced my professional practice. I've never felt more aligned with my purpose.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      achievement: "Lost 30lbs, Became Certified Coach"
    },
    {
      name: "Michael Chen",
      role: "Corporate Executive",
      content: "As a busy executive, I was skeptical about finding time for wellness. PrakritiPath's flexible approach and practical techniques helped me manage stress, improve focus, and find balance. My productivity actually increased while my stress decreased.",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      achievement: "Reduced Stress by 70%, Better Sleep"
    },
    {
      name: "Emma Rodriguez",
      role: "Nutritionist & Mother of Two",
      content: "The integration of ancient wisdom with modern science is remarkable. I've been able to help my family and clients achieve lasting wellness transformations. The supportive community makes all the difference.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      achievement: "Family Health Transformation"
    },
    {
      name: "David Kim",
      role: "Former Athlete",
      content: "After a sports injury ended my career, I found new purpose through PrakritiPath. The holistic healing approaches helped me recover not just physically but mentally and spiritually. I'm now a certified wellness coach.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      achievement: "Complete Recovery & New Career"
    },
    {
      name: "Priya Sharma",
      role: "Ayurveda Practitioner",
      content: "Learning about my dosha constitution through PrakritiPath was life-changing. The personalized Ayurvedic protocols helped me overcome chronic digestive issues and find perfect balance. The ancient wisdom is truly transformative.",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      achievement: "Healed Chronic Conditions Naturally"
    },
    {
      name: "Raj Patel",
      role: "Software Engineer",
      content: "The Panchakarma program completely reset my system. After years of poor lifestyle habits, I feel like I have a new body and mind. The detox was gentle yet powerful, and the results are lasting.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      achievement: "Complete System Reset & Vitality"
    }
  ];

  const programs = [
    {
      title: "Mindful Living Mastery",
      description: "Comprehensive mindfulness training combining meditation, stress reduction, and present-moment awareness techniques for lasting inner peace.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 weeks",
      level: "Beginner to Advanced",
      students: "12,400+",
      rating: 4.9,
      features: ["Daily guided meditations", "Stress reduction toolkit", "Mindful living practices", "Community support"]
    },
    {
      title: "Ayurvedic Healing Arts",
      description: "Ancient healing wisdom for modern wellness. Learn constitutional analysis, herbal remedies, and personalized wellness protocols.",
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 weeks",
      level: "Intermediate",
      students: "8,900+",
      rating: 4.8,
      features: ["Constitutional assessment", "Herbal medicine guide", "Seasonal wellness routines", "Personalized protocols"]
    },
    {
      title: "Therapeutic Yoga Journey",
      description: "Healing-focused yoga sequences designed to restore, strengthen, and align body, mind, and spirit through therapeutic practices.",
      image: "https://images.pexels.com/photos/3984341/pexels-photo-3984341.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "10 weeks",
      level: "All Levels",
      students: "15,600+",
      rating: 4.9,
      features: ["Therapeutic sequences", "Anatomy education", "Injury prevention", "Restorative practices"]
    },
    {
      title: "Holistic Nutrition Mastery",
      description: "Transform your relationship with food through mindful eating, nutritional wisdom, and sustainable lifestyle changes.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 weeks",
      level: "Beginner",
      students: "11,200+",
      rating: 4.7,
      features: ["Meal planning system", "Mindful eating practices", "Nutritional education", "Recipe library"]
    },
    {
      title: "Panchakarma Detox Program",
      description: "Complete Ayurvedic detoxification and rejuvenation program based on ancient five-action therapy principles.",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "21 days",
      level: "Intermediate",
      students: "3,200+",
      rating: 4.9,
      features: ["Personal dosha assessment", "Customized detox plan", "Daily guidance", "Herbal support"]
    },
    {
      title: "Ayurvedic Cooking Mastery",
      description: "Learn the art of cooking with spices, understanding food energetics, and creating meals that heal and nourish.",
      image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "6 weeks",
      level: "Beginner",
      students: "7,800+",
      rating: 4.8,
      features: ["Spice wisdom", "Seasonal recipes", "Food combining", "Digestive fire enhancement"]
    }
  ];

  const features = [
    {
      icon: Video,
      title: "HD Video Content",
      description: "Crystal clear, professionally produced videos with multiple camera angles and expert instruction."
    },
    {
      icon: Download,
      title: "Offline Access",
      description: "Download content for offline viewing. Practice anywhere, anytime, without internet connection."
    },
    {
      icon: MessageCircle,
      title: "Expert Support",
      description: "Direct access to instructors and wellness coaches for personalized guidance and support."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Self-paced learning with suggested timelines. Fit wellness into your busy lifestyle."
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Earn recognized certifications upon program completion. Advance your wellness career."
    },
    {
      icon: Shield,
      title: "Lifetime Access",
      description: "Once enrolled, access your programs forever. Return anytime to refresh your practice."
    }
  ];

  const blogPosts = [
    {
      title: "The Science of Mindfulness: How Meditation Changes Your Brain",
      excerpt: "Discover the latest neuroscience research on meditation's impact on brain structure and function.",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Science",
      readTime: "8 min read",
      author: "Dr. Maya Patel"
    },
    {
      title: "Ayurvedic Morning Rituals for Optimal Energy",
      excerpt: "Transform your mornings with these ancient practices designed to energize and center your day.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ayurveda",
      readTime: "6 min read",
      author: "Priya Sharma"
    },
    {
      title: "Yoga for Emotional Healing: Moving Through Trauma",
      excerpt: "How therapeutic yoga practices can help process emotions and heal from past trauma.",
      image: "https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Yoga Therapy",
      readTime: "10 min read",
      author: "Sarah Mitchell"
    },
    {
      title: "Understanding Your Dosha: A Complete Guide to Ayurvedic Constitution",
      excerpt: "Discover your unique mind-body type and learn how to live in harmony with your natural constitution.",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ayurveda",
      readTime: "12 min read",
      author: "Dr. Raj Sharma"
    },
    {
      title: "The Healing Power of Spices: Ayurvedic Kitchen Medicine",
      excerpt: "Learn how common kitchen spices can be powerful medicines for daily health and healing.",
      image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ayurveda",
      readTime: "9 min read",
      author: "Chef Meera Devi"
    },
    {
      title: "Panchakarma: The Ultimate Ayurvedic Detox Experience",
      excerpt: "Everything you need to know about this transformative five-action cleansing therapy.",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ayurveda",
      readTime: "15 min read",
      author: "Dr. Priya Sharma"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDoshaTab((prev) => (prev + 1) % doshas.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [doshas.length]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.8)), url(https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 pt-20">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold">Join 50,000+ on their wellness journey</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Transform Your Life
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Naturally
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
            Discover the power of ancient wisdom meets modern science. Join our comprehensive 
            wellness programs and unlock your potential for lasting transformation.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-emerald-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/30 flex items-center">
              Start Your Journey Free
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center border border-white/30">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Success Stories
            </button>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 transform ${
                  index === currentStat ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                }`}
              >
                <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 mb-2">
                  {createElement(stat.icon, { className: `w-8 h-8 mx-auto ${stat.color}` })}
                </div>
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurveda Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Ancient Wisdom for Modern Living
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Discover the Science of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block">
                Ayurveda
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ayurveda, the "science of life," is a 5,000-year-old system of natural healing that originated in India. 
              It's based on the belief that health and wellness depend on a delicate balance between mind, body, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">The Foundation of Holistic Health</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Brain className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Mind-Body Connection</h4>
                    <p className="text-gray-600">Understanding how mental and emotional states directly impact physical health and vice versa.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Activity className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Constitutional Medicine</h4>
                    <p className="text-gray-600">Personalized healing based on your unique mind-body constitution (Prakriti) and current state (Vikriti).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Leaf className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Natural Healing</h4>
                    <p className="text-gray-600">Using herbs, lifestyle practices, and natural therapies to restore balance and prevent disease.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ayurvedic herbs and spices"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-amber-600 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-amber-100">Years of Proven Wisdom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dosha Constitution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Activity className="w-4 h-4 mr-2" />
              Know Your Constitution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Three Doshas
              <span className="text-blue-600 block">Your Unique Blueprint</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              According to Ayurveda, every person has a unique combination of three biological energies called doshas. 
              Understanding your dosha helps you make lifestyle choices that support your natural constitution.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Dosha Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-2 rounded-2xl">
                {doshas.map((dosha, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDoshaTab(index)}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                      activeDoshaTab === index
                        ? `bg-gradient-to-r ${dosha.color} text-white shadow-lg`
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {createElement(dosha.icon, { className: "w-5 h-5 mr-2" })}
                    {dosha.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Dosha Content */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${doshas[activeDoshaTab].color} w-16 h-16 rounded-2xl flex items-center justify-center mr-4`}>
                      {React.createElement(doshas[activeDoshaTab].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{doshas[activeDoshaTab].name}</h3>
                      <p className="text-gray-600">{doshas[activeDoshaTab].element}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-8">{doshas[activeDoshaTab].description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">When Balanced</h4>
                      <ul className="space-y-2">
                        {doshas[activeDoshaTab].characteristics.map((char, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">When Imbalanced</h4>
                      <ul className="space-y-2">
                        {doshas[activeDoshaTab].imbalance.map((imb, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <X className="w-4 h-4 text-red-500 mr-2" />
                            {imb}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">How to Balance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {doshas[activeDoshaTab].balance.map((tip, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-xl">
                          <span className="text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={doshas[activeDoshaTab].image}
                    alt={doshas[activeDoshaTab].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Take Free Dosha Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Principles Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TreePine className="w-4 h-4 mr-2" />
              Core Principles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fundamental Concepts of
              <span className="text-green-600 block">Ayurvedic Medicine</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ayurvedaPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    {createElement(principle.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-3">{principle.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Therapies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healing Therapies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Traditional Ayurvedic
              <span className="text-purple-600 block">Treatments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the profound healing power of authentic Ayurvedic therapies, 
              each designed to restore balance and promote deep wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ayurvedaTherapies.map((therapy, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <img 
                    src={therapy.image}
                    alt={therapy.name}
                    className="w-20 h-20 rounded-xl object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{therapy.name}</h3>
                    <p className="text-gray-600 mb-4">{therapy.description}</p>
                    <div className="flex items-center text-sm text-purple-600 font-semibold">
                      <Clock className="w-4 h-4 mr-1" />
                      {therapy.duration}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {therapy.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Herbs Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Flower className="w-4 h-4 mr-2" />
              Sacred Herbs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nature's Pharmacy
              <span className="text-yellow-600 block">Ayurvedic Herbs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the healing power of time-tested herbs that have been used for thousands of years 
              to promote health, vitality, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {herbs.map((herb, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {herb.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{herb.name}</h3>
                  <p className="text-yellow-600 font-semibold text-sm mb-4 italic">{herb.sanskrit}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {herb.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
              Explore Complete Herb Library
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose PrakritiPath
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Everything You Need for
              <span className="text-emerald-600 block">Lasting Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with ancient wisdom 
              to deliver an unmatched wellness learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {createElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Featured Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transformational Learning
              <span className="text-blue-600 block">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Carefully crafted programs that blend ancient wisdom with modern science 
              to guide you on your path to wellness and self-discovery.
            </p>
            <Link 
              to="/programs"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View All Programs
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 6).map((program, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {program.level}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {program.students} students
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{program.rating}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Timer className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Real Transformations from
              <span className="text-emerald-600 block">Real People</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative mb-8">
                    <img 
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-32 h-32 rounded-full object-cover shadow-2xl mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-2">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-2">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-sm text-gray-500 bg-emerald-50 rounded-full px-4 py-2 inline-block">
                      {testimonials[activeTestimonial].achievement}
                    </p>
                  </div>
                </div>
                
                <div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center lg:justify-start">
                    <Target className="w-5 h-5 text-emerald-500 mr-2" />
                    <span className="text-sm text-gray-500">Verified Transformation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-emerald-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Latest Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Wellness Wisdom
              <span className="text-purple-600 block">& Expert Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest research, tips, and insights from our wellness experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/blog"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Articles
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Limited Time: 50% Off All Programs
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Your Life?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join 50,000+ students who have already started their journey to wellness, 
              mindfulness, and authentic living. Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group bg-white text-gray-800 px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center">
                Start 7-Day Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center">
                View All Programs
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;