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
    id: 'poster-running-sneakers',
    title: 'Run the Future — Black Running Sneakers',
    brand: 'BaulAuratn',
    category: 'Tech',
    thumbnailUrl: `${SUPABASE_BASE}/Running.jpg`,
    videoUrl: '',
    duration: 'Poster',
    aspectRatio: '3:4',
    kind: 'poster',
    hookHeadline: '"Run the future."',
    description:
      'All-black futuristic running sneakers with a blade sole, featherlight mesh and a glossy reflective finish — built for speed.',
    tags: ['Poster Ad', 'Sneakers', 'Running', 'Product Ad'],
  },
  {
    id: 'poster-red-headphones',
    title: 'Style Meets Sound — Red Headphones',
    brand: 'Wireless Headphones',
    category: 'Tech',
    thumbnailUrl: `${SUPABASE_BASE}/Headphones.jpg`,
    videoUrl: '',
    duration: 'Poster',
    aspectRatio: '3:4',
    kind: 'poster',
    hookHeadline: '"Style meets sound."',
    description:
      'Premium red over-ear wireless headphones on a pedestal — Hi-Fi audio, noise cancelling, up to 20% off.',
    tags: ['Poster Ad', 'Headphones', 'Audio', 'Product Ad'],
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
    title: 'Kingfisher Radler — Three Flavours, One Ad',
    brand: 'Kingfisher Radler (concept ad)',
    category: 'Food',
    thumbnailUrl: '', // video itself is the cover — no thumbnail upload needed
    videoUrl: `${SUPABASE_BASE}/Drink%209%3A16.mp4`,
    duration: '0:11',
    aspectRatio: '9:16',
    hookHeadline: '"Ginger & Lime. Mint. Strawberry. One Radler, three moods."',
    description:
      'A Kingfisher Radler non-alcoholic drink ad: the yellow Ginger & Lime can in a splash of lime and ginger, the red strawberry can in berries, closing on all three cans — Ginger & Lime, Mint and Strawberry — together. A concept ad for the brand, not a paid client project.',
    tags: ['3D CGI', 'Beverage', 'Concept Ad', 'Product Ad'],
  },
  {
    id: 'poster-black-arabic-watch',
    title: 'Bold in Black — Arabic Numeral Watch',
    brand: 'Black Arabic Watch',
    category: 'Tech',
    thumbnailUrl: `${SUPABASE_BASE}/Watch.jpg`,
    videoUrl: '',
    duration: 'Poster',
    aspectRatio: '3:4',
    kind: 'poster',
    hookHeadline: '"Bold in black."',
    description:
      'A matte black analog watch with an octagonal bezel, Arabic numerals and a black steel bracelet — made to stand out.',
    tags: ['Poster Ad', 'Watch', 'Luxury', 'Product Ad'],
  },
  {
    id: 'poster-basketball-sneakers',
    title: 'Own the Court — Basketball High-Tops',
    brand: 'Basketball Sneakers',
    category: 'Tech',
    thumbnailUrl: `${SUPABASE_BASE}/Basketball.jpg`,
    videoUrl: '',
    duration: 'Poster',
    aspectRatio: '3:4',
    kind: 'poster',
    hookHeadline: '"Own the court."',
    description:
      'Black and white high-top basketball sneakers with an air cushion in the heel and high-top support — limited stock.',
    tags: ['Poster Ad', 'Sneakers', 'Basketball', 'Product Ad'],
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
// Bento placement per tile. Mobile (<640px) is ONE column — two columns at
// 320px makes each tile ~132px wide, too narrow for the overlay text, so
// titles collided with hooks and the overlay spilled past the panel (taste
// skill, Nov 9). sm (640px+) is the 2-column bento; lg (1024px+) is the
// 3-column bento. Tall (9:16) tiles span 2 rows at every width.
export const BENTO_PLACEMENT: string[] = [
  'row-span-2 sm:col-start-1 sm:row-start-1 sm:row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-2',
  'sm:col-start-2 sm:row-start-1 lg:col-start-2 lg:col-span-2 lg:row-start-1',
  'sm:col-start-2 sm:row-start-2 lg:col-start-2 lg:row-start-2',
  'sm:col-start-1 sm:row-start-3 lg:col-start-3 lg:row-start-2',
  'sm:col-start-2 sm:row-start-3 lg:col-start-1 lg:col-span-2 lg:row-start-3',
  'row-span-2 sm:col-start-1 sm:row-start-4 sm:row-span-2 lg:col-start-3 lg:row-start-3 lg:row-span-2',
  'sm:col-start-2 sm:row-start-4 lg:col-start-1 lg:row-start-4',
  'sm:col-start-2 sm:row-start-5 lg:col-start-2 lg:row-start-4',
  // Third block (rows 5-6) — the two gallery-only vertical videos. Both are
  // 9:16, so both get tall slots; the third column of this block stays
  // empty (the library has no 11th item), which is the grid simply ending.
  'row-span-2 sm:col-start-1 sm:row-start-6 sm:row-span-2 lg:col-start-1 lg:row-start-5 lg:row-span-2',
  'row-span-2 sm:col-start-2 sm:row-start-6 sm:row-span-2 lg:col-start-2 lg:row-start-5 lg:row-span-2',
];
