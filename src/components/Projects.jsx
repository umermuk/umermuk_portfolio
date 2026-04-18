import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, ArrowUpRight, Github } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-card/20 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-black leading-tight">Impact <span className="text-slate-500">Delivered.</span></h3>
          </div>
          <p className="max-w-md text-slate-400 text-xl font-medium">
            Engineering solutions that solve real-world problems with high-performance architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/[0.01] rounded-[3rem] group-hover:bg-primary/[0.03] transition-colors duration-700" />
              <div className="relative glass rounded-[3rem] overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl">
                {/* Project Image Header */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-3 py-1 glass text-[10px] font-black uppercase tracking-wider text-white border border-white/10 rounded-lg backdrop-blur-2xl">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      className="p-4 bg-white text-black rounded-2xl hover:bg-primary hover:text-white transition-colors shadow-2xl"
                    >
                      <FaGithub size={24} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      className="p-4 bg-white text-black rounded-2xl hover:bg-primary hover:text-white transition-colors shadow-2xl"
                    >
                      <ExternalLink size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 text-primary mb-2">
                        <project.icon size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">{project.feature}</span>
                      </div>
                      <h4 className="text-3xl font-black text-white group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h4>
                    </div>
                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex-1">
                    <div className="relative pl-6 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 block mb-1">Problem</span>
                      <p className="text-slate-400 font-medium leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-secondary/20 group-hover:border-secondary/50 transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary/60 block mb-1">Solution</span>
                      <p className="text-slate-500 font-medium leading-relaxed italic">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.tech.map((t, i) => (
                        <div key={t} className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-[8px] font-black text-slate-500 uppercase tracking-tighter hover:z-10 hover:text-white transition-all cursor-default" title={t}>
                          {t.substring(0, 2)}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Case Study</span>
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
