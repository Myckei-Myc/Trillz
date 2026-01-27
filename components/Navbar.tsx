import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Radio', path: '/radio' },
    { name: 'Music', path: '/music' },
    { name: 'Agency', path: '/models' },
    { name: 'Runway', path: '/fashion-shows' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${isScrolled ? 'bg-[#121212]/80 backdrop-blur-xl py-5 border-b border-[#F5F5F5]/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-[0.3em] text-[#F5F5F5] group">
          TRILLZ<span className="text-[#C5A059] group-hover:translate-x-1 inline-block transition-transform duration-500">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-hover text-[10px] uppercase tracking-[0.4em] font-medium transition-colors ${location.pathname === link.path ? 'text-[#C5A059]' : 'text-[#F5F5F5]/60 hover:text-[#F5F5F5]'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-8">
            <button className="hidden lg:block text-[9px] uppercase tracking-[0.4em] text-[#C5A059] border border-[#C5A059]/30 px-6 py-2 hover:bg-[#C5A059] hover:text-[#121212] transition-all">
                Member Login
            </button>
            <button className="md:hidden text-[#F5F5F5]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;