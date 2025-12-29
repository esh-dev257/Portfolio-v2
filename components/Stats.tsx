import React from 'react';
import SectionHeader from './SectionHeader';
import { BarChart3, Github, Code2, ExternalLink } from 'lucide-react';
import RetroButton from './RetroButton';

const Stats: React.FC = () => {
  // Mock data breakdown based on "300+ Questions"
  const leetCodeStats = {
    total: 300,
    easy: 120,
    medium: 150,
    hard: 30
  };

  const gfgStats = {
    total: 100
  };

  return (
    <section id="stats" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeader title="Player Stats" icon={<BarChart3 size={32} />} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Github/Activity Card */}
        <div className="bg-slate-900 border-4 border-retro-green p-6 relative">
          <div className="absolute -top-3 left-4 bg-retro-bg px-2">
            <h3 className="flex items-center gap-2 font-pixel text-sm text-retro-green">
              <Github size={16} /> ACTIVITY
            </h3>
          </div>
          
          <div className="mt-4 flex flex-col items-center justify-center h-48 border-2 border-dashed border-slate-700 bg-slate-800 p-4">
             {/* Simulating a contribution graph visually */}
             <div className="grid grid-cols-12 gap-1 w-full opacity-70">
                {Array.from({ length: 48 }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-3 w-3 ${Math.random() > 0.5 ? 'bg-retro-green' : 'bg-slate-700'}`} 
                        style={{ opacity: Math.random() }}
                    />
                ))}
             </div>
             <p className="font-retro text-xl mt-4 text-white">Continuous Deployment Streak</p>
          </div>
          
          <div className="mt-4 text-center">
             <a href="https://github.com/esh-dev257" target="_blank" rel="noreferrer" className="text-retro-green font-pixel text-xs hover:underline cursor-pointer">
                Visit Github Profile {'>'}
             </a>
          </div>
        </div>

        {/* LeetCode Stats Card */}
        <div className="bg-slate-900 border-4 border-retro-yellow p-6 relative flex flex-col justify-between">
          <div className="absolute -top-3 left-4 bg-retro-bg px-2">
            <h3 className="flex items-center gap-2 font-pixel text-sm text-retro-yellow">
              <Code2 size={16} /> LEETCODE
            </h3>
          </div>

          <div className="mt-4 space-y-4">
             <div className="flex justify-between items-end border-b-2 border-slate-700 pb-2">
                <span className="font-retro text-2xl text-white">Total Solved</span>
                <span className="font-pixel text-xl text-retro-yellow">{leetCodeStats.total}+</span>
             </div>
             
             {/* Progress Bars */}
             <div className="space-y-3">
                {/* Easy */}
                <div>
                    <div className="flex justify-between font-retro text-lg text-retro-cyan mb-1">
                        <span>Easy</span>
                        <span>{leetCodeStats.easy}</span>
                    </div>
                    <div className="w-full bg-slate-700 h-4 border-2 border-slate-600">
                        <div className="bg-retro-cyan h-full" style={{ width: '40%' }}></div>
                    </div>
                </div>

                {/* Medium */}
                <div>
                    <div className="flex justify-between font-retro text-lg text-retro-yellow mb-1">
                        <span>Medium</span>
                        <span>{leetCodeStats.medium}</span>
                    </div>
                    <div className="w-full bg-slate-700 h-4 border-2 border-slate-600">
                        <div className="bg-retro-yellow h-full" style={{ width: '50%' }}></div>
                    </div>
                </div>

                {/* Hard */}
                <div>
                    <div className="flex justify-between font-retro text-lg text-retro-pink mb-1">
                        <span>Hard</span>
                        <span>{leetCodeStats.hard}</span>
                    </div>
                    <div className="w-full bg-slate-700 h-4 border-2 border-slate-600">
                        <div className="bg-retro-pink h-full" style={{ width: '10%' }}></div>
                    </div>
                </div>
             </div>

             <div className="text-right pt-2 border-t border-slate-700 mt-2">
                 <span className="font-retro text-lg text-gray-400">GeeksForGeeks: <span className="text-white">{gfgStats.total}+</span> Solved</span>
             </div>
          </div>

          {/* New Profile Button */}
          <div className="mt-6 flex justify-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-full">
                <RetroButton variant="secondary" className="w-full flex items-center justify-center gap-2">
                    View LeetCode Profile <ExternalLink size={16}/>
                </RetroButton>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;