import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="flex-1"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let's build something <br />
              <span className="text-gradient">extraordinary</span> together.
            </h3>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              I'm always open to discussing new projects, creative ideas or original opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group w-fit">
                <div className="p-4 glass rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Email me</p>
                  <p className="text-xl font-bold">{personalInfo.email}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              <a href={personalInfo.socials.github} target="_blank" className="p-4 glass rounded-2xl text-slate-400 hover:text-white hover:border-primary/50 transition-all">
                <FaGithub size={24} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" className="p-4 glass rounded-2xl text-slate-400 hover:text-white hover:border-primary/50 transition-all">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="flex-1 glass p-8 md:p-12 rounded-[3rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold text-white flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
