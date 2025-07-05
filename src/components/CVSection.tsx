import React from 'react';
import { Download, GraduationCap, Briefcase, Award, FileText, ExternalLink, Calendar, MapPin } from 'lucide-react';

const CVSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Edinburgh",
      period: "2014 - 2018",
      location: "Edinburgh, UK",
      thesis: "Neural Machine Translation for Low-Resource Languages",
      advisor: "Prof. [Advisor Name]"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "University of Edinburgh",
      period: "2012 - 2014",
      location: "Edinburgh, UK",
      thesis: "Statistical Machine Translation with Syntactic Features",
      advisor: "Prof. [Advisor Name]"
    },
    {
      degree: "B.S. in Computer Science",
      institution: "[Your University]",
      period: "2008 - 2012",
      location: "[Your City]",
      thesis: "Sentiment Analysis of Social Media Data",
      advisor: "Prof. [Advisor Name]"
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
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <div className="w-16 h-1 bg-blue-600"></div>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <Download size={20} />
          Download PDF
        </button>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={24} />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600 font-medium mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700 text-sm">
                      <span className="font-medium">Thesis:</span> {edu.thesis}
                    </p>
                    <p className="text-gray-700 text-sm mt-1">
                      <span className="font-medium">Advisor:</span> {edu.advisor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Briefcase className="text-green-600" size={24} />
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600 font-medium mt-1">{exp.organization}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
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
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FileText className="text-purple-600" size={24} />
          Selected Publications
        </h2>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">{pub.venue}</span>
                    <span className="text-gray-500">{pub.year}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      {pub.type}
                    </span>
                  </div>
                </div>
                <ExternalLink className="text-gray-400 hover:text-gray-600 cursor-pointer" size={16} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              View all publications on Google Scholar
            </a>
          </p>
        </div>
      </div>

      {/* Awards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="text-orange-600" size={24} />
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Award className="text-orange-600" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
                  <p className="text-gray-600 mt-1">{award.organization}</p>
                  <p className="text-gray-500 text-sm mt-2">{award.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Programming Languages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Python</li>
              <li>• R</li>
              <li>• Java</li>
              <li>• C++</li>
              <li>• JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Frameworks & Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• PyTorch</li>
              <li>• TensorFlow</li>
              <li>• Hugging Face</li>
              <li>• scikit-learn</li>
              <li>• NLTK/spaCy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h3>
            <ul className="space-y-2 text-gray-700">
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