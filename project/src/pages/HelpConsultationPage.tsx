import React, { useState } from 'react';
import { MessageCircle, Send, Search, BookOpen, Lightbulb, AlertCircle } from 'lucide-react';

const HelpConsultationPage = () => {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: 'assistant',
      content: 'Welcome to PrakritiPath Health Assistant! I can help you understand Ayurvedic approaches to health conditions, suggest remedies, and answer wellness questions based on our comprehensive health database. How can I help you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const commonQuestions = [
    'What are natural remedies for acne?',
    'How to manage stress through Ayurveda?',
    'Best practices for better sleep?',
    'Understanding my Dosha type',
    'Seasonal wellness routines'
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    setTimeout(() => {
      const responses: { [key: string]: string } = {
        acne: 'For acne management in Ayurveda: 1) Diet: Avoid oily and spicy foods, include bitter vegetables. 2) Herbs: Neem and turmeric are excellent for skin health. 3) Remedies: Apply neem + turmeric paste regularly. 4) Lifestyle: Maintain proper sleep and stress management. Would you like more specific recommendations based on your age group?',
        stress: 'Ayurvedic stress management: 1) Meditation and pranayama (breathing exercises) 2) Warm oil massage (abhyanga) 3) Herbs: Ashwagandha and Brahmi are calming 4) Foods: Include sesame, ghee, and warming spices 5) Routine: Establish regular sleep patterns. Consult with a practitioner for personalized protocols.',
        sleep: 'For better sleep (Anidra): 1) Beverages: Warm milk with nutmeg or ghee before bedtime 2) Massage: Warm sesame oil foot massage 3) Herbs: Jatamansi and Brahmi are sedating 4) Environment: Keep bedroom cool and dark 5) Routine: Go to bed at same time daily. Avoid gadgets 1 hour before sleep.',
        dosha: 'The three Doshas in Ayurveda: 1) Vata (Air+Space): Creative, quick-thinking, sensitive to cold 2) Pitta (Fire+Water): Focused, ambitious, heat-sensitive 3) Kapha (Earth+Water): Calm, stable, prone to heaviness. Would you like to explore your dosha type? We offer a free assessment tool.',
        seasonal: 'Seasonal Wellness (Ritucharya): Spring (Kapha season): Light foods, stimulating exercise Summer (Pitta season): Cooling foods, avoid excess heat Fall/Winter (Vata season): Warm foods, regular routine, oil massage. Each season requires specific dietary and lifestyle adjustments. Explore our Health Resources for age-specific guidance.'
      };

      const lowerInput = userMessage.toLowerCase();
      let response = 'I understand your question. For personalized guidance, please visit our Health Resources section to browse our comprehensive database by age group and condition. You can also book a consultation with our qualified Ayurvedic practitioners. Is there anything else I can help with?';

      Object.keys(responses).forEach(key => {
        if (lowerInput.includes(key)) {
          response = responses[key];
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Health Assistant
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Get Instant Wellness Guidance
            </h1>
            <p className="text-xl opacity-90">
              Ask questions about Ayurvedic health, remedies, and wellness. Our knowledge base contains information for all age groups.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-96 md:h-[500px]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md px-4 py-3 rounded-lg ${
                        msg.role === 'user'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm md:text-base">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask your wellness question..."
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={loading || !inputValue.trim()}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                <h3 className="font-bold text-gray-800">Quick Questions</h3>
              </div>
              <div className="space-y-2">
                {commonQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg text-sm text-gray-700 hover:text-emerald-700 transition-colors border-2 border-gray-200 hover:border-emerald-500"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                <h3 className="font-bold text-gray-800">Features</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Knowledge base with age-specific health info
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Ayurvedic remedy suggestions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  Dietary and lifestyle guidance
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  24/7 availability
                </li>
              </ul>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-blue-900 font-semibold mb-2">For Personalized Care</p>
                  <p className="text-xs text-blue-800">
                    For detailed consultations and personalized treatment plans, please visit our
                    <a href="/nearby-doctors" className="text-blue-600 hover:underline"> Find Doctors</a>
                    {' '}or{' '}
                    <a href="/health-resources" className="text-blue-600 hover:underline">Health Resources</a>
                    {' '}sections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpConsultationPage;
