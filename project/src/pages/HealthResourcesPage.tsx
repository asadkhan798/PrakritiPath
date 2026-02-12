import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, AlertCircle, CheckCircle, Pill, Home, Leaf } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HealthCondition {
  id: string;
  age_group: string;
  disease_name: string;
  symptoms: string;
  causes: string;
  diet_lifestyle: string;
  herbs: string;
  formulations: string;
  home_remedies: string;
}

const HealthResourcesPage = () => {
  const [conditions, setConditions] = useState<HealthCondition[]>([]);
  const [filteredConditions, setFilteredConditions] = useState<HealthCondition[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState<HealthCondition | null>(null);
  const [loading, setLoading] = useState(true);

  const ageGroups = ['All', 'Adolescents (13-18)', 'Young Adults (19-40)', 'Middle Age (41-60)', 'Senior (60+)', 'Infants & Toddlers (0-2)'];

  useEffect(() => {
    fetchConditions();
  }, []);

  const fetchConditions = async () => {
    try {
      const { data, error } = await supabase
        .from('health_conditions')
        .select('*');

      if (error) throw error;
      setConditions(data || []);
      setFilteredConditions(data || []);
    } catch (error) {
      console.error('Error fetching conditions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = conditions;

    if (selectedAgeGroup !== 'All') {
      filtered = filtered.filter(c => c.age_group === selectedAgeGroup);
    }

    if (searchTerm) {
      filtered = filtered.filter(c =>
        c.disease_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.symptoms?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredConditions(filtered);
  }, [searchTerm, selectedAgeGroup, conditions]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Health Knowledge Base
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Ayurvedic Health Resources
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive health information organized by age group with traditional Ayurvedic remedies and modern wellness guidance.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search conditions, symptoms, herbs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Age Group Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
              >
                {ageGroups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Age Group Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {ageGroups.map(group => (
              <button
                key={group}
                onClick={() => setSelectedAgeGroup(group)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedAgeGroup === group
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conditions List */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {loading ? (
                <p className="text-gray-500">Loading...</p>
              ) : filteredConditions.length === 0 ? (
                <p className="text-gray-500">No conditions found</p>
              ) : (
                filteredConditions.map(condition => (
                  <button
                    key={condition.id}
                    onClick={() => setSelectedCondition(condition)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedCondition?.id === condition.id
                        ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                    }`}
                  >
                    <p className="font-semibold text-sm">{condition.disease_name}</p>
                    <p className="text-xs text-gray-600">{condition.age_group}</p>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-2">
            {selectedCondition ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-6">
                  <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {selectedCondition.age_group}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mt-2">{selectedCondition.disease_name}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Symptoms */}
                  {selectedCondition.symptoms && (
                    <div className="bg-red-50 rounded-xl p-4 border-2 border-red-100">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <h3 className="font-bold text-red-900">Symptoms</h3>
                      </div>
                      <p className="text-red-800 text-sm">{selectedCondition.symptoms}</p>
                    </div>
                  )}

                  {/* Causes */}
                  {selectedCondition.causes && (
                    <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-100">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
                        <h3 className="font-bold text-orange-900">Causes</h3>
                      </div>
                      <p className="text-orange-800 text-sm">{selectedCondition.causes}</p>
                    </div>
                  )}

                  {/* Diet & Lifestyle */}
                  {selectedCondition.diet_lifestyle && (
                    <div className="bg-green-50 rounded-xl p-4 border-2 border-green-100">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <h3 className="font-bold text-green-900">Diet & Lifestyle</h3>
                      </div>
                      <p className="text-green-800 text-sm">{selectedCondition.diet_lifestyle}</p>
                    </div>
                  )}

                  {/* Herbs */}
                  {selectedCondition.herbs && (
                    <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-100">
                      <div className="flex items-center mb-2">
                        <Leaf className="w-5 h-5 text-emerald-600 mr-2" />
                        <h3 className="font-bold text-emerald-900">Herbs</h3>
                      </div>
                      <p className="text-emerald-800 text-sm">{selectedCondition.herbs}</p>
                    </div>
                  )}

                  {/* Formulations */}
                  {selectedCondition.formulations && (
                    <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-100">
                      <div className="flex items-center mb-2">
                        <Pill className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="font-bold text-blue-900">Formulations</h3>
                      </div>
                      <p className="text-blue-800 text-sm">{selectedCondition.formulations}</p>
                    </div>
                  )}

                  {/* Home Remedies */}
                  {selectedCondition.home_remedies && (
                    <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-100">
                      <div className="flex items-center mb-2">
                        <Home className="w-5 h-5 text-purple-600 mr-2" />
                        <h3 className="font-bold text-purple-900">Home Remedies</h3>
                      </div>
                      <p className="text-purple-800 text-sm">{selectedCondition.home_remedies}</p>
                    </div>
                  )}
                </div>

                <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> This information is for educational purposes. Always consult with a qualified Ayurvedic practitioner for personalized treatment.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Select a condition to view detailed information</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthResourcesPage;
