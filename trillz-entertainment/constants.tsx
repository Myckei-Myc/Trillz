import React from 'react';
import { Artist, Model, FashionEvent, RadioShow } from './types';

export const COLORS = {
  CHARCOAL: '#121212',
  WHITE: '#F5F5F5',
  GOLD: '#C5A059'
};

export const MOCK_ARTISTS: Artist[] = [
  { id: '1', name: 'Aurelia', genre: 'Neo-Soul', imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop', latestRelease: 'Velvet Dreams' },
  { id: '2', name: 'The Obsidian', genre: 'Industrial Mono', imageUrl: 'https://images.unsplash.com/photo-1520194160765-183b97671396?q=80&w=800&auto=format&fit=crop', latestRelease: 'Echoes' },
  { id: '3', name: 'Luxe Vane', genre: 'Avant-Pop', imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop', latestRelease: 'Crystal Palace' },
  { id: '4', name: 'Seraphine', genre: 'R&B Noir', imageUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=800&auto=format&fit=crop', latestRelease: 'Midnight Sun' },
];

export const MOCK_MODELS: Model[] = [
  { id: '1', name: 'Sasha K.', height: '5\'11"', measurements: '32-24-34', imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop', location: 'Paris' },
  { id: '2', name: 'Julian M.', height: '6\'2"', measurements: '40-32-38', imageUrl: 'https://images.unsplash.com/photo-1503910321444-403165a5bf28?q=80&w=800&auto=format&fit=crop', location: 'Milan' },
  { id: '3', name: 'Elena R.', height: '5\'10"', measurements: '34-23-35', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop', location: 'London' },
  { id: '4', name: 'Kenzo T.', height: '6\'1"', measurements: '38-30-36', imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop', location: 'New York' },
  { id: '5', name: 'Nadia S.', height: '5\'9"', measurements: '33-25-34', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop', location: 'Tokyo' },
  { id: '6', name: 'Marcus L.', height: '6\'3"', measurements: '42-34-40', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', location: 'Berlin' },
];

export const MOCK_FASHION_EVENTS: FashionEvent[] = [
  { id: '1', title: 'Midnight Masquerade', season: 'Autumn/Winter 2024', location: 'Grand Palais, Paris', videoThumbnail: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1280&auto=format&fit=crop', date: 'Oct 12, 2024' },
  { id: '2', title: 'Golden Hour', season: 'Spring/Summer 2025', location: 'Como Lake, Italy', videoThumbnail: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1280&auto=format&fit=crop', date: 'June 20, 2024' },
  { id: '3', title: 'Urban Noir', season: 'Resort 2024', location: 'Brooklyn Navy Yard', videoThumbnail: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1280&auto=format&fit=crop', date: 'May 15, 2024' },
];

export const RADIO_SCHEDULE: RadioShow[] = [
  { id: '1', title: 'Morning Silk', host: 'Leila V.', time: '08:00 - 10:00', day: 'Monday' },
  { id: '2', title: 'The Deep End', host: 'Marcus J.', time: '20:00 - 22:00', day: 'Wednesday' },
  { id: '3', title: 'Trillz After Dark', host: 'Chloe Moore', time: '23:00 - 01:00', day: 'Friday' },
  { id: '4', title: 'Sunday Lounge', host: 'Samir G.', time: '12:00 - 15:00', day: 'Sunday' },
];

export const Icons = {
  Play: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  ),
  Pause: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  ),
  Volume: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};