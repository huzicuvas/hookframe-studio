import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Video, Sparkles } from 'lucide-react';
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
      className="bg-[#0A0A0B] border-t border-neutral-800/80 py-12 text-neutral-400 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer CTA band — the third call to action (scrolls to the contact section) */}
        <div className="mb-10 rounded-3xl border border-blue-500/30 bg-neutral-900 p-8 sm:p-10 shadow-2xl shadow-blue-500/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let's make your next ad.
            </h3>
            <p className="text-sm text-neutral-400 font-mono">
              48-hour turnaround · Full commercial rights · First ad pay on approval
            </p>
          </div>
          <a
            href="#contact"
            id="footer-cta-start-project"
            className="group shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow-lg active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-800/80">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <HookFramesLogo size="sm" />
            <p className="text-xs text-neutral-500 max-w-sm">
              Ad content for brands, delivered fast. UGC, CGI and poster ads for Meta, TikTok and YouTube Shorts.
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} Hook Frames Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>UGC Avatars</span>
            <span>•</span>
            <span>3D CGI Simulations</span>
            <span>•</span>
            <span>Hook Variations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
