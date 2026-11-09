import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { FaqSection } from './components/FaqSection';
import { PricingSection } from './components/PricingSection';
import { GeminiChatbot } from './components/GeminiChatbot';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { DeveloperNoteModal } from './components/DeveloperNoteModal';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { WorkflowPage } from './components/WorkflowPage';
import { PrivacyPage } from './components/PrivacyPage';
import { NotFoundPage } from './components/NotFoundPage';
import { PORTFOLIO_VIDEOS, FEATURED_VIDEO } from './data/portfolioData';
import { VideoItem } from './types';
import { Bot, MessageSquare, X, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDevGuideOpen, setIsDevGuideOpen] = useState(false);
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Theme (dark is the default; the navbar toggle flips it, and the choice
  // is remembered in localStorage). The `.dark` class on <html> drives the
  // dark: variants; without it the site renders its light theme.
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('hookframe-theme') === 'light'
      ? 'light'
      : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('hookframe-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // Scroll progress bar (thin gold line at the very top of the page).
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sync route on popstate (browser back/forward) and deep-linked video hash
  useEffect(() => {
    const checkHashForVideo = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = PORTFOLIO_VIDEOS.find((v) => v.id === hash);
        if (found) {
          setSelectedVideo(found);
        }
      }
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      checkHashForVideo();
      window.scrollTo(0, 0);
    };

    // Check on initial mount
    checkHashForVideo();

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', checkHashForVideo);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', checkHashForVideo);
    };
  }, []);

  // Auto-dismiss tooltip after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatTooltip(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Per-page title + meta description (launch checklist: unique title and
  // description on every page, so each page reads properly in search).
  useEffect(() => {
    const pages: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Hook Frames Studio | AI Content Studio — UGC & CGI Ads for Brands',
        description:
          'Hook Frames Studio is an AI content studio producing high-converting UGC and photorealistic CGI ad content for modern brands. Fast turnaround, no film crews.',
      },
      '/gallery': {
        title: 'Gallery — Hook Frames Studio | AI Ad Portfolio',
        description:
          'Browse the Hook Frames Studio gallery: UGC video ads, CGI product films and poster ads made for brands.',
      },
      '/about': {
        title: 'About & Services — Hook Frames Studio',
        description:
          'About Hook Frames Studio: a small, focused team making UGC, CGI and poster ads for brands — fast, without film crew overhead.',
      },
      '/workflow': {
        title: 'Workflow — Hook Frames Studio | How We Work',
        description:
          'How Hook Frames Studio works: send the brief, we make the ads, you get the finished ads in 48 hours. Pay on approval for your first ad.',
      },
      '/privacy': {
        title: 'Privacy Policy — Hook Frames Studio',
        description:
          'Privacy Policy for Hook Frames Studio: what we collect (almost nothing), what we do not collect, cookies, and your rights.',
      },
    };
    const fallback = {
      title: 'Page Not Found — Hook Frames Studio',
      description: 'This page does not exist. Head back to the Hook Frames Studio homepage.',
    };
    const page = pages[currentPath] || pages[currentPath.replace(/\/$/, '')] || fallback;
    document.title = page.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', page.description);
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateHome = () => {
    navigateTo('/');
  };

  const navigateToGallery = () => {
    navigateTo('/gallery');
  };

  const navigateToAbout = () => {
    navigateTo('/about');
  };

  const navigateToWorkflow = () => {
    navigateTo('/workflow');
  };

  const navigateToPrivacy = () => {
    navigateTo('/privacy');
  };

  const handleExplorePortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFeaturedVideo = () => {
    setSelectedVideo(FEATURED_VIDEO);
  };

  const handleOpenChat = () => {
    setShowChatTooltip(false);
    setIsFloatingChatOpen(true);
  };

  const isGalleryView = currentPath === '/gallery' || currentPath === '/gallery/';
  const isAboutView = currentPath === '/about' || currentPath === '/about/';
  const isWorkflowView = currentPath === '/workflow' || currentPath === '/workflow/';
  const isPrivacyView = currentPath === '/privacy' || currentPath === '/privacy/';
  const isHomeView = currentPath === '/' || currentPath === '';
  // Any other path is a dead link — show the custom 404 page, not the homepage.
  const isNotFoundView = !isGalleryView && !isAboutView && !isWorkflowView && !isPrivacyView && !isHomeView;

  return (
    <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0B] text-neutral-800 dark:text-[#E2E8F0] font-sans selection:bg-blue-500/30 selection:text-blue-800 dark:selection:text-blue-200">
      {/* Skip to content — keyboard users jump straight to the page content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-neutral-900 dark:focus:bg-white focus:text-white dark:focus:text-neutral-900 focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Scroll progress bar — thin gold line at the very top */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#F5B544]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {isGalleryView ? (
        /* Full Gallery View at /gallery */
        <GalleryPage
          theme={theme}
          onToggleTheme={toggleTheme}
          onNavigateHome={navigateHome}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />
      ) : isAboutView ? (
        /* About View at /about — the about panel moved off the homepage */
        <AboutPage theme={theme} onToggleTheme={toggleTheme} onNavigateHome={navigateHome} />
      ) : isWorkflowView ? (
        /* Workflow View at /workflow — the workflow steps moved off the homepage */
        <WorkflowPage theme={theme} onToggleTheme={toggleTheme} onNavigateHome={navigateHome} />
      ) : isPrivacyView ? (
        /* Privacy Policy at /privacy */
        <PrivacyPage theme={theme} onToggleTheme={toggleTheme} onNavigateHome={navigateHome} />
      ) : isNotFoundView ? (
        /* Custom 404 — any URL that is not a real page */
        <NotFoundPage theme={theme} onToggleTheme={toggleTheme} onNavigateHome={navigateHome} />
      ) : (
        /* Standard Homepage View */
        <>
          {/* Top Sticky Navigation */}
          <Navbar
            theme={theme}
            onToggleTheme={toggleTheme}
            onNavigateToGallery={navigateToGallery}
            onNavigateToAbout={navigateToAbout}
            onNavigateToWorkflow={navigateToWorkflow}
            onNavigateHome={navigateHome}
            onOpenChat={handleOpenChat}
          />

          <main id="main-content">
            {/* Hero Section */}
            <Hero
              onSelectFeaturedVideo={handleSelectFeaturedVideo}
            />

            {/* Homepage Portfolio Grid (First 6 videos, 3-column V/H/V pattern, with View Full Gallery CTA) */}
            <PortfolioGrid
              onSelectVideo={(video) => setSelectedVideo(video)}
              onNavigateToGallery={navigateToGallery}
            />

            {/* Pricing Section — pricing cards + contact panel in one section */}
            <PricingSection />

            {/* FAQ Section — below pricing, last before the footer */}
            <FaqSection />
          </main>

          {/* Footer with Hook Frames Studio Logo */}
          <Footer
            onNavigateToGallery={navigateToGallery}
            onNavigateToAbout={navigateToAbout}
            onNavigateToWorkflow={navigateToWorkflow}
            onNavigateToPrivacy={navigateToPrivacy}
          />
        </>
      )}

      {/* Video Player Modal (Active across both Homepage and Gallery) */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Floating Circular Chat & Helper Widget */}
      <aside
        id="floating-chat-widget"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 select-none"
        aria-label="Interactive Studio Assistant"
      >
        {/* First-load One-time Tooltip / Popup */}
        {showChatTooltip && !isFloatingChatOpen && (
          <div
            id="chat-tooltip-popup"
            onClick={handleOpenChat}
            className="group relative cursor-pointer bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs font-medium px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-2xl backdrop-blur-md flex items-center gap-3 transition-colors hover:border-neutral-600 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs"
          >
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 pr-1 leading-snug">
              <p className="text-neutral-700 dark:text-neutral-200">Ask a question? I'm here to help</p>
            </div>
            <button
              type="button"
              id="dismiss-tooltip-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowChatTooltip(false);
              }}
              title="Dismiss"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Speech bubble pointer arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-neutral-900 border-r border-b border-neutral-300 dark:border-neutral-700 rotate-45 transform" />
          </div>
        )}

        <div className="flex items-center gap-2">

          {/* Floating Circular Chat Button */}
          <button
            type="button"
            id="floating-circular-chat-btn"
            onClick={handleOpenChat}
            title="Ask a question? Open Studio Assistant"
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-neutral-900 dark:text-white shadow-2xl flex items-center justify-center border border-blue-400/40 transition-colors duration-200 active:scale-95 group relative focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            <Bot className="w-6 h-6 transition-transform group-hover:rotate-6" />
            {/* Live indicator dot */}
            <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-neutral-950 absolute top-0.5 right-0.5" />
          </button>
        </div>
      </aside>

      {/* Floating Gemini Chat Modal */}
      <GeminiChatbot
        isFloatingModal={true}
        isOpen={isFloatingChatOpen}
        onClose={() => setIsFloatingChatOpen(false)}
      />

      {/* Developer Instructions Guide Modal */}
      <DeveloperNoteModal
        isOpen={isDevGuideOpen}
        onClose={() => setIsDevGuideOpen(false)}
      />
    </div>
  );
}
