import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Link } from 'react-scroll';
import { ChevronDown, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-wider mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8">
            {personalInfo.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-12 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="projects" smooth={true} className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/25 cursor-pointer">
                View My Work
              </button>
            </Link>
            <a href="#" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 glass rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
                Download CV <Download size={18} />
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
