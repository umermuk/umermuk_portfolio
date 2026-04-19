import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, ArrowUpRight, Code2, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-black leading-tight">System <span className="text-slate-500">Architecture.</span></h3>
          </div>
          <p className="max-w-md text-slate-400 text-xl font-medium leading-relaxed">
            Engineering robust backend solutions with high-performance infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/[0.01] rounded-[4rem] group-hover:bg-primary/[0.03] transition-colors duration-700" />
              <div className="relative glass rounded-[4rem] overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl">
                {/* Project Image Header */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-10 md:p-12 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 text-primary mb-3">
                        <project.icon size={22} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{project.feature}</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-black text-white group-hover:text-primary transition-colors duration-500 tracking-tight">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex-1 mb-10">
                    <p className="text-slate-400 font-medium leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="relative pl-6 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 block mb-2">Technical Breakdown</span>
                      <p className="text-slate-500 font-medium leading-relaxed italic text-sm">{project.breakdown}</p>
                    </div>
                  </div>

                  {/* Tech Tags at the Bottom */}
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 tracking-tight">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
