import React, { useState, useEffect } from 'react';
import { Activity, Heart, Droplets, Moon, TrendingUp, Calendar, BarChart3, Plus, Trash2 } from 'lucide-react';

interface WellnessEntry {
  id: string;
  date: string;
  category: 'water' | 'sleep' | 'exercise' | 'meditation' | 'mood';
  value: number;
  notes: string;
}

const WellnessTrackerPage = () => {
  const [entries, setEntries] = useState<WellnessEntry[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: 'water' as const,
    value: 0,
    notes: ''
  });

  const categoryConfig = {
    water: {
      label: 'Water Intake',
      unit: 'glasses',
      icon: Droplets,
      color: 'blue',
      goal: 8
    },
    sleep: {
      label: 'Sleep Duration',
      unit: 'hours',
      icon: Moon,
      color: 'indigo',
      goal: 8
    },
    exercise: {
      label: 'Exercise',
      unit: 'minutes',
      icon: Activity,
      color: 'green',
      goal: 60
    },
    meditation: {
      label: 'Meditation',
      unit: 'minutes',
      icon: Heart,
      color: 'purple',
      goal: 20
    },
    mood: {
      label: 'Mood',
      unit: 'out of 10',
      icon: TrendingUp,
      color: 'yellow',
      goal: 8
    }
  };

  const addEntry = () => {
    if (formData.value === 0) {
      alert('Please enter a value');
      return;
    }

    const newEntry: WellnessEntry = {
      id: String(Date.now()),
      date: selectedDate,
      category: formData.category,
      value: formData.value,
      notes: formData.notes
    };

    setEntries([...entries, newEntry]);
    setFormData({ category: 'water', value: 0, notes: '' });
    setShowForm(false);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const getTodayEntries = () => {
    return entries.filter(entry => entry.date === selectedDate);
  };

  const getStats = () => {
    const today = getTodayEntries();
    const stats: { [key: string]: number } = {};

    Object.keys(categoryConfig).forEach(category => {
      const categoryEntries = today.filter(e => e.category === category as any);
      stats[category] = categoryEntries.reduce((sum, e) => sum + e.value, 0);
    });

    return stats;
  };

  const stats = getStats();
  const todayEntries = getTodayEntries();

  const calculateProgress = (category: keyof typeof categoryConfig, value: number) => {
    const goal = categoryConfig[category].goal;
    return Math.min((value / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Wellness Tracker</h1>
          <p className="text-gray-600 text-lg">Monitor your daily health and wellness activities</p>
        </div>

        {/* Date Selector */}
        <div className="flex justify-center mb-8">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-6 py-3 border-2 border-emerald-500 rounded-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-4">
            {Object.entries(categoryConfig).map(([key, config]) => {
              const Icon = config.icon;
              const value = stats[key] || 0;
              const progress = calculateProgress(key as keyof typeof categoryConfig, value);

              return (
                <div key={key} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-${config.color}-100 rounded-lg`}>
                        <Icon className={`w-6 h-6 text-${config.color}-600`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{config.label}</p>
                        <p className="text-sm text-gray-600">{config.unit}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-800">{value}</p>
                      <p className="text-sm text-gray-600">Goal: {config.goal}</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-${config.color}-500 transition-all duration-300`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    {progress >= 100 ? (
                      <span className="text-green-600 font-semibold">✓ Goal reached!</span>
                    ) : (
                      <span>{Math.round(progress)}% completed</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Entry Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Add Entry</h2>

            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-white text-emerald-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Log Activity
              </button>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full p-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    {Object.entries(categoryConfig).map(([key, config]) => (
                      <option key={key} value={key}>{config.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Value</label>
                  <input
                    type="number"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
                    className="w-full p-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Notes (optional)</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Add notes..."
                    rows={3}
                    className="w-full p-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={addEntry}
                    className="flex-1 bg-white text-emerald-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-white/20 text-white font-bold py-2 rounded-lg hover:bg-white/30 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Today's Log */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-600" />
            Today's Log ({new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })})
          </h2>

          {todayEntries.length === 0 ? (
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No entries for this date</p>
            </div>
          ) : (
            <div className="space-y-3">
              {todayEntries.map(entry => {
                const config = categoryConfig[entry.category];
                const Icon = config.icon;

                return (
                  <div key={entry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-emerald-500 transition-all">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-3 bg-${config.color}-100 rounded-lg`}>
                        <Icon className={`w-5 h-5 text-${config.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{config.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{entry.value} {config.unit}</p>
                        {entry.notes && (
                          <p className="text-sm text-gray-600 mt-1">Note: {entry.notes}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Wellness Tips */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <Droplets className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Hydration Tip</h3>
            <p className="text-sm">Drink water throughout the day. Aim for at least 8 glasses daily for optimal health.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <Moon className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Sleep Tip</h3>
            <p className="text-sm">Get 7-8 hours of quality sleep. Go to bed and wake up at the same time daily.</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <Activity className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Exercise Tip</h3>
            <p className="text-sm">Exercise for at least 60 minutes daily. Include both cardio and strength training.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessTrackerPage;
