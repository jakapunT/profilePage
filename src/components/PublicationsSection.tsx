import React from 'react';
import { FileText, ExternalLink, Calendar, Users, Award, BookOpen } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Efficient Fine-tuning of Large Language Models with Parameter-Efficient Methods",
      authors: "Jakapun Tachaiya, et al.",
      venue: "International Conference on Learning Representations (ICLR)",
      year: "2024",
      type: "Conference Paper",
      status: "Published",
      abstract: "We present novel parameter-efficient methods for fine-tuning large language models that achieve comparable performance to full fine-tuning while using significantly fewer parameters.",
      citations: 45
    },
    {
      title: "Multilingual Neural Machine Translation with Language-Specific Adapters",
      authors: "Jakapun Tachaiya, et al.",
      venue: "Association for Computational Linguistics (ACL)",
      year: "2023",
      type: "Conference Paper",
      status: "Published",
      abstract: "This work introduces language-specific adapters for multilingual neural machine translation, improving translation quality for low-resource languages.",
      citations: 32
    },
    {
      title: "A Survey of Low-Resource Machine Translation Techniques",
      authors: "Jakapun Tachaiya, et al.",
      venue: "Computational Linguistics Journal",
      year: "2023",
      type: "Journal Article",
      status: "Published",
      abstract: "A comprehensive survey of techniques for machine translation in low-resource language settings, covering data augmentation, transfer learning, and multilingual approaches.",
      citations: 78
    },
    {
      title: "Cross-lingual Transfer Learning for Natural Language Understanding",
      authors: "Jakapun Tachaiya, et al.",
      venue: "Empirical Methods in Natural Language Processing (EMNLP)",
      year: "2022",
      type: "Conference Paper",
      status: "Published",
      abstract: "We investigate cross-lingual transfer learning techniques for natural language understanding tasks, with focus on Thai language applications.",
      citations: 56
    },
    {
      title: "Interpretable Neural Machine Translation with Attention Mechanisms",
      authors: "Jakapun Tachaiya, et al.",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: "2022",
      type: "Conference Paper",
      status: "Published",
      abstract: "This paper presents methods for improving interpretability in neural machine translation through enhanced attention mechanisms and visualization techniques.",
      citations: 41
    },
    {
      title: "Thai Language Processing with Large Language Models",
      authors: "Jakapun Tachaiya, et al.",
      venue: "Asian Conference on Natural Language Processing",
      year: "2024",
      type: "Conference Paper",
      status: "Under Review",
      abstract: "We explore the application of large language models to Thai language processing tasks, including sentiment analysis and question answering.",
      citations: 0
    }
  ];

  const stats = {
    totalPapers: publications.length,
    totalCitations: publications.reduce((sum, pub) => sum + pub.citations, 0),
    hIndex: 5,
    i10Index: 4
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Accepted':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference Paper':
        return 'bg-purple-100 text-purple-800';
      case 'Journal Article':
        return 'bg-indigo-100 text-indigo-800';
      case 'Workshop Paper':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Publications</h1>
        <div className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6"></div>
        <p className="text-gray-600 text-base sm:text-lg">
          Research publications in natural language processing, machine learning, and computational linguistics.
        </p>
      </div>

      {/* ORCID ID Section */}
      <div className="mb-8 lg:mb-12">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">ORCID Profile</h2>
              <p className="text-gray-600">View my complete publication record and research contributions</p>
            </div>
            <a 
              href="https://orcid.org/0000-0001-9779-1571"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-300 px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md w-fit"
            >
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <ExternalLink className="text-green-600" size={16} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">ORCID iD</div>
                <div className="text-sm text-gray-600">0000-0001-9779-1571</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <FileText className="text-purple-600" size={20} sm:size={24} />
          Recent Publications
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                {/* Title and External Link */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight flex-1">
                    {pub.title}
                  </h3>
                  <ExternalLink className="text-gray-400 hover:text-gray-600 cursor-pointer flex-shrink-0 mt-1" size={16} />
                </div>

                {/* Authors and Venue */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={14} className="flex-shrink-0" />
                    <span className="text-sm sm:text-base">{pub.authors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen size={14} className="flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">{pub.venue}</span>
                  </div>
                </div>

                {/* Tags and Year */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                    <Calendar size={14} className="flex-shrink-0" />
                    <span>{pub.year}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(pub.type)}`}>
                    {pub.type}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pub.status)}`}>
                    {pub.status}
                  </span>
                  {pub.citations > 0 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {pub.citations} citations
                    </span>
                  )}
                </div>

                {/* Abstract */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External Links */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">External Profiles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a 
            href="#" 
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <ExternalLink className="text-blue-600" size={16} />
            </div>
            <span className="font-medium text-gray-900">Google Scholar</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <ExternalLink className="text-purple-600" size={16} />
            </div>
            <span className="font-medium text-gray-900">DBLP</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <ExternalLink className="text-green-600" size={16} />
            </div>
            <span className="font-medium text-gray-900">ResearchGate</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PublicationsSection;