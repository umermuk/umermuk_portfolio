import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Link } from 'react-scroll';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary uppercase tracking-widest mb-8 border border-primary/20"
          >
            {personalInfo.impactLine}
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            {personalInfo.title.split('|')[0].trim()} <br />
            <span className="text-gradient">
              {personalInfo.title.split('|')[1].trim()}
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-xl md:text-2xl mb-12 font-medium leading-relaxed">
            {personalInfo.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="projects" smooth={true} className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold text-white shadow-2xl shadow-primary/20 cursor-pointer flex items-center justify-center gap-2 group"
              >
                View My Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="#" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="w-full px-10 py-5 glass rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/5"
              >
                Download CV <Download size={18} />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
      >
        <Link to="about" smooth={true}>
          <ChevronDown size={40} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};
