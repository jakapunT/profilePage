import React, { useState } from 'react';
import { User, Building, BookOpen, FileText, Mail, Github, Linkedin, Twitter, MapPin, ExternalLink } from 'lucide-react';
import AboutSection from './components/AboutSection';
import LabsSection from './components/LabsSection';
import ActivitiesSection from './components/ActivitiesSection';
import CVSection from './components/CVSection';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'labs', label: 'Research Labs', icon: Building },
    { id: 'activities', label: 'Activities', icon: BookOpen },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              JD
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Dr. [Your Name]</h1>
              <p className="text-xl text-slate-600 mb-3">Natural Language Processing Researcher</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mb-4">
                <MapPin size={16} />
                <span>[Your Institution], [Your City]</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="mailto:your.email@university.edu" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/yourusername" className="text-slate-600 hover:text-slate-800 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/yourusername" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400">© 2024 Dr. [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;