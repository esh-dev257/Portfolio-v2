import React from 'react';
import SectionHeader from './SectionHeader';
import { Rocket, Star } from 'lucide-react';
import RetroButton from './RetroButton';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-gray-700">
      <SectionHeader title="Inventory / Projects" icon={<Rocket size={32} />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* MVP Project - Highlighted */}
        <div className="md:col-span-2 relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-retro-pink to-retro-purple opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
           <div className="relative bg-retro-bg border-4 border-white p-6 md:p-8">
              <div className="absolute top-0 right-0 p-2 bg-retro-yellow text-black font-pixel text-xs border-b-4 border-l-4 border-black">
                ★ MVP ★
              </div>
              
              <h3 className="font-pixel text-xl md:text-2xl text-retro-pink mb-4">Ed-Tech Platform</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Razorpay'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-700 text-retro-cyan font-retro text-lg border border-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-retro text-xl text-gray-300 mb-6 leading-relaxed">
                A scalable, feature-rich online learning platform where instructors can create courses and students can enroll. 
                Features role-based access (Admin/Instructor/Student), secure authentication, and payment processing. 
                Backend built with modular REST API architecture.
              </p>

              <div className="flex gap-4">
                 <RetroButton variant="secondary">View Demo</RetroButton>
                 <RetroButton variant="primary">Source Code</RetroButton>
              </div>
           </div>
        </div>

        {/* Secondary Project */}
        <div className="bg-slate-800 border-4 border-slate-600 p-6 shadow-pixel h-full hover:border-retro-cyan transition-colors">
            <h3 className="font-pixel text-lg text-retro-green mb-4">My Portfolio</h3>
             <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Tailwind', 'Framer Motion'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-900 text-retro-green font-retro text-lg border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            <p className="font-retro text-xl text-gray-400 mb-6">
              A modern, responsive portfolio website featuring a clean design, engaging animations, and dark/light mode.
              Fully responsive across all devices with interactive UI elements.
            </p>
             <div className="mt-auto">
                 <RetroButton variant="primary">Repo</RetroButton>
              </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;