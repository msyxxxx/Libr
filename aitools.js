import React, { useState } from 'react';

const AiToolsPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // اللغة الافتراضية هي الإنجليزية
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    {
      name: {
        en: 'Google Scholar',
        ar: 'جوجل سكولار',
        fr: 'Google Scholar',
      },
      description: {
        en: 'Search for scholarly literature across many disciplines and sources.',
        ar: 'ابحث عن الأدبيات العلمية عبر العديد من التخصصات والمصادر.',
        fr: 'Recherchez de la littérature scientifique à travers de nombreuses disciplines et sources.',
      },
      logo: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />,
      link: 'https://scholar.google.com/',
    },
    {
      name: {
        en: 'arXiv',
        ar: 'أركايف',
        fr: 'arXiv',
      },
      description: {
        en: 'Open-access repository of electronic preprints in physics, mathematics, computer science, and related disciplines.',
        ar: 'مستودع مفتوح الوصول للنسخ الأولية الإلكترونية في الفيزياء، الرياضيات، علوم الكمبيوتر، والتخصصات ذات الصلة.',
        fr: 'Dépôt en accès libre de prépublications électroniques en physique, mathématiques, informatique et disciplines connexes.',
      },
      logo: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />,
      link: 'https://arxiv.org/',
    },
    {
      name: {
        en: 'Semantic Scholar',
        ar: 'Semantic Scholar',
        fr: 'Semantic Scholar',
      },
      description: {
        en: 'Free academic search engine that indexes papers, authors, and publications.',
        ar: 'محرك بحث أكاديمي مجاني يقوم بفهرسة الأوراق البحثية، المؤلفين، والمنشورات.',
        fr: 'Moteur de recherche académique gratuit qui indexe les articles, auteurs et publications.',
      },
      logo: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />,
      link: 'https://www.semanticscholar.org/',
    },
    {
      name: {
        en: 'Microsoft Academic',
        ar: 'مايكروسوفت أكاديمي',
        fr: 'Microsoft Academic',
      },
      description: {
        en: 'Search engine for academic publications and authors.',
        ar: 'محرك بحث للأبحاث الأكاديمية والمقالات العلمية.',
        fr: 'Moteur de recherche pour les publications académiques et les auteurs.',
      },
      logo: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />,
      link: 'https://academic.microsoft.com/',
    },
    {
      name: {
        en: 'DeepL',
        ar: 'ديب إل',
        fr: 'DeepL',
      },
      description: {
        en: 'AI-powered translation tool for researchers and students.',
        ar: 'أداة ترجمة مدعومة بالذكاء الاصطناعي للباحثين والطلاب.',
        fr: 'Outil de traduction alimenté par l\'IA pour les chercheurs et étudiants.',
      },
      logo: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />,
      link: 'https://www.deepl.com/',
    },
    {
      name: {
        en: 'Grammarly',
        ar: 'جرامرلي',
        fr: 'Grammarly',
      },
      description: {
        en: 'AI-powered writing assistant for researchers and students.',
        ar: 'مساعد كتابة مدعوم بالذكاء الاصطناعي للباحثين والطلاب.',
        fr: 'Assistant d\'écriture alimenté par l\'IA pour les chercheurs et étudiants.',
      },
      logo: <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />,
      link: 'https://www.grammarly.com/',
    },
  ];

  const toggleLanguage = () => {
    setSelectedLanguage(selectedLanguage === 'en' ? 'ar' : selectedLanguage === 'ar' ? 'fr' : 'en');
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="text-right mb-4">
        <button 
          onClick={toggleLanguage} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {selectedLanguage === 'en' ? 'Switch to Arabic' : selectedLanguage === 'ar' ? 'Passer au français' : 'Switch to English'}
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 text-center">
        {selectedLanguage === 'en' ? 'AI Tools for Researchers and Students' : selectedLanguage === 'ar' ? 'أدوات الذكاء الاصطناعي للباحثين والطلاب' : 'Outils d\'IA pour chercheurs et étudiants'}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              {tool.logo}
              <h2 className="text-lg font-bold text-gray-900 ml-4">
                {tool.name[selectedLanguage]}
              </h2>
            </div>
            <p className="text-gray-600">{tool.description[selectedLanguage]}</p>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              {selectedLanguage === 'en' ? 'Visit Tool' : selectedLanguage === 'ar' ? 'زيارة الأداة' : 'Visiter l\'outil'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiToolsPage;