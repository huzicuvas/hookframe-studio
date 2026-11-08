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
  // Homepage shows all 8 sample ads in the bento grid — the rectangle only
  // works complete, so there is no 6-tile cut any more.
  const homepageVideos = PORTFOLIO_VIDEOS;

  const handleGalleryClick = (e: React.MouseEvent) => {
    if (onNavigateToGallery) {
      e.preventDefault();
      onNavigateToGallery();
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 bg-[#0A0A0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Sample ads</span>
            </div>
            <h2
              id="portfolio-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Sample ad styles.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl">
              Creative frameworks: UGC creator videos, 3D CGI product films, kinetic fast cuts and poster ads.
            </p>
          </div>

          {/* Quick Notice */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full self-start md:self-auto">
            <span>Made for your brand</span>
          </div>
        </div>

        {/* 8 tiles in a bento grid: two mirrored blocks forming one clean rectangle — tall tiles on the outer edges, wide tiles on top, posters in a repeating pattern */}
        <div
          id="portfolio-grid-items"
          className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[280px] lg:auto-rows-[340px] gap-6 max-w-6xl mx-auto"
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
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-white text-sm font-bold shadow-xl transition-colors duration-200 active:scale-95"
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
