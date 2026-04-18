import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Journey</h2>
          <h3 className="text-5xl md:text-6xl font-black">Professional <span className="text-slate-500">Milestones.</span></h3>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/[0.01] rounded-[3rem] group-hover:bg-primary/[0.02] transition-colors duration-500" />
              <div className="relative glass p-10 md:p-14 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Left Side: Role & Company */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 text-primary mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Briefcase size={24} />
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <h4 className="text-3xl font-black text-white mb-2">{exp.role}</h4>
                    <p className="text-xl font-bold text-slate-500">{exp.company}</p>
                  </div>

                  {/* Right Side: Highlights */}
                  <div className="lg:w-2/3 space-y-8">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-6 group/item">
                        <div className="mt-1">
                          <CheckCircle2 size={24} className="text-primary group-hover/item:scale-110 transition-transform" />
                        </div>
                        <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative background number */}
                <div className="absolute top-10 right-14 text-9xl font-black text-white/[0.02] pointer-events-none select-none">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
