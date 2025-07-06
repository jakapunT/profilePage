import React from 'react';
import { Building, Calendar, ExternalLink, Users, MapPin } from 'lucide-react';

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
      <div className="mb-6 lg:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">NLP Research Lab @Chula </h1>
        <p>Department of Linguistics, Faculty of Arts, Chulalongkorn University</p>
        <div className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6"></div>
        <p className="text-gray-600 text-base sm:text-lg">
         The Natural Language Processing Lab focuses on advancing Thai NLP infrastructure, including automated linguistic analysis and the development of Large Language Models specifically for the Thai language.    </p>
<p><Prospective Master's students interested in joining the lab are encouraged to consider the Linguistics program's "แผน ข" for its flexibility. This program provides comprehensive training, from foundational programming to the implementation of neural language models. A sample study plan is available for reference./p>

<p>For those pursuing a PhD, a strong background in programming and machine learning is generally expected, though direct discussion via email for potential projects is also welcome.</p>

    
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