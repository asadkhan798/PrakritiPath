import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Star, Clock, Award, Filter, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Practitioner {
  id: string;
  name: string;
  specialization: string;
  location: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
  experience_years: number;
  qualifications: string;
  availability_status: string;
  rating: number;
  bio: string;
}

const NearbyDoctorsPage = () => {
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [filteredPractitioners, setFilteredPractitioners] = useState<Practitioner[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const specializations = [
    'All',
    'Ayurveda Doctor',
    'Yoga Instructor',
    'Wellness Coach',
    'Nutritionist',
    'Therapist'
  ];

  useEffect(() => {
    fetchPractitioners();
  }, []);

  const fetchPractitioners = async () => {
    try {
      const { data, error } = await supabase
        .from('practitioners')
        .select('*')
        .eq('availability_status', 'available');

      if (error) throw error;
      setPractitioners(data || []);
      setFilteredPractitioners(data || []);
    } catch (error) {
      console.error('Error fetching practitioners:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = practitioners;

    if (selectedSpecialization !== 'All') {
      filtered = filtered.filter(p => p.specialization === selectedSpecialization);
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPractitioners(filtered);
  }, [searchTerm, selectedSpecialization, practitioners]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Find Local Practitioners
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Discover Nearby Ayurveda & Wellness Experts
            </h1>
            <p className="text-xl opacity-90">
              Connect with qualified practitioners, doctors, and wellness coaches in your area.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {specializations.map(spec => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedSpecialization === spec
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Practitioners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Loading practitioners...</p>
            </div>
          ) : filteredPractitioners.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No practitioners found</p>
            </div>
          ) : (
            filteredPractitioners.map(practitioner => (
              <div
                key={practitioner.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-24"></div>

                <div className="relative px-6 pb-6">
                  <div className="absolute -top-12 left-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-3xl text-white font-bold">
                      {practitioner.name.charAt(0)}
                    </div>
                  </div>

                  <div className="mt-16 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{practitioner.name}</h3>
                    <p className="text-emerald-600 font-semibold text-sm">{practitioner.specialization}</p>
                  </div>

                  {/* Rating */}
                  {practitioner.rating > 0 && (
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(practitioner.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{practitioner.rating}/5</span>
                    </div>
                  )}

                  {/* Bio */}
                  {practitioner.bio && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{practitioner.bio}</p>
                  )}

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                      {practitioner.location}
                    </div>

                    <div className="flex items-center text-gray-700 text-sm">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      {practitioner.experience_years}+ years experience
                    </div>

                    <div className="flex items-center text-gray-700 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-orange-600" />
                      {practitioner.availability_status}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-2">
                    {practitioner.phone && (
                      <a
                        href={`tel:${practitioner.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg hover:bg-emerald-200 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                    )}
                    {practitioner.email && (
                      <a
                        href={`mailto:${practitioner.email}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NearbyDoctorsPage;
