import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader, AlertCircle, Heart, Brain, Zap, Leaf } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface DiagnosisResult {
  disease: string;
  confidence: number;
  symptoms: string[];
  recommendations: string[];
  herbs: string[];
  severity: 'mild' | 'moderate' | 'severe';
  shopLinks: string[];
}

const AIDiagnosisChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'greeting' | 'age' | 'symptoms' | 'diagnosis' | 'chat'>('greeting');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const ageGroups = ['0-5 years', '6-18 years', '19-40 years', '41-60 years', '60+ years'];

  const commonSymptoms = [
    'Fever', 'Cough', 'Sore Throat', 'Headache', 'Body Aches',
    'Fatigue', 'Nausea', 'Dizziness', 'Shortness of Breath',
    'Chest Pain', 'Stomach Pain', 'Diarrhea', 'Skin Rash',
    'Muscle Pain', 'Loss of Appetite'
  ];

  const diagnosisMap: { [key: string]: DiagnosisResult } = {
    'Fever,Cough,Sore Throat': {
      disease: 'Common Cold / Upper Respiratory Infection',
      confidence: 85,
      symptoms: ['Fever', 'Cough', 'Sore Throat'],
      recommendations: [
        'Rest for 7-10 days',
        'Stay hydrated with warm liquids',
        'Use honey and ginger tea',
        'Avoid cold foods',
        'Steam inhalation for congestion'
      ],
      herbs: ['Tulsi', 'Ginger', 'Turmeric', 'Licorice', 'Black Pepper'],
      severity: 'mild',
      shopLinks: ['Apollo Pharmacy', '1mg', 'Netmeds']
    },
    'Fever,Body Aches,Fatigue': {
      disease: 'Flu / Viral Infection',
      confidence: 80,
      symptoms: ['Fever', 'Body Aches', 'Fatigue'],
      recommendations: [
        'Complete bed rest',
        'Drink warm herbal broths',
        'Avoid strenuous activities',
        'Maintain room humidity',
        'Eat light, digestible foods'
      ],
      herbs: ['Ashwagandha', 'Tulsi', 'Ginger', 'Turmeric', 'Brahmi'],
      severity: 'moderate',
      shopLinks: ['Apollo Pharmacy', '1mg', 'Netmeds']
    },
    'Headache,Dizziness,Fatigue': {
      disease: 'Stress / Tension Headache',
      confidence: 75,
      symptoms: ['Headache', 'Dizziness', 'Fatigue'],
      recommendations: [
        'Practice meditation for 15-20 minutes daily',
        'Get adequate sleep (7-8 hours)',
        'Reduce caffeine intake',
        'Practice pranayama (breathing exercises)',
        'Apply warm compress to temples'
      ],
      herbs: ['Brahmi', 'Ashwagandha', 'Jatamansi', 'Lavender', 'Sandalwood'],
      severity: 'mild',
      shopLinks: ['Apollo Pharmacy', '1mg', 'Netmeds']
    },
    'Stomach Pain,Nausea,Diarrhea': {
      disease: 'Gastroenteritis / Food Poisoning',
      confidence: 82,
      symptoms: ['Stomach Pain', 'Nausea', 'Diarrhea'],
      recommendations: [
        'Fast for 4-6 hours then eat bland foods',
        'Drink electrolyte solutions',
        'Avoid dairy and spicy foods',
        'Eat ginger-rice soup',
        'Stay hydrated with coconut water'
      ],
      herbs: ['Ginger', 'Cardamom', 'Fennel', 'Cumin', 'Mint'],
      severity: 'moderate',
      shopLinks: ['Apollo Pharmacy', '1mg', 'Netmeds']
    },
    'Chest Pain,Shortness of Breath': {
      disease: 'Possible Cardiac Issue - SEEK IMMEDIATE MEDICAL ATTENTION',
      confidence: 90,
      symptoms: ['Chest Pain', 'Shortness of Breath'],
      recommendations: [
        'CALL EMERGENCY SERVICES IMMEDIATELY',
        'Do not delay medical attention',
        'Stay calm and seated',
        'Chew aspirin if available (consult with emergency crew)',
        'Keep emergency contact nearby'
      ],
      herbs: [],
      severity: 'severe',
      shopLinks: ['Emergency Services', 'Hospital']
    },
    'Skin Rash,Itching,Fatigue': {
      disease: 'Allergic Reaction / Skin Infection',
      confidence: 78,
      symptoms: ['Skin Rash', 'Itching', 'Fatigue'],
      recommendations: [
        'Identify and avoid the allergen',
        'Apply cooling paste of turmeric and neem',
        'Take lukewarm baths',
        'Wear soft, cotton clothing',
        'Avoid harsh soaps'
      ],
      herbs: ['Neem', 'Turmeric', 'Aloe Vera', 'Sandalwood', 'Brahmi'],
      severity: 'mild',
      shopLinks: ['Apollo Pharmacy', '1mg', 'Netmeds']
    },
    'Muscle Pain,Fatigue,Body Aches': {
      disease: 'Muscle Strain / Overexertion',
      confidence: 76,
      symptoms: ['Muscle Pain', 'Fatigue', 'Body Aches'],
      recommendations: [
        'Rest the affected area',
        'Apply warm oil massage (Mahanarayana Oil)',
        'Do gentle stretching exercises',
        'Take warm baths with rock salt',
        'Avoid strenuous activities for 3-5 days'
      ],
      herbs: ['Ashwagandha', 'Shatavari', 'Bala', 'Wintergreen Oil', 'Eucalyptus'],
      severity: 'mild',
      shopLinks: ['Apollo Pharmacy', '1mg', 'Netmeds']
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const initialMessage: Message = {
      id: '1',
      type: 'ai',
      content: 'Welcome to PrakritiPath AI Health Assistant! I can help you identify potential health concerns based on your symptoms. This is not a replacement for professional medical advice. Let\'s start by knowing your age group.',
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, []);

  const handleAgeSelect = (age: string) => {
    setSelectedAge(age);
    const userMsg: Message = {
      id: String(messages.length + 1),
      type: 'user',
      content: age,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg: Message = {
        id: String(messages.length + 2),
        type: 'ai',
        content: `Great! I've noted you're in the ${age} age group. Now, please select the symptoms you're experiencing. You can select multiple symptoms.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      setStep('symptoms');
    }, 500);
  };

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleDiagnose = () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setIsLoading(true);

    const symptomKey = selectedSymptoms.join(',');
    let result = diagnosisMap[symptomKey];

    if (!result) {
      const baseSymptom = selectedSymptoms[0];
      result = Object.values(diagnosisMap).find(d =>
        d.symptoms.some(s => s.toLowerCase().includes(baseSymptom.toLowerCase()))
      ) || {
        disease: 'General Wellness Concern',
        confidence: 65,
        symptoms: selectedSymptoms,
        recommendations: [
          'Consult with a healthcare professional',
          'Get adequate rest and hydration',
          'Maintain a balanced diet',
          'Practice stress management'
        ],
        herbs: ['Ashwagandha', 'Tulsi', 'Turmeric'],
        severity: 'mild',
        shopLinks: ['Apollo Pharmacy', '1mg']
      };
    }

    setTimeout(() => {
      setIsLoading(false);
      setDiagnosis(result);
      setStep('diagnosis');

      const userMsg: Message = {
        id: String(messages.length + 1),
        type: 'user',
        content: `My symptoms are: ${selectedSymptoms.join(', ')}`,
        timestamp: new Date()
      };

      const aiMsg: Message = {
        id: String(messages.length + 2),
        type: 'ai',
        content: `Based on your symptoms, I've identified a potential condition. Please review the diagnosis below and consult with a healthcare professional for confirmation.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMsg, aiMsg]);
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: String(messages.length + 1),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const responses = [
        'Based on Ayurvedic principles, this condition is often managed through dietary adjustments and herbal remedies.',
        'I recommend consulting with a qualified Ayurvedic practitioner for personalized treatment.',
        'The recommended herbs are available in our 24/7 herb shop. Would you like me to guide you?',
        'Remember to maintain proper sleep and hydration. Also, consider practicing yoga and meditation.',
        'Stress management through pranayama can significantly improve your condition.'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const aiMsg: Message = {
        id: String(messages.length + 2),
        type: 'ai',
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 pt-32 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Brain className="w-16 h-16 text-emerald-600" />
                <Zap className="w-6 h-6 text-yellow-500 absolute -bottom-2 -right-2" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Health Assistant</h1>
            <p className="text-gray-600">Get preliminary diagnosis based on your symptoms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-emerald-500">
              <Heart className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Symptom Analysis</h3>
              <p className="text-sm text-gray-600">Advanced symptom matching using AI</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
              <Brain className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Smart Diagnosis</h3>
              <p className="text-sm text-gray-600">Confidence-scored health assessments</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <Leaf className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Herb Recommendations</h3>
              <p className="text-sm text-gray-600">Personalized Ayurvedic remedies</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Chat Area */}
            <div className="h-96 overflow-y-auto bg-gray-50 p-6 space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg rounded-bl-none">
                    <Loader className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Steps */}
            <div className="p-6 bg-white border-t">
              {step === 'greeting' && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 font-semibold">Select your age group:</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {ageGroups.map(age => (
                      <button
                        key={age}
                        onClick={() => handleAgeSelect(age)}
                        className="px-3 py-2 bg-emerald-100 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-lg font-medium transition-all"
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 'symptoms' && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 font-semibold">Select your symptoms:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {commonSymptoms.map(symptom => (
                      <button
                        key={symptom}
                        onClick={() => handleSymptomToggle(symptom)}
                        className={`px-3 py-2 rounded-lg font-medium transition-all ${
                          selectedSymptoms.includes(symptom)
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {symptom}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleDiagnose}
                    disabled={selectedSymptoms.length === 0 || isLoading}
                    className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
                    Get AI Diagnosis
                  </button>
                </div>
              )}

              {step === 'diagnosis' && diagnosis && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">{diagnosis.disease}</h4>
                        <p className="text-emerald-700 font-semibold mt-1">Confidence: {diagnosis.confidence}%</p>
                        <p className="text-sm text-gray-600 mt-2"><strong>Severity:</strong> {diagnosis.severity.toUpperCase()}</p>
                      </div>
                    </div>
                  </div>

                  {diagnosis.severity === 'severe' && diagnosis.disease.includes('Cardiac') && (
                    <div className="bg-red-50 border-2 border-red-500 p-4 rounded-lg">
                      <p className="text-red-700 font-bold">⚠️ EMERGENCY: Please seek immediate medical attention</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Recommendations:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {diagnosis.recommendations.map((rec, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-emerald-600">✓</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Recommended Herbs:</h5>
                      <div className="flex flex-wrap gap-2">
                        {diagnosis.herbs.map(herb => (
                          <span key={herb} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                            {herb}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 'diagnosis' && (
                <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask follow-up questions..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-all disabled:bg-gray-400 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <p className="font-semibold mb-1">⚠️ Medical Disclaimer</p>
            <p>This AI assistant provides preliminary health information and is NOT a substitute for professional medical advice. Always consult with qualified healthcare professionals before making any health decisions. In case of emergency, call emergency services immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDiagnosisChatPage;
