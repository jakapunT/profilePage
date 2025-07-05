import React from 'react';
import { Building, Calendar, ExternalLink, Users } from 'lucide-react';

const LabsSection = () => {
  const labs = [
    {
      name: "Advanced NLP Research Lab",
      institution: "MIT Computer Science and Artificial Intelligence Laboratory",
      role: "Research Scientist",
      period: "2020 - Present",
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
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Labs & Affiliations</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <p className="text-slate-600 mt-4">
            My research journey across leading institutions and laboratories, contributing to advancing the field of Natural Language Processing.
          </p>
        </div>

        <div className="space-y-8">
          {labs.map((lab, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{lab.name}</h3>
                      <div className="flex items-center gap-2 text-slate-600 mb-2">
                        <Building size={16} />
                        <span>{lab.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <Calendar size={16} />
                        <span>{lab.period}</span>
                      </div>
                    </div>
                    <a 
                      href={lab.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {lab.role}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {lab.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Users size={18} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {lab.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-slate-600">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Current Collaborations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">International Partnerships</h4>
              <p className="text-slate-600 text-sm">
                Active collaborations with researchers from Oxford, Cambridge, ETH Zurich, and University of Tokyo.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2">Industry Connections</h4>
              <p className="text-slate-600 text-sm">
                Ongoing research partnerships with Google AI, Microsoft Research, and OpenAI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsSection;