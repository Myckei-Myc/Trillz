import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icons, RADIO_SCHEDULE } from '../constants';

const Radio: React.FC = () => {
  useScrollReveal();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-40 pb-32 bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="fade-in-section">
            <h1 className="text-6xl md:text-9xl font-serif text-[#F5F5F5] mb-4">Radio<span className="text-[#C5A059]">.</span></h1>
            <p className="text-[#C5A059] uppercase tracking-[0.6em] text-[10px] font-bold">24/7 Global Transmission • Paris Hub</p>
          </div>
          <div className="fade-in-section delay-200">
            <p className="text-[4rem] font-serif italic text-[#F5F5F5]/10 leading-none">{time}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Audiophile Player */}
          <div className="lg:col-span-8 fade-in-section delay-300">
            <div className="bg-[#181818] border border-[#F5F5F5]/5 p-16 relative overflow-hidden">
               {/* Minimalist Visualizer */}
               <div className="flex items-end justify-center h-40 gap-2 mb-20">
                 {Array.from({ length: 32 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 bg-[#C5A059]/20 transition-all duration-300 ${isPlaying ? 'bg-[#C5A059]' : ''}`} 
                      style={{ 
                        height: isPlaying ? `${20 + Math.random() * 80}%` : '4px',
                        transitionDelay: `${i * 0.05}s`
                      }}
                    ></div>
                 ))}
               </div>

               <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="flex items-center space-x-12">
                   <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="group relative w-24 h-24 border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-500"
                   >
                     {isPlaying ? <Icons.Pause className="w-8 h-8" /> : <Icons.Play className="w-8 h-8 ml-1" />}
                     <div className={`absolute -inset-2 border border-[#C5A059]/20 rounded-full ${isPlaying ? 'animate-ping' : ''}`}></div>
                   </button>
                   <div>
                     <span className="inline-block px-3 py-1 border border-[#C5A059]/30 text-[#C5A059] text-[8px] uppercase tracking-widest font-bold mb-4">Live Stream</span>
                     <h3 className="text-3xl font-serif text-[#F5F5F5] mb-1 tracking-wide">SILK & OBSIDIAN</h3>
                     <p className="text-[#F5F5F5]/40 text-xs uppercase tracking-[0.2em]">Curated by Marcus Vane</p>
                   </div>
                 </div>

                 <div className="flex flex-col items-end space-y-4 w-full md:w-64">
                    <div className="flex justify-between w-full text-[9px] uppercase tracking-widest text-[#F5F5F5]/30">
                        <span>Volume</span>
                        <span>{volume}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={volume}
                      onChange={(e) => setVolume(parseInt(e.target.value))}
                      className="w-full accent-[#C5A059] h-[1px] bg-[#F5F5F5]/10 appearance-none cursor-pointer" 
                    />
                 </div>
               </div>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="p-8 border border-[#F5F5F5]/5 bg-[#181818]/50">
                    <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-2">Coming Up Next</p>
                    <p className="text-lg font-serif text-[#F5F5F5]">Midnight Masquerade (Extended Mix)</p>
                </div>
                <div className="p-8 border border-[#F5F5F5]/5 bg-[#181818]/50">
                    <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mb-2">Listeners</p>
                    <p className="text-lg font-serif text-[#F5F5F5]">4,291 Active</p>
                </div>
            </div>
          </div>

          {/* Schedule Sidebar */}
          <div className="lg:col-span-4 fade-in-section delay-500">
            <h2 className="text-xs uppercase tracking-[0.5em] text-[#F5F5F5] font-bold mb-12 flex items-center">
                <span className="w-8 h-px bg-[#C5A059] mr-4"></span>
                Weekly Schedule
            </h2>
            <div className="space-y-12">
              {RADIO_SCHEDULE.map((item, idx) => (
                <div key={item.id} className="group cursor-default">
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="text-[#C5A059] text-[9px] uppercase tracking-widest font-bold">{item.day}</p>
                    <p className="text-[#F5F5F5]/30 text-[9px] font-light">{item.time}</p>
                  </div>
                  <h4 className="text-xl font-serif text-[#F5F5F5] group-hover:text-[#C5A059] transition-colors duration-500">{item.title}</h4>
                  <p className="text-[#F5F5F5]/40 text-[10px] uppercase tracking-widest mt-1 italic">with {item.host}</p>
                </div>
              ))}
            </div>
            
            <button className="mt-16 w-full py-5 border border-[#C5A059]/20 text-[#C5A059] text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-700">
              Access Archives
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;