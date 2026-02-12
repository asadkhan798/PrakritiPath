import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Users,
  Calendar,
  Headphones,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
        newsletter: false
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@prakritipath.com",
      href: "mailto:hello@prakritipath.com",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 24/7",
      href: "#",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule consultation",
      contact: "Free 15-min session",
      href: "#",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const supportTeam = [
    {
      name: "Sarah Johnson",
      role: "Student Success Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialty: "Program guidance and wellness coaching"
    },
    {
      name: "Michael Chen",
      role: "Technical Support Lead",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialty: "Platform assistance and troubleshooting"
    },
    {
      name: "Emma Rodriguez",
      role: "Community Manager",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialty: "Community events and member support"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/prakritipath', name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/prakritipath', name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: 'https://twitter.com/prakritipath', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Youtube, href: 'https://youtube.com/prakritipath', name: 'YouTube', color: 'hover:text-red-600' },
    { icon: Linkedin, href: 'https://linkedin.com/company/prakritipath', name: 'LinkedIn', color: 'hover:text-blue-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
            <span className="block text-yellow-300">We're Here to Help</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Have questions about our programs? Need support with your wellness journey? 
            Our dedicated team is ready to assist you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              24/7 Support Available
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Dedicated Success Team
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Global Support Coverage
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Ways to Reach Us</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="flex items-start">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <p className="text-emerald-600 font-semibold">{method.contact}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                Office Hours
              </h3>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-semibold text-gray-800">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-100 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                Our Location
              </h3>
              <div className="text-gray-600">
                <p className="mb-2">123 Wellness Avenue</p>
                <p className="mb-2">Mindful City, MC 12345</p>
                <p className="mb-4">United States</p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  View on Map →
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="programs">Program Questions</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing & Payment</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media & Press</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                      Subscribe to our newsletter for wellness tips and updates
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Support Team */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Support Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated support specialists are here to ensure you have the best possible 
              experience with PrakritiPath.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">How quickly will I receive a response?</h3>
              <p className="text-gray-600 mb-6">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please use our live chat feature for immediate assistance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Do you offer phone consultations?</h3>
              <p className="text-gray-600 mb-6">
                Yes! We offer free 15-minute consultation calls to help you choose the right 
                wellness program for your needs. You can book a call using our calendar link above.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">What languages do you support?</h3>
              <p className="text-gray-600 mb-6">
                Our primary support is in English, but we also offer support in Spanish, 
                French, and Hindi. Please mention your preferred language when contacting us.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Can I get help with technical issues?</h3>
              <p className="text-gray-600 mb-6">
                Absolutely! Our technical support team is available 24/7 to help with any 
                platform issues, login problems, or technical questions you may have.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;