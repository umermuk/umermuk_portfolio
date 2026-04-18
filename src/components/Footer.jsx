import React from 'react';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link 
            to="home" 
            smooth={true} 
            className="text-2xl font-bold text-gradient cursor-pointer"
          >
            Portfolio.
          </Link>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 uppercase tracking-widest font-medium">
            <Link to="about" smooth={true} className="hover:text-white transition-colors cursor-pointer">About</Link>
            <Link to="projects" smooth={true} className="hover:text-white transition-colors cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} className="hover:text-white transition-colors cursor-pointer">Contact</Link>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
