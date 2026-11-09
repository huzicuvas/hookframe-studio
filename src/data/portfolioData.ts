import { VideoItem } from '../types';

/**
 * Hook Frames Studio - Portfolio Showcase Data
 * Real client-style ad videos, hosted on Supabase. Each video tile shows
 * the video itself as its cover (first frame), so no separate thumbnail
 * image is needed. The first 8 items form the homepage bento rectangle
 * (2 tall + 2 wide videos, 4 poster slots); items after that are
 * gallery-only and show on the /gallery page.
 */
const SUPABASE_BASE =
  'https://tladjgnzrmwaegqdkahu.supabase.co/storage/v1/object/public/portfolio-videos';

/**
 * The featured hero video — the Burger. It lives in the hero tile, not in
 * the homepage grid (it would only duplicate the hero), but it is still
 * part of the full library, so it is also the last item of PORTFOLIO_VIDEOS
 * and shows on the /gallery page.
 */
export const FEATURED_VIDEO: VideoItem = {
  id: 'burger-smoke-house-cgi',
  title: 'Smoke House — Biggest Burger in the USA',
  brand: 'Smoke House',
  category: 'Food',
  thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
  videoUrl: `${SUPABASE_BASE}/Burger%209%3A16.mp4`,
  duration: '0:10',
  aspectRatio: '9:16',
  hookHeadline: '"The biggest burger in the USA — $15.99."',
  description:
    'Stacked patties, dripping cheese, onion rings and smoke building to the full burger with the price front and centre.',
  tags: ['3D CGI', 'Food', 'Burger', 'Product Ad'],
};

export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'serum-centella-cgi',
    title: 'Centella Serum — From Lab to Skin',
    brand: 'Centella Skincare',
    category: 'Beauty',
    thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
    videoUrl: `${SUPABASE_BASE}/Serum%209%3A16.mp4`,
    duration: '0:10',
    aspectRatio: '9:16',
    hookHeadline: '"Skincare, bottled by science."',
    description:
      'A serum dropper bottle in a glass lab vessel, centella leaves steeping in golden liquid under mint-green light. Clean, premium, clinical.',
    tags: ['3D CGI', 'Skincare', 'Serum', 'Beauty'],
  },
  {
    id: 'handbag-blue-craft-film',
    title: 'The Blue Handbag — Crafted in Close-Up',
    brand: 'Fashion / Accessories',
    category: 'Beauty',
    thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
    videoUrl: `${SUPABASE_BASE}/Handbag%2016%3A9.mp4`,
    duration: '0:16',
    aspectRatio: '16:9',
    posterTime: 12, // tile shows the full bag (~12s), not the opening close-up
    hookHeadline: '"Stitched by hand. Carried everywhere."',
    description:
      'A sewing machine stitches dark-blue monogram fabric, then the finished bag with its silver chain, carried out into the day. A live-action product film, not CGI.',
    tags: ['Product Film', 'Fashion', 'Craft', 'Luxury'],
  },
  {
    id: 'sample-style-fast-cut-beverage',
    title: 'High-Energy Fast-Cut Promo',
    brand: 'Food & Beverage / Wellness Slot',
    category: 'Food',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:15',
    aspectRatio: '4:5',
    kind: 'poster',
    hookHeadline: '"Why 30,000 coffee drinkers switched to morning jitter-free focus..."',
    description:
      'Fast-paced kinetic typography, fluid dynamic splashes, morning routine POV, and energetic sound design.',
    tags: ['Poster Ad', 'Beverage Splash', 'Routine POV', 'Sample style'],
  },
  {
    id: 'sample-style-b2b-saas-workflow',
    title: 'Desk POV Workflow Testimonial',
    brand: 'App / Software / SaaS Slot',
    category: 'Testimonial',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:25',
    aspectRatio: '4:5',
    kind: 'poster',
    hookHeadline: '"I used to waste 14 hours a week until our team started using this..."',
    description:
      'Authentic desk setup POV with dynamic screen insert overlays, user testimonial delivery, and frictionless signup CTA.',
    tags: ['Poster Ad', 'Desk POV', 'Workflow Hook', 'Sample style'],
  },
  {
    id: 'vexmo-premium-cafe-cgi',
    title: 'VEXMO Premium Cafe — The Menu Comes Alive',
    brand: 'VEXMO Premium Cafe',
    category: 'Food',
    thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
    videoUrl: `${SUPABASE_BASE}/VEXMO%20Premium%20Cafe%2016%3A9.mp4`,
    duration: '0:09',
    aspectRatio: '16:9',
    hookHeadline: '"Don\'t read the menu. Watch it."',
    description:
      'Dishes rise off the page in 3D out of the VEXMO menu — club sandwich, Thai green curry, loaded fries, prawn skewers, mocktail and waffle. Made for restaurants and cafes.',
    tags: ['3D CGI', 'Food', 'Restaurant', 'Menu Ad'],
  },
  {
    id: 'berry-rush-energy-drink-cgi',
    title: 'Berry Rush — Energy Drink CGI',
    brand: 'Berry Rush',
    category: 'Food',
    thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
    videoUrl: `${SUPABASE_BASE}/Drink%209%3A16.mp4`,
    duration: '0:11',
    aspectRatio: '9:16',
    hookHeadline: '"Real fruit. Real rush."',
    description:
      'A red energy drink can in a burst of strawberries, raspberries and red splash.',
    tags: ['3D CGI', 'Beverage', 'Energy Drink', 'Product Ad'],
  },
  {
    id: 'sample-style-founder-story-direct',
    title: 'Authentic Founder Origin Pitch',
    brand: 'Direct-to-Consumer Brand Slot',
    category: 'Testimonial',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:28',
    aspectRatio: '4:5',
    kind: 'poster',
    hookHeadline: '"We built this in our garage because every alternative broke in 3 months..."',
    description:
      'Direct-to-camera storytelling with documentary B-roll cutaways, sketch overlay graphics, and trust-building social proof.',
    tags: ['Poster Ad', 'Brand Story', 'Direct Pitch', 'Sample style'],
  },
  {
    id: 'sample-style-split-screen-comparison',
    title: 'Side-by-Side Competitor Comparison',
    brand: 'Wellness & Daily Care Slot',
    category: 'Beauty',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:16',
    aspectRatio: '1:1',
    kind: 'poster',
    hookHeadline: '"Left: Regular department store brand vs. Right: 100% bio-active formula."',
    description:
      'High-contrast split-screen demonstrating instant absorption, ingredient transparency, and real-time visual proof.',
    tags: ['Poster Ad', 'Comparison', 'Visual Proof', 'Sample style'],
  },
  {
    id: 'sheglam-good-grip-sand',
    title: 'SHEGLAM Good Grip — Drawn in Sand',
    brand: 'SHEGLAM (concept ad)',
    category: 'Beauty',
    thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
    videoUrl: `${SUPABASE_BASE}/SHEGLAM%209%3A16.mp4`,
    duration: '0:10',
    aspectRatio: '9:16',
    hookHeadline: '"A primer, written in the sand."',
    description:
      'The SHEGLAM Good Grip primer bottle traced in beach sand. A concept ad for the brand, not a paid client project.',
    tags: ['Concept Ad', 'Skincare', 'Primer', 'Beauty'],
  },
  FEATURED_VIDEO,
];

