import React from 'react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { AboutServicesCombined } from './AboutServicesCombined';
import { HookFramesLogo } from './HookFramesLogo';

interface AboutPageProps {
  onNavigateHome: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

// About lives on its own page now (it used to sit on the homepage between
// the portfolio and the workflow, which made the home page long). The
// content is unchanged — the same panel, including the team block.
export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, theme = 'dark', onToggleTheme }) => {
  return (
    <div id="main-content" className="min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0B] text-neutral-800 dark:text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-800 dark:selection:text-blue-200">
      {/* Top Header & Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAFAF9]/90 dark:bg-[#0A0A0B]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Back to Home Link */}
          <button
            type="button"
            id="about-back-home-btn"
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Center Logo */}
          <div
            onClick={onNavigateHome}
            className="cursor-pointer hidden sm:flex items-center"
          >
            <HookFramesLogo size="sm" />
          </div>

          {/* Spacer to keep the logo centred — email lives only in the contact section */}
          <div className="flex items-center justify-end w-[148px]">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none active:scale-95 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Page Title & Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-3 max-w-2xl pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B544]" />
            <span>About the studio</span>
          </div>

          <h1
            id="about-page-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight"
          >
            About Hook Frames Studio
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            A small, focused team making UGC, CGI and poster ads for brands — fast, without film crew overhead.
          </p>
        </div>
      </div>

      {/* The about panel — unchanged from the homepage version */}
      <AboutServicesCombined />

      {/* Bottom Contact Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mt-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Want an ad made for your brand?</h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">See the pricing on the home page and email us from there.</p>
          </div>
          <button
            type="button"
            onClick={onNavigateHome}
            className="shrink-0 px-6 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] transition-colors shadow-lg active:scale-95 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
