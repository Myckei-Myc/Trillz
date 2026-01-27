import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
  useScrollReveal();

  const sections = [
    { title: 'Radio', subtitle: 'Sonic Luxury', path: '/radio', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop' },
    { title: 'The Collective', subtitle: 'Curated Artists', path: '/music', img: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Agency', subtitle: 'Visual Poetry', path: '/models', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Runway', subtitle: 'Couture Narrative', path: '/fashion-shows', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <div className="relative">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale pointer-events-none"
        >
          <source src="https://cdn.pixabay.com/video/2016/10/06/5753-185077274_medium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 luxury-overlay"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="overflow-hidden mb-6">
            <h2 className="text-[#C5A059] uppercase tracking-[0.8em] text-[10px] font-bold fade-in-section">
              The Vanguard of Aesthetic Excellence
            </h2>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-serif text-[#F5F5F5] leading-none mb-12 fade-in-section delay-200">
            TRILLZ<span className="italic text-[#C5A059]">.</span>
          </h1>
          <p className="text-[#F5F5F5]/70 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed tracking-wide fade-in-section delay-500">
            A sanctuary for the sophisticated. A boutique powerhouse redefining the intersection of high-fashion and sound.
          </p>
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 fade-in-section delay-700">
            <Link to="/radio" className="group flex items-center space-x-4 text-xs uppercase tracking-[0.4em] font-bold text-[#F5F5F5] hover:text-[#C5A059] transition-colors">
              <span>Enter Radio</span>
              <div className="w-12 h-px bg-[#F5F5F5]/30 group-hover:w-20 group-hover:bg-[#C5A059] transition-all duration-700"></div>
            </Link>
            <Link to="/fashion-shows" className="group flex items-center space-x-4 text-xs uppercase tracking-[0.4em] font-bold text-[#F5F5F5] hover:text-[#C5A059] transition-colors">
              <span>The Runway</span>
              <div className="w-12 h-px bg-[#F5F5F5]/30 group-hover:w-20 group-hover:bg-[#C5A059] transition-all duration-700"></div>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 fade-in-section delay-1000">
          <span className="text-[8px] uppercase tracking-[0.4em] mb-4">Discover More</span>
          <div className="w-px h-16 bg-[#F5F5F5] animate-pulse"></div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-[#121212] py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="fade-in-section">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F5F5F5] leading-tight mb-12">
              Beyond the Visual. <br/>A Sonic <span className="italic">Manifesto.</span>
            </h2>
            <p className="text-[#F5F5F5]/60 text-lg leading-relaxed font-light mb-12">
              Trillz isn't just a label; it's a movement. We curate experiences that challenge the status quo, marrying the raw energy of urban culture with the refined elegance of Parisian high-fashion.
            </p>
            <div className="w-32 h-px bg-[#C5A059]"></div>
          </div>
          <div className="relative fade-in-section delay-300">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
              alt="Editorial" 
              className="w-full h-[600px] object-cover grayscale brightness-75"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#C5A059] p-12 hidden lg:block">
              <p className="text-[#121212] text-sm font-serif italic max-w-[200px]">
                "Style is a way to say who you are without having to speak."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hub */}
      <section className="bg-[#121212] pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((section, idx) => (
              <Link 
                key={idx} 
                to={section.path}
                className="group relative aspect-[3/4] overflow-hidden fade-in-section"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <img 
                  src={section.img} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-[1.5s]"
                  alt={section.title}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.4em] font-bold mb-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {section.subtitle}
                  </span>
                  <h3 className="text-3xl font-serif text-[#F5F5F5] group-hover:text-[#C5A059] transition-colors">
                    {section.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;