import React from 'react';
import { GraduationCap, Mic, Calendar, Award, Users, BookOpen } from 'lucide-react';

const ActivitiesSection = () => {
  const teachings = [
    { course: "Statistics for Digital Humanities", institution: "Chulalongkorn", period: "Fall 2025", level: "Undergrad", program: "Thai" },
    { course: "Programming for Natural Language Processing", institution: "Chulalongkorn", period: "Fall 2025", level: "Undergrad", program: "Thai" },
    { course: "Large language model", institution: "Chulalongkorn", period: "Spring 2025", level: "Graduate", program: "Thai" },
    { course: "Foundation of Programming", institution: "KMITL", period: "Fall 2024", level: "Undergrad", program: "International" },
    { course: "Intro to Natural Language Processing", institution: "KMITL", period: "Fall 2024", level: "Undergrad", program: "Thai" },
    { course: "Data Science Programming & Tools", institution: "KMITL", period: "Fall 2024", level: "Graduate", program: "Thai" },
    { course: "Generative AI", institution: "KMITL", period: "Fall 2024", level: "Graduate", program: "Thai" },
    { course: "Programming for Natural Language Processing", institution: "Chulalongkorn", period: "Fall 2024", level: "Undergrad", program: "Thai" },
    { course: "Intro to Natural Language Processing", institution: "KMITL", period: "Spring 2024", level: "Undergrad", program: "Thai" },
    { course: "Database Programming in Practice", institution: "KMITL", period: "Spring 2024", level: "Undergrad", program: "International" },
    { course: "Intro to data science", institution: "KMITL", period: "Spring 2024", level: "Undergrad", program: "International" },
    { course: "Intro to Natural Language Processing", institution: "KMITL", period: "Fall 2023", level: "Undergrad", program: "Thai" },
    { course: "Foundation of Programming", institution: "KMITL", period: "Fall 2023", level: "Undergrad", program: "International" },
    { course: "Intro to NLP", institution: "KMITL", period: "Spring 2023", level: "Undergrad", program: "Thai" },
    { course: "Intro to data science", institution: "KMITL", period: "Spring 2023", level: "Undergrad", program: "International" },
    { course: "Web mining", institution: "KMITL", period: "Fall 2022", level: "Undergrad", program: "Thai" },
    { course: "Intro to NLP", institution: "KMITL", period: "Fall 2022", level: "Undergrad", program: "Thai" }
  ];

  const talks = [
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
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Teaching & Talks</h1>
        <div className="w-16 h-1 bg-blue-600 mb-4 lg:mb-6"></div>
        <p className="text-gray-600 text-base sm:text-lg">
          My contributions to education and knowledge sharing through teaching and speaking engagements.
        </p>
      </div>

      {/* Teaching Section */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={20} sm:size={24} />
          Teaching Experience
        </h2>
        <div className="grid gap-3">
          {teachings.map((teaching, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{teaching.course}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{teaching.institution}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-gray-500 text-sm font-medium">
                    {teaching.period}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    teaching.level === 'Graduate' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {teaching.level}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    teaching.program === 'International' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {teaching.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Talks Section */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center gap-2">
          <Mic className="text-purple-600" size={20} sm:size={24} />
          Talks
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {talks.map((talk, index) => (
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
    </div>
  );
};

export default ActivitiesSection;