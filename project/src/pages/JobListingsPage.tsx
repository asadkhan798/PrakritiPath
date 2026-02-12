import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Banknote, Clock, Search, Filter, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface JobListing {
  id: string;
  title: string;
  position_type: string;
  location: string;
  description: string;
  requirements: string;
  salary_range: string;
  posted_by: string;
  status: string;
  created_at: string;
}

const JobListingsPage = () => {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>([]);
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const positionTypes = [
    'All',
    'Yoga Instructor',
    'Ayurveda Doctor',
    'Ayurveda Practitioner',
    'Wellness Coach',
    'Nutritionist'
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('job_listings')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
      setFilteredJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = jobs;

    if (selectedPosition !== 'All') {
      filtered = filtered.filter(j => j.position_type === selectedPosition);
    }

    if (searchTerm) {
      filtered = filtered.filter(j =>
        j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        j.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        j.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedPosition, jobs]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Career Opportunities
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Join Our Wellness Community
            </h1>
            <p className="text-xl opacity-90">
              Discover exciting career opportunities as a yoga instructor, Ayurveda practitioner, or wellness coach.
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
                  placeholder="Search jobs by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                {positionTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {positionTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedPosition(type)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedPosition === type
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading job listings...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl">
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No job listings found</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.position_type}
                      </span>
                      {job.status && (
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {job.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">Posted {formatDate(job.created_at)}</p>
                  </div>
                </div>

                {/* Description */}
                {job.description && (
                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                )}

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.location}</span>
                  </div>

                  {job.salary_range && (
                    <div className="flex items-center text-gray-700">
                      <Banknote className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{job.salary_range}</span>
                    </div>
                  )}

                  {job.posted_by && (
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">By {job.posted_by}</span>
                    </div>
                  )}
                </div>

                {/* Requirements */}
                {job.requirements && (
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Requirements</h4>
                    <p className="text-sm text-gray-700 line-clamp-2">{job.requirements}</p>
                  </div>
                )}

                {/* Apply Button */}
                <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  <ExternalLink className="w-5 h-5" />
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>

        {/* CTA Section */}
        {filteredJobs.length > 0 && (
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Don't see your perfect role?</h3>
            <p className="mb-4">Contact us to explore other opportunities or submit your own profile.</p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListingsPage;
