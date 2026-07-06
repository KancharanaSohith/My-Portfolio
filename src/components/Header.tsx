import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Sparkles, Sun, Moon } from 'lucide-react';
import { PortfolioConfig } from '../types';
import { getLayoutStyle, downloadResume } from '../utils';

interface HeaderProps {
  config: PortfolioConfig;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({ config, isDarkMode, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const accent = config.accent;
  const layout = config.layout;
  const personal = config.personal;
  
  const layoutSet = getLayoutStyle(layout, accent);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="port-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? layout === 'parchment'
            ? 'bg-[#fcf9f2]/95 dark:bg-[#120e0a]/95 backdrop-blur-sm shadow-md border-b-2 border-[#d2b173]/30 dark:border-[#9a783d]/45 text-[#3c2f1a] dark:text-[#f3d38b]'
            : layout === 'darkGrimoire'
            ? 'bg-[#04060b]/95 backdrop-blur-sm border-b border-[#1e1d2c]/60 text-stone-100'
            : layout === 'ministry'
            ? 'bg-white/95 dark:bg-[#06080b]/95 backdrop-blur-sm border-b-4 border-[#cca751] shadow-md'
            : 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-900'
          : 'bg-transparent text-[#3c2f1a] dark:text-[#f3d38b]'
      } ${layout === 'brutalist' ? 'border-b-3 border-zinc-900 bg-white' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Logo */}
          <div className="flex min-w-0 items-center gap-2">
            <div className={`p-1.5 rounded-lg ${
              layout === 'brutalist' 
                ? 'border-2 border-zinc-900 bg-yellow-300 shadow-[2px_2px_0px_#000]' 
                : layout === 'parchment'
                ? 'border border-[#b29252] bg-[#fdf8ed] text-[#7a5c21] dark:bg-[#2a2114] dark:text-[#f3d38b] dark:border-[#d2b173]/55 rounded-none shadow-sm'
                : 'bg-zinc-900 text-white dark:bg-[#15171e]'
            }`}>
              <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            </div>
            <span className={`truncate text-base font-bold tracking-tight sm:text-lg ${
              layout === 'brutalist' 
                ? 'text-zinc-950 uppercase font-black' 
                : layout === 'parchment'
                ? 'text-[#6e5322] dark:text-[#f6d98d] font-display font-semibold tracking-wide'
                : 'text-zinc-900 dark:text-white'
            }`}>
              {personal.name}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    layout === 'parchment'
                      ? 'font-display font-bold tracking-wide text-[#75592a] dark:text-[#d8bd7b] hover:text-[#c5a85c] dark:hover:text-[#fff0c2] '
                      : 'text-zinc-650 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  } ${
                    layout === 'brutalist' ? 'uppercase font-black border-b-2 border-transparent hover:border-zinc-900' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  downloadResume();
                }}
                className={`hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  layout === 'parchment'
                    ? 'font-display font-bold tracking-wide text-[#75592a] dark:text-[#d8bd7b] hover:text-[#c5a85c] dark:hover:text-[#fff0c2]'
                    : 'text-zinc-650 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </button>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-[#cdbb9d] dark:hover:text-[#fff0c2] transition-colors"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-[#cdbb9d] dark:hover:text-[#fff0c2] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={onToggleTheme}
                className={`inline-flex h-9 w-9 items-center justify-center transition-colors ${
                  layout === 'parchment'
                    ? 'border border-[#b29252]/50 bg-[#fdf8ed] text-[#75592a] hover:bg-[#ebdcc1] dark:bg-[#1e1812] dark:text-[#e4be75] dark:hover:bg-[#2c2219] rounded-none'
                    : 'rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800'
                }`}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 transition-colors ${
                layout === 'brutalist'
                  ? 'border-2 border-zinc-900 text-zinc-900 bg-white'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                layout === 'brutalist'
                  ? 'border-2 border-zinc-900 text-zinc-900 bg-white'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 py-4 px-5 shadow-xl ${layout === 'parchment' ? 'bg-[#fcf9f2] dark:bg-[#120e0a] border-[#d2b173]/35 dark:border-[#9a783d]/45' : ''} ${layout === 'brutalist' ? 'border-3 border-zinc-900' : ''}`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`py-1.5 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white ${
                  layout === 'parchment' ? 'font-display font-bold text-[#75592a] dark:text-[#d8bd7b]' : layout === 'brutalist' ? 'uppercase font-bold' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                downloadResume();
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 py-1.5 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white ${
                layout === 'parchment' ? 'font-display font-bold text-[#75592a] dark:text-[#d8bd7b]' : layout === 'brutalist' ? 'uppercase font-bold' : ''
              }`}
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
