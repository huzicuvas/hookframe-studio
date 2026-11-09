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
      className="py-12 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B544]" />
              <span>Sample ads</span>
            </div>
            <h2
              id="portfolio-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Sample ad styles.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
              Short-form ad styles for TikTok, Reels, Shorts, and poster ads — one bento grid with taller boxes, so every ad sits in its true shape, and posters repeat through it: two videos, two posters, all the way through.
            </p>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full self-start md:self-auto">
            <span>Made for your brand</span>
          </div>
        </div>

        {/* 8 tiles in a bento grid: two mirrored blocks forming one clean rectangle — tall tile on the left, wide tile top-right, two posters bottom-right; then the mirror. Every tile is one media panel with its text overlaid, like the preview. */}
        <div
          id="portfolio-grid-items"
          className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6 max-w-6xl mx-auto"
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

        {/* View Full Gallery CTA Button below the bento grid */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            id="view-full-gallery-btn"
            onClick={handleGalleryClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] text-white text-sm font-bold shadow-xl transition-colors duration-200 active:scale-95"
          >
            <Grid className="w-4 h-4 text-blue-400" />
            <span>View Full Gallery ({PORTFOLIO_VIDEOS.length}+ Styles)</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs font-mono text-neutral-500 mt-3">
            Browse all ad formats and categories
          </p>
        </div>
      </div>
    </section>
  );
};
