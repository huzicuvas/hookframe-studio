import React, { useRef, useState } from 'react';
import { ArrowRight, Play, Copy, Check } from 'lucide-react';
import { FEATURED_VIDEO } from '../data/portfolioData';

interface HeroProps {
  onExplorePortfolio?: () => void;
  onSelectFeaturedVideo: () => void;
}

const AUDIENCES = [
  'Beauty & Skincare',
  'Tech & Gadgets',
  'Food & Cafes',
  'Fashion',
  'Apps',
];

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onSelectFeaturedVideo,
}) => {
  // The featured tile highlights the Burger (FEATURED_VIDEO).
  // Clicking it opens that video's modal via onSelectFeaturedVideo.
  const featured = FEATURED_VIDEO;

  const recipientEmail = 'kiramorganai@gmail.com';

  // The main CTA opens the $50 test-ad email directly (same pre-filled
  // email as the Test Ad pricing card) instead of scrolling to the contact
  // panel — a tap must open the mail app, not just move the page.
  const TEST_AD_MAILTO =
    `mailto:${recipientEmail}?subject=${encodeURIComponent('Test ad — $50 pay on approval')}` +
    `&body=${encodeURIComponent(
      'Hi Hook Frames Studio Team,\n\nWe want to start with a $50 test ad (pay on approval, 10 seconds, UGC or CGI — our pick).\n\nBrand Name: \nProduct / Website Link: \nKey Selling Point / Hook Angle: \n'
    )}`;
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(recipientEmail);
    } catch {
      // Fallback for browsers without clipboard permission.
      const ta = document.createElement('textarea');
      ta.value = recipientEmail;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2000);
  };

  // Hover preview: the featured video plays muted while the mouse is over
  // the frame, and pauses back at the start when it leaves. Clicking opens
  // the popup, where the video plays with sound.
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    // Reduced motion: no hover-autoplay — the reel stays on its first frame.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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

  // Keyboard: the featured reel is a button — Enter or Space opens the modal.
  const handleFeaturedKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectFeaturedVideo();
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 pb-5 md:pt-24 md:pb-7 overflow-hidden bg-[#FAFAF9] dark:bg-[#0B0D12]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Hero Layout — 65/35, locked so content cannot push
            the columns around (minmax(0, ...) + min-w-0 on both tiles). */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,13fr)_minmax(0,7fr)] gap-5 items-stretch">

          {/* Bento Main Hero Tile (Left, 65%) — plain calm border */}
          <div className="rounded-3xl border border-neutral-200 dark:border-[#222833] bg-white dark:bg-[#11141B] flex min-w-0">
            <div className="rounded-3xl p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden flex-1 min-w-0">

              {/* Faint grid texture */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:28px_28px]" />

              {/* Top cluster: badge, headline, subtext, CTA — tight gaps */}
              <div className="relative flex flex-col gap-7">
                {/* Top Pill / Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 border border-neutral-200/60 dark:border-[#222833]/60 rounded-full text-[11px] font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    UGC · CGI · Posters
                  </span>
                </div>

                {/* Studio Headline — much bigger, "ready in 48h." in solid blue */}
                <h1
                  id="hero-title"
                  className="text-[clamp(3rem,6vw,4.75rem)] font-bold text-neutral-900 dark:text-white tracking-[-0.02em] leading-[1.02]"
                >
                  Ads that stop the scroll, <br />
                  <span className="text-[#3B82F6]">ready in 48h.</span>
                </h1>

                <p
                  id="hero-tagline-sub"
                  className="text-xl text-neutral-600 dark:text-neutral-400 max-w-[580px] font-normal leading-relaxed"
                >
                  <span className="text-neutral-900 dark:text-white font-medium">3D CGI ads</span>, <span className="text-neutral-900 dark:text-white font-medium">UGC-style videos</span> and <span className="text-neutral-900 dark:text-white font-medium">posters</span> for your brand. Order a $50 test ad and pay only if you like the preview.
                </p>

                {/* CTA row — bigger buttons, pushed down a touch to fill the gap below */}
                <div className="flex flex-wrap items-center gap-3.5 mt-1.5">
                  <a
                    href={TEST_AD_MAILTO}
                    id="hero-cta-start-project"
                    className="bg-neutral-900 dark:bg-white text-white dark:text-black px-9 py-[18px] rounded-full font-bold border border-transparent hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center gap-2 text-[15px] cursor-pointer"
                  >
                    <span>Get my $50 test ad</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    id="hero-cta-watch-reel"
                    onClick={onSelectFeaturedVideo}
                    className="bg-transparent text-neutral-900 dark:text-white px-6 py-3 rounded-full font-semibold text-sm border border-neutral-200 dark:border-[#222833] hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Watch reel</span>
                  </button>
                  <button
                    type="button"
                    id="hero-copy-email"
                    onClick={copyEmail}
                    aria-label="Copy our email address"
                    className="bg-transparent text-neutral-700 dark:text-neutral-300 px-4 py-3 rounded-full font-semibold text-sm border border-neutral-200 dark:border-[#222833] hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    <span>{emailCopied ? 'Copied' : 'Copy email'}</span>
                  </button>
                  <span className="inline-flex items-center gap-2 text-[13px] text-neutral-700 dark:text-neutral-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Pay after approval
                  </span>
                  {/* What happens next — the 3-step flow, so the email click is not a black box */}
                  <p className="w-full text-[13px] text-neutral-600 dark:text-neutral-400">
                    Email us → watermarked preview within 48h → you approve, then pay.
                  </p>
                </div>
              </div>

              {/* Bottom cluster: pills + stats, pinned to the bottom */}
              <div className="relative flex flex-col">
                {/* Who we make ads for — slow scrolling marquee */}
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mb-2">Who we make ads for</p>
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex w-max animate-[marquee-scroll_24s_linear_infinite]">
                    <div className="flex gap-2 pr-2">
                      {AUDIENCES.map((audience) => (
                        <span
                          key={audience}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-[#222833] text-neutral-700 dark:text-neutral-300 whitespace-nowrap"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                    {/* Duplicate set for the seamless loop — hidden from screen readers so the list is not read twice */}
                    <div className="flex gap-2 pr-2" aria-hidden="true">
                      {AUDIENCES.map((audience) => (
                        <span
                          key={`dup-${audience}`}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-[#222833] text-neutral-700 dark:text-neutral-300 whitespace-nowrap"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Proof Metrics — flat cards, no divider line */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="group p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-[#222833] border-t-2 border-t-[#F5B544] transition-all duration-200 hover:-translate-y-1 hover:border-[#F5B544]">
                    <span className="text-3xl leading-none font-bold text-neutral-900 dark:text-white block group-hover:text-[#B45309] dark:group-hover:text-[#F5B544] transition-colors duration-200">48h</span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 block mt-1.5">Turnaround</span>
                  </div>
                  <div className="group p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-[#222833] border-t-2 border-t-[#F5B544] transition-all duration-200 hover:-translate-y-1 hover:border-[#F5B544]">
                    <span className="text-3xl leading-none font-bold text-[#D9C7A0] block group-hover:text-[#B45309] dark:group-hover:text-[#F5B544] transition-colors duration-200">$50</span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 block mt-1.5">Test ad · pay on approval</span>
                  </div>
                  <div className="group p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-[#222833] border-t-2 border-t-[#F5B544] transition-all duration-200 hover:-translate-y-1 hover:border-[#F5B544]">
                    <span className="text-3xl leading-none font-bold text-neutral-900 dark:text-white block group-hover:text-[#B45309] dark:group-hover:text-[#F5B544] transition-colors duration-200">100%</span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 block mt-1.5">Commercial rights included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Featured Preview Tile (Right, 35%) */}
          <div className="bg-white dark:bg-[#11141B] border border-neutral-200 dark:border-[#222833] rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-w-0">
            {/* Header */}
            <div className="flex justify-between items-center px-1 pb-4 border-b border-neutral-200 dark:border-[#222833]">
              <div className="flex items-center gap-2">
                <span className="text-neutral-900 dark:text-white text-sm font-semibold">Featured Ad Drop</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
              <span className="text-[11px] bg-neutral-200 dark:bg-neutral-800 px-2.5 py-1 rounded-full text-neutral-600 dark:text-neutral-400 font-mono font-medium">
                {featured.aspectRatio} feed
              </span>
            </div>

            {/* Stylized Vertical Ad Reel Frame — true 9:16, the Burger's
                real vertical shape, so the video is never cropped. The hero
                is taller now, and the left tile's two-cluster content fills
                the extra height. */}
            <div
              role="button"
              tabIndex={0}
              aria-label={`Watch ad: ${featured.title}`}
              onClick={onSelectFeaturedVideo}
              onKeyDown={handleFeaturedKeyDown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative my-4 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-200 dark:border-[#222833] flex flex-col justify-end p-4"
            >
              {/* Pattern Grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-25 transition-opacity" />

              {/* Real thumbnail when available — the tile shows the featured ad */}
              {featured.thumbnailUrl && (
                <img
                  src={featured.thumbnailUrl}
                  alt={featured.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover bg-neutral-100 dark:bg-neutral-950 brightness-90 group-hover:brightness-100 transition-[filter] duration-300"
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
                  className="absolute inset-0 w-full h-full object-cover bg-neutral-100 dark:bg-neutral-950 brightness-90 group-hover:brightness-100 transition-[filter] duration-300"
                />
              )}


              {/* Bottom Captions Simulation — the box is dark in both themes,
                  so its text stays light in both themes. */}
              <div className="relative z-10 text-left pointer-events-none space-y-1.5 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/20">
                <span className="inline-block px-2 py-0.5 rounded bg-black border border-white/20 text-[11px] font-mono text-blue-300 font-semibold">
                  {featured.hookHeadline}
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  {featured.title}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-mono">
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
