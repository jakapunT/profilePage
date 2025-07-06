import React from 'react';
import { Download, GraduationCap, Briefcase, Award, FileText, ExternalLink, Calendar, MapPin } from 'lucide-react';

const CVSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "The University of California, Riverside",
      period: "2017 - 2022",
      location: "USA",
      advisor: "Michalis Faloutsos"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "The University of Southern California",
      period: "2014 - 2016",
      location: "USA"
    },
    {
      degree: "B.E. in Computer Engineering",
      institution: "Chulalongkorn University",
      period: "2009 - 2012",
      location: "Thailand"
    }
  ];

  const experience = [
    {
      position: "Research Scientist",
      organization: "MIT Computer Science and Artificial Intelligence Laboratory",
      period: "2020 - Present",
      location: "Cambridge, MA",
      responsibilities: [
        "Lead research team of 8 researchers and PhD students",
        "Develop novel NLP architectures and algorithms",
        "Publish research in top-tier conferences and journals",
        "Collaborate with industry partners on applied research"
      ]
    },
    {
      position: "Postdoctoral Researcher",
      organization: "Stanford University",
      period: "2018 - 2020",
      location: "Stanford, CA",
      responsibilities: [
        "Conducted research on multimodal NLP systems",
        "Developed natural language interfaces for HCI",
        "Mentored graduate students and research assistants",
        "Secured research funding through grant proposals"
      ]
    },
    {
      position: "Research Assistant",
      organization: "University of Edinburgh",
      period: "2014 - 2018",
      location: "Edinburgh, UK",
      responsibilities: [
        "Conducted doctoral research on machine translation",
        "Taught undergraduate courses in NLP and linguistics",
        "Contributed to open-source NLP tools and datasets",
        "Presented research at international conferences"
      ]
    }
  ];

  const publications = [
    {
      title: "Efficient Fine-tuning of Large Language Models with Parameter-Efficient Methods",
      authors: "[Your Name], et al.",
      venue: "International Conference on Learning Representations (ICLR)",
      year: "2024",
      type: "Conference Paper"
    },
    {
      title: "Multilingual Neural Machine Translation with Language-Specific Adapters",
      authors: "[Your Name], et al.",
      venue: "Association for Computational Linguistics (ACL)",
      year: "2023",
      type: "Conference Paper"
    },
    {
      title: "A Survey of Low-Resource Machine Translation Techniques",
      authors: "[Your Name], et al.",
      venue: "Computational Linguistics Journal",
      year: "2023",
      type: "Journal Article"
    },
    {
      title: "Cross-lingual Transfer Learning for Natural Language Understanding",
      authors: "[Your Name], et al.",
      venue: "Empirical Methods in Natural Language Processing (EMNLP)",
      year: "2022",
      type: "Conference Paper"
    },
    {
      title: "Interpretable Neural Machine Translation with Attention Mechanisms",
      authors: "[Your Name], et al.",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: "2022",
      type: "Conference Paper"
    }
  ];

  const awards = [
    {
      title: "Outstanding Paper Award",
      organization: "International Conference on Learning Representations (ICLR)",
      year: "2024"
    },
    {
      title: "NSF CAREER Award",
      organization: "National Science Foundation",
      year: "2023"
    },
    {
      title: "Best Paper Award",
      organization: "European Chapter of the Association for Computational Linguistics (EACL)",
      year: "2017"
    },
    {
      title: "Google PhD Fellowship",
      organization: "Google AI",
      year: "2016"
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <div className="w-16 h-1 bg-blue-600"></div>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-fit">
          <Download size={16} sm:size={20} />
          Download PDF
        </button>
      </div>

      {/* Education */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={20} sm:size={24} />
          Education
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600 font-medium mt-1 text-sm sm:text-base">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  {edu.advisor && (
                    <div className="mt-3">
                      <p className="text-gray-700 text-xs sm:text-sm">
                        <span className="font-medium">Advisor:</span> {edu.advisor}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <Briefcase className="text-green-600" size={20} sm:size={24} />
          Professional Experience
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600 font-medium mt-1 text-sm sm:text-base">{exp.organization}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <FileText className="text-purple-600" size={20} sm:size={24} />
          Selected Publications
        </h2>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">{pub.authors}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                    <span className="text-gray-500">{pub.venue}</span>
                    <span className="text-gray-500">{pub.year}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium w-fit">
                      {pub.type}
                    </span>
                  </div>
                </div>
                <ExternalLink className="text-gray-400 hover:text-gray-600 cursor-pointer flex-shrink-0" size={16} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 lg:mt-6 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              View all publications on Google Scholar
            </a>
          </p>
        </div>
      </div>

      {/* Awards */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <Award className="text-orange-600" size={20} sm:size={24} />
          Awards & Recognition
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-orange-600" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{award.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{award.organization}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">{award.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Programming Languages</h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>• Python</li>
              <li>• R</li>
              <li>• Java</li>
              <li>• C++</li>
              <li>• JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Frameworks & Tools</h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>• PyTorch</li>
              <li>• TensorFlow</li>
              <li>• Hugging Face</li>
              <li>• scikit-learn</li>
              <li>• NLTK/spaCy</li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Specializations</h3>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>• Large Language Models</li>
              <li>• Machine Translation</li>
              <li>• Sentiment Analysis</li>
              <li>• Question Answering</li>
              <li>• Multilingual NLP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVSection;