import { ThemeAccent, LayoutStyle } from './types';

export interface AccentColorSet {
  primaryText: string;
  bgSolid: string;
  bgLight: string;
  border: string;
  ring: string;
  gradient: string;
  badge: string;
  glow: string;
  textHover: string;
}

export const ACCENT_MAP: Record<ThemeAccent, AccentColorSet> = {
  azure: {
    primaryText: 'text-blue-600 dark:text-blue-400',
    bgSolid: 'bg-blue-600 dark:bg-blue-500',
    bgLight: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-500 dark:border-blue-400',
    ring: 'ring-blue-400/30 dark:ring-blue-400/20',
    gradient: 'from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400',
    badge: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50',
    glow: 'shadow-blue-500/10 dark:shadow-blue-500/20',
    textHover: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  emerald: {
    primaryText: 'text-emerald-600 dark:text-emerald-400',
    bgSolid: 'bg-emerald-600 dark:bg-emerald-500',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-500 dark:border-emerald-400',
    ring: 'ring-emerald-400/30 dark:ring-emerald-400/20',
    gradient: 'from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50',
    glow: 'shadow-emerald-500/10 dark:shadow-emerald-500/20',
    textHover: 'hover:text-emerald-600 dark:hover:text-emerald-400'
  },
  amber: {
    primaryText: 'text-amber-600 dark:text-amber-400',
    bgSolid: 'bg-amber-500 dark:bg-amber-500',
    bgLight: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-500 dark:border-amber-400',
    ring: 'ring-amber-400/30 dark:ring-amber-400/20',
    gradient: 'from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400',
    badge: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50',
    glow: 'shadow-amber-500/10 dark:shadow-amber-500/20',
    textHover: 'hover:text-amber-600 dark:hover:text-amber-400'
  },
  violet: {
    primaryText: 'text-violet-600 dark:text-violet-400',
    bgSolid: 'bg-violet-600 dark:bg-violet-500',
    bgLight: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-500 dark:border-violet-400',
    ring: 'ring-violet-400/30 dark:ring-violet-400/20',
    gradient: 'from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400',
    badge: 'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800/50',
    glow: 'shadow-violet-500/10 dark:shadow-violet-500/20',
    textHover: 'hover:text-violet-600 dark:hover:text-violet-400'
  },
  rose: {
    primaryText: 'text-rose-600 dark:text-rose-400',
    bgSolid: 'bg-rose-600 dark:bg-rose-500',
    bgLight: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-500 dark:border-rose-400',
    ring: 'ring-rose-400/30 dark:ring-rose-400/20',
    gradient: 'from-rose-600 to-pink-500 dark:from-rose-400 dark:to-pink-400',
    badge: 'bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800/50',
    glow: 'shadow-rose-500/10 dark:shadow-rose-500/20',
    textHover: 'hover:text-rose-600 dark:hover:text-rose-400'
  },
  slate: {
    primaryText: 'text-zinc-800 dark:text-zinc-200',
    bgSolid: 'bg-zinc-800 dark:bg-zinc-200',
    bgLight: 'bg-zinc-100 dark:bg-zinc-900/50',
    border: 'border-zinc-800 dark:border-zinc-700',
    ring: 'ring-zinc-400/30 dark:ring-zinc-400/20',
    gradient: 'from-zinc-800 to-zinc-600 dark:from-zinc-200 dark:to-zinc-400',
    badge: 'bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700',
    glow: 'shadow-zinc-500/5 dark:shadow-zinc-500/10',
    textHover: 'hover:text-zinc-800 dark:hover:text-zinc-200'
  },
  indigo: {
    primaryText: 'text-indigo-600 dark:text-indigo-400',
    bgSolid: 'bg-indigo-600 dark:bg-indigo-500',
    bgLight: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-500 dark:border-indigo-400',
    ring: 'ring-indigo-400/30 dark:ring-indigo-400/20',
    gradient: 'from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50',
    glow: 'shadow-indigo-500/5 dark:shadow-indigo-500/15',
    textHover: 'hover:text-indigo-600 dark:hover:text-indigo-400'
  },
  gryffindor: {
    primaryText: 'text-[#9c2a2b] dark:text-[#ffdd6b] font-display',
    bgSolid: 'bg-[#740001] text-[#FFD700]',
    bgLight: 'bg-[#740001]/5 dark:bg-red-950/20',
    border: 'border-[#ae0001] dark:border-amber-600/40',
    ring: 'ring-red-500/30 dark:ring-amber-500/25',
    gradient: 'from-[#740001] to-[#ae0001] dark:from-[#5c0001] dark:to-[#8c0001]',
    badge: 'bg-red-50/10 text-[#ae0001] border-red-200/50 dark:bg-red-900/30 dark:text-[#ffdb58] dark:border-red-800/40',
    glow: 'shadow-red-500/10 dark:shadow-red-500/20',
    textHover: 'hover:text-[#ae0001] dark:hover:text-[#FFD700]'
  },
  slytherin: {
    primaryText: 'text-[#1a472a] dark:text-emerald-400 font-display',
    bgSolid: 'bg-[#1a472a] text-[#aaaaaa]',
    bgLight: 'bg-[#1a472a]/5 dark:bg-emerald-950/20',
    border: 'border-[#2a623d] dark:border-emerald-700/40',
    ring: 'ring-emerald-500/20 dark:ring-zinc-400/20',
    gradient: 'from-[#1a472a] to-[#2a623d] dark:from-[#0e2c1a] dark:to-[#1a4023]',
    badge: 'bg-emerald-50/10 text-[#1a472a] border-emerald-200/40 dark:bg-[#1a472a]/20 dark:text-zinc-300 dark:border-emerald-900/40',
    glow: 'shadow-emerald-500/10 dark:shadow-emerald-500/20',
    textHover: 'hover:text-[#2a623d] dark:hover:text-zinc-200'
  },
  ravenclaw: {
    primaryText: 'text-[#0e1a40] dark:text-sky-400 font-display',
    bgSolid: 'bg-[#0e1a40] text-[#946b2d]',
    bgLight: 'bg-[#0e1a40]/5 dark:bg-blue-950/20',
    border: 'border-[#222f5b] dark:border-sky-700/45',
    ring: 'ring-blue-500/25 dark:ring-sky-400/20',
    gradient: 'from-[#0e1a40] to-[#222f5b] dark:from-[#08102a] dark:to-[#1a2b53]',
    badge: 'bg-blue-50/10 text-[#222f5b] border-blue-200/40 dark:bg-blue-900/30 dark:text-sky-300 dark:border-blue-900/30',
    glow: 'shadow-blue-500/10 dark:shadow-blue-500/20',
    textHover: 'hover:text-[#222f5b] dark:hover:text-sky-300'
  },
  hufflepuff: {
    primaryText: 'text-[#726255] dark:text-amber-400 font-display',
    bgSolid: 'bg-[#ecb939] text-[#2c221e]',
    bgLight: 'bg-[#ecb939]/5 dark:bg-amber-950/15',
    border: 'border-[#f0c75e] dark:border-amber-500/30',
    ring: 'ring-amber-400/30 dark:ring-amber-500/15',
    gradient: 'from-[#ecb939] to-[#f0c75e] dark:from-[#b0871d] dark:to-[#d0ab3a]',
    badge: 'bg-yellow-50 text-[#372e29] border-yellow-200 dark:bg-yellow-950/25 dark:text-[#f0c75e] dark:border-[#f0c75e]/30',
    glow: 'shadow-yellow-500/15 dark:shadow-yellow-500/25',
    textHover: 'hover:text-amber-600 dark:hover:text-amber-400'
  },
  hogwarts: {
    primaryText: 'text-amber-700 dark:text-[#f3d38b] font-display font-medium',
    bgSolid: 'bg-[#1a1c23] text-[#ebd8b7]',
    bgLight: 'bg-[#fdfbf7] dark:bg-zinc-950/40',
    border: 'border-amber-600/35 dark:border-amber-700/30',
    ring: 'ring-amber-500/20 dark:ring-amber-500/15',
    gradient: 'from-[#1e1a15] to-[#2c241d] dark:from-[#f6d98d] dark:to-[#fff0c2]',
    badge: 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-[#1a1714] dark:text-amber-400 dark:border-amber-900/30',
    glow: 'shadow-amber-500/10 dark:shadow-amber-500/20',
    textHover: 'hover:text-amber-700 dark:hover:text-amber-300 font-serif'
  }
};

export interface CardStyleSet {
  container: string;
  badge: string;
  sectionHeader: string;
  button: string;
}

export const getLayoutStyle = (layout: LayoutStyle, accent: ThemeAccent): CardStyleSet => {
  const accentSet = ACCENT_MAP[accent] || ACCENT_MAP['hogwarts'];
  
  switch (layout) {
    case 'parchment':
      return {
        container: 'bg-[#fdfaf2] dark:bg-[#1b160f] border-2 border-[#d2b173]/30 dark:border-[#9a783d]/45 shadow-[0_5px_15px_rgba(40,30,20,0.04)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.28)] rounded-none relative overflow-hidden transition-all duration-300 hover:border-[#d2b173]/80 dark:hover:border-[#d2b173]/60 hover:shadow-[0_12px_24px_rgba(40,30,20,0.08)] font-sans',
        badge: `text-[10px] tracking-[0.1em] font-mono px-2.5 py-0.5 bg-[#f5efdc] dark:bg-[#2a2114] border border-[#ebdcc1] dark:border-[#9a783d]/55 text-[#866a38] dark:text-[#f3d38b] rounded-sm uppercase`,
        sectionHeader: `text-xs font-mono font-bold tracking-[0.2em] uppercase ${accentSet.primaryText} mb-2 flex items-center gap-1.5`,
        button: `px-5 py-2 rounded-none font-display font-semibold uppercase tracking-wider text-xs border border-[#b29252] bg-[#f8f3e5] hover:bg-[#ebdcc1] dark:bg-[#2a2114] dark:hover:bg-[#3a2e1c] text-[#7a5c21] dark:text-[#f3d38b] transition-all duration-200`
      };

    case 'darkGrimoire':
      return {
        container: `bg-[#07090f] dark:bg-[#030407] border ${accentSet.border} shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl relative overflow-hidden transition-all duration-300 hover:${accentSet.glow} text-zinc-100`,
        badge: `text-[10px] font-mono tracking-wide py-0.5 px-2 ${accentSet.bgLight} ${accentSet.primaryText} border ${accentSet.border} rounded-full`,
        sectionHeader: `text-xs font-bold tracking-widest uppercase ${accentSet.primaryText} mb-2 flex items-center gap-1.5`,
        button: `px-5 py-2.5 rounded-xl font-mono text-xs ${accentSet.primaryText} ${accentSet.bgLight} hover:opacity-90 border ${accentSet.border} transition-all duration-300`
      };

    case 'ministry':
      return {
        container: 'bg-white dark:bg-[#0a0c10] border-t-4 border-l border-r border-b border-[#cca751] dark:border-[#967936] shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-lg',
        badge: `text-xs font-serif font-semibold py-0.5 px-2.5 border border-[#cca751]/30 text-[#8b6b28] dark:text-[#ebd097] bg-[#fdfaf4] dark:bg-[#15171e] rounded-md`,
        sectionHeader: `text-sm font-bold tracking-wider uppercase text-zinc-700 dark:text-[#ebd097] mb-2 font-serif`,
        button: `px-5 py-2.5 rounded-sm font-display font-medium text-xs bg-gradient-to-r from-[#b2903c] to-[#d8b868] hover:from-[#9c7d2e] hover:to-[#c4a350] text-[#1a1205] font-bold shadow-sm transition-all duration-200`
      };
      
    case 'minimalist':
      return {
        container: 'bg-white border border-zinc-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] rounded-lg transition-all duration-300 hover:border-zinc-200',
        badge: 'text-[11px] font-mono py-0.5 px-2 bg-zinc-50 border border-zinc-100 text-zinc-600 rounded-md',
        sectionHeader: 'text-sm font-mono tracking-wider uppercase text-zinc-400 mb-2',
        button: 'transition-all duration-200 rounded-md px-4 py-2 text-xs font-mono border hover:bg-zinc-50 cursor-pointer'
      };
      
    case 'brutalist':
      return {
        container: 'bg-white border-3 border-zinc-900 shadow-[4px_4px_0px_#18181b] rounded-none transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#18181b]',
        badge: 'text-xs font-mono font-bold py-1 px-2 border-2 border-zinc-900 bg-white text-zinc-900 rounded-none',
        sectionHeader: 'text-base font-black uppercase text-zinc-950 mb-4 tracking-tight',
        button: 'px-6 py-3 font-bold border-3 border-zinc-900 bg-white shadow-[2px_2px_0px_#18181b] rounded-none transition-all duration-150 hover:bg-yellow-100 hover:shadow-[4px_4px_0px_#18181b] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#18181b]'
      };
      
    case 'glassmorphism':
    default:
      return {
        container: 'bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md border border-slate-200 dark:border-zinc-800/50 shadow-sm rounded-2xl transition-all duration-300 hover:border-slate-300 dark:hover:border-zinc-700/80 hover:shadow-md hover:shadow-slate-100/50 dark:hover:shadow-black/20',
        badge: `text-xs px-3 py-1 font-medium rounded-full ${accentSet.badge}`,
        sectionHeader: `text-sm font-semibold tracking-wide uppercase ${accentSet.primaryText} mb-2`,
        button: `px-5 py-2.5 rounded-xl font-medium shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer text-sm flex items-center gap-2 border`
      };
  }
};

/** Alternating section backgrounds that respect the active layout palette */
export const getSectionBgClass = (layout: LayoutStyle): string => {
  switch (layout) {
    case 'parchment':
      return 'bg-[#efe3c8]/60 dark:bg-[#17120c]/80 border-y border-[#d2b173]/25 dark:border-[#9a783d]/35';
    case 'darkGrimoire':
      return 'bg-[#0a0c12]/80 dark:bg-[#050608]/80 border-y border-indigo-500/10 dark:border-slate-800/50';
    case 'ministry':
      return 'bg-[#fafafc]/80 dark:bg-[#06080b]/80 border-y border-[#cca751]/30';
    default:
      return 'bg-zinc-50/50 dark:bg-zinc-900/10 border-y border-zinc-100 dark:border-zinc-900/50';
  }
};

/** Same resume path as Sohith-Portfolio (public/resume/...) */
export const RESUME_PATH = 'resume/Sohith_Kancharana_Resume.pdf';
export const RESUME_FILENAME = 'Sohith_Kancharana_Resume.pdf';

export function downloadResume(): void {
  const link = document.createElement('a');
  link.href = RESUME_PATH;
  link.download = RESUME_FILENAME;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
