import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { HookFramesLogo } from './HookFramesLogo';

interface NotFoundPageProps {
  onNavigateHome: () => void;
}

// Custom 404 page — shown when a visitor lands on a URL that does not exist,
// instead of silently showing the homepage. Matches the studio's dark theme.
export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-neutral-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            type="button"
            id="notfound-back-home-btn"
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] text-xs font-semibold text-neutral-300 hover:text-white transition-colors shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div
            onClick={onNavigateHome}
            className="cursor-pointer hidden sm:flex items-center"
          >
            <HookFramesLogo size="sm" />
          </div>

          <div aria-hidden="true" className="hidden sm:block w-[148px]" />
        </div>
      </header>

      {/* 404 Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
        <div className="text-7xl sm:text-8xl font-bold tracking-tight text-[#F5B544]">
          404
        </div>
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md mx-auto">
          The link you followed does not exist, or the page was moved. The good
          news: the ads are still on the homepage.
        </p>
        <button
          type="button"
          onClick={onNavigateHome}
          className="mt-8 group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-200 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back home</span>
        </button>
      </div>
    </div>
  );
};
