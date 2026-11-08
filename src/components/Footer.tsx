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
      className="bg-[#0A0A0B] border-t border-neutral-800/80 py-8 text-neutral-400 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer CTA — one button only (scrolls to the contact section) */}
        <div className="mb-8 flex flex-col items-center text-center">
          <a
            href="#contact"
            id="footer-cta-next-ad"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-base sm:text-lg font-bold hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow-lg active:scale-95"
          >
            <span>Let's make your next ad.</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="mt-3 text-xs text-neutral-500 font-mono">
            First ad pay on approval.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-neutral-800/80">
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

          {/* Back to top button */}
          <button
            type="button"
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 text-center text-xs text-neutral-500 font-mono">
          © {new Date().getFullYear()} Hook Frames Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
