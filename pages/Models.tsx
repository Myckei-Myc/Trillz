import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MOCK_MODELS } from '../constants';

const Models: React.FC = () => {
  useScrollReveal();

  return (
    <div className="pt-40 pb-32 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 fade-in-section">
          <span className="text-[#C5A059] uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">The Agency</span>
          <h1 className="text-7xl md:text-[10rem] font-serif text-[#F5F5F5] leading-none mb-12">Faces<span className="italic">.</span></h1>
          <div className="w-px h-24 bg-[#C5A059]/30 mx-auto mt-12"></div>
        </div>

        {/* High-End Grid Filter */}
        <div className="flex flex-wrap justify-center gap-12 mb-32 fade-in-section delay-200">
          {['New Faces', 'Women', 'Men', 'Special Booking', 'Campaigns'].map((tab, idx) => (
            <button key={tab} className="group relative overflow-hidden pb-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F5F5]/40 group-hover:text-[#C5A059] transition-colors">{tab}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-500"></div>
            </button>
          ))}
        </div>

        {/* Agency Style Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12 items-end">
          {MOCK_MODELS.map((model, idx) => {
            // Logic to create an asymmetrical feel
            const isWide = idx % 5 === 0;
            const isTall = idx % 3 === 0;
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
            const offset = idx % 2 === 0 ? 'md:mb-20' : '';

            return (
              <div key={model.id} className={`${colSpan} ${offset} group fade-in-section`} style={{ transitionDelay: `${(idx % 3) * 150}ms` }}>
                <div className="relative overflow-hidden mb-10 aspect-[3/4]">
                  <img 
                    src={model.imageUrl} 
                    className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[2s] group-hover:scale-110 group-hover:brightness-100" 
                    alt={model.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  {/* Stats Overlay on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 z-20">
                    <div className="space-y-4 max-w-[200px]">
                      <div className="flex justify-between text-[8px] uppercase tracking-widest text-[#C5A059] border-b border-[#C5A059]/20 pb-2">
                        <span>Height</span>
                        <span>{model.height}</span>
                      </div>
                      <div className="flex justify-between text-[8px] uppercase tracking-widest text-[#F5F5F5]/60 border-b border-[#F5F5F5]/10 pb-2">
                        <span>Measurements</span>
                        <span>{model.measurements}</span>
                      </div>
                      <div className="flex justify-between text-[8px] uppercase tracking-widest text-[#F5F5F5]/60">
                        <span>Agency</span>
                        <span>{model.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#F5F5F5] tracking-widest uppercase group-hover:text-[#C5A059] transition-colors">{model.name}</h3>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#F5F5F5]/30 mt-2">Professional Series</p>
                  </div>
                  <button className="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] group-hover:translate-x-2 transition-transform">
                    View Portfolio →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Recruitment Section */}
        <div className="mt-60 border-t border-[#F5F5F5]/5 pt-40 flex flex-col items-center fade-in-section">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-12 max-w-3xl leading-tight">
             We are searching for the <span className="italic text-[#C5A059]">unconventional.</span>
          </h2>
          <p className="text-[#F5F5F5]/40 text-sm uppercase tracking-[0.4em] mb-16">Global Representation Inquiry</p>
          <button className="relative group px-16 py-6 bg-transparent border border-[#C5A059] overflow-hidden">
            <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold text-[#C5A059] group-hover:text-[#121212] transition-colors">Apply to Join</span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Models;