/**
 * Bento grid placement (one class string per tile, in portfolio order).
 * Desktop: 3 columns x 4 rows — two mirrored blocks. Block 1: tall tile on the
 * left, wide tile top-right, two posters bottom-right. Block 2 mirrors it:
 * wide tile top-left, tall tile on the right, two posters bottom-left.
 * Mobile: 2 columns x 5 rows — tall tiles span two rows, posters stack in pairs.
 * Shared by the homepage grid and the gallery page. Only the first 8 items
 * use this placement — the homepage shows the first 8, and the gallery
 * falls back to a plain grid when there are more than 8.
 */
export const BENTO_PLACEMENT: string[] = [
  'col-start-1 row-start-1 row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2',
  'col-start-2 row-start-1 lg:col-start-2 lg:col-span-2 lg:row-start-1',
  'col-start-2 row-start-2 lg:col-start-2 lg:row-start-2',
  'col-start-1 row-start-3 lg:col-start-3 lg:row-start-2',
  'col-start-2 row-start-3 lg:col-start-1 lg:col-span-2 lg:row-start-3',
  'col-start-1 row-start-4 row-span-2 lg:col-start-3 lg:row-start-3 lg:row-span-2',
  'col-start-2 row-start-4 lg:col-start-1 lg:row-start-4',
  'col-start-2 row-start-5 lg:col-start-2 lg:row-start-4',
  // Third block (rows 5-6) — the two gallery-only vertical videos. Both are
  // 9:16, so both get tall slots; the third column of this block stays
  // empty (the library has no 11th item), which is the grid simply ending.
  'col-start-1 row-start-6 row-span-2 lg:col-start-1 lg:row-start-5 lg:row-span-2',
  'col-start-2 row-start-6 row-span-2 lg:col-start-2 lg:row-start-5 lg:row-span-2',
];
