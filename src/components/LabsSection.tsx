import React from 'react';
import { Building, Calendar, ExternalLink, Users, MapPin, GraduationCap, BookOpen, Award } from 'lucide-react';

const LabsSection = () => {
  const labs = [
    {
      name: "Advanced NLP Research Lab",
      institution: "MIT Computer Science and Artificial Intelligence Laboratory",
      role: "Research Scientist",
      period: "2020 - Present",
      location: "Cambridge, MA",
      description: "Leading research in large language models and their applications in real-world scenarios. Focus on developing more efficient and interpretable NLP systems.",
      achievements: [
        "Led a team of 8 researchers and PhD students",
        "Published 12 papers in top-tier conferences",
        "Secured $2.5M in research funding",
        "Developed novel transformer architectures"
      ],
      website: "https://www.csail.mit.edu/"
    },
    {
      name: "Human-Computer Interaction Lab",
      institution: "Stanford University",
      role: "Postdoctoral Researcher",
      period: "2018 - 2020",
      location: "Stanford, CA",
      description: "Focused on developing natural language interfaces for human-computer interaction. Worked on multimodal systems combining text, speech, and vision.",
      achievements: [
        "Developed multilingual dialogue systems",
        "Collaborated with industry partners (Google, Microsoft)",
        "Published 8 papers in ACL, EMNLP, and CHI",
        "Mentored 5 graduate students"
      ],
      website: "https://hci.stanford.edu/"
    },
    {
      name: "Computational Linguistics Research Group",
      institution: "University of Edinburgh",
      role: "PhD Student & Research Assistant",
      period: "2014 - 2018",
      location: "Edinburgh, UK",
      description: "Conducted doctoral research on machine translation and cross-lingual understanding. Specialized in low-resource language processing and domain adaptation.",
      achievements: [
        "Completed PhD thesis on 'Neural Machine Translation for Low-Resource Languages'",
        "Won Best Paper Award at EACL 2017",
        "Contributed to open-source MT toolkit",
        "Taught undergraduate courses in NLP"
      ],
      website: "https://www.ed.ac.uk/informatics/research/groups/ilcc"
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Enhanced Header Section */}
      <div className="mb-8 lg:mb-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-50 -z-10"></div>
        
        <div className="relative p-6 lg:p-8">
          {/* Main Title */}
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              NLP Research Lab
              <span className="text-blue-600">@Chula</span>
            </h1>
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
              <Building size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Department of Linguistics, Faculty of Arts, Chulalongkorn University
              </span>
            </div>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </div>

          {/* Description Paragraphs with better spacing */}
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
              The Natural Language Processing Lab focuses on advancing Thai NLP infrastructure, 
              including automated linguistic analysis and the development of Large Language Models 
              specifically for the Thai language.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="text-green-600" size={16} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Master's Program</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Prospective Master's students interested in joining the lab are encouraged to consider 
                    the Linguistics program's <span className="font-medium text-blue-600">"แผน ข"</span> for its flexibility. 
                    This program provides comprehensive training, from foundational programming to the 
                    implementation of neural language models. A sample study plan is available for{' '}
                    <a 
                      href="https://www.arts.chula.ac.th/ling/index.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                    >
                      reference
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="text-purple-600" size={16} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">PhD Program</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For those pursuing a PhD, a strong background in programming and machine learning 
                    is generally expected, though direct discussion via email for potential projects 
                    is also welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          
        </div>
      </div>

      <div className="space-y-6 lg:space-y-8">
        {labs.map((lab, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{lab.name}</h2>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building size={16} className="flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{lab.institution}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{lab.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="flex-shrink-0" />
                      <span>{lab.location}</span>
                    </div>
                  </div>
                </div>
                <a 
                  href={lab.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors self-start"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {lab.role}
                </span>
              </div>

              <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                {lab.description}
              </p>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users size={18} className="text-blue-600" />
                  Key Achievements
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {lab.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Collaborations */}
      <div className="mt-8 lg:mt-12 bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Current Collaborations</h2>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">International Partnerships</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Active collaborations with researchers from Oxford, Cambridge, ETH Zurich, and University of Tokyo.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Industry Connections</h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Ongoing research partnerships with Google AI, Microsoft Research, and OpenAI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsSection;