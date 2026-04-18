import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Connect</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-none">
              Let's Build <br />
              <span className="text-gradient">Something</span> <br />
              Together.
            </h3>
            <p className="text-slate-400 text-xl font-medium mb-12 max-w-lg leading-relaxed">
              Have a project or idea? I'm always open to discussing new opportunities, creative systems or original visions.
            </p>

            <div className="space-y-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-8 group w-fit">
                <div className="p-5 glass rounded-[2rem] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/10">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Direct Email</p>
                  <p className="text-2xl font-black group-hover:text-primary transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex gap-6 mt-12">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  className="p-5 glass rounded-3xl text-slate-400 hover:text-white hover:border-primary/50 transition-all border border-white/5 shadow-xl"
                >
                  <FaGithub size={28} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  className="p-5 glass rounded-3xl text-slate-400 hover:text-white hover:border-primary/50 transition-all border border-white/5 shadow-xl"
                >
                  <FaLinkedin size={28} />
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
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows="6"
                    placeholder="Tell me about your project or vision..."
                    className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg resize-none"
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-gradient-to-r from-primary to-secondary rounded-3xl font-black text-white text-xl flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/30 transition-all group"
                >
                  Send Inquiry 
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
