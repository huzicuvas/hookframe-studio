import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { WorkflowSection } from './WorkflowSection';
import { HookFramesLogo } from './HookFramesLogo';

interface WorkflowPageProps {
  onNavigateHome: () => void;
}

// Workflow lives on its own page now (it used to sit on the homepage between
// the about panel and the pricing, which made the home page long). The
// content is unchanged — the same three steps.
export const WorkflowPage: React.FC<WorkflowPageProps> = ({ onNavigateHome }) => {
  return (
    <div id="main-content" className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Header & Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-neutral-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Back to Home Link */}
          <button
            type="button"
            id="workflow-back-home-btn"
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] text-xs font-semibold text-neutral-300 hover:text-white transition-colors shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
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
          <div aria-hidden="true" className="hidden sm:block w-[148px]" />
        </div>
      </header>

      {/* Page Title & Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-3 max-w-2xl pb-8 border-b border-neutral-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B544]" />
            <span>48-hour ad pipeline</span>
          </div>

          <h1
            id="workflow-page-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Our Workflow
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            A three-step process from product link to finished ad — brief, make, deliver.
          </p>
        </div>
      </div>

      {/* The workflow steps — unchanged from the homepage version */}
      <WorkflowSection />

      {/* Bottom Contact Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mt-4 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Ready to start your ad?</h3>
            <p className="text-xs sm:text-sm text-neutral-400">See the pricing on the home page and email us from there.</p>
          </div>
          <button
            type="button"
            onClick={onNavigateHome}
            className="shrink-0 px-6 py-3.5 rounded-full bg-white text-black text-xs font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] transition-colors shadow-lg active:scale-95 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
