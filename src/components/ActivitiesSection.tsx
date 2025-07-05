import React from 'react';
import { GraduationCap, DollarSign, Mic, Calendar, Award, Users, BookOpen } from 'lucide-react';

const ActivitiesSection = () => {
  const teachings = [
    {
      course: "Natural Language Processing",
      level: "Graduate",
      institution: "MIT",
      period: "Fall 2021 - Present",
      students: "45-60 students/semester",
      description: "Comprehensive course covering modern NLP techniques, from traditional methods to transformer architectures."
    },
    {
      course: "Machine Learning for Text Analysis",
      level: "Undergraduate",
      institution: "MIT",
      period: "Spring 2020 - Present",
      students: "80-100 students/semester",
      description: "Introduction to ML techniques specifically applied to text data, including classification, clustering, and sequence modeling."
    },
    {
      course: "Computational Linguistics",
      level: "Graduate",
      institution: "Stanford University",
      period: "2018 - 2020",
      students: "25-35 students/semester",
      description: "Advanced topics in computational linguistics, syntax parsing, and semantic analysis."
    }
  ];

  const grants = [
    {
      title: "Large Language Models for Scientific Literature Analysis",
      agency: "National Science Foundation",
      amount: "$1,200,000",
      period: "2023 - 2026",
      role: "Principal Investigator",
      description: "Developing specialized language models for analyzing and extracting insights from scientific publications."
    },
    {
      title: "Multilingual NLP for Educational Applications",
      agency: "Department of Education",
      amount: "$800,000",
      period: "2022 - 2025",
      role: "Co-Principal Investigator",
      description: "Creating NLP tools to support multilingual education and language learning platforms."
    },
    {
      title: "Neural Machine Translation for Low-Resource Languages",
      agency: "Google AI",
      amount: "$500,000",
      period: "2021 - 2024",
      role: "Principal Investigator",
      description: "Advancing machine translation capabilities for underrepresented languages."
    }
  ];

  const speaking = [
    {
      event: "International Conference on Learning Representations (ICLR)",
      title: "Efficient Fine-tuning of Large Language Models",
      type: "Keynote Speaker",
      date: "May 2024",
      location: "Vienna, Austria"
    },
    {
      event: "Association for Computational Linguistics (ACL)",
      title: "The Future of Multilingual NLP",
      type: "Invited Talk",
      date: "July 2023",
      location: "Toronto, Canada"
    },
    {
      event: "NeurIPS Workshop on NLP",
      title: "Interpretability in Modern NLP Systems",
      type: "Panel Discussion",
      date: "December 2023",
      location: "New Orleans, USA"
    },
    {
      event: "MIT AI Symposium",
      title: "Building Responsible AI Systems",
      type: "Keynote Speaker",
      date: "March 2023",
      location: "Cambridge, MA"
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Teaching, Grants & Speaking</h1>
        <div className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6"></div>
        <p className="text-gray-600 text-base sm:text-lg">
          My contributions to education, research funding, and knowledge sharing through teaching, grants, and speaking engagements.
        </p>
      </div>

      {/* Teaching Section */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={20} sm:size={24} />
          Teaching Experience
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {teachings.map((teaching, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{teaching.course}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs sm:text-sm font-medium w-fit">
                      {teaching.level}
                    </span>
                    <span className="text-sm sm:text-base">{teaching.institution}</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Period:</span> {teaching.period}
                  </div>
                  <div>
                    <span className="font-medium">Enrollment:</span> {teaching.students}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{teaching.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grants Section */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <DollarSign className="text-green-600" size={20} sm:size={24} />
          Research Grants
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {grants.map((grant, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{grant.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mt-2">
                    <span className="font-medium text-sm sm:text-base">{grant.agency}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm font-medium w-fit">
                      {grant.amount}
                    </span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Period:</span> {grant.period}
                  </div>
                  <div>
                    <span className="font-medium">Role:</span> {grant.role}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{grant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speaking Section */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <Mic className="text-purple-600" size={20} sm:size={24} />
          Speaking Engagements
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {speaking.map((talk, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{talk.title}</h3>
                  <p className="text-gray-600 font-medium mb-2 text-sm sm:text-base">{talk.event}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-2">
                    <Calendar size={14} className="flex-shrink-0" />
                    <span>{talk.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-3">
                    <span>{talk.location}</span>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit">
                  {talk.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Impact Summary</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Students Taught</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">$2.5M+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Research Funding</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Speaking Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">12</div>
            <div className="text-gray-600 text-xs sm:text-sm">Courses Developed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;