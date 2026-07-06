import React, { useState } from 'react';
import { X, SlidersHorizontal, Eye, Copy, Check, Layout, Palette, Settings, Smile, Globe, ExternalLink, RefreshCw } from 'lucide-react';
import { PortfolioConfig, ThemeAccent, LayoutStyle } from '../types';
import { ACCENT_MAP } from '../utils';

interface ConfigurationPanelProps {
  config: PortfolioConfig;
  onChange: (newConfig: PortfolioConfig) => void;
  onReset: () => void;
  onClose: () => void;
}

export default function ConfigurationPanel({ config, onChange, onReset, onClose }: ConfigurationPanelProps) {
  const [activeTab, setActiveTab] = useState<'style' | 'content' | 'raw'>('style');
  const [copiedCodeCode, setCopiedCodeCode] = useState(false);

  const accents: { value: ThemeAccent; label: string; color: string }[] = [
    { value: 'azure', label: 'Azure Blue', color: 'bg-blue-500' },
    { value: 'indigo', label: 'Royal Indigo', color: 'bg-indigo-500' },
    { value: 'emerald', label: 'Emerald Green', color: 'bg-emerald-500' },
    { value: 'amber', label: 'Amber Orange', color: 'bg-amber-500' },
    { value: 'violet', label: 'Violet Indigo', color: 'bg-violet-500' },
    { value: 'rose', label: 'Rose Pink', color: 'bg-rose-500' },
    { value: 'slate', label: 'Slate Gray', color: 'bg-zinc-650' },
  ];

  const layouts: { value: LayoutStyle; label: string; desc: string }[] = [
    { value: 'glassmorphism', label: 'Elegant Glassmorphism', desc: 'Frosted backdrops, floating nodes, and smooth radial glow coordinates.' },
    { value: 'minimalist', label: 'Swiss Modern Minimalist', desc: 'Clean font-mono layouts, strict border dividers, and neat card gutters.' },
    { value: 'brutalist', label: 'Cyber Neo-Brutalist', desc: 'Bold outlines, high-contrast flat fills, yellow accent blocks, and retro headers.' }
  ];

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({
      ...config,
      personal: {
        ...config.personal,
        [name]: value
      }
    });
  };

  const handleAccentChange = (accent: ThemeAccent) => {
    onChange({ ...config, accent });
  };

  const handleLayoutChange = (layout: LayoutStyle) => {
    onChange({ ...config, layout });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopiedCodeCode(true);
    setTimeout(() => setCopiedCodeCode(false), 2000);
  };

  return (
    <div
      id="configurator-side-drawer"
      className="fixed inset-y-0 right-0 w-full max-w-md bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-900 shadow-2xl z-50 flex flex-col h-full animate-slide-in font-sans"
    >
      {/* Drawer Header */}
      <div className="p-5 border-b border-zinc-100 dark:border-zinc-900/60 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500 text-white rounded-lg">
            <SlidersHorizontal className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-zinc-900 dark:text-white">Workspace Customizer</h2>
            <p className="text-[10px] text-zinc-400 font-mono">LIVE PREVIEW LAYOUT EDITOR</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer"
        >
          <X className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Drawer Tabs */}
      <div className="flex border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 select-none font-mono text-xs">
        <button
          onClick={() => setActiveTab('style')}
          className={`flex-1 py-3 text-center font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'style'
              ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          🎨 Appearance
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 py-3 text-center font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'content'
              ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          📝 Personal Info
        </button>
        <button
          onClick={() => setActiveTab('raw')}
          className={`flex-1 py-3 text-center font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'raw'
              ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-extrabold'
              : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          🗄️ Export Code
        </button>
      </div>

      {/* Customizable Fields Column (Scrollable body) */}
      <div className="flex-grow overflow-y-auto p-5 space-y-6">
        {activeTab === 'style' && (
          <div className="space-y-6">
            
            {/* Visual themes select */}
            <div>
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 uppercase font-mono tracking-wider mb-3">
                <Layout className="h-3.5 w-3.5" />
                <span>Layout Paradigms</span>
              </label>
              
              <div className="space-y-2.5">
                {layouts.map((lay) => {
                  const isSelected = config.layout === lay.value;
                  return (
                    <button
                      key={lay.value}
                      onClick={() => handleLayoutChange(lay.value)}
                      className={`w-full text-left p-3.5 border transition-all cursor-pointer flex flex-col gap-1 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50/20 dark:bg-blue-950/20 ring-1 ring-blue-500/30'
                          : 'border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900'
                      } ${lay.value === 'brutalist' ? 'rounded-none' : 'rounded-xl'}`}
                    >
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center justify-between">
                        <span>{lay.label}</span>
                        {isSelected && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500 text-white font-extrabold">Active</span>}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed font-sans">{lay.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colors Select theme */}
            <div>
              <label className="text-xs font-bold text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 uppercase font-mono tracking-wider mb-3">
                <Palette className="h-3.5 w-3.5" />
                <span>Accent Color Wheel</span>
              </label>
              
              <div className="grid grid-cols-2 gap-2">
                {accents.map((acc) => {
                  const isSelected = config.accent === acc.value;
                  return (
                    <button
                      key={acc.value}
                      onClick={() => handleAccentChange(acc.value)}
                      className={`flex items-center gap-2.5 p-2.5 border rounded-xl text-left transition-all text-xs cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50/10 dark:bg-blue-950/10 font-bold text-zinc-800 dark:text-zinc-200'
                          : 'border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 text-zinc-650 dark:text-zinc-400'
                      }`}
                    >
                      <span className={`h-3 w-3 rounded-full ${acc.color} shrink-0`} />
                      <span className="truncate">{acc.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* Content text customization */}
        {activeTab === 'content' && (
          <div className="space-y-4 font-mono text-xs">
            
            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <Smile className="h-3.5 w-3.5" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={config.personal.name}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Alex Morgan"
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <Settings className="h-3.5 w-3.5" />
                <span>Headline / Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={config.personal.title}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Senior Full-Stack Engineer"
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <Globe className="h-3.5 w-3.5" />
                <span>Location Prefix</span>
              </label>
              <input
                type="text"
                name="location"
                value={config.personal.location}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="London, UK"
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <Globe className="h-3.5 w-3.5" />
                <span>Direct Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={config.personal.email}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="hello@mysite.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <Settings className="h-3.5 w-3.5" />
                <span>Avatar Photo Path URL</span>
              </label>
              <input
                type="text"
                name="avatarUrl"
                value={config.personal.avatarUrl}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-505"
                placeholder="/images/sohith-profile.png"
              />
              <span className="text-[9px] text-zinc-400 block font-normal leading-relaxed mt-1">
                Use a public image path such as /images/sohith-profile.png.
              </span>
            </div>

            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <span>Core Pitch Bio</span>
              </label>
              <textarea
                name="bio"
                rows={3}
                value={config.personal.bio}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Core visual bio..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-450 font-bold dark:text-zinc-500 flex items-center gap-1.5 uppercase">
                <span>Extended Background Bio</span>
              </label>
              <textarea
                name="longBio"
                rows={5}
                value={config.personal.longBio}
                onChange={handlePersonalChange}
                className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Full contextual summary..."
              />
            </div>

          </div>
        )}

        {/* Raw code JSON view */}
        {activeTab === 'raw' && (
          <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">Save details schema:</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer font-bold select-none"
              >
                {copiedCodeCode ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedCodeCode ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>

            <textarea
              readOnly
              value={JSON.stringify(config, null, 2)}
              className="w-full flex-grow h-[260px] sm:h-[350px] font-mono text-[10px] p-3 border border-zinc-150 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-950 text-zinc-650 dark:text-zinc-400 rounded-xl focus:outline-none select-all"
            />
            
            <p className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-normal font-sans">
              Copy this JSON template anytime you finish updating your description values, and replace the contents inside <strong>/src/data.ts</strong> to permanently persist your customizations across reloads!
            </p>
          </div>
        )}
      </div>

      {/* Drawer Action columns at layout base */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10 flex items-center gap-3">
        <button
          onClick={onReset}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2.5 border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 rounded-xl text-xs font-semibold cursor-pointer select-none bg-white dark:bg-zinc-950/40"
          title="Reset back to default template configurations"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Reset Default</span>
        </button>
        
        <button
          onClick={onClose}
          className="flex-grow py-2.5 bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded-xl text-xs cursor-pointer select-none text-center block shadow-sm text-center"
        >
          Close Customizer
        </button>
      </div>

    </div>
  );
}
