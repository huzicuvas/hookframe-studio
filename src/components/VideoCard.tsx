import React, { useState, useRef } from 'react';
import { Image } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  onSelect: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  const [imageLoaded, setImageLoaded] = useState(!video.thumbnailUrl);
  const isPoster = video.kind === 'poster';

  // Hover preview: the tile video plays muted while the mouse is over the
  // card, and pauses back at the start when it leaves. Clicking opens the
  // popup, where the video plays with sound. (Touch devices have no hover,
  // so a tap just opens the popup — the same as before.)
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // The tile's still frame: the video's first frame, unless the video sets
  // a posterTime — then the tile seeks there on load (the Handbag's full bag
  // at 12s, not its opening close-up) and rests there whenever the mouse
  // leaves, so the tile always shows the good frame. No thumbnail needed.
  const posterTime = video.posterTime ?? 0;

  const seekToPosterTime = () => {
    const v = videoRef.current;
    if (v && posterTime > 0 && v.duration > posterTime) {
      v.currentTime = posterTime;
    }
  };

  const handleLoadedMetadata = () => {
    seekToPosterTime();
  };

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
      v.currentTime = posterTime;
    }
  };

  // Poster frame shape: 3:4 (the real posters), 4:5 (default) or 1:1
  // square — hangs in the centre of the tile, in the poster's true shape,
  // so the headline and product are never cropped by the tile.
  const posterFrameClass =
    video.aspectRatio === '1:1'
      ? 'aspect-square h-full max-w-full'
      : video.aspectRatio === '3:4'
        ? 'aspect-[3/4] h-full max-w-full'
        : 'aspect-[4/5] h-full max-w-full';

  return (
    <div
      id={`video-card-${video.id}`}
      onClick={() => onSelect(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="portfolio-card group relative flex flex-col h-full bg-neutral-900 rounded-3xl border border-neutral-800 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl"
    >
      {/* Media — the whole tile is the frame; its shape comes from the bento cell.
          Title, hook and footer sit on top of it (bottom overlay), like the preview.
          There is no separate text block below, so the video is always bigger than the text. */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col justify-between">
        {/* Background Pattern Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-25 transition-opacity" />

        {/* Soft blue glow at the top */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

        {/* Loading Skeleton Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-0 bg-neutral-800/80 animate-pulse flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 rounded-2xl bg-neutral-700/60 mb-3" />
            <div className="w-24 h-3 rounded-full bg-neutral-700/50 mb-2" />
            <div className="w-16 h-2 rounded-full bg-neutral-700/40" />
          </div>
        )}

        {/* Custom Thumbnail if available — videos only. Posters show their
            image in the centred frame below, in their true shape, so the
            headline is never cropped by the tile. */}
        {video.thumbnailUrl && !isPoster && (
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

        {/* Video itself as the tile cover when there is no thumbnail image:
            the first frame shows, so the tile is never a blank placeholder.
            A thumbnail, when one is set, still wins over this. */}
        {!video.thumbnailUrl && video.videoUrl && !isPoster && (
          <video
            ref={videoRef}
            src={video.videoUrl}
            muted
            playsInline
            loop
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-[filter] duration-300"
          />
        )}

        {/* Top row: Sample style badge + duration (video) / Poster chip (poster) */}
        <div className="relative z-10 flex items-center justify-between gap-2 p-3 shrink-0">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-[10px] font-bold text-blue-300 flex items-center gap-1 whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            Sample style
          </span>
          {isPoster ? (
            <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-neutral-300 border border-neutral-800 whitespace-nowrap shrink-0">
              Poster
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-400 border border-neutral-800 whitespace-nowrap shrink-0">
              {video.duration}
            </span>
          )}
        </div>

        {/* Centre: poster frame only. Videos have no play button any more —
            the video itself plays on hover, so a button sitting on top of it
            is just clutter; the duration chip and 'Preview style' already
            say it is a video. Posters keep their frame (they have no video):
            a real poster image fills the frame in its true shape, otherwise
            the dotted placeholder shows. */}
        {isPoster && (
          <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-3">
            <div
              className={`relative flex items-center justify-center rounded-xl border ${
                video.thumbnailUrl
                  ? 'border-neutral-800'
                  : 'border-dashed border-neutral-600/80'
              } bg-neutral-950/40 overflow-hidden transition-transform duration-300 group-hover:scale-[1.05] ${posterFrameClass}`}
            >
              {video.thumbnailUrl ? (
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 brightness-90 group-hover:brightness-100 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : (
                <Image className="w-6 h-6 text-neutral-400" />
              )}
            </div>
          </div>
        )}

        {/* Bottom overlay: ratio pill, category, title, hook (videos only — the
            preview's poster tiles show no hook, which leaves room for a large frame),
            footer. Kept tight so the poster frame has room to be big. */}
        <div className="relative z-10 shrink-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-3 pb-2 pt-2">
          <span className="text-[10px] font-mono text-neutral-300 bg-black/70 px-2 py-0.5 rounded-full border border-neutral-700/80 whitespace-nowrap">
            {isPoster ? `${video.aspectRatio} Poster` : video.aspectRatio}
          </span>
          <div className="mt-1.5 space-y-0.5">
            <span className="text-[11px] font-bold text-blue-400">{video.category}</span>
            <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-3">
              {video.title}
            </h3>
            {!isPoster && (
              <p className="text-xs text-neutral-400 italic line-clamp-2">
                {video.hookHeadline}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-[10px] font-mono text-neutral-300 bg-neutral-950/80 px-2 py-0.5 rounded-full border border-neutral-800/60 whitespace-nowrap shrink-0">
              {video.tags[0]}
            </span>
            <span className="text-[11px] font-bold text-blue-400 group-hover:text-[#F5B544] transition-colors whitespace-nowrap shrink-0">
              Preview style →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
