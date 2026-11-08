import React from 'react';
import { Zap, Camera, Users, ShieldCheck } from 'lucide-react';

export const AboutServicesCombined: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#0A0A0B]">
      {/* Anchor for services navigation */}
      <div id="services" className="-translate-y-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Story & Production Model (Approachable, jargon-free) */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>About and production model</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              Ad creative, <br className="hidden sm:inline" />
              <span className="text-neutral-400">built without film crew overhead.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mt-6">
              Hook Frames Studio makes UGC-style, CGI, poster and horizontal video ads for brands — fast turnaround, no film crew, no scheduling headaches. We turn product photos and key selling points into finished ads in as little as 48 hours.
            </p>
          </div>

          {/* Two Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-neutral-800 max-w-2xl">
            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">48h delivery</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Brief to ready cut in as little as 2 days</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-800 text-neutral-300 shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero crew overhead</h4>
                <p className="text-xs text-neutral-400 mt-0.5">No actors to book, sets to build, or gear to haul</p>
              </div>
            </div>
          </div>
        </div>

        {/* About the Team Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>About the team</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Direct attention
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Hook Frames Studio is run by a small, focused team — a founder handling creative direction and production, Kira as our on-camera presenter, and a network of collaborators we bring in for larger projects. No account managers, no handoffs — you work directly with the people making your content.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-white font-semibold font-sans text-xs">Direct Collaboration</p>
                <p className="text-[11px] text-neutral-400">Zero account manager bloat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
