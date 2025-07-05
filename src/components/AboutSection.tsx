import React from 'react';
import { Brain, Award, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-slate-600 leading-relaxed">
            I am a passionate researcher in Natural Language Processing with a focus on developing innovative 
            solutions that bridge the gap between human communication and machine understanding. My work spans 
            across multiple domains including computational linguistics, machine learning, and artificial intelligence.
          </p>
          <p className="text-slate-600 leading-relaxed">
            With over [X] years of experience in academic research, I have contributed to advancing the field 
            through publications in top-tier conferences and journals. My research interests include sentiment 
            analysis, machine translation, question answering systems, and large language models.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I believe in the power of interdisciplinary collaboration and have worked with teams across 
            computer science, linguistics, and cognitive science to tackle complex challenges in natural 
            language understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">NLP Research</h3>
            <p className="text-sm text-slate-600">Advancing natural language understanding and generation</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Publications</h3>
            <p className="text-sm text-slate-600">[X]+ papers in top-tier conferences and journals</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Collaborations</h3>
            <p className="text-sm text-slate-600">Working with leading research institutions globally</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Impact</h3>
            <p className="text-sm text-slate-600">Research applied in real-world applications</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Core Areas</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Natural Language Understanding</li>
                <li>• Machine Translation</li>
                <li>• Sentiment Analysis</li>
                <li>• Question Answering Systems</li>
                <li>• Large Language Models</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Applications</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Conversational AI</li>
                <li>• Information Extraction</li>
                <li>• Text Summarization</li>
                <li>• Multilingual NLP</li>
                <li>• Computational Linguistics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;