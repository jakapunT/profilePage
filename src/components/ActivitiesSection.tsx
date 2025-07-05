import React from 'react';
import { GraduationCap, DollarSign, Mic, Calendar, ExternalLink, Award } from 'lucide-react';

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
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Teaching, Grants & Speaking</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <p className="text-slate-600 mt-4">
            My contributions to education, research funding, and knowledge sharing through teaching, grants, and speaking engagements.
          </p>
        </div>

        {/* Teaching Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={24} />
            Teaching Experience
          </h3>
          <div className="grid gap-6">
            {teachings.map((teaching, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900">{teaching.course}</h4>
                        <div className="flex items-center gap-4 text-slate-600 mt-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            {teaching.level}
                          </span>
                          <span>{teaching.institution}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                      <div>
                        <span className="font-medium">Period:</span> {teaching.period}
                      </div>
                      <div>
                        <span className="font-medium">Enrollment:</span> {teaching.students}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{teaching.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grants Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <DollarSign className="text-green-600" size={24} />
            Research Grants
          </h3>
          <div className="grid gap-6">
            {grants.map((grant, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900">{grant.title}</h4>
                        <div className="flex items-center gap-4 text-slate-600 mt-2">
                          <span className="font-medium">{grant.agency}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            {grant.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 mb-4">
                      <div>
                        <span className="font-medium">Period:</span> {grant.period}
                      </div>
                      <div>
                        <span className="font-medium">Role:</span> {grant.role}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{grant.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Mic className="text-purple-600" size={24} />
            Speaking Engagements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {speaking.map((talk, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{talk.title}</h4>
                    <p className="text-slate-600 font-medium mb-2">{talk.event}</p>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                      <Calendar size={14} />
                      <span>{talk.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <span>{talk.location}</span>
                    </div>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {talk.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Impact Summary</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$2.5M+</div>
              <div className="text-slate-600">Research Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-slate-600">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-slate-600">Courses Developed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;