import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';
import { Link } from 'react-scroll';
import { ChevronDown, Download, ArrowRight, Terminal } from 'lucide-react';

const TypingEffect = () => {
  const words = ["Laravel", "Node.js", "Docker", "Redis", "System Architecture"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-mono text-primary">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Live Status Indicator */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 bg-primary/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Available for Projects</span>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
            Scalable <span className="text-gradient">Backend</span> <br />
            Architecture.
          </h1>

          <div className="flex items-center justify-center gap-3 mb-12 text-slate-400 text-xl md:text-2xl font-medium">
            <Terminal size={24} className="text-primary" />
            <p>
              Deep dive into <TypingEffect />
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed italic">
            "Senior Engineering focused on high-concurrency systems and complex logic optimization."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="projects" smooth={true} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold text-white shadow-2xl shadow-primary/20 cursor-pointer flex items-center justify-center gap-2 group"
              >
                Explore Systems
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <a href="https://drive.google.com/file/d/1vRTBkPgFb9IgozGqu-4ie2mW9WPBkmfo/view?usp=drive_link" className="w-full sm:w-auto" target="_blank">
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
