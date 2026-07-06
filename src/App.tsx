import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUp, Sparkles, FolderHeart, Wand2, Compass, Eye,
  Lock, Unlock, Flame, Check, HelpCircle, ShieldAlert, Star
} from 'lucide-react';
import { INITIAL_PORTFOLIO_DATA } from './data';
import { ACCENT_MAP, getLayoutStyle } from './utils';

// Sub-components
import Header from './components/Header';
import AboutPanel from './components/AboutPanel';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
}

export default function App() {
  const portfolioData = INITIAL_PORTFOLIO_DATA;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  // Hogwarts Spellcraft State
  const [currentWand, setCurrentWand] = useState<'elder' | 'holly' | 'willow'>('holly');
  const [currentSpell, setCurrentSpell] = useState<'none' | 'lumos' | 'revelio' | 'alohomora' | 'expecto'>('none');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clientCoords, setClientCoords] = useState({ x: 0, y: 0 });
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);
  const [revelioScanning, setRevelioScanning] = useState(false);
  const [showSpellSuccess, setShowSpellSuccess] = useState<string | null>(null);

  const particleIdRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const accent = portfolioData.accent;
  const layout = portfolioData.layout;
  const accentSet = ACCENT_MAP[accent] || ACCENT_MAP['hogwarts'];

  // Particle Engine Loop
  useEffect(() => {
    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.08, // Subtle gravity
            alpha: p.alpha - 0.02,
            size: Math.max(0, p.size - 0.05)
          }))
          .filter(p => p.alpha > 0 && p.size > 0)
      );
      animFrameRef.current = requestAnimationFrame(updateParticles);
    };
    animFrameRef.current = requestAnimationFrame(updateParticles);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Handle Mousemove for Lumos/Flashlight and Client Coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isSmallViewport) return;
      setMousePos({ x: e.pageX, y: e.pageY });
      setClientCoords({ x: e.clientX, y: e.clientY });
      
      // Lumos cursor sparks (subtle trail)
      if (currentSpell === 'lumos' && Math.random() < 0.25) {
        spawnSparks(e.pageX, e.pageY, 2, getWandColor(currentWand));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentSpell, currentWand, isSmallViewport]);

  useEffect(() => {
    const syncViewport = () => {
      setIsSmallViewport(window.innerWidth < 640);
    };
    syncViewport();
    window.addEventListener('resize', syncViewport);
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  // General Spark Spawn helper
  const spawnSparks = (x: number, y: number, count = 10, customColor?: string) => {
    const colors = customColor ? [customColor] : ['#ebd292', '#cca751', '#b29252', '#d2b173', '#866a38', '#e5c158'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.5 + 1.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // Slight upward burst
        color,
        size: Math.random() * 4 + 2,
        alpha: 1.0
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  };

  // Trigger Spark shower on page click
  const handlePageClick = (e: React.MouseEvent) => {
    if (isSmallViewport) return;
    // Avoid spawning sparks if clicking buttons, links, inputs
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea') || target.closest('select')) {
      return;
    }
    spawnSparks(e.pageX, e.pageY, 12, getWandColor(currentWand));
  };

  const getWandColor = (wandType: string) => {
    switch (wandType) {
      case 'elder': return '#cbd5e1'; // Starry white-silver (The Deathly Hallow)
      case 'willow': return '#60a5fa'; // Cool wizarding blue
      case 'holly': 
      default:
        return '#d2b173';
    }
  };

  const handleSpellCast = (spellName: 'none' | 'lumos' | 'revelio' | 'alohomora' | 'expecto') => {
    setCurrentSpell(spellName);
    
    // Spell Specific triggers
    if (spellName === 'revelio') {
      setRevelioScanning(true);
      spawnSparks(window.innerWidth / 2 + window.scrollX, window.scrollY + 250, 45, '#ebd097');
      setTimeout(() => setRevelioScanning(false), 3000);
    } else if (spellName === 'alohomora') {
      spawnSparks(window.innerWidth / 2 + window.scrollX, window.scrollY + 350, 35, '#c5a85c');
      if (!isVaultUnlocked) {
        setIsVaultUnlocked(true);
        triggerSuccessNotification("🔓 Alohomora Unlocked Gringotts Secret Case Studies!");
      } else {
        triggerSuccessNotification("🧙 Vault remains fully open!");
      }
    } else if (spellName === 'lumos') {
      triggerSuccessNotification("✨ Lumos Wand-Flashlight Activated! Move your cursor.");
    } else if (spellName === 'expecto') {
      spawnSparks(window.innerWidth / 2 + window.scrollX, window.scrollY + 300, 60, '#93c5fd');
      triggerSuccessNotification("🦌 Expecto Patronum summoned a celestial protector aura!");
    } else if (spellName === 'none') {
      triggerSuccessNotification("🪄 Nox! Spell canceled.");
    }
  };

  const triggerSuccessNotification = (msg: string) => {
    setShowSpellSuccess(msg);
    setTimeout(() => {
      setShowSpellSuccess(prev => prev === msg ? null : prev);
    }, 4000);
  };

  // Sync dark theme class on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      onClick={handlePageClick}
      className={`min-h-screen transition-all duration-500 overflow-x-hidden pb-16 ${isDarkMode ? 'dark' : ''} ${getAppBgClass(layout)}`}
    >
      
      {/* Lumos Wand Flashlight (Dynamic Gradient Spotlight) */}
      {currentSpell === 'lumos' && !isSmallViewport && (
        <div 
          className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply opacity-95 transition-opacity"
          style={{
            background: `radial-gradient(circle 160px at ${clientCoords.x}px ${clientCoords.y}px, rgba(255, 253, 235, 1) 0%, rgba(253, 244, 215, 0.5) 45%, rgba(10, 8, 5, 0.98) 100%)`
          }}
        />
      )}

      {/* Expecto Patronum Spectral Deer Overlay */}
      {currentSpell === 'expecto' && !isSmallViewport && (
        <div className="pointer-events-none fixed inset-0 z-40 bg-radial from-cyan-500/10 via-blue-900/15 to-transparent animate-pulse flex items-center justify-center opacity-85">
          <div className="w-[1200px] h-[1200px] rounded-full filter blur-[100px] bg-gradient-to-tr from-sky-450/15 to-indigo-505/10 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute flex flex-col items-center justify-center select-none text-cyan-300/30 font-display text-center gap-1 scale-105">
            <Sparkles className="h-16 w-16 text-cyan-400/40 animate-ping absolute" />
            <span className="font-magic text-2xl tracking-[0.2em] font-bold text-cyan-250/20">EXPECTO PATRONUM</span>
            <span className="text-[10px] font-mono tracking-widest text-[#93c5fd]/30">DEMENTOR WARDS FULLY ENGAGED</span>
          </div>
        </div>
      )}

      {/* Revelio Rune Scan Line Grid overlay */}
      {revelioScanning && !isSmallViewport && (
        <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-start">
          <div className="h-0.5 bg-amber-400/80 shadow-[0_0_15px_#f59e0b] w-full animate-bounce" style={{ animationDuration: '5.5s' }} />
          <div className="absolute inset-0 bg-amber-500/[0.01] grid grid-cols-6 sm:grid-cols-12 gap-4 p-4 font-mono text-[9px] text-amber-500/20 select-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-amber-500/5 p-2 rounded flex flex-col justify-between">
                <span>SEAL_WARD_{(i * 9.75).toFixed(1)}</span>
                <span>STATUS: SECURE_RUNES</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sparkles Particle Element Pipeline */}
      <div className="pointer-events-none absolute inset-0 z-50 hidden overflow-hidden sm:block">
        {particles.map(p => (
          <span
            key={p.id}
            className="absolute rounded-full pointer-events-none transition-transform"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.alpha,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              display: 'block'
            }}
          />
        ))}
      </div>

      {/* Floating Spellcasting Confirmation Banner */}
      {showSpellSuccess && (
        <div className="fixed top-20 left-3 right-3 sm:top-24 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 font-display text-[11px] sm:text-xs font-bold bg-[#1e1a15] text-[#ebd8b7] border-2 border-[#b29252] shadow-2xl px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-center gap-2.5 rounded-none animate-slide-in">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="tracking-wider text-center">{showSpellSuccess}</span>
        </div>
      )}

      {/* Background Decorative Accent Blobs (only in non-minimalist setups) */}
      {layout !== 'brutalist' && layout !== 'parchment' && (
        <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none select-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl animate-pulse" />
          <div className="absolute top-60 right-10 w-80 h-80 rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-3xl" />
          {layout === 'glassmorphism' && (
            <div className={`absolute top-[400px] left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr ${accentSet.gradient} opacity-[0.02] dark:opacity-[0.05] blur-3xl`} />
          )}
        </div>
      )}

      {/* Parchment Background Graphic Enhancers */}
      {layout === 'parchment' && (
        <div
          className="absolute inset-0 opacity-[0.18] dark:opacity-[0.08] pointer-events-none select-none z-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 22%, rgba(178,146,82,0.22), transparent 26%), radial-gradient(circle at 82% 12%, rgba(122,92,33,0.16), transparent 24%), radial-gradient(circle at 50% 84%, rgba(210,177,115,0.18), transparent 30%)'
          }}
        />
      )}

      {/* Navigation Header */}
      <Header
        config={portfolioData}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((value) => !value)}
      />

      {/* Main Structural Layout */}
      <main className="relative z-10 pt-14 sm:pt-16">
        <AboutPanel config={portfolioData} />

        {/* Selected Projects Showcase */}
        <ProjectsShowcase config={portfolioData} />

        <SkillsGrid config={portfolioData} />

        <AchievementsSection config={portfolioData} />

        <ExperienceTimeline config={portfolioData} />

        {/* Secure Communication Connected Hub */}
        <ContactSection config={portfolioData} />

      </main>

      {/* Floating Auxiliary Controls */}
      <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-3 sm:bottom-6 sm:right-6">
        {/* Back to top scroll anchor */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`p-3 text-zinc-650 hover:text-zinc-900 transition-all cursor-pointer ${
              layout === 'brutalist'
                ? 'border-3 border-zinc-900 bg-white text-zinc-950 shadow-[3px_3px_0px_#000] hover:translate-y-[-2px]'
                : layout === 'parchment'
                ? 'border border-[#b29252] bg-[#f8f3e5] text-[#7a5c21] rounded-none shadow-[2px_2px_0px_rgba(122,92,33,0.15)] hover:scale-105'
                : 'rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-805 text-zinc-650 dark:text-amber-400 hover:scale-115 active:scale-95'
            }`}
            title="Scroll to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>

    </div>
  );
}

const getAppBgClass = (layout: 'parchment' | 'darkGrimoire' | 'ministry' | 'minimalist' | 'glassmorphism' | 'brutalist') => {
  switch (layout) {
    case 'parchment':
      return 'bg-[#f5ebd6] dark:bg-[#17120c] text-[#3c2f1a] dark:text-[#f3e7cf] relative border-8 border-double border-[#cca751]/80 dark:border-[#9a783d]/85 shadow-[inset_0_0_80px_rgba(40,30,20,0.15)] dark:shadow-[inset_0_0_90px_rgba(0,0,0,0.42)]';
    case 'darkGrimoire':
      return 'bg-[#05060a] text-[#cbd5e1] relative border-4 border-[#1e1d2c]/50';
    case 'ministry':
      return 'bg-[#fafafc] dark:bg-[#06080b] text-zinc-900 dark:text-[#ebd8b7] relative border-l-8 border-[#cca751]';
    case 'brutalist':
      return 'bg-zinc-50 text-zinc-950';
    case 'minimalist':
      return 'bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-150';
    case 'glassmorphism':
    default:
      return 'bg-[#fcfcfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-150';
  }
};
