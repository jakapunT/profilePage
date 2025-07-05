import React, { useState } from 'react';
import { User, Building, BookOpen, FileText, Mail, Github, Linkedin, Twitter, MapPin, ExternalLink, Phone, Home, Menu, X } from 'lucide-react';
import AboutSection from './components/AboutSection';
import LabsSection from './components/LabsSection';
import ActivitiesSection from './components/ActivitiesSection';
import CVSection from './components/CVSection';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'labs', label: 'Research Labs', icon: Building },
    { id: 'activities', label: 'Teaching & Grants', icon: BookOpen },
    { id: 'cv', label: 'CV', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'labs':
        return <LabsSection />;
      case 'activities':
        return <ActivitiesSection />;
      case 'cv':
        return <CVSection />;
      default:
        return <AboutSection />;
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Dr. [Your Name]</h1>
              <p className="text-xs text-gray-600">NLP Researcher</p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeMobileMenu}>
          <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 overflow-y-auto h-full">
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-4xl font-light shadow-lg mb-4">
                  JD
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-1">Dr. [Your Name]</h1>
                <p className="text-gray-600 text-sm">Natural Language Processing Researcher</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <Home size={16} className="text-gray-500 flex-shrink-0" />
                  <span>[Your Institution]</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={16} className="text-gray-500 flex-shrink-0" />
                  <span>[Your City, Country]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gray-500 flex-shrink-0" />
                  <a href="mailto:your.email@university.edu" className="text-blue-600 hover:text-blue-800 break-all">
                    your.email@university.edu
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-500 flex-shrink-0" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-6 justify-center">
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        closeMobileMenu();
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 bg-gray-50 border-r border-gray-200 min-h-screen fixed left-0 top-0 overflow-y-auto">
          <div className="p-6">
            {/* Profile Image */}
            <div className="text-center mb-6">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-6xl font-light shadow-lg mb-4">
                JD
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Dr. [Your Name]</h1>
              <p className="text-gray-600 text-sm">Natural Language Processing Researcher</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Home size={16} className="text-gray-500" />
                <span>[Your Institution]</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={16} className="text-gray-500" />
                <span>[Your City, Country]</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500" />
                <a href="mailto:your.email@university.edu" className="text-blue-600 hover:text-blue-800">
                  your.email@university.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-500" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center">
              <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;