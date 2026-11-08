import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { HookFramesLogo } from './HookFramesLogo';

interface FooterProps {
  onNavigateToGallery?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToGallery }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryClick = (e: React.MouseEvent) => {
    if (onNavigateToGallery) {
      e.preventDefault();
      onNavigateToGallery();
    }
  };

  return (
    <footer
      id="footer"
      className="bg-[#0A0A0B] border-t border-neutral-800/80 py-6 text-neutral-400 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-5 border-b border-neutral-800/80">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <HookFramesLogo size="sm" />
            <p className="text-xs text-neutral-500 max-w-sm">
              UGC, CGI and poster ads for Meta, TikTok and YouTube Shorts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-neutral-400">
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a
              href="/gallery"
              onClick={handleGalleryClick}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Gallery
            </a>
            <a href="#about" className="hover:text-white transition-colors">About & Services</a>
            <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Pricing & Quotes</a>
          </div>

          {/* CTA + back to top — the footer call to action, tucked in the corner */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              id="footer-cta-next-ad"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow-lg active:scale-95"
            >
              <span>Let's make your next ad.</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-5 text-center text-xs text-neutral-500 font-mono">
          © {new Date().getFullYear()} Hook Frames Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
