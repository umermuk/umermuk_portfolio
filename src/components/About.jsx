import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data';

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Discovery</h2>
            <h3 className="text-5xl md:text-6xl font-black mb-10 leading-tight">
              Engineering <span className="text-slate-500">Excellence.</span>
            </h3>
            <div className="space-y-6 text-slate-400 leading-relaxed text-xl font-medium">
              {aboutContent.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors rounded-3xl" />
                <div className="relative p-6 glass rounded-3xl border border-white/5">
                  <h4 className="text-4xl font-black text-white">4+</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Laravel</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary/20 blur-xl group-hover:bg-secondary/30 transition-colors rounded-3xl" />
                <div className="relative p-6 glass rounded-3xl border border-white/5">
                  <h4 className="text-4xl font-black text-white">2+</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Node.js</p>
                </div>
              </div>
              <div className="relative group hidden md:block">
                <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/30 transition-colors rounded-3xl" />
                {/* <div className="relative p-6 glass rounded-3xl border border-white/5">
                  <h4 className="text-4xl font-black text-white">50k+</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Daily Users</p>
                </div> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative"
          >
            <div className="aspect-[4/5] glass rounded-[3rem] overflow-hidden relative group border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                alt="Code architecture"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 backdrop-blur-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold italic">
                  "Architecture is about the important stuff. Whatever that is."
                </p>
                <p className="text-slate-500 text-sm mt-2 font-medium">— Ralph Johnson</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
