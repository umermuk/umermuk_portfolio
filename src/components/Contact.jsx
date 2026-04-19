import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, ArrowRight, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Inquiries</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-none">
              Let's Architect <br />
              <span className="text-gradient">Success</span> <br />
              Together.
            </h3>
            <p className="text-slate-400 text-xl font-medium mb-12 max-w-lg leading-relaxed">
              I'm available for technical consultation, system architecture design, and complex backend engineering projects.
            </p>

            <div className="space-y-10">
              <div className="relative group w-fit">
                <div className="flex items-center gap-8 cursor-pointer" onClick={copyEmail}>
                  <div className="p-6 glass rounded-[2.5rem] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/10 relative">
                    <Mail size={36} />
                    <AnimatePresence>
                      {copied && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: -45 }}
                          exit={{ opacity: 0, scale: 0.5, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg uppercase tracking-widest whitespace-nowrap shadow-xl"
                        >
                          Email Copied!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                      Direct Contact {copied ? <Check size={12} className="text-primary" /> : <Copy size={12} className="group-hover:text-primary transition-colors" />}
                    </p>
                    <p className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors tracking-tight">{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-6">
                <motion.a 
                  whileHover={{ y: -5, scale: 1.05 }}
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  className="p-6 glass rounded-[2rem] text-slate-400 hover:text-white hover:border-primary/50 transition-all border border-white/5 shadow-xl"
                >
                  <FaGithub size={32} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.05 }}
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  className="p-6 glass rounded-[2rem] text-slate-400 hover:text-white hover:border-primary/50 transition-all border border-white/5 shadow-xl"
                >
                  <FaLinkedin size={32} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
              <form className="relative glass p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-2xl space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message Brief</label>
                  <textarea 
                    rows="5"
                    placeholder="Briefly describe the technical challenge or project scope..."
                    className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-gradient-to-r from-primary to-secondary rounded-3xl font-black text-white text-xl flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/30 transition-all group"
                >
                  Initiate Discussion 
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
