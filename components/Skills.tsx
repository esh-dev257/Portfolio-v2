import React from 'react';
import SectionHeader from './SectionHeader';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Languages",
      items: ["C++", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks/Tech",
      items: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"]
    },
    {
      title: "Developer Tools",
      items: [ "Postman", "Git/GitHub", "Vite",  "Firebase",]
    }
  ];  

  return (
    <section id="skills" className="py-16 px-4 md:px-8 max-w-6xl mx-auto bg-slate-900 border-y-4 border-white">
      <SectionHeader title="Skill Tree" icon={<Cpu size={32} />} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="group">
             <div className="bg-retro-bg border-4 border-slate-600 p-2 mb-2 group-hover:border-retro-green transition-colors">
                <h3 className="font-pixel text-xs text-center text-white uppercase tracking-widest">{cat.title}</h3>
             </div>
             <div className="flex flex-wrap gap-2 justify-center">
                {cat.items.map((skill, sIdx) => (
                    <span 
                        key={sIdx} 
                        className="font-retro text-xl bg-slate-800 text-retro-cyan px-3 py-1 border border-slate-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all cursor-default"
                    >
                        {skill}
                    </span>
                ))}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;