import React from 'react';
import { Check, Zap, ArrowRight, Clock, ShieldCheck, Mail } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const recipientEmail = 'kiramorganai@gmail.com';

  // Fixed-price cards: short ads only, 30 seconds max.
  const pricingTiers = [
    {
      id: 'first-ad-test',
      name: 'First Ad — Test',
      price: '$75',
      pricePrefix: 'Pay on approval',
      duration: '15 sec',
      versionSpec: '1 test ad',
      badge: 'Try us first',
      isPopular: true,
      tagline: 'One test ad to see the quality first. You get a watermarked preview, and you only pay if you love it.',
      included: [
        '1 test video ad, 15 seconds',
        'Watermarked preview first',
        'Pay only if you love it',
        '1 revision included',
        '48-hour delivery turnaround',
        'Full commercial usage rights after payment',
      ],
      ctaLabel: 'Start with a test ad',
      mailtoSubject: 'Test ad — $75 pay on approval',
    },
    {
      id: '10-20-sec-video',
      name: '10–20 Second Video',
      price: '$75',
      pricePrefix: 'Fixed Price',
      duration: '10–20 sec',
      versionSpec: '1 version',
      badge: 'Short ad',
      isPopular: false,
      tagline: 'Short video ad for TikTok, Reels and Shorts — ten or twenty seconds.',
      included: [
        '1 final version',
        '10 to 20 second runtime',
        'Full AI voiceover & sound design',
        '9:16 vertical & 16:9 horizontal cuts',
        'Full commercial usage rights',
        '48-hour delivery turnaround',
      ],
      ctaLabel: 'Get a Quote',
      mailtoSubject: 'Inquiry for 10-20 Second Video',
    },
  ];

  // Everything longer or custom: long bars, priced on quotation.
  const quoteBars = [
    {
      id: 'hook-variation-pack',
      name: 'Hook Variation Pack',
      price: 'Get a Quote',
      pricePrefix: 'Custom Quote',
      badge: 'Hook pack',
      tagline: 'Made for ad testing. 3 opening hooks: problem, POV and ASMR.',
      included: [
        '3 distinct video variations',
        '3 different opening hooks',
        '15 to 30 seconds per video',
        'Made for Meta & TikTok A/B testing',
      ],
      ctaLabel: 'Get a Quote',
      mailtoSubject: 'Inquiry for Hook Variation Pack',
    },
    {
      id: 'custom-brand-package',
      name: 'Custom Brand Package',
      price: 'Get a Quote',
      pricePrefix: 'Custom Scope',
      badge: 'Enterprise',
      tagline: 'Longer videos, multiple products/SKUs, or ongoing monthly creative content pipelines.',
      included: [
        'Longer videos & multi-SKU packs',
        'Batch production (10+ creatives / month)',
        'Ongoing monthly creative refreshes',
        'Dedicated AI creative director',
      ],
      ctaLabel: 'Get a Quote',
      mailtoSubject: 'Inquiry for Custom Brand Package',
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 bg-[#0A0A0B] border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Transparent pricing</span>
            </div>
            <h2
              id="pricing-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Simple, transparent ad pricing. <br />
              <span className="text-neutral-400">No agency retainers required.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              First time here? Start with a $75 test ad and pay only after you approve the preview. Every video is delivered in vertical 9:16 and horizontal 16:9, with sound design, ad-ready exports, and full commercial usage rights.
            </p>
          </div>

          {/* Guarantee Pill */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Commercial Rights Included • Fast 48h Turnaround</span>
          </div>
        </div>

        {/* Fixed-Price Cards: short ads, 30 seconds max */}
        <div
          id="pricing-grid"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 max-w-3xl mx-auto items-stretch"
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              id={`pricing-card-${tier.id}`}
              className={`relative flex flex-col justify-between rounded-3xl p-6 transition-colors duration-300 shadow-xl ${
                tier.isPopular
                  ? 'bg-neutral-900 border-2 border-blue-500/80 shadow-blue-500/10'
                  : 'bg-neutral-900 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Featured Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-white" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div className="space-y-5">
                {/* Header & Duration */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                      {tier.name}
                    </h3>
                    {!tier.isPopular && (
                      <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  {/* Duration & Version Tag */}
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-blue-300 w-fit">
                      <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{tier.duration}</span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 pl-0.5">
                      {tier.versionSpec}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed min-h-[48px]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-3.5 border-y border-neutral-800/80">
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    {tier.pricePrefix}
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                      {tier.price}
                    </span>
                    {tier.price.startsWith('$') && (
                      <span className="text-xs text-neutral-500 font-mono">/ cut</span>
                    )}
                  </div>
                </div>

                {/* What's Included */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    What's included:
                  </span>
                  <ul className="space-y-1.5">
                    {tier.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-neutral-300 leading-tight">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Mailto to kiramorganai@gmail.com */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <a
                  href={`mailto:${recipientEmail}?subject=${encodeURIComponent(tier.mailtoSubject)}&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20tier.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0ATarget%20Platform%20(Meta/TikTok/Shorts):%20%0ANotes%20or%20Angle%20Ideas:%20%0A`}
                  id={`cta-tier-${tier.id}`}
                  className={`w-full py-3 px-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-colors duration-200 active:scale-95 ${
                    tier.isPopular
                      ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700/60'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Long Bars: everything longer or custom, priced on quotation */}
        <div className="mt-6 space-y-4 max-w-5xl mx-auto">
          {quoteBars.map((bar) => (
            <div
              key={bar.id}
              id={`pricing-bar-${bar.id}`}
              className="flex flex-col md:flex-row md:items-center justify-between gap-5 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 shadow-xl"
            >
              <div className="space-y-2.5 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {bar.name}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded-full bg-neutral-950 border border-neutral-800">
                    {bar.badge}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {bar.tagline}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {bar.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-neutral-300 leading-tight">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    {bar.pricePrefix}
                  </span>
                  <span className="text-xl font-extrabold text-white tracking-tight font-mono">
                    {bar.price}
                  </span>
                </div>
                <a
                  href={`mailto:${recipientEmail}?subject=${encodeURIComponent(bar.mailtoSubject)}&body=Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe're%20interested%20in%20the%20${encodeURIComponent(bar.name)}.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0ATarget%20Platform%20(Meta/TikTok/Shorts):%20%0ANotes%20or%20Angle%20Ideas:%20%0A`}
                  id={`cta-tier-${bar.id}`}
                  className="py-3 px-5 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-colors duration-200 active:scale-95 bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700/60"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{bar.ctaLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Durations & Posters: 30s to 1 minute, posters, anything else */}
        <div className="mt-6 p-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white">Need 30 seconds to 1 minute, a poster ad, or any other custom duration?</span>
              <p className="text-neutral-400 mt-0.5">Anything over 30 seconds, poster ads, and custom lengths are priced on quotation — tell us the duration and product.</p>
            </div>
          </div>
          <a
            href={`mailto:${recipientEmail}?subject=Quotation%20request%20-%20custom%20duration%20or%20poster%20ad&body=Hi%20Hook%20Frames%20Studio,%0A%0AWe%27d%20like%20a%20quotation.%0A%0ABrand%20Name:%20%0AProduct%20/%20Website%20Link:%20%0AWhat%20we%20need%20(30s-1min%20video%20/%20poster%20ad%20/%20other):%20%0A`}
            className="shrink-0 px-5 py-2.5 rounded-full bg-white hover:bg-blue-500 text-black hover:text-white font-bold transition-colors"
          >
            Ask for a quotation
          </a>
        </div>
      </div>
    </section>
  );
};
