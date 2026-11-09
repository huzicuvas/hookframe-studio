import React from 'react';
import { ArrowRight, Grid } from 'lucide-react';
import { PORTFOLIO_VIDEOS, BENTO_PLACEMENT } from '../data/portfolioData';
import { VideoItem } from '../types';
import { VideoCard } from './VideoCard';

interface PortfolioGridProps {
  onSelectVideo: (video: VideoItem) => void;
  onNavigateToGallery?: () => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  onSelectVideo,
  onNavigateToGallery,
}) => {
  // Homepage shows the first 8 portfolio items in the bento grid — the
  // rectangle only works complete, so there is no 6-tile cut any more.
  // Items after the first 8 are gallery-only (they show on /gallery).
  const homepageVideos = PORTFOLIO_VIDEOS.slice(0, 8);

  const handleGalleryClick = (e: React.MouseEvent) => {
    if (onNavigateToGallery) {
      e.preventDefault();
      onNavigateToGallery();
    }
  };

  return (
    <section
      id="portfolio"
      className="py-12 bg-[#FAFAF9] dark:bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio heading — a visible header for the videos, so the
            section is not just a bare grid after the hero. */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Our work
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-3">
            Real ads, made for real brands.
          </p>
        </div>
        {/* 8 tiles in a bento grid: two mirrored blocks forming one clean rectangle — tall tile on the left, wide tile top-right, two posters bottom-right; then the mirror. Every tile is one media panel with its text overlaid, like the preview. */}
        <div
          id="portfolio-grid-items"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] lg:auto-rows-[440px] gap-6 max-w-6xl mx-auto"
        >
          {homepageVideos.map((video, index) => (
            <div key={video.id} className={BENTO_PLACEMENT[index]}>
              <VideoCard
                video={video}
                onSelect={onSelectVideo}
              />
            </div>
          ))}
        </div>

        {/* Recent work for — the brands in the grid, so a first-time visitor
            sees peer reassurance without a testimonial (none exists yet). */}
        <div className="mt-10 text-center">
          <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Recent work for
          </p>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Smoke House
            <span className="mx-2 text-neutral-400">·</span>
            Centella Skincare
            <span className="mx-2 text-neutral-400">·</span>
            VEXMO Premium Cafe
            <span className="mx-2 text-neutral-400">·</span>
            Kingfisher Radler <span className="text-xs text-neutral-500 dark:text-neutral-400">(concept ad)</span>
            <span className="mx-2 text-neutral-400">·</span>
            SHEGLAM <span className="text-xs text-neutral-500 dark:text-neutral-400">(concept ad)</span>
          </p>
        </div>

        {/* View Full Gallery CTA Button below the bento grid */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            id="view-full-gallery-btn"
            onClick={handleGalleryClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] text-neutral-900 dark:text-white text-sm font-bold shadow-xl transition-colors duration-200 active:scale-95"
          >
            <Grid className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>View Full Gallery ({PORTFOLIO_VIDEOS.length}+ Styles)</span>
            <ArrowRight className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-3">
            Browse all ad formats and categories
          </p>
        </div>
      </div>
    </section>
  );
};
