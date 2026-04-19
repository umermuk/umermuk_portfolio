import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

export const TechStack = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-black leading-tight">Technical <span className="text-slate-500">Arsenal.</span></h3>
          </div>
          <p className="text-slate-400 text-xl font-medium max-w-sm mb-2 leading-relaxed">
            Architecting robust systems with a focus on scalability and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-white/[0.02] rounded-[3rem] group-hover:bg-primary/5 transition-colors duration-500" />
              <div className="relative glass p-10 rounded-[3rem] border border-white/5 h-full flex flex-col hover:border-primary/20 transition-all duration-500 shadow-xl shadow-black/40">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-5 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <skill.icon size={36} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white">{skill.category}</h4>
                  </div>
                </div>

                <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {skill.items.map((item) => (
                    <div 
                      key={item.name}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                        item.highlight 
                        ? 'bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/10' 
                        : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {item.icon && <item.icon size={14} />}
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
