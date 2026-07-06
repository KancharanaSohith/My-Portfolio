import React from 'react';
import { Cpu, Terminal, ShieldAlert, Award, ChevronRight } from 'lucide-react';
import { PortfolioConfig } from '../types';
import { ACCENT_MAP, getLayoutStyle } from '../utils';

interface SkillsGridProps {
  config: PortfolioConfig;
}

export default function SkillsGrid({ config }: SkillsGridProps) {
  const { skills, accent, layout } = config;
  const accentSet = ACCENT_MAP[accent];
  const layoutSet = getLayoutStyle(layout, accent);

  // Return icons based on indices to look highly intentional
  const getCategoryIcon = (index: number) => {
    switch (index % 3) {
      case 0:
        return <Cpu className="h-5 w-5" />;
      case 1:
        return <Terminal className="h-5 w-5" />;
      case 2:
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className={layoutSet.sectionHeader}>Technological capabilities</p>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
              layout === 'brutalist' ? 'text-zinc-950 uppercase font-black' : 'text-zinc-900 dark:text-white'
            }`}
          >
            Capabilities & Systems Expertise
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-mono leading-relaxed">
            A comprehensive overview of architectural practices, modern runtimes, and creative interfaces I operate with.
          </p>
        </div>

        {/* Skills Layout columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((category, index) => (
            <div
              key={category.title}
              className={`p-5 sm:p-6 flex flex-col h-full ${layoutSet.container}`}
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div
                  className={`p-2 ${
                    layout === 'brutalist'
                      ? 'border-2 border-zinc-900 bg-yellow-300 text-zinc-950'
                      : `rounded-xl ${accentSet.bgLight} ${accentSet.primaryText}`
                  }`}
                >
                  {getCategoryIcon(index)}
                </div>
                <h3 className={`text-base font-bold leading-snug ${layout === 'brutalist' ? 'uppercase font-black text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                  {category.title}
                </h3>
              </div>

              {/* Sub-skills list with progress bars */}
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill) => {
                  // Translate level (1-5) to percentages for visual presentation
                  const percentageWidth = `${(skill.level / 5) * 100}%`;
                  
                  // Label helper for self-descriptive depth
                  const getSkillDepthLabel = (lvl: number) => {
                    if (lvl >= 5) return 'Expert';
                    if (lvl >= 4) return 'Advanced';
                    return 'Intermediate';
                  };

                  return (
                    <div key={skill.name} className="group">
                      
                      {/* Name & Percentage Copy */}
                      <div className="flex justify-between items-center mb-1.5 text-xs font-mono">
                        <span className="min-w-0 font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <ChevronRight className={`h-3 w-3 ${accentSet.primaryText}`} />
                          <span className="break-words">{skill.name}</span>
                        </span>
                        <span className="text-zinc-400 dark:text-zinc-500 font-semibold">
                          {getSkillDepthLabel(skill.level)}
                        </span>
                      </div>

                      {/* Bar Gauge frame */}
                      <div className={`h-1.5 w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden ${layout === 'brutalist' ? 'border border-zinc-900 rounded-none' : 'rounded-full'}`}>
                        <div
                          style={{ width: percentageWidth }}
                          className={`h-full transition-all duration-1000 group-hover:opacity-90 ${
                            layout === 'brutalist' ? 'bg-zinc-900' : accentSet.bgSolid
                          }`}
                        />
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
