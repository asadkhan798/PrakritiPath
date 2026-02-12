import React from 'react';
import { 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Target, 
  Lightbulb,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "50,000+", label: "Students Worldwide", icon: Users },
    { number: "500+", label: "Expert Instructors", icon: Award },
    { number: "150+", label: "Countries Served", icon: Globe },
    { number: "98%", label: "Student Satisfaction", icon: Heart }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every interaction is guided by genuine care and understanding for each individual's unique wellness journey."
    },
    {
      icon: Target,
      title: "Authentic Practice",
      description: "We honor traditional wisdom while embracing scientific research to provide authentic, effective wellness solutions."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Building supportive communities where everyone feels welcomed, valued, and empowered to grow."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Commitment to ongoing education, innovation, and adaptation to serve our students better."
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & Chief Wellness Officer",
      specialty: "Ayurveda & Integrative Medicine",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "With over 20 years of experience in Ayurvedic medicine and modern wellness practices, Dr. Sharma founded PrakritiPath to bridge ancient wisdom with contemporary health needs.",
      credentials: ["PhD in Ayurvedic Medicine", "Certified Yoga Therapist", "Integrative Medicine Specialist"]
    },
    {
      name: "Sarah Chen",
      role: "Head of Mindfulness Programs",
      specialty: "Meditation & Mindfulness",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former neuroscientist turned mindfulness teacher, Sarah brings 15 years of meditation practice and scientific research to create evidence-based mindfulness programs.",
      credentials: ["PhD in Neuroscience", "Mindfulness-Based Stress Reduction Instructor", "Author of 3 wellness books"]
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Yoga Therapy",
      specialty: "Therapeutic Yoga & Rehabilitation",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "A certified yoga therapist and former physical therapist, Michael specializes in using yoga for healing trauma, injury recovery, and chronic pain management.",
      credentials: ["Certified Yoga Therapist", "Licensed Physical Therapist", "Trauma-Informed Yoga Specialist"]
    },
    {
      name: "Dr. Emma Wilson",
      role: "Lead Nutrition Expert",
      specialty: "Holistic Nutrition & Wellness",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Registered dietitian and functional medicine practitioner focused on personalized nutrition approaches for optimal health and disease prevention.",
      credentials: ["Registered Dietitian", "Functional Medicine Certified", "Plant-Based Nutrition Specialist"]
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "PrakritiPath Founded",
      description: "Started with a vision to make authentic wellness accessible to everyone worldwide."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched comprehensive online platform during global health crisis, reaching 10,000+ students."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Extended services to 50+ countries, establishing partnerships with wellness centers worldwide."
    },
    {
      year: "2022",
      title: "Community Milestone",
      description: "Reached 25,000 active students and launched peer support groups in major cities."
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized as 'Best Online Wellness Platform' by Global Health Innovation Awards."
    },
    {
      year: "2024",
      title: "50K Students & Beyond",
      description: "Celebrating 50,000+ students transformed and expanding into corporate wellness programs."
    }
  ];

  const certifications = [
    {
      name: "International Association of Yoga Therapists (IAYT)",
      description: "Certified programs meet highest standards for therapeutic yoga education."
    },
    {
      name: "Mindfulness in Schools Project",
      description: "Endorsed curricula for mindfulness education and teacher training."
    },
    {
      name: "National Ayurvedic Medical Association",
      description: "Recognized for authentic Ayurvedic education and practice standards."
    },
    {
      name: "Global Wellness Institute",
      description: "Member organization committed to wellness industry excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our Mission is Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12">
              Founded on the belief that everyone deserves access to authentic wellness wisdom, 
              PrakritiPath bridges ancient traditions with modern science to create lasting 
              transformation in lives worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 mb-4 inline-flex">
                    <stat.icon className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Born from a Vision of
                <span className="text-emerald-600 block">Holistic Healing</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  PrakritiPath was born from Dr. Priya Sharma's personal journey of healing through 
                  traditional Ayurvedic practices after conventional medicine couldn't address her 
                  chronic health issues. This transformative experience sparked a mission to make 
                  authentic wellness wisdom accessible to everyone.
                </p>
                <p>
                  What started as a small wellness center in 2019 has grown into a global community 
                  of over 50,000 students across 150 countries. We've maintained our commitment to 
                  authentic practices while embracing technology to reach those who need it most.
                </p>
                <p>
                  Today, PrakritiPath stands as a bridge between ancient wisdom and modern living, 
                  offering scientifically-backed programs that honor traditional practices while 
                  meeting contemporary wellness needs.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-2xl max-w-xs">
                <div className="text-3xl font-bold mb-2">5+ Years</div>
                <div className="text-emerald-100">of transforming lives through authentic wellness practices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Drives Us
              <span className="text-blue-600 block">Every Day</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and every program we create, 
              ensuring authentic, compassionate, and effective wellness education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-emerald-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet Our Expert
              <span className="text-purple-600 block">Wellness Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings decades of experience in traditional practices, 
              modern science, and innovative teaching methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold">{member.specialty}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="space-y-1">
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Milestones of
              <span className="text-green-600 block">Growth & Impact</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-16 md:ml-0' : 'md:pl-12 ml-16 md:ml-0'}`}>
                      <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4 mr-2" />
              Certifications & Recognition
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Trusted by Industry
              <span className="text-yellow-600 block">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs meet the highest standards set by leading wellness organizations 
              and educational institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{cert.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Join Our
            <span className="block text-yellow-300">Wellness Community?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the transformative power of authentic wellness practices guided by 
            world-class experts. Start your journey today with a free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Meet Our Instructors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;