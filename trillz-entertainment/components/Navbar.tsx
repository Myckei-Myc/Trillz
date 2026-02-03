
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    // Re-enable scroll when menu closes
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    // Prevent body scroll when menu is open
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  const navLinks = [
    { name: 'Radio', path: '/radio' },
    { name: 'Music', path: '/music' },
    { name: 'Agency', path: '/models' },
    { name: 'Runway', path: '/fashion-shows' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
          isScrolled || isMenuOpen 
            ? 'bg-[#121212]/90 backdrop-blur-2xl py-5 border-b border-[#F5F5F5]/5' 
            : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold tracking-[0.3em] text-[#F5F5F5] group z-50"
          >
            TRILLZ<span className="text-[#C5A059] group-hover:translate-x-1 inline-block transition-transform duration-500">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-16">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-hover text-[10px] uppercase tracking-[0.4em] font-medium transition-colors ${
                  location.pathname === link.path ? 'text-[#C5A059]' : 'text-[#F5F5F5]/60 hover:text-[#F5F5F5]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-8">
            <button className="hidden lg:block text-[9px] uppercase tracking-[0.4em] text-[#C5A059] border border-[#C5A059]/30 px-6 py-2 hover:bg-[#C5A059] hover:text-[#121212] transition-all">
              Member Login
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-[#F5F5F5] z-50 p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <span className={`h-px bg-current transition-all duration-500 ${isMenuOpen ? 'w-6 absolute top-2 rotate-45' : 'w-6'}`}></span>
                <span className={`h-px bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-px bg-current transition-all duration-500 ${isMenuOpen ? 'w-6 absolute top-2 -rotate-45' : 'w-2'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#121212] flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-10 text-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-3xl font-serif tracking-[0.2em] transition-all duration-700 ${
                location.pathname === link.path ? 'text-[#C5A059]' : 'text-[#F5F5F5]/70 hover:text-[#C5A059]'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${idx * 100}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: isMenuOpen ? 1 : 0
              }}
            >
              {link.name}
            </Link>
          ))}
          <div 
            className="pt-10 transition-all duration-700 delay-500"
            style={{ 
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: isMenuOpen ? 1 : 0
            }}
          >
            <button className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] border border-[#C5A059]/30 px-12 py-5 hover:bg-[#C5A059] hover:text-[#121212] transition-all">
              Member Login
            </button>
          </div>
        </div>
        
        {/* Footer info in menu */}
        <div className="absolute bottom-12 text-[9px] uppercase tracking-[0.5em] text-[#F5F5F5]/20 font-bold">
          TRILLZ WORLDWIDE • EST. 2024
        </div>
      </div>
    </>
  );
};

export default Navbar;
