import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Journey</h2>
          <h3 className="text-4xl font-bold">Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase size={120} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-lg leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
