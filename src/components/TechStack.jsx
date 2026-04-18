import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-4xl font-bold">Tech Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <skill.icon size={28} />
                </div>
                <h4 className="text-xl font-bold">{skill.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-sm text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
