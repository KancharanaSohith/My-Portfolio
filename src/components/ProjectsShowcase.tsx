import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink, Github, Layers, Search, Eye, X, BookOpen } from 'lucide-react';
import { PortfolioConfig, Project, ProjectSource } from '../types';
import { ACCENT_MAP, getLayoutStyle, getSectionBgClass } from '../utils';

interface ProjectsShowcaseProps {
  config: PortfolioConfig;
}

export default function ProjectsShowcase({ config }: ProjectsShowcaseProps) {
  const { projects, accent, layout } = config;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const accentSet = ACCENT_MAP[accent] || ACCENT_MAP['hogwarts'];
  const layoutSet = getLayoutStyle(layout, accent);

  const sourceFilters: Array<'All' | ProjectSource> = ['All', 'Work', 'Personal', 'Freelance'];

  useEffect(() => {
    if (!activeModalProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        selectedFilter === 'All' ||
        project.source === selectedFilter ||
        project.category === selectedFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [projects, selectedFilter, searchQuery]);

  return (
    <section id="projects" className={`py-14 sm:py-20 ${getSectionBgClass(layout)}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className={layoutSet.sectionHeader}>Selected work</p>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
              layout === 'brutalist' ? 'text-zinc-950 uppercase font-black' : 'text-zinc-900 dark:text-white'
            }`}
          >
            Projects & Case Studies
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-mono leading-relaxed">
            Professional, personal, and freelance builds — filter by type or search by technology.
          </p>
        </div>

        {/* Toolbar: Filters & Searching */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-zinc-100 dark:border-zinc-900">
          
          {/* Categories Slider */}
          <div className="-mx-4 flex items-center gap-1.5 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0 md:pb-0 scrollbar-none">
            {sourceFilters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2.5 text-xs font-semibold cursor-pointer transition-all shrink-0 ${
                    layout === 'brutalist'
                      ? isActive
                        ? 'bg-yellow-300 text-zinc-950 border-2 border-zinc-900 font-extrabold'
                        : 'bg-white text-zinc-700 border-2 border-zinc-200 hover:border-zinc-900 font-semibold'
                      : isActive
                        ? `text-white ${accentSet.bgSolid} rounded-xl shadow-sm`
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl'
                  }`}
                >
                  {filter === 'All' ? 'All' : filter}
                </button>
              );
            })}
          </div>

          {/* Core Searching bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="h-4 w-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full text-sm md:text-xs pl-10 pr-4 py-3 md:py-2.5 bg-white dark:bg-zinc-950 border text-zinc-700 dark:text-zinc-300 placeholder-zinc-400 focus:outline-none focus:ring-2 ${
                layout === 'brutalist'
                  ? 'border-3 border-zinc-900 focus:ring-zinc-900'
                  : 'border-zinc-200 dark:border-zinc-805/80 rounded-xl focus:ring-blue-400/20'
              }`}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group overflow-hidden flex flex-col h-full ${layoutSet.container}`}
              >
                
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category overlay */}
                  <span className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase border text-white ${
                    layout === 'brutalist' ? 'bg-zinc-950 border-zinc-900' : 'bg-black/45 backdrop-blur-sm border-white/10 rounded-md'
                  }`}>
                    {project.source}
                  </span>

                  {/* Dark interaction curtain */}
                  <div className="absolute inset-0 bg-black/45 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 bg-white text-zinc-900 rounded-full hover:scale-110 active:scale-95 transition-all shadow-md cursor-pointer"
                      title="Read details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white text-zinc-900 rounded-full hover:scale-110 active:scale-95 transition-all shadow-md"
                        title="Source Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card copy context */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  
                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-2 cursor-pointer leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors ${
                      layout === 'brutalist' ? 'text-zinc-950 uppercase font-black' : 'text-zinc-900 dark:text-white'
                    }`}
                    onClick={() => setActiveModalProject(project)}
                  >
                    {project.title}
                  </h3>

                  {/* Pitch description */}
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono font-medium rounded px-2 py-0.5 ${
                          layout === 'brutalist'
                            ? 'bg-zinc-100 border border-zinc-200 text-zinc-700'
                            : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/20 dark:border-zinc-800/50'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom links row */}
                  <div className="flex items-center justify-between gap-4 border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mt-auto">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className={`text-xs font-semibold flex min-h-9 items-center gap-1 hover:underline cursor-pointer ${
                        layout === 'brutalist' ? 'text-zinc-900 font-black' : accentSet.primaryText
                      }`}
                    >
                      <span>Study Case</span>
                      <BookOpen className="h-3 w-3" />
                    </button>
                    
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                          title="GitHub Source"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                          title="Deployment"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-900 max-w-lg mx-auto">
            <Layers className="h-10 w-10 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">No matching projects found</h3>
            <p className="text-xs text-zinc-500 mt-1">Try relaxing filters or changing your queries.</p>
          </div>
        )}

      </div>

      {/* Case Study Fulloverlay Overlay Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-start sm:p-4 sm:pt-28">
          
          {/* Backdrop screen lock mask */}
          <div
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            onClick={() => setActiveModalProject(null)}
          />

          {/* Modal box */}
          <div
            className={`relative w-full max-w-2xl bg-white dark:bg-zinc-950 max-h-[92vh] sm:max-h-[90vh] overflow-y-auto z-10 ${
              layout === 'brutalist'
                ? 'border-4 border-zinc-900 shadow-[8px_8px_0px_#000] rounded-none'
                : 'rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-850'
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="sticky top-3 right-3 z-[110] ml-auto mr-3 mt-3 flex h-11 w-11 items-center justify-center border border-[#b29252]/60 bg-[#1e1a15] text-[#fff5db] shadow-xl transition-all hover:bg-[#2a2114] focus:outline-none focus:ring-2 focus:ring-[#d2b173] sm:absolute sm:right-4 sm:top-4 sm:mt-0"
              title="Close case study"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Modal header details bar */}
            <div className={`p-4 pt-1 sm:p-6 sm:pr-20 border-b border-zinc-100 dark:border-zinc-900 flex items-start justify-between gap-3 sticky top-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md z-[105]`}>
              <div className="min-w-0">
                <span className={`text-[10px] font-mono font-black tracking-widest uppercase mb-1 block ${accentSet.primaryText}`}>
                  {activeModalProject.category} Project ARCHITECTURE
                </span>
                <h3 className={`text-lg sm:text-xl font-bold leading-snug ${layout === 'brutalist' ? 'uppercase text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="shrink-0 p-2.5 text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer sm:hidden"
                title="Close case study"
                aria-label="Close case study"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal content body */}
            <div className="p-4 sm:p-6">
              
              {/* Cover Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 mb-6 rounded-xl">
                <img
                  src={activeModalProject.imageUrl}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag lines */}
              <div className="flex flex-wrap gap-2 mb-6">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono font-medium px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/20 dark:border-zinc-800/50 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Comprehensive textual review */}
              <div className="prose prose-zinc dark:prose-invert max-w-none text-sm leading-relaxed mb-6">
                <h4 className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-2">Systems Overview</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{activeModalProject.description}</p>
                
                <h4 className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-2 mt-6">Deep Dive Architecture</h4>
                <p className="text-zinc-500 dark:text-zinc-500">{activeModalProject.longDescription}</p>
              </div>

              {/* Action columns footer */}
              <div className="flex flex-col gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-900 sm:flex-row sm:flex-wrap sm:gap-4">
                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs font-bold text-white shadow-sm hover:scale-[1.01] transition-all duration-200 ${
                      layout === 'brutalist' ? 'bg-zinc-950 border-2 border-zinc-900 rounded-none' : `rounded-xl ${accentSet.bgSolid}`
                    }`}
                  >
                    <span>Launch Prototype</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs font-bold border hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors ${
                      layout === 'brutalist' ? 'border-2 border-zinc-900 hover:bg-yellow-50 rounded-none text-zinc-950' : 'border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Browse Repository</span>
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
