import React from 'react';
import { Check, Zap, ArrowRight, Send, ShieldCheck, Sparkles } from 'lucide-react';

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

// Four cards: test ad, UGC by length, CGI, and posters — CGI and posters are separate niches.
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
    id: 'cgi-video-ads',
    name: 'CGI Video Ads',
    price: 'from $175',
    priceSub: 'Per video',
    isPopular: false,
    tagline: 'Studio-quality 3D product films.',
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
    ],
    included: ['Studio-quality 3D render', '48-hour delivery'],
    ctaLabel: 'Get a CGI ad',
    ctaSubject: 'Order a CGI video ad',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe would like to order a CGI video ad.%0A%0ALength (15s $175 / 30s $299): %0A%0ABrand Name: %0AProduct / Website Link: %0A',
  },
  {
    id: 'poster-ads',
    name: 'Poster Ads',
    price: '$30',
    priceSub: 'Per poster',
    isPopular: false,
    tagline: 'Scroll-stopping poster ads for your brand.',
    priceRows: [
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
    included: ['High-res poster design', '48-hour delivery'],
    ctaLabel: 'Get a poster',
    ctaSubject: 'Order a poster ad',
    ctaBody:
      'Hi Hook Frames Studio Team,%0A%0AWe would like to order a poster ad.%0A%0AChoice (Poster $30 / Poster with a video $20): %0A%0ABrand Name: %0AProduct / Website Link: %0A',
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
      className="py-12 bg-[#FAFAF9] dark:bg-[#0A0A0B] border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — centred, like the approved preview */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Transparent pricing</span>
          </div>
          <h2
            id="pricing-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight mt-4"
          >
            Pricing
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3">
            One price per ad. No hidden fees, no surprises.
          </p>
          <p className="text-xs font-mono text-neutral-600 dark:text-neutral-500 mt-2">
            First ad is pay on approval · 48-hour delivery · Full commercial
            rights
          </p>
        </div>

        {/* Four cards — blue glow at the bottom of each, UGC card featured */}
        <div
          id="pricing-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto items-stretch"
        >
          {pricingCards.map((card) => (
            <div
              key={card.id}
              id={`pricing-card-${card.id}`}
              className={`group relative flex flex-col rounded-3xl bg-white dark:bg-neutral-900 border p-6 sm:p-7 overflow-hidden shadow-xl transition-all duration-300 ${
                card.isPopular
                  ? 'border-[#F5B544]/60 shadow-[#F5B544]/10 lg:-translate-y-2 hover:border-[#F5B544] hover:shadow-2xl hover:shadow-[#F5B544]/25'
                  : 'border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10'
              }`}
            >
              {/* Blue glow wash at the bottom — strongest on the featured card */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 ${
                  card.isPopular
                    ? 'h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(245,181,68,0.45),transparent_70%)]'
                    : 'h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.35),transparent_70%)]'
                }`}
              />

              {/* Featured Badge — inside the card (the card clips anything above its top edge) */}
              {card.isPopular && card.badge && (
                <div className="flex justify-center mb-3">
                  <span className="px-3 py-0.5 rounded-full bg-[#F5B544] text-white dark:text-black text-[11px] font-bold shadow-md flex items-center gap-1 whitespace-nowrap">
                    <Zap className="w-3 h-3 fill-black" />
                    <span>{card.badge}</span>
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {card.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1.5 min-h-[42px]">
                  {card.tagline}
                </p>

                {/* Price */}
                <div className="mt-5">
                  <span className={card.isPopular ? 'text-4xl font-bold tracking-tight text-[#B45309] dark:text-[#F5B544]' : 'text-4xl font-bold tracking-tight text-neutral-900 dark:text-white'}>
                    {card.price}
                  </span>
                  <span className="text-xs text-neutral-600 dark:text-neutral-500 font-mono ml-2">
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
                        <span className="text-neutral-700 dark:text-neutral-300">{row.label}</span>
                        <span className="font-mono font-bold text-neutral-900 dark:text-white">
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
                      className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300 leading-snug"
                    >
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — white pill, like the preview */}
                <div className="mt-auto pt-6">
                  <a
                    href={mailto(card.ctaSubject, card.ctaBody)}
                    id={`cta-tier-${card.id}`}
                    className="w-full py-3 px-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] flex items-center justify-center gap-2 transition-colors"
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
              className="group relative flex flex-col rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.25),transparent_70%)]" />
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {pack.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                  {pack.tagline}
                </p>
                <div className="mt-4">
                  <span className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                    {pack.price}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {pack.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300 leading-snug"
                    >
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <a
                    href={mailto(pack.ctaSubject, pack.ctaBody)}
                    id={`cta-tier-${pack.id}`}
                    className="w-full py-3 px-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] flex items-center justify-center gap-2 transition-colors"
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
          <div className="rounded-3xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 px-6 py-4 text-center text-xs font-mono text-neutral-700 dark:text-neutral-300">
            Packs: 3 videos{' '}
            <span className="text-neutral-900 dark:text-white font-bold">10% off</span> · 5 videos{' '}
            <span className="text-neutral-900 dark:text-white font-bold">15% off</span>
          </div>
        </div>

        {/* Contact + quotation panel — merged into one compact block.
            Keeps id="contact" so the "Start a Project" buttons still land here. */}
        <div
          id="contact"
          className="mt-10 max-w-5xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 sm:p-7 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Direct pricing and inquiries</span>
          </div>

          <h2
            id="contact-title"
            className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight max-w-2xl mx-auto"
          >
            Ready to scale your ad creatives?
          </h2>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mt-3 font-normal leading-relaxed">
            Pick a plan above and email us to start — or ask for a quotation
            for over 30 seconds, monthly, or custom work. First ad? Try the
            $50 test ad — pay only after you approve the preview.
          </p>

          {/* Two actions — email to start, or ask for a quotation */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <a
              href={mailto(
                'New Ad Creative Inquiry - Hook Frames Studio',
                'Hi%20Hook%20Frames%20Studio%20Team,%0A%0AWe%27re%20interested%20in%20creating%20performance%20ad%20content%20for%20our%20brand.%0A%0ABrand%20Name:%20%0AWebsite%20/%20Product%20Link:%20%0AFormat%20Needed%20(Test%20ad%20/%2015s%20UGC%20/%2020s%20UGC%20/%2030s%20UGC%20/%20Poster%20/%20CGI%2015s%20/%20CGI%2030s%20/%20Hook%20Pack%203%20/%20Hook%20Pack%205%20/%20Custom%20Pack%20/%20Over%2030s%20or%20monthly):%20%0ATarget%20Launch%20Date:%20%0A'
              )}
              id="contact-mailto-btn"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3 rounded-full bg-blue-500 text-neutral-900 dark:text-white text-sm font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] transition-colors duration-200 shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              <span>Email {recipientEmail}</span>
            </a>
            <a
              href={mailto(
                'Quotation request — over 30 seconds or custom scope',
                'Hi Hook Frames Studio Team,%0A%0AWe would like a quotation for over 30 seconds, monthly batches, or a fully custom scope.%0A%0ABrand Name: %0AProduct / Website Link: %0AWhat we need: %0A'
              )}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-bold border border-transparent hover:border-[#F5B544] hover:shadow-[0_0_24px_rgba(245,181,68,0.35)] transition-colors duration-200 shadow-lg active:scale-95"
            >
              <span>Ask for a quotation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Guarantee Badges: Response time, Commercial rights, Delivery time */}
          <div className="mt-5 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Full commercial rights included</span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              <span>48h fast delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
