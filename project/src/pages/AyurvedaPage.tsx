import React, { useState, createElement } from 'react';
import { 
  Leaf, 
  Wind, 
  Flame, 
  Mountain, 
  Droplets, 
  Sun, 
  Moon, 
  Star, 
  Heart, 
  Brain, 
  Activity, 
  TreePine, 
  Flower, 
  Sunrise, 
  Clock, 
  CheckCircle, 
  Play, 
  Download, 
  BookOpen,
  Users,
  Award,
  Target,
  Sparkles,
  Calendar,
  Timer,
  Globe
} from 'lucide-react';

const AyurvedaPage = () => {
  const [activeDoshaTab, setActiveDoshaTab] = useState(0);
  const [activeTherapyTab, setActiveTherapyTab] = useState(0);

  const doshas = [
    {
      name: "Vata",
      element: "Air + Space",
      icon: Wind,
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      description: "The energy of movement and communication. Vata governs all movement in the body, including breathing, circulation, and nerve impulses.",
      characteristics: ["Creative and imaginative", "Energetic and enthusiastic", "Quick thinking and adaptable", "Loves change and variety"],
      physicalTraits: ["Thin build", "Dry skin and hair", "Cold hands and feet", "Variable appetite"],
      mentalTraits: ["Quick learner", "Forgetful under stress", "Vivid dreams", "Anxious when imbalanced"],
      imbalance: ["Anxiety and worry", "Insomnia and restlessness", "Digestive irregularities", "Joint pain and stiffness"],
      balance: ["Regular daily routine", "Warm, cooked foods", "Oil massage (Abhyanga)", "Gentle, grounding exercises"],
      foods: ["Warm soups and stews", "Cooked grains like rice and oats", "Sweet fruits like bananas", "Ghee and warm milk"],
      lifestyle: ["Go to bed early", "Practice meditation", "Avoid excessive travel", "Stay warm and moisturized"],
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      season: "Fall and early winter"
    },
    {
      name: "Pitta",
      element: "Fire + Water",
      icon: Flame,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      description: "The energy of transformation and metabolism. Pitta governs digestion, metabolism, and the transformation of food into energy.",
      characteristics: ["Focused and determined", "Natural leader", "Intelligent and sharp", "Goal-oriented"],
      physicalTraits: ["Medium build", "Warm body temperature", "Strong appetite", "Oily skin prone to acne"],
      mentalTraits: ["Sharp intellect", "Good memory", "Decisive", "Irritable when hungry"],
      imbalance: ["Anger and irritability", "Inflammation and fever", "Skin rashes and acne", "Heartburn and ulcers"],
      balance: ["Cool, refreshing foods", "Moderate exercise", "Avoid excessive heat", "Practice patience and compassion"],
      foods: ["Fresh fruits and vegetables", "Cooling herbs like mint", "Sweet and bitter tastes", "Coconut water and milk"],
      lifestyle: ["Avoid midday sun", "Practice cooling pranayama", "Take breaks from work", "Spend time in nature"],
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
      season: "Summer and late spring"
    },
    {
      name: "Kapha",
      element: "Earth + Water",
      icon: Mountain,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      description: "The energy of structure and stability. Kapha provides the body with physical structure, immunity, and emotional stability.",
      characteristics: ["Calm and peaceful", "Stable and reliable", "Compassionate and loving", "Strong and enduring"],
      physicalTraits: ["Larger build", "Soft, smooth skin", "Thick hair", "Slow but steady appetite"],
      mentalTraits: ["Good long-term memory", "Slow to learn but retains well", "Calm under pressure", "Resistant to change"],
      imbalance: ["Weight gain and sluggishness", "Depression and lethargy", "Excessive sleep", "Respiratory congestion"],
      balance: ["Light, warm foods", "Regular vigorous exercise", "Stimulating activities", "Dry heat therapy"],
      foods: ["Spicy and pungent foods", "Light grains like quinoa", "Bitter greens", "Ginger and black pepper"],
      lifestyle: ["Wake up early", "Stay active and engaged", "Avoid daytime naps", "Seek variety and stimulation"],
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=800",
      season: "Late winter and spring"
    }
  ];

  const therapies = [
    {
      name: "Panchakarma",
      description: "The ultimate detoxification and rejuvenation therapy",
      fullDescription: "Panchakarma is Ayurveda's premier detoxification and rejuvenation program. This comprehensive five-action therapy removes deep-seated toxins, restores balance, and rejuvenates the entire system.",
      duration: "7-21 days",
      benefits: ["Complete detoxification", "Cellular rejuvenation", "Mental clarity", "Immune system boost", "Stress relief", "Improved digestion"],
      process: ["Preparation (Purvakarma)", "Main treatments (Pradhanakarma)", "Post-treatment care (Paschatkarma)"],
      treatments: ["Vamana (Therapeutic vomiting)", "Virechana (Purgation)", "Basti (Medicated enemas)", "Nasya (Nasal therapy)", "Raktamokshana (Blood purification)"],
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$2,500 - $5,000"
    },
    {
      name: "Abhyanga",
      description: "Full-body warm oil massage for deep nourishment",
      fullDescription: "Abhyanga is a full-body massage with warm herbal oils that nourishes the skin, calms the nervous system, and promotes overall well-being. This daily practice is considered one of the most important Ayurvedic therapies.",
      duration: "60-90 minutes",
      benefits: ["Improved circulation", "Stress reduction", "Better sleep", "Skin nourishment", "Joint flexibility", "Lymphatic drainage"],
      process: ["Oil selection based on constitution", "Warm oil application", "Systematic massage strokes", "Steam therapy (optional)"],
      treatments: ["Marma point stimulation", "Lymphatic drainage", "Deep tissue work", "Relaxation techniques"],
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$80 - $150"
    },
    {
      name: "Shirodhara",
      description: "Continuous stream of warm oil for mental tranquility",
      fullDescription: "Shirodhara involves pouring a continuous stream of warm oil over the forehead and scalp. This deeply relaxing therapy calms the mind, reduces stress, and promotes mental clarity.",
      duration: "45-60 minutes",
      benefits: ["Deep relaxation", "Stress relief", "Better sleep", "Mental clarity", "Headache relief", "Nervous system balance"],
      process: ["Client preparation", "Oil warming", "Continuous pouring technique", "Scalp massage"],
      treatments: ["Oil Shirodhara", "Milk Shirodhara", "Buttermilk Shirodhara", "Herbal decoction Shirodhara"],
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$120 - $200"
    },
    {
      name: "Swedana",
      description: "Herbal steam therapy for detoxification",
      fullDescription: "Swedana is a therapeutic sweating treatment using herbal steam. This therapy opens the channels, eliminates toxins, and prepares the body for deeper treatments.",
      duration: "20-30 minutes",
      benefits: ["Toxin elimination", "Improved circulation", "Muscle relaxation", "Respiratory health", "Skin purification", "Weight management"],
      process: ["Herbal preparation", "Steam generation", "Controlled sweating", "Cool-down period"],
      treatments: ["Bashpa Swedana (Steam box)", "Pinda Swedana (Bolus massage)", "Upanaha Swedana (Poultices)", "Parisheka Swedana (Pouring)"],
      image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$60 - $100"
    }
  ];

  const herbs = [
    {
      name: "Ashwagandha",
      sanskrit: "Withania Somnifera",
      category: "Rasayana (Rejuvenative)",
      description: "Known as 'Indian Winter Cherry,' Ashwagandha is one of the most powerful adaptogens in Ayurveda.",
      benefits: ["Stress and anxiety relief", "Energy and vitality boost", "Immune system support", "Better sleep quality", "Cognitive enhancement", "Hormonal balance"],
      uses: ["Chronic fatigue", "Anxiety disorders", "Insomnia", "Immune deficiency", "Sexual health", "Athletic performance"],
      dosage: "300-600mg daily",
      precautions: "Avoid during pregnancy and with autoimmune conditions",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
      taste: "Bitter, astringent",
      potency: "Heating"
    },
    {
      name: "Turmeric",
      sanskrit: "Haridra",
      category: "Anti-inflammatory",
      description: "The golden spice of Ayurveda, turmeric is revered for its powerful healing and protective properties.",
      benefits: ["Anti-inflammatory action", "Antioxidant protection", "Joint health support", "Digestive aid", "Liver detoxification", "Skin health"],
      uses: ["Arthritis", "Digestive issues", "Skin conditions", "Liver disorders", "Wound healing", "Respiratory problems"],
      dosage: "500-1000mg daily",
      precautions: "May increase bleeding risk with blood thinners",
      image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400",
      taste: "Bitter, pungent",
      potency: "Heating"
    },
    {
      name: "Brahmi",
      sanskrit: "Bacopa Monnieri",
      category: "Medhya Rasayana (Brain tonic)",
      description: "Brahmi is the premier brain tonic in Ayurveda, enhancing memory, learning, and cognitive function.",
      benefits: ["Memory enhancement", "Cognitive function", "Stress reduction", "Mental clarity", "Learning ability", "Nervous system support"],
      uses: ["Memory problems", "ADHD", "Anxiety", "Depression", "Epilepsy", "Age-related cognitive decline"],
      dosage: "300-600mg daily",
      precautions: "May cause drowsiness in some individuals",
      image: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg?auto=compress&cs=tinysrgb&w=400",
      taste: "Bitter",
      potency: "Cooling"
    },
    {
      name: "Triphala",
      sanskrit: "Three Fruits",
      category: "Digestive & Detoxifying",
      description: "A combination of three fruits (Amalaki, Bibhitaki, Haritaki), Triphala is the most famous Ayurvedic formula.",
      benefits: ["Digestive health", "Gentle detoxification", "Eye health", "Immune support", "Antioxidant action", "Weight management"],
      uses: ["Constipation", "Digestive disorders", "Eye problems", "Skin conditions", "Diabetes", "High cholesterol"],
      dosage: "1-2 grams daily",
      precautions: "Start with small doses to assess tolerance",
      image: "https://images.pexels.com/photos/4021774/pexels-photo-4021774.jpeg?auto=compress&cs=tinysrgb&w=400",
      taste: "All six tastes",
      potency: "Neutral"
    }
  ];

  const principles = [
    {
      title: "Panchamahabhuta",
      subtitle: "Five Elements Theory",
      description: "Everything in the universe, including our bodies, is composed of five basic elements: Space (Akasha), Air (Vayu), Fire (Agni), Water (Jal), and Earth (Prithvi). Understanding these elements helps us comprehend how different foods, activities, and environments affect our health.",
      icon: Sparkles,
      details: [
        "Space (Akasha): Creates room for all other elements to exist",
        "Air (Vayu): Governs movement and communication",
        "Fire (Agni): Controls transformation and metabolism",
        "Water (Jal): Provides cohesion and lubrication",
        "Earth (Prithvi): Gives structure and stability"
      ],
      image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Tridosha",
      subtitle: "Three Biological Energies",
      description: "The three doshas - Vata, Pitta, and Kapha - are the fundamental forces that govern all physiological and psychological functions in the body. Each person has a unique combination of these doshas.",
      icon: Activity,
      details: [
        "Vata: Air + Space - Movement and communication",
        "Pitta: Fire + Water - Transformation and metabolism",
        "Kapha: Earth + Water - Structure and stability",
        "Balance of doshas = Health",
        "Imbalance of doshas = Disease"
      ],
      image: "https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Dinacharya",
      subtitle: "Daily Routine",
      description: "Dinacharya is the practice of aligning daily activities with natural rhythms. This includes specific practices for different times of day to maintain optimal health and spiritual growth.",
      icon: Sunrise,
      details: [
        "Wake up before sunrise (Brahma Muhurta)",
        "Morning practices: meditation, yoga, pranayama",
        "Proper meal timing aligned with digestive fire",
        "Evening wind-down routines",
        "Sleep by 10 PM for optimal rest"
      ],
      image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Ritucharya",
      subtitle: "Seasonal Living",
      description: "Ritucharya involves adapting lifestyle and diet according to seasonal changes. Each season affects the doshas differently, requiring specific adjustments to maintain balance.",
      icon: TreePine,
      details: [
        "Spring: Kapha season - light, warming foods",
        "Summer: Pitta season - cooling, hydrating practices",
        "Fall: Vata season - grounding, nourishing routines",
        "Winter: Kapha accumulation - warming, stimulating activities",
        "Seasonal detox and rejuvenation practices"
      ],
      image: "https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const courses = [
    {
      title: "Ayurveda Fundamentals",
      description: "Complete introduction to Ayurvedic principles, constitution assessment, and basic practices for daily wellness.",
      duration: "8 weeks",
      level: "Beginner",
      modules: 12,
      students: "3,200+",
      rating: 4.9,
      price: "$297",
      instructor: "Dr. Priya Sharma",
      image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600",
      curriculum: [
        "History and Philosophy of Ayurveda",
        "Five Elements and Three Doshas",
        "Constitutional Assessment",
        "Ayurvedic Nutrition",
        "Daily and Seasonal Routines",
        "Herbal Medicine Basics"
      ]
    },
    {
      title: "Panchakarma Practitioner",
      description: "Advanced training in Ayurvedic detoxification therapies and rejuvenation protocols.",
      duration: "12 weeks",
      level: "Advanced",
      modules: 18,
      students: "850+",
      rating: 4.8,
      price: "$897",
      instructor: "Dr. Raj Patel",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
      curriculum: [
        "Panchakarma Theory and Practice",
        "Pre-treatment Preparation",
        "Five Main Procedures",
        "Post-treatment Care",
        "Case Studies and Protocols",
        "Clinical Practice Guidelines"
      ]
    },
    {
      title: "Ayurvedic Cooking Mastery",
      description: "Learn the art of cooking with spices, understanding food energetics, and creating healing meals.",
      duration: "6 weeks",
      level: "Intermediate",
      modules: 10,
      students: "2,100+",
      rating: 4.7,
      price: "$197",
      instructor: "Chef Meera Devi",
      image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=600",
      curriculum: [
        "Six Tastes and Food Energetics",
        "Spice Wisdom and Combinations",
        "Seasonal Cooking",
        "Dosha-Specific Recipes",
        "Food as Medicine",
        "Kitchen Pharmacy Setup"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8">
              <Leaf className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold">5000+ Years of Healing Wisdom</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              The Science of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Ayurveda
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-12 opacity-95">
              Discover the ancient Indian system of medicine that treats the root cause of illness, 
              not just symptoms. Learn to live in harmony with your unique constitution and nature's rhythms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-white text-amber-600 px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center">
                Discover Your Dosha
                <Target className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
              </button>
              
              <button className="group bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center border border-white/30">
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Introduction
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-white/80 text-sm">Years of Wisdom</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">108</div>
                <div className="text-white/80 text-sm">Sacred Practices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-white/80 text-sm">Doshas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-white/80 text-sm">Healing Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ayurveda Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ancient Wisdom
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                  What is Ayurveda?
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Ayurveda, literally meaning "knowledge of life," is the world's oldest healing system, 
                    originating in India over 5,000 years ago. It's a comprehensive approach to health 
                    that addresses the whole person - body, mind, and spirit.
                  </p>
                  <p>
                    Unlike modern medicine that often treats symptoms, Ayurveda focuses on identifying 
                    and addressing the root cause of imbalance. It recognizes that each person is unique 
                    and requires individualized treatment based on their constitution (Prakriti) and 
                    current state of health (Vikriti).
                  </p>
                  <p>
                    The ultimate goal of Ayurveda is not just the absence of disease, but the achievement 
                    of optimal health, vitality, and spiritual well-being. It emphasizes prevention through 
                    proper lifestyle, diet, and daily practices aligned with natural rhythms.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Heart className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Holistic Approach</h3>
                    <p className="text-gray-600 text-sm">Treats the whole person, not just symptoms</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <Leaf className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="font-bold text-gray-800 mb-2">Natural Healing</h3>
                    <p className="text-gray-600 text-sm">Uses herbs, lifestyle, and natural therapies</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ayurvedic herbs and medicine"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-amber-600 text-white p-8 rounded-2xl shadow-2xl max-w-xs">
                  <div className="text-2xl font-bold mb-2">Personalized Medicine</div>
                  <div className="text-amber-100 text-sm">Every treatment is customized to your unique constitution</div>
                </div>
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
              Constitutional Medicine
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Understanding the
              <span className="text-blue-600 block">Three Doshas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The doshas are the three fundamental energies that govern all biological and psychological 
              functions. Your unique combination of these doshas determines your constitution, health tendencies, 
              and the most effective treatments for you.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Dosha Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-2 rounded-2xl">
                {doshas.map((dosha, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDoshaTab(index)}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center mx-1 ${
                      activeDoshaTab === index
                        ? `bg-gradient-to-r ${dosha.color} text-white shadow-lg transform scale-105`
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {createElement(dosha.icon, { className: "w-5 h-5 mr-2" })}
                    {dosha.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Dosha Content */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Image */}
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={doshas[activeDoshaTab].image}
                    alt={doshas[activeDoshaTab].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className={`bg-gradient-to-r ${doshas[activeDoshaTab].color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                      {createElement(doshas[activeDoshaTab].icon, { className: "w-8 h-8" })}
                    </div>
                    <h3 className="text-3xl font-bold">{doshas[activeDoshaTab].name}</h3>
                    <p className="text-white/90">{doshas[activeDoshaTab].element}</p>
                    <p className="text-sm text-white/80 mt-2">Dominant in {doshas[activeDoshaTab].season}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {doshas[activeDoshaTab].description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Characteristics */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        When Balanced
                      </h4>
                      <ul className="space-y-2">
                        {doshas[activeDoshaTab].characteristics.map((char, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Imbalance Signs */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <Activity className="w-5 h-5 text-red-500 mr-2" />
                        Imbalance Signs
                      </h4>
                      <ul className="space-y-2">
                        {doshas[activeDoshaTab].imbalance.map((imb, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {imb}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Physical and Mental Traits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className={`${doshas[activeDoshaTab].bgColor} p-6 rounded-xl`}>
                      <h4 className={`text-lg font-bold ${doshas[activeDoshaTab].textColor} mb-4`}>Physical Traits</h4>
                      <ul className="space-y-2">
                        {doshas[activeDoshaTab].physicalTraits.map((trait, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            {trait}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`${doshas[activeDoshaTab].bgColor} p-6 rounded-xl`}>
                      <h4 className={`text-lg font-bold ${doshas[activeDoshaTab].textColor} mb-4`}>Mental Traits</h4>
                      <ul className="space-y-2">
                        {doshas[activeDoshaTab].mentalTraits.map((trait, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            {trait}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Balancing Recommendations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Balancing Foods</h4>
                      <div className="space-y-2">
                        {doshas[activeDoshaTab].foods.map((food, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                            {food}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Lifestyle Tips</h4>
                      <div className="space-y-2">
                        {doshas[activeDoshaTab].lifestyle.map((tip, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                            {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Take Free Dosha Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TreePine className="w-4 h-4 mr-2" />
              Fundamental Concepts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Core Principles of
              <span className="text-green-600 block">Ayurvedic Medicine</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These foundational concepts form the basis of all Ayurvedic understanding and practice, 
              providing a comprehensive framework for health and healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    {createElement(principle.icon, { className: "w-10 h-10 mb-3" })}
                    <h3 className="text-2xl font-bold mb-1">{principle.title}</h3>
                    <p className="text-green-300 font-semibold">{principle.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {principle.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Key Aspects:</h4>
                    <ul className="space-y-3">
                      {principle.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

          <div className="max-w-6xl mx-auto">
            {/* Therapy Navigation */}
            <div className="flex justify-center mb-12 overflow-x-auto">
              <div className="flex bg-gray-100 p-2 rounded-2xl min-w-max">
                {therapies.map((therapy, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTherapyTab(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 mx-1 whitespace-nowrap ${
                      activeTherapyTab === index
                        ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {therapy.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Therapy Content */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <img 
                      src={therapies[activeTherapyTab].image}
                      alt={therapies[activeTherapyTab].name}
                      className="w-20 h-20 rounded-xl object-cover mr-6 shadow-lg"
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {therapies[activeTherapyTab].name}
                      </h3>
                      <p className="text-purple-600 font-semibold">
                        {therapies[activeTherapyTab].description}
                      </p>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {therapies[activeTherapyTab].duration}
                        <span className="mx-2">•</span>
                        <span className="font-semibold">{therapies[activeTherapyTab].price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {therapies[activeTherapyTab].fullDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {therapies[activeTherapyTab].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Process</h4>
                      <ul className="space-y-2">
                        {therapies[activeTherapyTab].process.map((step, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 lg:p-12">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Treatment Variations</h4>
                  <div className="space-y-4">
                    {therapies[activeTherapyTab].treatments.map((treatment, index) => (
                      <div key={index} className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                        <h5 className="font-semibold text-purple-800 mb-2">{treatment}</h5>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
                    <h5 className="font-bold mb-2">Book a Consultation</h5>
                    <p className="text-sm text-purple-100 mb-4">
                      Speak with our Ayurvedic practitioners to determine the best treatment for your constitution.
                    </p>
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {herbs.map((herb, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="relative h-48 sm:h-auto overflow-hidden">
                    <img 
                      src={herb.image}
                      alt={herb.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {herb.category}
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{herb.name}</h3>
                      <p className="text-yellow-600 font-semibold text-sm italic mb-2">{herb.sanskrit}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{herb.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                      <div>
                        <span className="font-semibold text-gray-700">Taste:</span>
                        <span className="text-gray-600 ml-1">{herb.taste}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Potency:</span>
                        <span className="text-gray-600 ml-1">{herb.potency}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Dosage:</span>
                        <span className="text-gray-600 ml-1">{herb.dosage}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-800 mb-2">Key Benefits:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {herb.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-gray-800 mb-2">Traditional Uses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {herb.uses.slice(0, 3).map((use, useIndex) => (
                          <span key={useIndex} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                      <strong>Precautions:</strong> {herb.precautions}
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

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn Ayurveda
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Master the Art of
              <span className="text-indigo-600 block">Ayurvedic Healing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed to take you from beginner to practitioner, 
              with authentic teachings from experienced Ayurvedic doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                      {course.rating}
                      <span className="mx-2">•</span>
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                    <div className="text-2xl font-bold text-indigo-600">{course.price}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Timer className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.modules} modules
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Instructor:</strong> {course.instructor}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-800 mb-3">Course Curriculum:</h4>
                    <ul className="space-y-1">
                      {course.curriculum.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {course.curriculum.length > 3 && (
                        <li className="text-xs text-gray-500 italic">
                          +{course.curriculum.length - 3} more modules
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Begin Your Ayurvedic Journey Today
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                True Nature?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Start with a free dosha assessment and personalized recommendations. 
              Join thousands who have transformed their health through Ayurveda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group bg-white text-amber-600 px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center">
                Take Free Dosha Quiz
                <Target className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
              </button>
              
              <button className="group bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center">
                Browse All Courses
                <BookOpen className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Free assessment & consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Personalized recommendations
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Expert guidance included
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedaPage;