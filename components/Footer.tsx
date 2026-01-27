
import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] pt-24 pb-12 border-t border-[#F5F5F5]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold tracking-widest text-[#F5F5F5] mb-6">
              TRILLZ<span className="text-[#C5A059]">.</span>
            </h3>
            <p className="text-[#F5F5F5]/60 text-sm leading-relaxed max-w-xs">
              Defining the frontier of luxury lifestyle across music, fashion, and visual arts.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-[#F5F5F5]/60">
              <li><a href="#/radio" className="hover:text-white transition-colors">Trillz Radio</a></li>
              <li><a href="#/music" className="hover:text-white transition-colors">Music Artists</a></li>
              <li><a href="#/models" className="hover:text-white transition-colors">Model Agency</a></li>
              <li><a href="#/fashion-shows" className="hover:text-white transition-colors">Runway Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#F5F5F5]/60">
              <li><a href="#" className="hover:text-white transition-colors">Our Ethos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5A059] uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-[#F5F5F5]/60 hover:text-white transition-colors">
                <Icons.Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#F5F5F5]/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-[#C5A059] mb-4">Subscribe for Exclusives</p>
              <div className="flex">
                <input type="email" placeholder="Email Address" className="bg-transparent border-b border-[#C5A059]/40 text-xs py-2 w-full focus:outline-none focus:border-[#C5A059]" />
                <button className="ml-4 text-[#C5A059]"><Icons.ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#F5F5F5]/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#F5F5F5]/40">
          <p>© 2024 TRILLZ WORLDWIDE. ALL RIGHTS RESERVED.</p>
          <p>CRAFTED FOR THE UNCOMPROMISING.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
