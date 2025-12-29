import React from 'react';
import { Experience as ExperienceType } from '../types';
import SectionHeader from './SectionHeader';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences: ExperienceType[] = [
  {
    company: "Vizuara",
    role: "Full Stack Developer Intern",
    duration: "Sept 2025 - Present",
    color: "border-retro-green",
    description: [
      "Migrated two large-scale production systems from WordPress to React, TypeScript, and Firebase.",
      "Reduced page-load time by 40% for 10k+ monthly active users.",
      "Rebuilt complete landing pages using reusable component architecture."
    ],
    link: "https://vizuara.com" 
  },
  {
    company: "Educerns",
    role: "Frontend Developer Intern",
    duration: "May 2025 - July 2025",
    color: "border-retro-purple",
    description: [
      "Developed and optimized user-centric UI components for two SaaS platforms.",
      "Led end-to-end feature development for a dashboard with advanced search.",
      "Collaborated cross-functionally to resolve critical bugs and improve performance."
    ],
    link: "https://educerns.com"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeader title="Mission Log / Experience" icon={<Briefcase size={32} />} />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className={`relative bg-slate-800 border-4 ${exp.color} p-6 shadow-pixel hover:translate-x-2 transition-transform`}>
            {/* Corner decorations */}
            <div className={`absolute top-0 left-0 w-4 h-4 bg-white -mt-1 -ml-1`}></div>
            <div className={`absolute top-0 right-0 w-4 h-4 bg-white -mt-1 -mr-1`}></div>
            <div className={`absolute bottom-0 left-0 w-4 h-4 bg-white -mb-1 -ml-1`}></div>
            <div className={`absolute bottom-0 right-0 w-4 h-4 bg-white -mb-1 -mr-1`}></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-2 border-dashed border-gray-600 pb-4">
              <div>
                <h3 className="font-pixel text-sm md:text-lg text-white mb-2">{exp.role}</h3>
                <div className="flex items-center gap-2 text-retro-cyan font-retro text-xl">
                  <span>@ {exp.company}</span>
                  {exp.link && exp.link !== '#' && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <span className="font-pixel text-xs bg-black text-retro-yellow px-3 py-1 mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start font-retro text-lg text-gray-300">
                  <span className="text-retro-green mr-2">{'>'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;