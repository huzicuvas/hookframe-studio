import React from 'react';
import { Mail, Sparkles, Send, Clock, ShieldCheck, Zap, Layers } from 'lucide-react';

export const Contact: React.FC = () => {
  const email = 'kiramorganai@gmail.com';

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-[#0A0A0B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-2xl relative overflow-hidden">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Direct pricing and inquiries</span>
          </div>

          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto"
          >
            Ready to scale your ad creatives?
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mt-4 font-normal leading-relaxed">
            Pick a plan in the pricing section above, then email us to start — or email us directly with your product link. First ad? Try the $50 test ad — pay only after you approve the preview. Delivery in 48 hours, full commercial rights included.
          </p>

          {/* Primary Mailto Action — the one way to email us */}
          <div className="mt-8 flex items-center justify-center max-w-md mx-auto">
            <a
              href={`mailto:${email}?subject=New%20Ad%20Creative%20Inquiry%20-%20Hook%20Frames%20Studio&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20creating%20performance%20ad%20content%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0AFormat%20Needed%20(Test%20ad%20/%2015s%20UGC%20/%2020s%20UGC%20/%2030s%20UGC%20/%20Poster%20/%20CGI%2015s%20/%20CGI%2030s%20/%20Hook%20Pack%203%20/%20Hook%20Pack%205%20/%20Custom%20Pack%20/%20Over%2030s%20or%20monthly):%20%0ATarget%20Launch%20Date:%20%0A`}
              id="contact-mailto-btn"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-sm font-bold transition-colors duration-200 shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              <span>Email {email}</span>
            </a>
          </div>

          {/* Guarantee Badges: Response time, Commercial rights, Delivery time */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>Replies within 2 hours</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Full commercial rights included</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span>48h fast delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

