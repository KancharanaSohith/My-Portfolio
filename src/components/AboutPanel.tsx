import React, { useState } from 'react';
import { Mail, MapPin, Sparkles, Download, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PortfolioConfig } from '../types';
import { ACCENT_MAP, getLayoutStyle, downloadResume } from '../utils';

interface AboutPanelProps {
  config: PortfolioConfig;
}

export default function AboutPanel({ config }: AboutPanelProps) {
  const { personal, stats, accent, layout } = config;
  const accentSet = ACCENT_MAP[accent];
  const layoutSet = getLayoutStyle(layout, accent);
  
  const [imageSrc, setImageSrc] = useState<string | null>(personal.avatarUrl);

  const handleImageError = () => {
    setImageSrc(null);
  };

  return (
    <section id="about" className="pt-14 pb-12 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Hero Meta Description (Left portion) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline Badge */}
            <div className="flex mb-3 sm:mb-6">
              <div
                className={`flex max-w-full items-center gap-1.5 px-3 py-1.5 text-[11px] sm:text-xs font-semibold ${
                  layout === 'brutalist'
                    ? 'border-2 border-zinc-900 bg-yellow-305 text-zinc-950 font-black rounded-none'
                    : layout === 'parchment'
                    ? 'border border-[#b29252] bg-[#fdf5e7] text-[#7a5c21] dark:bg-[#2a2114] dark:text-[#f3d38b] dark:border-[#d2b173]/60 font-mono rounded-none'
                    : layout === 'darkGrimoire'
                    ? 'border border-[#3a3556] bg-[#110e1a] text-[#bda7f5] font-mono rounded-none'
                    : `rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 border border-zinc-200/40 dark:border-zinc-800/60`
                }`}
              >
                <Sparkles className={`h-3 w-3 ${layout !== 'brutalist' ? accentSet.primaryText : 'text-zinc-950'}`} />
                <span className="truncate">{layout === 'parchment' || layout === 'darkGrimoire' ? 'Agentic AI Engineer' : 'Available for opportunities'}</span>
              </div>
            </div>

            {/* Display Headings */}
            <h2 className="text-zinc-405 dark:text-[#d8bd7b] text-xs font-mono tracking-[0.2em] uppercase mb-2">
              {layout === 'parchment' || layout === 'darkGrimoire' ? 'AI Systems Engineer' : 'Senior AI Engineer'}
            </h2>
            <h1
              className={`w-full max-w-full text-[clamp(2.15rem,10.5vw,2.8rem)] min-[390px]:text-[clamp(2.35rem,10.5vw,3rem)] sm:max-w-none sm:text-6xl tracking-tight leading-[0.95] mb-5 sm:mb-6 font-display overflow-visible ${
                layout === 'brutalist'
                  ? 'text-zinc-950 uppercase line-clamp-2'
                  : layout === 'parchment'
                  ? 'text-[#5a441e] dark:text-[#f8ecd2] font-display font-black'
                  : 'text-zinc-900 dark:text-white'
              }`}
            >
              Hi, I'm <span className={layout === 'brutalist' ? 'underline decoration-yellow-400 decoration-8' : `bg-gradient-to-r ${accentSet.gradient} bg-clip-text text-transparent whitespace-nowrap`}>{personal.name}</span>
            </h1>

            {/* Subtitle / Role */}
            <h2
              className={`text-lg sm:text-2xl font-bold mb-5 sm:mb-6 font-display ${
                layout === 'brutalist' ? 'text-zinc-800 uppercase font-black' : layout === 'parchment' ? 'text-[#7a643f] dark:text-[#d8bd7b]' : 'text-zinc-700 dark:text-zinc-300'
              }`}
            >
              {personal.title}
            </h2>

            {/* Main bio */}
            <p
              className={`text-base sm:text-lg mb-4 ${
                layout === 'brutalist' ? 'text-zinc-900 font-medium' : layout === 'parchment' ? 'text-zinc-600 dark:text-[#eadfc7] leading-relaxed' : 'text-zinc-600 dark:text-zinc-400 leading-relaxed'
              }`}
            >
              {personal.bio}
            </p>

            {/* Long bio */}
            <p
              className={`text-sm sm:text-base mb-6 sm:mb-8 ${
                layout === 'brutalist' ? 'text-zinc-700 font-normal border-l-3 border-zinc-900 pl-4 py-1' : layout === 'parchment' ? 'text-zinc-500 dark:text-[#bfb199] leading-relaxed' : 'text-zinc-500 dark:text-zinc-500 leading-relaxed'
              }`}
            >
              {personal.longBio}
            </p>

            {/* Meta tags / Quick Info */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 items-start sm:items-center text-sm text-zinc-500 dark:text-[#cdbb9d] mb-7 sm:mb-8 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-zinc-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-zinc-400" />
                <a href={`mailto:${personal.email}`} className="break-all hover:underline">
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`cursor-pointer ${
                  layout === 'brutalist'
                    ? 'px-6 py-3 font-bold border-3 border-zinc-900 bg-yellow-300 shadow-[2px_2px_0px_#18181b] hover:shadow-[4px_4px_0px_#18181b] hover:translate-x-[-1px] hover:translate-y-[-1px] flex items-center gap-2'
                    : `justify-center px-6 py-3 font-semibold text-white rounded-xl ${accentSet.bgSolid} flex items-center gap-2 hover:opacity-95 shadow-md shadow-zinc-200/10 dark:shadow-none hover:scale-[1.01] transition-all duration-300`
                }`}
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  downloadResume();
                }}
                className={`cursor-pointer justify-center ${layoutSet.button}`}
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Avatar Picture Column (Right portion) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center lg:pl-8">
            <div className="relative group w-full max-w-[300px] sm:max-w-[380px] aspect-square">
              {/* Retro/Neon glow card backgrounds */}
              {layout === 'brutalist' ? (
                <div className="absolute inset-0 bg-zinc-900 border-3 border-zinc-900 translate-x-3 translate-y-3" />
              ) : (
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${accentSet.gradient} opacity-20 blur-xl group-hover:opacity-30 transition duration-1000`} />
              )}

              {/* Image Frame */}
              <div
                className={`absolute inset-0 overflow-hidden ${
                  layout === 'brutalist'
                    ? 'bg-white border-3 border-zinc-900'
                    : 'rounded-2xl border border-[#d2b173]/45 dark:border-[#d2b173]/45 bg-[#f8f1df] dark:bg-[#21190f]'
                }`}
              >
                <img
                  src="/images/projects/nova-voice-bots.jpg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-45 dark:opacity-30 scale-110 blur-[1px] select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf0]/80 via-[#f7ead0]/45 to-[#d2b173]/30 dark:from-[#130f0a]/18 dark:via-[#21190f]/8 dark:to-[#3a2a15]/24" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2f2415]/18 dark:from-[#000]/8 to-transparent" />

                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={personal.name}
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-[130%] sm:w-[132%] max-w-none h-[130%] sm:h-[132%] object-contain object-bottom -translate-x-[11%] sm:-translate-x-[12%] -translate-y-[17%] sm:-translate-y-[18%] transition-transform duration-500 group-hover:scale-[1.03] select-none drop-shadow-[0_18px_24px_rgba(47,36,21,0.28)] dark:drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                  />
                ) : (
                  <div className="relative z-10 w-full h-full flex items-center justify-center bg-zinc-900 text-white text-5xl font-black tracking-tight">
                    SK
                  </div>
                )}

                {/* Overlaid styling overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#1f160c]/10 dark:from-transparent via-transparent to-white/10 dark:to-[#f3d38b]/5 pointer-events-none" />
              </div>

              {/* Absolute Corner Accent Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 z-30 -translate-x-1/2 bg-[#1e1a15]/88 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[#d2b173]/45 flex items-center justify-center text-stone-200 text-xs font-mono shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>{layout === 'parchment' || layout === 'darkGrimoire' ? 'Agentic AI' : 'AI Systems'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 sm:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`p-4 sm:p-6 ${layoutSet.container}`}
              >
                <div
                  className={`text-2xl sm:text-4xl font-black mb-1.5 ${
                    layout === 'brutalist'
                      ? 'text-zinc-950 font-black'
                      : `bg-gradient-to-r ${accentSet.gradient} bg-clip-text text-transparent`
                  }`}
                >
                  {stat.value}
                </div>
                <div className={`text-sm font-bold ${layout === 'brutalist' ? 'text-zinc-900 uppercase' : layout === 'parchment' ? 'text-zinc-800 dark:text-[#f3e7cf]' : 'text-zinc-800 dark:text-zinc-200'}`}>
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-zinc-500 dark:text-[#bfb199] mt-1 font-mono">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
