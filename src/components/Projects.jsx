import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold">Selected Projects</h3>
          </div>
          <p className="max-w-md text-slate-400">
            A selection of my recent works involving complex backend architectures and real-time solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-[2rem] overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </button>
                  <button className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="text-slate-600 group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="text-sm">
                    <span className="text-primary font-semibold uppercase tracking-tighter text-[10px]">Problem:</span>
                    <p className="text-slate-500">{project.problem}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-secondary font-semibold uppercase tracking-tighter text-[10px]">Solution:</span>
                    <p className="text-slate-500">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded text-slate-400">
                      {t}
                    </span>
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
