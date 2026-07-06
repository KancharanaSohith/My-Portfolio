import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, Landmark, ChevronDown, ListTodo } from 'lucide-react';
import { PortfolioConfig } from '../types';
import { ACCENT_MAP, getLayoutStyle, getSectionBgClass } from '../utils';

interface ExperienceTimelineProps {
  config: PortfolioConfig;
}

export default function ExperienceTimeline({ config }: ExperienceTimelineProps) {
  const { experience, education, accent, layout } = config;
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default first item expanded

  const accentSet = ACCENT_MAP[accent];
  const layoutSet = getLayoutStyle(layout, accent);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className={`py-14 sm:py-20 ${getSectionBgClass(layout)}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className={layoutSet.sectionHeader}>Career roadmap</p>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
              layout === 'brutalist' ? 'text-zinc-950 uppercase font-black' : 'text-zinc-900 dark:text-white'
            }`}
          >
            Chronological Journey
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-mono leading-relaxed">
            A comprehensive track record of client consulting, systems deployments, and design solutions.
          </p>
        </div>

        {/* Timeline Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div
            className={`grid w-full max-w-md grid-cols-2 p-1 sm:inline-flex sm:w-auto ${
              layout === 'brutalist'
                ? 'border-3 border-zinc-900 bg-white rounded-none'
                : 'bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200/40 dark:border-zinc-800/40'
            }`}
          >
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center justify-center gap-2 px-3 py-3 sm:px-5 sm:py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'work'
                  ? layout === 'brutalist'
                    ? 'bg-yellow-300 text-zinc-950 border-2 border-zinc-900 font-extrabold'
                    : `bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white shadow-sm rounded-lg`
                  : 'text-zinc-500 hover:text-zinc-850 dark:hover:text-zinc-300'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              <span className="leading-tight">Professional</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center justify-center gap-2 px-3 py-3 sm:px-5 sm:py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? layout === 'brutalist'
                    ? 'bg-yellow-300 text-zinc-950 border-2 border-zinc-900 font-extrabold'
                    : `bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white shadow-sm rounded-lg`
                  : 'text-zinc-500 hover:text-zinc-850 dark:hover:text-zinc-300'
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline display */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'work' ? (
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-5 sm:pl-8 space-y-6 sm:space-y-8 ml-2 sm:ml-4">
              
              {experience.map((exp, index) => {
                const isExpanded = expandedIndex === index;
                
                return (
                  <div key={exp.id} className="relative group">
                    
                    {/* Bullet marker node */}
                    <span className={`absolute -left-[27px] sm:-left-[39px] top-1.5 flex items-center justify-center transition-all bg-white dark:bg-zinc-950 border ${
                      layout === 'brutalist'
                        ? 'h-4 w-4 border-2 border-zinc-900 bg-yellow-300 rounded-none'
                        : `h-5 w-5 rounded-full border-2 ${isExpanded ? accentSet.border : 'border-zinc-300 dark:border-zinc-805'} group-hover:scale-110`
                    }`}>
                      {isExpanded && layout !== 'brutalist' && (
                        <span className={`h-1.5 w-1.5 rounded-full ${accentSet.bgSolid}`} />
                      )}
                    </span>

                    {/* Timeline card container */}
                    <div className={`p-5 sm:p-6 transition-all duration-300 ${layoutSet.container}`}>
                      
                      {/* Timeline Header summary row */}
                      <div
                        className="flex items-start justify-between gap-3 cursor-pointer"
                        onClick={() => toggleExpand(index)}
                      >
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1.5">
                            <h3 className={`text-base font-bold leading-snug ${layout === 'brutalist' ? 'uppercase font-black text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                              {exp.role}
                            </h3>
                            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
                            <div className="flex items-start gap-1.5 text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                              <Building className="h-3.5 w-3.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Expandable toggle arrows */}
                        <div className={`shrink-0 p-1.5 rounded-lg border text-zinc-400 hover:text-zinc-850 dark:hover:text-white transition-all ${
                          isExpanded ? 'rotate-180 bg-zinc-50 dark:bg-zinc-900' : 'bg-transparent border-transparent'
                        }`}>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Expandable details portion */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? 'max-h-[500px] mt-6 opacity-100 pt-6 border-t border-zinc-100 dark:border-zinc-850' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        
                        {/* Bullets lists */}
                        <div className="space-y-3 mb-6">
                          {exp.description.map((bullet, k) => (
                            <div key={k} className="flex gap-2.5 items-start text-sm">
                              <ListTodo className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${accentSet.primaryText}`} />
                              <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Applied skills tools badges under position */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                                layout === 'brutalist'
                                  ? 'bg-zinc-100 border border-zinc-200 text-zinc-800'
                                  : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-500 border border-zinc-200/20 dark:border-zinc-800/50'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          ) : (
            <div className="relative border-l border-zinc-200 dark:border-zinc-805 pl-5 sm:pl-8 space-y-6 sm:space-y-8 ml-2 sm:ml-4">
              
              {education.map((edu, index) => {
                return (
                  <div key={edu.id} className="relative group">
                    
                    {/* Bullet node marker */}
                    <span className={`absolute -left-[27px] sm:-left-[39px] top-1.5 flex items-center justify-center bg-white dark:bg-zinc-950 border ${
                      layout === 'brutalist'
                        ? 'h-4 w-4 border-2 border-zinc-900 bg-yellow-300 rounded-none'
                        : `h-5 w-5 rounded-full border-2 border-zinc-300 dark:border-zinc-805 group-hover:border-zinc-850`
                    }`} />

                    {/* Education block details */}
                    <div className={`p-5 sm:p-6 ${layoutSet.container}`}>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <h3 className={`text-base font-bold mb-1 ${layout === 'brutalist' ? 'uppercase font-black text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                            <Landmark className="h-4 w-4" />
                            <span>{edu.school}</span>
                          </div>
                          {edu.description && (
                            <p className="text-sm text-zinc-500 dark:text-zinc-550 leading-relaxed font-sans">
                              {edu.description}
                            </p>
                          )}
                        </div>
                        
                        <div className={`text-xs font-mono font-bold border px-3 py-1 self-start whitespace-nowrap ${
                          layout === 'brutalist'
                            ? 'border-2 border-zinc-900 bg-white text-zinc-950'
                            : `${accentSet.badge}`
                        }`}>
                          {edu.period}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
