import { VideoItem } from '../types';

/**
 * Hook Frames Studio - Portfolio Showcase Data
 * Curated ad format style blueprints ready for custom brand video uploads.
 * Each card includes a "Sample Style" badge and detailed framework metadata.
 */
export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'sample-style-ugc-skincare',
    title: 'Problem-Agitation UGC Reel',
    brand: 'Beauty / Skincare Brand Slot',
    category: 'Beauty',
    thumbnailUrl: '', // Ready for user's uploaded image/video asset
    videoUrl: '',
    duration: '0:18',
    aspectRatio: '9:16',
    hookHeadline: '"I stopped buying $120 serums after testing this AI-formulated dew..."',
    description: 'Authentic UGC creator layout with problem/solution pacing, split screen comparisons, and native on-screen TikTok captions.',
    metrics: {
      hookRate: '48.2%',
      ctr: '4.3%',
      roas: '3.9x',
    },
    tags: ['UGC Creator', 'TikTok / Reels', 'Problem-Agitate', 'Sample style'],
  },
  {
    id: 'sample-style-3d-cgi-hardware',
    title: '3D CGI Exploded View Ad',
    brand: 'Tech / Consumer Hardware Slot',
    category: 'Tech',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:22',
    aspectRatio: '16:9',
    hookHeadline: '"CGI Exploded View: See the internal acoustic chamber silence ambient noise."',
    description: 'Photorealistic 3D CGI product animation highlighting internal components, raytraced metallic textures, and fluid physics.',
    metrics: {
      hookRate: '54.5%',
      ctr: '5.2%',
      roas: '4.6x',
    },
    tags: ['3D CGI', 'Exploded View', 'Tech Gadget', 'Sample style'],
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
    description: 'Fast-paced kinetic typography, fluid dynamic splashes, morning routine POV, and energetic sound design.',
    metrics: {
      hookRate: '42.8%',
      ctr: '3.8%',
      roas: '3.5x',
    },
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
    description: 'Authentic desk setup POV with dynamic screen insert overlays, user testimonial delivery, and frictionless signup CTA.',
    metrics: {
      hookRate: '49.1%',
      ctr: '4.7%',
      roas: '4.1x',
    },
    tags: ['Poster Ad', 'Desk POV', 'Workflow Hook', 'Sample style'],
  },
  {
    id: 'sample-style-3d-fluid-splash',
    title: 'Macro Fluid Dynamics & Packaging',
    brand: 'DTC Brand / Luxury Goods Slot',
    category: 'CGI',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:14',
    aspectRatio: '16:9',
    hookHeadline: '"Ultra-realistic zero-gravity ice & citrus fluid simulation in 4K."',
    description: 'Cinema-grade 3D fluid simulations, condensation droplets, luxury studio lighting, and zero-gravity rotating packshot.',
    metrics: {
      hookRate: '59.2%',
      ctr: '6.4%',
      roas: '5.3x',
    },
    tags: ['Fluid Sim', '3D Packaging', 'Macro Texture', 'Sample style'],
  },
  {
    id: 'sample-style-asmr-unboxing',
    title: 'Tactile ASMR Unboxing & Macro Texture',
    brand: 'E-commerce / Accessories Slot',
    category: 'Tech',
    thumbnailUrl: '',
    videoUrl: '',
    duration: '0:19',
    aspectRatio: '9:16',
    hookHeadline: '"Listen to this magnetic snap... the most satisfying tactile feel ever designed."',
    description: 'Microphone-close ASMR sound design, precision studio lighting, matte texture focus, and zero-clutter unboxing pacing.',
    metrics: {
      hookRate: '51.3%',
      ctr: '4.9%',
      roas: '4.4x',
    },
    tags: ['ASMR Audio', 'Unboxing', 'Tactile Macro', 'Sample style'],
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
    description: 'Direct-to-camera storytelling with documentary B-roll cutaways, sketch overlay graphics, and trust-building social proof.',
    metrics: {
      hookRate: '46.7%',
      ctr: '4.1%',
      roas: '3.8x',
    },
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
    description: 'High-contrast split-screen demonstrating instant absorption, ingredient transparency, and real-time visual proof.',
    metrics: {
      hookRate: '53.0%',
      ctr: '5.0%',
      roas: '4.5x',
    },
    tags: ['Poster Ad', 'Comparison', 'Visual Proof', 'Sample style'],
  },
];

/**
 * Bento grid placement (one class string per tile, in portfolio order).
 * Desktop: 3 columns x 4 rows — two mirrored blocks. Block 1: tall tile on the
 * left, wide tile top-right, two posters bottom-right. Block 2 mirrors it:
 * wide tile top-left, tall tile on the right, two posters bottom-left.
 * Mobile: 2 columns x 5 rows — tall tiles span two rows, posters stack in pairs.
 * Shared by the homepage grid and the gallery page.
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
];
