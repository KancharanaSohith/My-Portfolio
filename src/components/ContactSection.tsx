import React, { useState } from 'react';
import { Send, Copy, Check, Mail, MapPin, MessageSquare, Linkedin, Github, Download } from 'lucide-react';
import { PortfolioConfig } from '../types';
import { ACCENT_MAP, getLayoutStyle, downloadResume } from '../utils';

interface ContactSectionProps {
  config: PortfolioConfig;
}

export default function ContactSection({ config }: ContactSectionProps) {
  const { personal, accent, layout } = config;
  const accentSet = ACCENT_MAP[accent];
  const layoutSet = getLayoutStyle(layout, accent);

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    if (!web3FormsAccessKey) {
      setFormError('Contact form is not connected yet. Please use the email address on this page.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: 'New portfolio contact request',
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send message.');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      setIsSubmitting(false);
      setFormError('Something went wrong. Please email me directly from the contact details.');
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className={layoutSet.sectionHeader}>Let's create value</p>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-4 ${
              layout === 'brutalist' ? 'text-zinc-950 uppercase font-black' : 'text-zinc-900 dark:text-white'
            }`}
          >
            Connect With Me
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-mono leading-relaxed">
            Let's connect for opportunities, collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-5 sm:p-6 ${layoutSet.container}`}>
              <h3 className={`text-lg font-bold mb-4 ${layout === 'brutalist' ? 'uppercase font-black text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                Contact Details
              </h3>
              
              <div className="space-y-4 text-sm font-sans mb-6">
                <div className="flex items-center gap-3 text-zinc-650 dark:text-zinc-400">
                  <MapPin className="h-5 w-5 text-zinc-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-650 dark:text-zinc-400">
                  <Mail className="h-5 w-5 text-zinc-400 shrink-0" />
                  <span className="truncate">{personal.email}</span>
                </div>
                {personal.phone && (
                  <div className="flex items-center gap-3 text-zinc-650 dark:text-zinc-400">
                    <MessageSquare className="h-5 w-5 text-zinc-400 shrink-0" />
                    <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="hover:underline">
                      {personal.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Instant Clipboard Button */}
              <button
                onClick={handleCopyEmail}
                className={`w-full flex items-center justify-center gap-2 cursor-pointer py-3 text-xs font-semibold select-none border border-dashed transition-all duration-300 ${
                  layout === 'brutalist'
                    ? 'border-2 border-zinc-900 text-zinc-950 hover:bg-yellow-50 bg-white font-black'
                    : 'border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500 animate-scale" />
                    <span className="text-emerald-500">Email Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>Copy Email to Clipboard</span>
                  </>
                )}
              </button>
            </div>

            {/* Social card */}
            <div className={`p-5 sm:p-6 ${layoutSet.container}`}>
              <h3 className={`text-lg font-bold mb-4 ${layout === 'brutalist' ? 'uppercase font-black text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
                Social Coordinates
              </h3>
              <div className="flex gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-all border ${
                    layout === 'brutalist' ? 'border-2 border-zinc-900 shadow-[2px_2px_0px_#000] hover:bg-yellow-100' : 'border-zinc-100 dark:border-zinc-900 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-all border ${
                    layout === 'brutalist' ? 'border-2 border-zinc-900 shadow-[2px_2px_0px_#000] hover:bg-yellow-100' : 'border-zinc-100 dark:border-zinc-900 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Input Form (Right Column) */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-7 p-5 sm:p-8 flex flex-col space-y-5 ${layoutSet.container}`}
          >
            <h3 className={`text-lg font-bold mb-1 ${layout === 'brutalist' ? 'uppercase font-black text-zinc-950' : 'text-zinc-900 dark:text-white'}`}>
              Send Secure Message
            </h3>
            
            <div className="space-y-1">
              <label className="text-xs font-semibold font-mono text-zinc-500 dark:text-zinc-400">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full text-base sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-950/60 border text-zinc-700 dark:text-zinc-300 placeholder-zinc-400 focus:outline-none focus:ring-2 ${
                  layout === 'brutalist'
                    ? 'border-3 border-zinc-900 focus:ring-zinc-900'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl focus:ring-blue-400/20'
                }`}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold font-mono text-zinc-500 dark:text-zinc-400">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full text-base sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-950/60 border text-zinc-700 dark:text-zinc-300 placeholder-zinc-400 focus:outline-none focus:ring-2 ${
                  layout === 'brutalist'
                    ? 'border-3 border-zinc-900 focus:ring-zinc-900'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl focus:ring-blue-400/20'
                }`}
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold font-mono text-zinc-500 dark:text-zinc-400">Message Body</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full text-base sm:text-sm px-4 py-3 bg-zinc-50 dark:bg-zinc-950/60 border text-zinc-700 dark:text-zinc-300 placeholder-zinc-400 focus:outline-none focus:ring-2 ${
                  layout === 'brutalist'
                    ? 'border-3 border-zinc-900 focus:ring-zinc-900'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-xl focus:ring-blue-400/20'
                }`}
                placeholder="Briefly state project parameters or scheduling inquiries..."
              />
            </div>

            {/* Core triggering button */}
            <button
              id="submit-contact"
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full cursor-pointer py-4 sm:py-3.5 font-semibold text-xs transition-all flex items-center justify-center gap-2 select-none ${
                layout === 'brutalist'
                  ? 'border-3 border-zinc-900 bg-yellow-300 text-zinc-950 font-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]'
                  : `bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 rounded-xl shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-200`
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : isSuccess ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Message Received Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  <span>{web3FormsAccessKey ? 'Send Message Request' : 'Email Contact Available'}</span>
                </>
              )}
            </button>

            {formError && (
              <p className="text-center text-xs font-semibold text-rose-500 mt-2 font-mono animate-fade-in">
                {formError}
              </p>
            )}

            {isSuccess && (
              <p className="text-center text-xs font-semibold text-emerald-500 mt-2 font-mono animate-fade-in">
                Thank you! Your message was sent to my inbox.
              </p>
            )}

          </form>

        </div>

        <div className="max-w-5xl mx-auto mt-10 sm:mt-12 text-center">
          <button
            type="button"
            id="resumeDownloadBtn"
            onClick={(e) => {
              e.preventDefault();
              downloadResume();
            }}
            className={`inline-flex w-full items-center justify-center gap-2 cursor-pointer py-3 px-6 text-sm font-semibold transition-all sm:w-auto ${
              layout === 'brutalist'
                ? 'border-3 border-zinc-900 bg-yellow-300 text-zinc-950 font-black shadow-[3px_3px_0px_#000] hover:translate-y-[-1px]'
                : `${accentSet.bgSolid} text-white rounded-xl shadow-md hover:opacity-95`
            }`}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}
