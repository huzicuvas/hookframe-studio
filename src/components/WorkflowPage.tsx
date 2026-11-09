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
 <div className="min-h-screen bg-[#0B0D12] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
 {/* Top Header & Sticky Navigation Bar */}
 <header className="sticky top-0 z-40 bg-[#0B0D12]/90 backdrop-blur-md border-b border-[#222833]/80 py-4">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
 {/* Back to Home Link */}
 <button
 type="button"
 id="workflow-back-home-btn"
 onClick={onNavigateHome}
 className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11141B] border border-[#222833] hover:bg-neutral-800/60 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
 >
 <ArrowLeft className="w-4 h-4 text-blue-400" />
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
 <div className="space-y-3 max-w-2xl pb-8 border-b border-[#222833]">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141B] border border-[#222833] text-[11px] font-mono text-neutral-300">
 <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
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
 <div className="mt-4 bg-[#11141B] border border-[#222833] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
 <div className="space-y-1 text-center sm:text-left">
 <h3 className="text-xl font-bold text-white">Ready to start your ad?</h3>
 <p className="text-xs sm:text-sm text-neutral-400">See the pricing on the home page and email us from there.</p>
 </div>
 <button
 type="button"
 onClick={onNavigateHome}
 className="shrink-0 px-6 py-3.5 rounded-full bg-white text-black text-xs font-bold border border-transparent hover:bg-neutral-200 transition-colors flex items-center gap-2"
 >
 <ArrowLeft className="w-4 h-4" />
 <span>Back to Home</span>
 </button>
 </div>
 </div>
 </div>
 );
};
