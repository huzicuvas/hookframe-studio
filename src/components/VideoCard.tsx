import React, { useState } from 'react';
import { Play, ExternalLink, Share2, Check, Image } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  const [imageLoaded, setImageLoaded] = useState(!video.thumbnailUrl);
  const [copied, setCopied] = useState(false);

  const isPoster = video.kind === 'poster';

  // True media shape per item: vertical 9:16, wide 16:9, poster 4:5, square 1:1.
  // The frame is sized to fit inside the bento tile and zooms on hover, so the
  // zoom stays visible even on empty placeholders.
  const frameSizeClass =
    video.aspectRatio === '16:9'
      ? 'aspect-video w-full max-h-full'
      : video.aspectRatio === '4:5'
        ? 'aspect-[4/5] h-full max-w-full'
        : video.aspectRatio === '1:1'
          ? 'aspect-square h-full max-w-full'
          : 'aspect-[9/16] h-full max-w-full';
  const frameLabel =
    video.aspectRatio === '16:9'
      ? '16:9 horizontal frame'
      : video.aspectRatio === '4:5'
        ? 'Poster 4:5 frame'
        : video.aspectRatio === '1:1'
          ? '1:1 square frame'
          : '9:16 feed frame';

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Construct direct share URL with hash
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const shareUrl = `${origin}/gallery#${video.id}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  return (
    <div
      id={`video-card-${video.id}`}
      onClick={() => onSelect(video)}
      className="portfolio-card group relative flex flex-col h-full bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl"
    >
      {/* Card Media / Stylized Blueprint Canvas */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col justify-between p-3 border-b border-neutral-800/80">
        {/* Background Pattern Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-25 transition-opacity" />

        {/* Loading Skeleton Placeholder (pulsing gray placeholder matching aspect ratio) */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-0 bg-neutral-800/80 animate-pulse flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-700/60 mb-3" />
            <div className="w-24 h-3 rounded-full bg-neutral-700/50 mb-2" />
            <div className="w-16 h-2 rounded-full bg-neutral-700/40" />
          </div>
        )}

        {/* Custom Thumbnail if available */}
        {video.thumbnailUrl && (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-[opacity,filter,transform] duration-500 brightness-90 group-hover:brightness-100 group-hover:scale-[1.04] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Top Badges & Share Button Overlay */}
        <div className="relative z-10 flex items-center justify-between gap-2 shrink-0">
          {/* Sample Style Tag */}
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-[10px] font-bold text-blue-300 flex items-center gap-1 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            Sample style
          </span>

          <div className="flex items-center gap-1.5 shrink-0">
            {!isPoster && (
              <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-400 border border-neutral-800 whitespace-nowrap">
                {video.duration}
              </span>
            )}

            {/* Share / Copy Direct Link Button Overlay */}
            <div className="relative">
              <button
                type="button"
                id={`share-btn-${video.id}`}
                onClick={handleShareClick}
                title="Copy link to this video"
                aria-label={`Share link for ${video.title}`}
                className={`p-1.5 rounded-full backdrop-blur-md transition-colors duration-200 border ${
                  copied
                    ? 'bg-emerald-500 text-white border-emerald-400'
                    : 'bg-black/70 hover:bg-blue-600 text-neutral-300 hover:text-white border-neutral-700/80 hover:border-blue-400 active:scale-95'
                }`}
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Share2 className="w-3.5 h-3.5" />
                )}
              </button>

              {/* Copied Confirmation Toast Tooltip */}
              {copied && (
                <div
                  id={`share-tooltip-${video.id}`}
                  className="absolute right-0 -bottom-8 z-30 px-2.5 py-1 rounded-md bg-neutral-900 border border-emerald-500/60 text-emerald-300 text-[10px] font-bold font-mono whitespace-nowrap shadow-xl flex items-center gap-1 animate-in fade-in zoom-in-95 duration-200"
                >
                  <Check className="w-2.5 h-2.5 text-emerald-400" />
                  <span>Link copied!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Centre true-shape frame — shown while the tile is an empty placeholder;
            once a real thumbnail is wired in, the image fills the media area instead */}
        {!video.thumbnailUrl && (
          <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center py-2">
            <div className={`flex items-center justify-center rounded-2xl border border-neutral-700/80 bg-neutral-950/60 transition-transform duration-300 group-hover:scale-[1.06] ${frameSizeClass}`} title={frameLabel}>
              {isPoster ? (
                <Image className="w-7 h-7 text-neutral-400" />
              ) : (
                <Play className="w-7 h-7 fill-white text-white ml-0.5" />
              )}
            </div>
          </div>
        )}

        {/* Bottom Format Pill */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono shrink-0">
          <span className="text-neutral-400 bg-black/70 px-2 py-0.5 rounded-full border border-neutral-800">
            {video.aspectRatio}
          </span>
          {isPoster && (
            <span className="text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/30 font-bold">
              Poster Ad
            </span>
          )}
        </div>
      </div>

      {/* Card Meta — kept short so the media area keeps its height; the full hook lives in the preview modal */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-2">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono text-neutral-500">
            {video.category}
          </span>
          <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
            {video.title}
          </h3>
        </div>

        {/* Footer tags */}
        <div className="pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-xs">
          <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-800/60">
            {video.tags[0]}
          </span>
          <span className="text-[11px] font-bold text-neutral-300 group-hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-all">
            Preview style <ExternalLink className="w-3 h-3 text-blue-400" />
          </span>
        </div>
      </div>
    </div>
  );
};
