import React from 'react';
import { Zap, Camera, ShieldCheck } from 'lucide-react';

// About as a bento grid (the same content as the old single panel, split
// into tiles so it matches the portfolio and gallery): a large text tile,
// two small stat tiles, and a wide team tile underneath.
export const AboutServicesCombined: React.FC = () => {
 return (
 <section id="about" className="py-12 bg-[#0B0D12]">
 {/* Anchor for services navigation */}
 <div id="services" className="-translate-y-24" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
 {/* Main text — large tile, two rows tall */}
 <div className="lg:col-span-2 lg:row-span-2 bg-[#11141B] border border-[#222833] rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-6">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-[#222833] text-[11px] font-mono text-neutral-300 self-start">
 <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
 <span>About the studio</span>
 </div>

 <div className="space-y-6">
 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-snug">
 Ad creative, <br className="hidden sm:inline" />
 <span className="text-neutral-400">built without film crew overhead.</span>
 </h2>

 <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl">
 Hook Frames Studio makes UGC-style, CGI, poster and horizontal video ads for brands — fast turnaround, no film crew, no scheduling headaches. We turn product photos and key selling points into finished ads in as little as 48 hours.
 </p>
 </div>
 </div>

 {/* 48h delivery — small stat tile */}
 <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-6 flex items-center gap-4">
 <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
 <Zap className="w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-white">48h delivery</h4>
 <p className="text-xs text-neutral-400 mt-0.5">Brief to ready cut in as little as 2 days</p>
 </div>
 </div>

 {/* Zero crew overhead — small stat tile */}
 <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-6 flex items-center gap-4">
 <div className="p-3 rounded-xl bg-neutral-800 text-neutral-300 shrink-0">
 <Camera className="w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-white">Zero crew overhead</h4>
 <p className="text-xs text-neutral-400 mt-0.5">No actors to book, sets to build, or gear to haul</p>
 </div>
 </div>

 {/* Team — wide tile across the bottom */}
 <div className="lg:col-span-3 bg-[#11141B] border border-[#222833] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
 <div className="max-w-3xl space-y-3">
 <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
 Direct attention
 </h3>
 <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
 Hook Frames Studio is run by a small, focused team — a founder handling creative direction and production, Kira as our on-camera presenter, and a network of collaborators we bring in for larger projects. No account managers, no handoffs — you work directly with the people making your content.
 </p>
 </div>

 <div className="flex items-center gap-3 shrink-0 p-4 rounded-2xl bg-neutral-950 border border-[#222833] font-mono text-xs text-neutral-400">
 <ShieldCheck className="w-5 h-5 text-blue-400" />
 <div>
 <p className="text-white font-semibold font-sans text-xs">Direct Collaboration</p>
 <p className="text-[11px] text-neutral-400">Zero account manager bloat</p>
 </div>
 </div>
 </div>
 </div>

 {/* What we make — the services behind the "About & Services" nav link */}
 <div className="mt-5">
 <h3 className="text-lg font-semibold text-white tracking-tight mb-4">What we make</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
 <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-6">
 <h4 className="text-sm font-bold text-white">UGC Video Ads</h4>
 <p className="text-xs text-neutral-400 leading-relaxed mt-2">Real creator videos, hook-first, built for TikTok, Reels and Shorts.</p>
 <p className="text-xs font-mono text-blue-400 mt-3">From $75 per video</p>
 </div>
 <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-6">
 <h4 className="text-sm font-bold text-white">CGI Product Ads</h4>
 <p className="text-xs text-neutral-400 leading-relaxed mt-2">3D product films with studio lighting and photorealistic effects.</p>
 <p className="text-xs font-mono text-blue-400 mt-3">From $175 · 15 seconds</p>
 </div>
 <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-6">
 <h4 className="text-sm font-bold text-white">Poster Ads</h4>
 <p className="text-xs text-neutral-400 leading-relaxed mt-2">Scroll-stopping posters for feeds, stories and print.</p>
 <p className="text-xs font-mono text-blue-400 mt-3">$30 · $20 with any video</p>
 </div>
 <div className="bg-[#11141B] border border-[#222833] rounded-3xl p-6">
 <h4 className="text-sm font-bold text-white">Hook Variation Packs</h4>
 <p className="text-xs text-neutral-400 leading-relaxed mt-2">Same ad, new hooks — test what grabs attention.</p>
 <p className="text-xs font-mono text-blue-400 mt-3">3 hooks $189 · 5 hooks $299</p>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};
