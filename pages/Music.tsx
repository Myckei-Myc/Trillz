
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MOCK_ARTISTS } from '../constants';

const Music: React.FC = () => {
  useScrollReveal();

  return (
    <div className="pt-32 pb-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#F5F5F5] mb-6 fade-in-section">The Collective</h1>
            <p className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold fade-in-section delay-100">Boutique Roster of Sonic Visionaries</p>
          </div>
          <div className="flex space-x-12 fade-in-section">
            <button className="text-[10px] uppercase tracking-widest text-[#F5F5F5] border-b border-[#C5A059]">All Artists</button>
            <button className="text-[10px] uppercase tracking-widest text-[#F5F5F5]/40 hover:text-white transition-colors">New Releases</button>
            <button className="text-[10px] uppercase tracking-widest text-[#F5F5F5]/40 hover:text-white transition-colors">Playlists</button>
          </div>
        </div>

        {/* Featured Artist (Larger) */}
        <div className="mb-24 relative group overflow-hidden fade-in-section">
          <div className="aspect-[21/9] w-full">
             <img 
               src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
               alt="Featured Artist"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <span className="text-[#C5A059] text-xs uppercase tracking-[0.5em] font-bold mb-4 block">Artist of the Month</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#F5F5F5] mb-6">XAVIER VOSS</h2>
            <button className="bg-[#F5F5F5] text-[#121212] px-8 py-3 text-[10px] uppercase tracking-widest font-bold">Discover Portfolio</button>
          </div>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {MOCK_ARTISTS.map((artist) => (
            <div key={artist.id} className="group cursor-pointer fade-in-section">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={artist.imageUrl} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  alt={artist.name} 
                />
                <div className="absolute inset-0 bg-[#C5A059]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif text-[#F5F5F5] group-hover:text-[#C5A059] transition-colors">{artist.name}</h3>
                  <p className="text-[#F5F5F5]/40 text-xs uppercase tracking-widest">{artist.genre}</p>
                </div>
                <div className="text-right">
                   <p className="text-[#C5A059] text-[8px] uppercase tracking-widest font-bold mb-1">Latest Release</p>
                   <p className="text-[#F5F5F5]/60 text-[10px]">{artist.latestRelease}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
