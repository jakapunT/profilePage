import React from 'react';
import { Download, GraduationCap, Briefcase, Award, FileText, ExternalLink } from 'lucide-react';

const CVSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Edinburgh",
      period: "2014 - 2018",
      thesis: "Neural Machine Translation for Low-Resource Languages",
      advisor: "Prof. [Advisor Name]"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "University of Edinburgh",
      period: "2012 - 2014",
      thesis: "Statistical Machine Translation with Syntactic Features",
      advisor: "Prof. [Advisor Name]"
    },
    {
      degree: "B.S. in Computer Science",
      institution: "[Your University]",
      period: "2008 - 2012",
      thesis: "Sentiment Analysis of Social Media Data",
      advisor: "Prof. [Advisor Name]"
    }
  ];

  const experience = [
    {
      position: "Research Scientist",
      organization: "MIT Computer Science and Artificial Intelligence Laboratory",
      period: "2020 - Present",
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
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Curriculum Vitae</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={24} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-600 font-medium mt-1">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-2">{edu.period}</p>
                    <div className="mt-3">
                      <p className="text-slate-600 text-sm">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
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
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Briefcase className="text-green-600" size={24} />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-900">{exp.position}</h4>
                    <p className="text-slate-600 font-medium mt-1">{exp.organization}</p>
                    <p className="text-slate-500 text-sm mt-2">{exp.period}</p>
                  </div>
                </div>
                <div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-slate-600">
                        <span className="text-green-500 font-bold">•</span>
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
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="text-purple-600" size={24} />
            Selected Publications
          </h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{pub.title}</h4>
                    <p className="text-slate-600 mb-2">{pub.authors}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-slate-500">{pub.venue}</span>
                      <span className="text-slate-500">{pub.year}</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                        {pub.type}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="text-slate-400 hover:text-slate-600 cursor-pointer" size={16} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                View all publications on Google Scholar
              </a>
            </p>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="text-orange-600" size={24} />
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="text-orange-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900">{award.title}</h4>
                    <p className="text-slate-600 mt-1">{award.organization}</p>
                    <p className="text-slate-500 text-sm mt-2">{award.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Programming Languages</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Python</li>
                <li>• R</li>
                <li>• Java</li>
                <li>• C++</li>
                <li>• JavaScript</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Frameworks & Tools</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• PyTorch</li>
                <li>• TensorFlow</li>
                <li>• Hugging Face</li>
                <li>• scikit-learn</li>
                <li>• NLTK/spaCy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Specializations</h4>
              <ul className="space-y-2 text-slate-600">
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
    </div>
  );
};

export default CVSection;