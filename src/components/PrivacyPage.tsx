import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { HookFramesLogo } from './HookFramesLogo';

interface PrivacyPageProps {
  onNavigateHome: () => void;
}

// Privacy Policy — plain-English, honest about what the site actually does.
// The site collects nothing itself: contact is by email (mailto), there is no
// account, no form that stores data, and no analytics until one is added.
// Media is served from Supabase storage; the chat assistant is powered by Gemini.
export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Header & Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-neutral-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Back to Home Link */}
          <button
            type="button"
            id="privacy-back-home-btn"
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

          {/* Spacer to keep the logo centred */}
          <div aria-hidden="true" className="hidden sm:block w-[148px]" />
        </div>
      </header>

      {/* Page Title & Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="space-y-3 pb-8 border-b border-neutral-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B544]" />
            <span>Privacy Policy</span>
          </div>

          <h1
            id="privacy-page-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            Last updated: 9 November 2026. Short version: this site collects almost
            nothing. There is no account, no tracking, and no form that stores your
            details. What you send us by email stays between you and us.
          </p>
        </div>

        <div className="pt-8 space-y-8 text-sm sm:text-base text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">What we collect</h2>
            <p>
              When you email us (kiramorganai@gmail.com) to order an ad or ask for a
              quotation, we receive whatever you put in that email — your name, your
              brand, and the details of your request. We use it only to reply to you
              and to deliver the work you asked for. We do not sell it, share it, or
              use it for anything else.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">What we do not collect</h2>
            <p>
              This site has no accounts, no newsletter sign-up, and no form that
              stores your information on a server. We do not run analytics or
              advertising trackers on this site at the moment. If that changes, this
              page will be updated and a cookie notice will be added.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Cookies</h2>
            <p>
              This site does not set tracking cookies. Your browser may store
              ordinary technical data (for example, cached images) so the site loads
              faster, but nothing is used to follow you across the web.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Third-party services</h2>
            <p>
              Ad previews and posters on this site are served from Supabase storage.
              The on-site chat assistant is powered by Google Gemini and only sees
              the messages you type into it. Those services have their own privacy
              policies, and they process data only to deliver the feature you are
              using.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Your rights</h2>
            <p>
              If you emailed us and want your message deleted, or you want to know
              what we hold about you, write to kiramorganai@gmail.com and we will
              take care of it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>
              For any question about this policy, email{' '}
              <a
                href="mailto:kiramorganai@gmail.com"
                className="text-blue-400 hover:text-white transition-colors"
              >
                kiramorganai@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back to Home CTA */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <button
            type="button"
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-200 transition-colors active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
