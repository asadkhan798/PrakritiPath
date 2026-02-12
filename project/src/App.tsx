import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import AyurvedaPage from './pages/AyurvedaPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import HealthResourcesPage from './pages/HealthResourcesPage';
import NearbyDoctorsPage from './pages/NearbyDoctorsPage';
import JobListingsPage from './pages/JobListingsPage';
import StorePage from './pages/StorePage';
import HelpConsultationPage from './pages/HelpConsultationPage';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/ayurveda" element={<AyurvedaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/health-resources" element={<HealthResourcesPage />} />
          <Route path="/nearby-doctors" element={<NearbyDoctorsPage />} />
          <Route path="/jobs" element={<JobListingsPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/help" element={<HelpConsultationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;