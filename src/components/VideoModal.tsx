import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Send, Check, Share2 } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');
  const [videoError, setVideoError] = useState(false);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Reset state when video changes
    setIsPlaying(true);
    setVideoError(false);
    setCopied(false);
    setProgress(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const formatSeconds = (sec: number) => {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTime(formatSeconds(curr));
    if (videoRef.current.duration) {
      setTotalDuration(formatSeconds(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
  };

  // Share this ad: the link is the site URL with this video's id as the
  // hash, so opening it opens the site with this video's popup already up.
  // Phones get the native share sheet; everywhere else the link is copied.
  const handleShare = async () => {
    const url = `${window.location.href.split('#')[0]}#${video.id}`;
    const text = `${video.title} — Hook Frames Studio`;
    if (navigator.share) {
      try {
        await navigator.share({ title: video.title, text, url });
      } catch {
        // user closed the share sheet — nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — leave the button as-is
    }
  };

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="video-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          type="button"
          id="close-video-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
          aria-label="Close video player"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video Player Column — posters show the full poster image here
            instead of a video player (they have no video to play). */}
        <div className="md:col-span-6 bg-black flex items-center justify-center relative overflow-hidden group min-h-[380px] sm:min-h-[500px]">
          {video.kind === 'poster' ? (
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-contain max-h-[70vh]"
            />
          ) : !videoError ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              autoPlay
              loop
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onError={() => setVideoError(true)}
              onClick={togglePlay}
              className="w-full h-full object-contain max-h-[70vh] cursor-pointer"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-neutral-950">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="relative z-10 space-y-3">
                <Play className="w-8 h-8 text-blue-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Video preview</h4>
                <p className="text-xs text-neutral-400 max-w-xs">
                  This video is not available yet.
                </p>
              </div>
            </div>
          )}

          {/* Floating Play/Pause Center Overlay on click — videos only. */}
          {video.kind !== 'poster' && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pointer-events-none"
            >
              <div className="w-14 h-14 rounded-full bg-neutral-900/80 text-white flex items-center justify-center backdrop-blur-md border border-neutral-700">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </div>
            </div>
          )}

          {/* Custom Bottom Video Controls Bar — videos only. */}
          {video.kind !== 'poster' && (
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent space-y-2">
            {/* Progress / Seek Bar */}
            <div
              className="w-full h-1.5 bg-neutral-700/50 rounded-full cursor-pointer overflow-hidden"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-blue-500 rounded-full transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-300 font-mono pt-1">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="hover:text-white"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="hover:text-white"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-blue-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span>{currentTime} / {totalDuration || video.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span className="px-1.5 py-0.5 rounded bg-neutral-800">{video.aspectRatio}</span>
                <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Loop</span>
              </div>
            </div>
            </div>
          )}
        </div>

        {/* Video Info & Concept Breakdown Column */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 text-[11px] font-bold border border-blue-500/30">
                {video.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {video.brand}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {video.title}
              </h3>
              <p className="text-sm font-medium text-neutral-300 italic mt-2 bg-neutral-950 p-3 rounded-2xl border border-neutral-800">
                {video.hookHeadline}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-300 leading-relaxed font-normal">
              <span className="font-mono text-neutral-400 block text-[11px]">
                Creative strategy:
              </span>
              <p className="text-neutral-400">{video.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {video.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-2.5">
            <a
              href={`mailto:kiramorganai@gmail.com?subject=Request%20Creative%20in%20Style%20of%20${encodeURIComponent(video.title)}&body=Hi%20Hook%20Frames%20Studio%20team,%0A%0AWe%20love%20the%20${encodeURIComponent(video.title)}%20(${video.category})%20creative%20format%20and%20want%20to%20produce%20something%20similar%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AOur%20Product%20Link:%20%0A`}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-white text-black text-xs font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request this ad style</span>
            </a>
            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link copied' : 'Share'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
