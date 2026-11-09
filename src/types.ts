export type CategoryType = 'All' | 'Beauty' | 'Tech' | 'Food' | 'Family' | 'Testimonial' | 'CGI';

export interface VideoItem {
  id: string;
  title: string;
  brand: string;
  category: 'Beauty' | 'Tech' | 'Food' | 'Family' | 'Testimonial' | 'CGI';
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  aspectRatio: '9:16' | '1:1' | '16:9' | '4:5' | '3:4';
  kind?: 'video' | 'poster'; // poster tiles show a static poster frame, not a play button
  // Seconds into the video to use as the tile's still frame. By default the
  // first frame shows, but some videos open on a close-up that does not read
  // as the product (the Handbag opens on fingertips + a bag corner), so a
  // posterTime points the tile at a better frame — the full bag at ~12s.
  // The tile seeks there on load and rests there whenever the mouse leaves.
  // No thumbnail image needed.
  posterTime?: number;
  hookHeadline: string;
  description: string;
  metrics?: {
    hookRate?: string;
    ctr?: string;
    roas?: string;
  };
  tags: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  badge: string;
  iconName: string;
  aspectLabel?: string; // e.g. '9:16 vertical' — shown on the format's preview slot
  previewKind?: 'video' | 'poster'; // which placeholder the preview slot shows
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ChatMode = 'faq' | 'pricing' | 'process' | 'strategist';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  modelUsed?: string;
  modeUsed?: ChatMode;
}
