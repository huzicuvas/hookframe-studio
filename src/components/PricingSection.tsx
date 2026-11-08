import React from 'react';
import { Check, Zap, ArrowRight, Mail } from 'lucide-react';

const recipientEmail = 'kiramorganai@gmail.com';

const mailto = (subject: string, body: string) =>
  `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;

interface PriceRow {
  label: string;
  price: string;
  subject: string;
  body: string;
}

interface PricingCard {
  id: string;
  name: string;
  price: string;
  priceSub: string;
  badge?: string;
  isPopular: boolean;
  tagline: string;
  priceRows?: PriceRow[];
  included: string[];
  ctaLabel: string;
  ctaSubject: string;
  ctaBody: string;
}

// Three cards, matching the approved preview: test ad, UGC by length, CGI & posters.
// The length rows are mailto links, so each price pre-fills its own email.
const pricingCards: PricingCard[] = [
  {
    id: 'first-ad-test',
    name: 'First Ad — Test',
    price: '$50',
    priceSub: '10-second ad',
    isPopular: false,
    tagline:
      'Your first ad, risk-free. UGC or CGI — your pick. You only pay after you approve it.',
    included: [
      '10-second video (UGC or CGI)',
      'Watermarked preview first',
      '1 revision included',
      '48-hour delivery',
      'Pay on approval',
    ],
    ctaLabel: 'Start with a test ad',
    ctaSubject: 'Test ad — $50 pay on approval',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe want to start with a $50 test ad (pay on approval, 10 seconds, UGC or CGI — our pick).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A',
  },
  {
    id: 'ugc-video-ads',
    name: 'UGC Video Ads',
    price: 'from $75',
    priceSub: 'Per video',
    badge: 'Most popular',
    isPopular: true,
    tagline:
      'Real creator videos, hook-first, built for TikTok, Reels and Shorts.',
    priceRows: [
      {
        label: '15-second video',
        price: '$75',
        subject: 'Order a 15 second UGC video ad — $75',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe want to order a 15 second UGC video ad for our brand ($75 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A',
      },
      {
        label: '20-second video',
        price: '$99',
        subject: 'Order a 20 second UGC video ad — $99',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe want to order a 20 second UGC video ad for our brand ($99 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A',
      },
      {
        label: '30-second video',
        price: '$149',
        subject: 'Order a 30 second UGC video ad — $149',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe want to order a 30 second UGC video ad for our brand ($149 / 1 version).%0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A',
      },
    ],
    included: [
      '9:16 vertical + 16:9 cut',
      'Hook-first script',
      '48-hour delivery',
    ],
    ctaLabel: 'Pick a length',
    ctaSubject: 'Order a UGC video ad',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe want to order a UGC video ad.%0A%0ALength (15s $75 / 20s $99 / 30s $149): %0A%0ABrand Name: %0AProduct / Website Link: %0AKey Selling Point / Hook Angle: %0A',
  },
  {
    id: 'cgi-poster-ads',
    name: 'CGI & Poster Ads',
    price: 'from $30',
    priceSub: 'Per ad',
    isPopular: false,
    tagline: '3D product films and scroll-stopping posters.',
    priceRows: [
      {
        label: 'CGI 15-second',
        price: '$175',
        subject: 'Order a CGI video — 15 seconds $175',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe would like to order a 15 second CGI video ($175).%0A%0ABrand Name: %0AProduct / Website Link: %0A',
      },
      {
        label: 'CGI 30-second',
        price: '$299',
        subject: 'Order a CGI video — 30 seconds $299',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe would like to order a 30 second CGI video ($299).%0A%0ABrand Name: %0AProduct / Website Link: %0A',
      },
      {
        label: 'Poster ad',
        price: '$30',
        subject: 'Order a poster ad — $30',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe would like to order a poster ad ($30, or $20 with any video).%0A%0ABrand Name: %0AProduct / Website Link: %0A',
      },
      {
        label: 'Poster with any video',
        price: '$20',
        subject: 'Order a poster ad — $30 (with a video $20)',
        body: 'Hi Hook Frames Studio Team,%0A%0AWe would like to order a poster ad with a video ($20 with any video).%0A%0ABrand Name: %0AProduct / Website Link: %0A',
      },
    ],
    included: ['Studio-quality 3D render', '48-hour delivery'],
    ctaLabel: 'Get a CGI or poster',
    ctaSubject: 'Order a CGI or poster ad',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe would like to order a CGI video or poster ad.%0A%0AChoice (CGI 15s $175 / CGI 30s $299 / Poster $30 / Poster with video $20): %0A%0ABrand Name: %0AProduct / Website Link: %0A',
  },
];

const packCards = [
  {
    id: 'hook-variation-pack',
    name: 'Hook Variation Pack',
    price: '3 hooks $189 · 5 hooks $299',
    tagline: 'Same ad, new hooks — test what grabs attention.',
    included: [
      '3 hooks — $189',
      '5 hooks — $299',
      'Extra hook — +$50',
      'Made for Meta & TikTok A/B testing',
    ],
    ctaLabel: 'Order the pack',
    ctaSubject: 'Order Hook Variation Pack — 3 hooks $189',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe want to order a Hook Pack with 3 opening hooks ($189).%0A%0ABrand Name: %0AProduct Link: %0ATarget Ad Platform (Meta / TikTok): %0A',
  },
  {
    id: 'custom-brand-pack',
    name: 'Custom Brand Pack',
    price: '$249',
    tagline: 'One of each: UGC, CGI and a poster.',
    included: [
      '1 UGC testimonial (15s)',
      '1 CGI product ad (15s)',
      '1 poster ad',
      'Extras: poster $20 / UGC $60 / CGI $150',
    ],
    ctaLabel: 'Order the pack',
    ctaSubject: 'Order Custom Brand Pack — $249',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe want to order a Custom Brand Pack ($249: 1 UGC testimonial video 15s + 1 CGI product video 15s + 1 poster ad).%0A%0ABrand Name: %0AProduct / Website Link: %0AExtras needed (poster $20 / UGC $60 / CGI $150): %0A',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 bg-[#0A0A0B] border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — centred, like the approved preview */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Transparent pricing</span>
          </div>
          <h2
            id="pricing-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mt-4"
          >
            PRICING
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            One price per ad. No hidden fees, no surprises.
          </p>
          <p className="text-xs font-mono text-neutral-500 mt-2">
            First ad is pay on approval · 48-hour delivery · Full commercial
            rights
          </p>
        </div>

        {/* Three cards — blue glow at the bottom of each, middle card featured */}
        <div
          id="pricing-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch"
        >
          {pricingCards.map((card) => (
            <div
              key={card.id}
              id={`pricing-card-${card.id}`}
              className={`relative flex flex-col rounded-3xl bg-neutral-900 border p-6 sm:p-7 overflow-hidden shadow-xl ${
                card.isPopular
                  ? 'border-blue-500/60 shadow-blue-500/10 lg:-translate-y-2'
                  : 'border-neutral-800'
              }`}
            >
              {/* Blue glow wash at the bottom — strongest on the featured card */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 ${
                  card.isPopular
                    ? 'h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.55),transparent_70%)]'
                    : 'h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.35),transparent_70%)]'
                }`}
              />

              {/* Featured Badge — inside the card (the card clips anything above its top edge) */}
              {card.isPopular && card.badge && (
                <div className="flex justify-center mb-3">
                  <span className="px-3 py-0.5 rounded-full bg-blue-500 text-white text-[11px] font-bold shadow-md flex items-center gap-1 whitespace-nowrap">
                    <Zap className="w-3 h-3 fill-white" />
                    <span>{card.badge}</span>
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {card.name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mt-1.5 min-h-[42px]">
                  {card.tagline}
                </p>

                {/* Price */}
                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {card.price}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono ml-2">
                    {card.priceSub}
                  </span>
                </div>

                {/* Price rows — each one is a mailto that pre-fills its own email */}
                {card.priceRows && (
                  <div className="mt-4 space-y-1">
                    {card.priceRows.map((row) => (
                      <a
                        key={row.label}
                        href={mailto(row.subject, row.body)}
                        className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-sm border border-transparent hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors"
                      >
                        <span className="text-neutral-300">{row.label}</span>
                        <span className="font-mono font-bold text-white">
                          {row.price}
                        </span>
                      </a>
                    ))}
                  </div>
                )}

                {/* What's included */}
                <ul className="mt-4 space-y-2">
                  {card.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-300 leading-snug"
                    >
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — white pill, like the preview */}
                <div className="mt-auto pt-6">
                  <a
                    href={mailto(card.ctaSubject, card.ctaBody)}
                    id={`cta-tier-${card.id}`}
                    className="w-full py-3 px-4 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{card.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pack cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mt-6">
          {packCards.map((pack) => (
            <div
              key={pack.id}
              id={`pricing-card-${pack.id}`}
              className="relative flex flex-col rounded-3xl bg-neutral-900 border border-neutral-800 p-6 overflow-hidden shadow-xl"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.25),transparent_70%)]" />
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {pack.name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mt-1">
                  {pack.tagline}
                </p>
                <div className="mt-4">
                  <span className="text-xl font-extrabold text-white tracking-tight">
                    {pack.price}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {pack.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-300 leading-snug"
                    >
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <a
                    href={mailto(pack.ctaSubject, pack.ctaBody)}
                    id={`cta-tier-${pack.id}`}
                    className="w-full py-3 px-4 rounded-full bg-white hover:bg-blue-500 hover:text-white text-black text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{pack.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pack discounts */}
        <div className="mt-6 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 px-6 py-4 text-center text-xs font-mono text-neutral-300">
            Packs: 3 videos{' '}
            <span className="text-white font-bold">10% off</span> · 5 videos{' '}
            <span className="text-white font-bold">15% off</span>
          </div>
        </div>

        {/* Quote strip — over 30 seconds, monthly, custom */}
        <div className="mt-6 p-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white">
                Need over 30 seconds, monthly creative, or something custom?
              </span>
              <p className="text-neutral-400 mt-0.5">
                Anything over 30 seconds, monthly content batches and fully
                custom scopes are priced on quotation — tell us the duration
                and product.
              </p>
            </div>
          </div>
          <a
            href={mailto(
              'Quotation request — over 30 seconds or custom scope',
              'Hi Hook Frames Studio Team,%0A%0AWe would like a quotation for over 30 seconds, monthly batches, or a fully custom scope.%0A%0ABrand Name: %0AProduct / Website Link: %0AWhat we need: %0A'
            )}
            className="shrink-0 px-5 py-2.5 rounded-full bg-white hover:bg-blue-500 text-black hover:text-white font-bold transition-colors"
          >
            Ask for a quotation
          </a>
        </div>
      </div>
    </section>
  );
};
