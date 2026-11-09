import React, { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { FEATURED_VIDEO } from '../data/portfolioData';

interface HeroProps {
  onStartProject?: () => void;
  onExplorePortfolio?: () => void;
  onSelectFeaturedVideo: () => void;
  onGetQuote?: () => void;
}

const AUDIENCES = [
  'Beauty & Skincare',
  'Tech & Gadgets',
  'Food & Cafes',
  'Fashion',
  'Apps',
];

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExplorePortfolio,
  onSelectFeaturedVideo,
  onGetQuote,
}) => {
  // The featured tile highlights the Burger (FEATURED_VIDEO).
  // Clicking it opens that video's modal via onSelectFeaturedVideo.
  const featured = FEATURED_VIDEO;

  // Hover preview: the featured video plays muted while the mouse is over
  // the frame, and pauses back at the start when it leaves. Clicking opens
  // the popup, where the video plays with sound.
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const v = videoRef.current;
    if (v) {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };
  const handleStartProjectClick = () => {
    if (onStartProject) {
      onStartProject();
    } else if (onGetQuote) {
      onGetQuote();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 pb-8 md:pt-24 md:pb-10 overflow-hidden bg-[#0B0D12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Hero Layout — 65/35, locked so content cannot push
            the columns around (minmax(0, ...) + min-w-0 on both tiles). */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,13fr)_minmax(0,7fr)] gap-5 items-stretch">

          {/* Bento Main Hero Tile (Left, 65%) — plain calm border */}
          <div className="rounded-3xl border border-[#222833] bg-[#11141B] flex min-w-0">
            <div className="rounded-3xl p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden flex-1 min-w-0">

              {/* Faint grid texture */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:28px_28px]" />

              {/* Top cluster: badge, headline, subtext, CTA — tight gaps */}
              <div className="relative flex flex-col gap-7">
                {/* Top Pill / Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-neutral-800 border border-[#222833]/60 rounded-full text-[11px] font-medium text-neutral-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    UGC · CGI · Posters
                  </span>
                </div>

                {/* Studio Headline — much bigger, "ready in 48h." in solid blue */}
                <h1
                  id="hero-title"
                  className="text-[clamp(3rem,6vw,4.75rem)] font-bold text-white tracking-[-0.02em] leading-[1.02]"
                >
                  Ads that stop the scroll, <br />
                  <span className="text-[#3B82F6]">ready in 48h.</span>
                </h1>

                <p
                  id="hero-tagline-sub"
                  className="text-xl text-neutral-400 max-w-[580px] font-normal leading-relaxed"
                >
                  <span className="text-white font-medium">3D CGI ads</span>, <span className="text-white font-medium">UGC-style videos</span> and <span className="text-white font-medium">posters</span> for your brand. Order a $50 test ad and pay only if you like the preview.
                </p>

                {/* CTA row — bigger buttons, pushed down a touch to fill the gap below */}
                <div className="flex flex-wrap items-center gap-3.5 mt-1.5">
                  <button
                    type="button"
                    id="hero-cta-start-project"
                    onClick={handleStartProjectClick}
                    className="bg-white text-black px-9 py-[18px] rounded-full font-bold border border-transparent hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center gap-2 text-[15px] cursor-pointer"
                  >
                    <span>Get my $50 test ad</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    id="hero-cta-watch-reel"
                    onClick={onSelectFeaturedVideo}
                    className="bg-transparent text-white px-8 py-[18px] rounded-full font-semibold text-[15px] border border-[#222833] hover:bg-neutral-800/60 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Watch reel</span>
                  </button>
                  <span className="inline-flex items-center gap-2 text-[13px] text-neutral-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Pay after approval
                  </span>
                </div>
              </div>

              {/* Bottom cluster: pills + stats, pinned to the bottom */}
              <div className="relative flex flex-col">
                {/* Who we make ads for — slow scrolling marquee */}
                <p className="text-[11px] text-neutral-500 mb-2">Who we make ads for</p>
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex gap-2 w-max animate-[marquee-scroll_24s_linear_infinite]">
                    {[...AUDIENCES, ...AUDIENCES].map((audience, i) => (
                      <span
                        key={`${audience}-${i}`}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-950 border border-[#222833] text-neutral-300 whitespace-nowrap"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Proof Metrics — flat cards, no divider line */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="p-4 rounded-2xl bg-[#11141B] border border-[#222833]">
                    <span className="text-[38px] leading-none font-bold text-white block">48h</span>
                    <span className="text-xs text-neutral-400 block mt-1.5">Turnaround</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#11141B] border border-[#222833]">
                    <span className="text-[38px] leading-none font-bold text-[#D9C7A0] block">$50</span>
                    <span className="text-xs text-neutral-400 block mt-1.5">Test ad · pay on approval</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#11141B] border border-[#222833]">
                    <span className="text-[38px] leading-none font-bold text-white block">100%</span>
                    <span className="text-xs text-neutral-400 block mt-1.5">Commercial rights included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Featured Preview Tile (Right, 35%) */}
          <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-w-0">
            {/* Header */}
            <div className="flex justify-between items-center px-1 pb-4 border-b border-[#222833]">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-semibold">Featured Ad Drop</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
              <span className="text-[10px] bg-neutral-800 px-2.5 py-1 rounded-full text-neutral-400 font-mono font-medium">
                {featured.aspectRatio} feed
              </span>
            </div>

            {/* Stylized Vertical Ad Reel Frame — true 9:16, the Burger's
                real vertical shape, so the video is never cropped. The hero
                is taller now, and the left tile's two-cluster content fills
                the extra height. */}
            <div
              onClick={onSelectFeaturedVideo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative my-4 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border border-[#222833] flex flex-col justify-end p-4"
            >
              {/* Pattern Grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-25 transition-opacity" />

              {/* Real thumbnail when available — the tile shows the featured ad */}
              {featured.thumbnailUrl && (
                <img
                  src={featured.thumbnailUrl}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover bg-neutral-950 brightness-90 group-hover:brightness-100 transition-[filter] duration-300"
                />
              )}

              {/* Otherwise the featured video itself is the cover — its first
                  frame shows, so the tile is never a blank placeholder. */}
              {!featured.thumbnailUrl && featured.videoUrl && (
                <video
                  ref={videoRef}
                  src={featured.videoUrl}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover bg-neutral-950 brightness-90 group-hover:brightness-100 transition-[filter] duration-300"
                />
              )}


              {/* Bottom Captions Simulation */}
              <div className="relative z-10 text-left pointer-events-none space-y-1.5 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-[#222833]/80">
                <span className="inline-block px-2 py-0.5 rounded bg-black border border-[#222833] text-[10px] font-mono text-blue-300 font-semibold">
                  {featured.hookHeadline}
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  {featured.title}
                </p>
                <div className="flex items-center gap-3 text-[10px] text-neutral-400 font-mono">
                  <span>{featured.duration} · 48h turnaround</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
