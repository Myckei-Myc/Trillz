
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MOCK_FASHION_EVENTS } from '../constants';

const FashionShows: React.FC = () => {
  useScrollReveal();

  return (
    <div className="pt-32 pb-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <h1 className="text-5xl md:text-8xl font-serif text-[#F5F5F5] fade-in-section">Runway</h1>
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold fade-in-section delay-200">The Visual Narrative</span>
        </div>

        {/* Featured Runway */}
        <div className="mb-32 fade-in-section">
           <div className="relative aspect-video overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-[2000ms] group-hover:scale-105" 
                alt="Main Event"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-24 h-24 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059] bg-[#121212]/50 backdrop-blur-sm hover:bg-[#C5A059] hover:text-[#121212] transition-all">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                 </button>
              </div>
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-2">Live Now</p>
                  <h2 className="text-4xl md:text-6xl font-serif text-[#F5F5F5]">PARIS FASHION WEEK</h2>
                  <p className="text-[#F5F5F5]/60 text-sm mt-2">Trillz Fall/Winter 2024 Premiere</p>
                </div>
                <div className="hidden md:block">
                   <p className="text-[10px] uppercase tracking-widest text-[#F5F5F5]/40 text-right">Viewers</p>
                   <p className="text-xl font-mono text-[#F5F5F5]">12,482</p>
                </div>
              </div>
           </div>
        </div>

        {/* Archive Section */}
        <div className="mb-12">
           <h3 className="text-xs uppercase tracking-[0.6em] text-[#C5A059] font-bold mb-12 text-center">Event Archive</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {MOCK_FASHION_EVENTS.map((event) => (
               <div key={event.id} className="group fade-in-section">
                 <div className="relative aspect-[16/9] overflow-hidden mb-8">
                   <img 
                    src={event.videoThumbnail} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                    alt={event.title} 
                   />
                   <div className="absolute inset-0 bg-[#121212]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[#F5F5F5] text-[10px] uppercase tracking-widest font-bold border border-[#F5F5F5] px-6 py-2">Play Reel</span>
                   </div>
                 </div>
                 <div className="flex justify-between items-end">
                   <div>
                     <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-bold mb-2">{event.season}</p>
                     <h4 className="text-3xl font-serif text-[#F5F5F5]">{event.title}</h4>
                     <p className="text-[#F5F5F5]/40 text-xs mt-1">{event.location}</p>
                   </div>
                   <p className="text-[10px] uppercase tracking-widest text-[#F5F5F5]/40 mb-1">{event.date}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default FashionShows;
