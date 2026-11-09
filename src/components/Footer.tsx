import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { HookFramesLogo } from './HookFramesLogo';

interface FooterProps {
  onNavigateToGallery?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToWorkflow?: () => void;
}

const recipientEmail = 'kiramorganai@gmail.com';

export const Footer: React.FC<FooterProps> = ({ onNavigateToGallery, onNavigateToAbout, onNavigateToWorkflow }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryClick = (e: React.MouseEvent) => {
    if (onNavigateToGallery) {
      e.preventDefault();
      onNavigateToGallery();
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    if (onNavigateToAbout) {
      e.preventDefault();
      onNavigateToAbout();
    }
  };

  const handleWorkflowClick = (e: React.MouseEvent) => {
    if (onNavigateToWorkflow) {
      e.preventDefault();
      onNavigateToWorkflow();
    }
  };

  return (
    <footer id="footer" className="text-neutral-400 text-sm">
      {/* Wavy top edge — the footer colour rises into the FAQ in a gentle wave.
          The footer is one shade lighter (neutral-900) than the FAQ (neutral-950)
          so the wave reads. */}
      <svg
        className="block w-full h-12 text-neutral-900"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,24 C120,40 240,8 360,24 C480,40 600,8 720,24 C840,40 960,8 1080,24 C1200,40 1320,8 1440,24 L1440,48 L0,48 Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-neutral-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row: brand + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <HookFramesLogo size="sm" />
              <p className="text-xs text-neutral-500 max-w-sm">
                UGC, CGI and poster ads for Meta, TikTok and YouTube Shorts.
              </p>
            </div>
            <a
              href="#contact"
              id="footer-cta-next-ad"
              className="group shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] transition-colors duration-200 shadow-lg active:scale-95"
            >
              <span>Let's make your next ad.</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            <div>
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    UGC Video Ads
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    CGI Product Ads
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Poster Ads
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Hook Variation Packs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                Studio
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" onClick={handleAboutClick} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/workflow" onClick={handleWorkflowClick} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Our Workflow
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Pricing & Quotes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                Work
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    onClick={handleGalleryClick}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    $50 Test Ad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${recipientEmail}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Email Us
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${recipientEmail}?subject=${encodeURIComponent('Quotation request — over 30 seconds or custom scope')}`}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    Ask for a Quotation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Pricing & Quotes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row: copyright + back to top */}
          <div className="mt-10 pt-6 border-t border-neutral-800/80 flex items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
            <span>© {new Date().getFullYear()} Hook Frames Studio. All rights reserved.</span>
            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
