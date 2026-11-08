import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowRight, Sparkles, Send, Clock, ShieldCheck, Zap, Layers } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'kiramorganai@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const standardTiers = [
    {
      id: 'tier-test-ad',
      name: 'First Ad — Test',
      price: '$50',
      specs: 'UGC or CGI — your pick • 10s • pay on approval',
      subject: 'Test ad — $50 pay on approval',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to start with a $50 test ad (pay on approval, 10 seconds, UGC or CGI — our pick).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A",
    },
    {
      id: 'tier-15s',
      name: '15 Second UGC Video',
      price: '$75',
      specs: 'UGC-style video • 1 version • 15s',
      subject: 'Order a 15 second UGC video ad — $75',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a 15 second UGC video ad for our brand ($75 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A",
    },
    {
      id: 'tier-20s',
      name: '20 Second UGC Video',
      price: '$99',
      specs: 'UGC-style video • 1 version • 20s',
      subject: 'Order a 20 second UGC video ad — $99',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a 20 second UGC video ad for our brand ($99 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A",
    },
    {
      id: 'tier-30s',
      name: '30 Second UGC Video',
      price: '$149',
      specs: 'UGC-style video • 1 version • 30s',
      subject: 'Order a 30 second UGC video ad — $149',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a 30 second UGC video ad for our brand ($149 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A",
    },
    {
      id: 'tier-poster',
      name: 'Poster Ad',
      price: '$30',
      specs: '1 poster • $20 with any video',
      subject: 'Order a poster ad — $30',
      body: "Hi Hook Frames Studio Team,%0A%0AWe would like to order a poster ad ($30, or $20 with any video).%0A%0ABrand Name: %0AProduct / Website Link: %0A",
    },
    {
      id: 'tier-cgi-15s',
      name: 'CGI Video — 15s',
      price: '$175',
      specs: '3D product video • 15s runtime',
      subject: 'Order a CGI video — 15 seconds $175',
      body: "Hi Hook Frames Studio Team,%0A%0AWe would like to order a 15 second CGI video ($175).%0A%0ABrand Name: %0AProduct / Website Link: %0A",
    },
    {
      id: 'tier-cgi-30s',
      name: 'CGI Video — 30s',
      price: '$299',
      specs: '3D product video • 30s runtime',
      subject: 'Order a CGI video — 30 seconds $299',
      body: "Hi Hook Frames Studio Team,%0A%0AWe would like to order a 30 second CGI video ($299).%0A%0ABrand Name: %0AProduct / Website Link: %0A",
    },
    {
      id: 'tier-hook-pack-3',
      name: 'Hook Pack — 3 Hooks',
      price: '$189',
      specs: 'Same ad • 3 opening hooks',
      subject: 'Order Hook Pack — 3 hooks $189',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a Hook Pack with 3 opening hooks ($189).%0A%0ABrand Name: %0AProduct Link: %0ATarget Ad Platform (Meta / TikTok): %0A",
    },
    {
      id: 'tier-hook-pack-5',
      name: 'Hook Pack — 5 Hooks',
      price: '$299',
      specs: 'Same ad • 5 opening hooks',
      subject: 'Order Hook Pack — 5 hooks $299',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a Hook Pack with 5 opening hooks ($299).%0A%0ABrand Name: %0AProduct Link: %0ATarget Ad Platform (Meta / TikTok): %0A",
    },
    {
      id: 'tier-custom-pack',
      name: 'Custom Brand Pack',
      price: '$249',
      specs: 'UGC testimonial + CGI product + poster',
      subject: 'Order Custom Brand Pack — $249',
      body: "Hi Hook Frames Studio Team,%0A%0AWe want to order a Custom Brand Pack ($249: 1 UGC testimonial video 15s + 1 CGI product video 15s + 1 poster ad).%0A%0ABrand Name: %0AProduct / Website Link: %0AExtras needed (poster $20 / UGC $60 / CGI $150): %0A",
    },
  ];

  const customTier = {
    id: 'tier-quote',
    name: 'Over 30s, Monthly or Custom',
    price: 'Get a Quote',
    specs: 'Over 30 seconds • monthly batches • fully custom scopes',
    subject: 'Quotation request — over 30 seconds or custom scope',
    body: "Hi Hook Frames Studio Team,%0A%0AWe would like a quotation for over 30 seconds, monthly batches, or a fully custom scope.%0A%0ABrand Name: %0AProduct / Website Link: %0AWhat we need: %0A",
  };

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
            Select a tier below to start immediately, or email us directly with your product link. First ad? Try the $50 test ad — pay only after you approve the preview. Delivery in 48 hours, full commercial rights included.
          </p>

          {/* Primary Mailto Action & Copy Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={`mailto:${email}?subject=New%20Ad%20Creative%20Inquiry%20-%20Hook%20Frames%20Studio&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20creating%20performance%20ad%20content%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0AFormat%20Needed%20(Test%20ad%20/%2015s%20UGC%20/%2020s%20UGC%20/%2030s%20UGC%20/%20Poster%20/%20CGI%2015s%20/%20CGI%2030s%20/%20Hook%20Pack%203%20/%20Hook%20Pack%205%20/%20Custom%20Pack%20/%20Over%2030s%20or%20monthly):%20%0ATarget%20Launch%20Date:%20%0A`}
              id="contact-mailto-btn"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-sm font-bold transition-colors duration-200 shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              <span>Email {email}</span>
            </a>

            {/* Quick 1-Click Email Copy */}
            <button
              type="button"
              id="copy-email-btn"
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-mono font-medium transition-colors active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">Email copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick-Tier Pricing Presets (Single Source of Pricing Info) */}
          <div className="mt-10 pt-8 border-t border-neutral-800 max-w-3xl mx-auto text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-neutral-400 block">
                Select a tier to pre-fill an email:
              </span>
              <span className="text-[11px] font-mono text-blue-400 hidden sm:inline">
                Transparent Packages
              </span>
            </div>

            {/* 2-Column Grid for 10 Tiers (2 per row on mobile & desktop) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {standardTiers.map((tier) => (
                <a
                  key={tier.id}
                  id={`tier-button-${tier.id}`}
                  href={`mailto:${email}?subject=${encodeURIComponent(tier.subject)}&body=${tier.body}`}
                  className="group flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800/90 border border-neutral-800 hover:border-blue-500/50 transition-colors duration-200 shadow-sm"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                        {tier.name}
                      </span>
                      <span className="self-start sm:self-auto px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[10px] sm:text-[11px] font-bold font-mono text-blue-300 shrink-0">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 font-mono line-clamp-2">
                      {tier.specs}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                    <span className="truncate">Pre-fill email inquiry</span>
                    <ArrowRight className="w-3 h-3 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>

            {/* Single Full-Width Card for Quotations */}
            <div className="mt-3 sm:mt-4">
              <a
                id={`tier-button-${customTier.id}`}
                href={`mailto:${email}?subject=${encodeURIComponent(customTier.subject)}&body=${customTier.body}`}
                className="group block p-4 sm:p-5 rounded-2xl bg-neutral-950 hover:bg-neutral-800/90 border border-neutral-800 hover:border-blue-500/50 transition-colors duration-200 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {customTier.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 hidden xs:inline">
                      Quotation
                    </span>
                  </div>
                  <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[10px] sm:text-[11px] font-bold font-mono text-blue-300 shrink-0">
                    {customTier.price}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 font-mono">
                  {customTier.specs}
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>Pre-fill email inquiry</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            </div>
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

