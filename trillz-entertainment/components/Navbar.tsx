
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle scroll detection for background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Auto-close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Radio', path: '/radio' },
    { name: 'Music', path: '/music' },
    { name: 'Agency', path: '/models' },
    { name: 'Runway', path: '/fashion-shows' },
  ];

  return (
    <>
      {/* Primary Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-700 ease-in-out ${
          isOpen ? 'z-[110]' : 'z-[100]'
        } ${
          isScrolled || isOpen 
            ? 'bg-[#121212]/90 backdrop-blur-xl py-5 border-b border-[#F5F5F5]/5' 
            : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Identity */}
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold tracking-[0.3em] text-[#F5F5F5] group relative z-[120]"
          >
            TRILLZ<span className="text-[#C5A059] group-hover:translate-x-1 inline-block transition-transform duration-500">.</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-16 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-hover text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-500 ${
                  location.pathname === link.path ? 'text-[#C5A059]' : 'text-[#F5F5F5]/50 hover:text-[#F5F5F5]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] border border-[#C5A059]/30 px-6 py-2 hover:bg-[#C5A059] hover:text-[#121212] transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            type="button"
            onClick={toggleMenu}
            className="md:hidden relative z-[120] w-12 h-12 flex items-center justify-center text-[#F5F5F5] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059] rounded-full"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between pointer-events-none">
              <span className={`block h-px bg-current transition-all duration-500 ease-in-out ${isOpen ? 'w-6 absolute top-2 rotate-45' : 'w-6'}`}></span>
              <span className={`block h-px bg-current transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'w-4 ml-auto'}`}></span>
              <span className={`block h-px bg-current transition-all duration-500 ease-in-out ${isOpen ? 'w-6 absolute top-2 -rotate-45' : 'w-2 ml-auto'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Luxury Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-[#121212] z-[90] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Visual Detail */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 border border-[#C5A059] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] border border-[#C5A059]/20 rounded-full"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center flex-grow space-y-12 px-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-4xl font-serif tracking-[0.2em] transition-all duration-700 ${
                location.pathname === link.path ? 'text-[#C5A059]' : 'text-[#F5F5F5]/80 hover:text-[#C5A059]'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${idx * 100 + 200}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(40px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="pt-12 transition-all duration-700"
            style={{ 
                transitionDelay: isOpen ? '600ms' : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(40px)',
                opacity: isOpen ? 1 : 0
            }}
          >
            <button className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] border border-[#C5A059]/30 px-12 py-5 active:bg-[#C5A059]/20 transition-all">
              Member Portal
            </button>
          </div>
        </div>
        
        {/* Mobile Footer Branding */}
        <div 
          className="relative pb-12 text-center transition-all duration-1000 delay-700"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          <div className="text-[9px] uppercase tracking-[0.5em] text-[#F5F5F5]/30 font-bold mb-2">
            TRILLZ WORLDWIDE
          </div>
          <div className="text-[8px] uppercase tracking-[0.4em] text-[#C5A059]/40">
            Establishment 2024 • Excellence Only
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
