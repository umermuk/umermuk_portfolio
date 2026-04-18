import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Discovery</h2>
            <h3 className="text-4xl font-bold mb-6">About Me</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                I am a passionate Backend Specialist with over 4 years of experience crafting robust architectures with PHP Laravel and 2+ years of building high-concurrency systems using Node.js. My focus is on creating scalable, reliable, and secure server-side applications that provide seamless user experiences.
              </p>
              <p>
                Throughout my career, I have worked on diverse projects ranging from real-time bidding platforms and complex CRM systems to high-traffic ecommerce sites. I thrive on solving complex technical challenges and optimizing performance to the microsecond.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 glass rounded-2xl">
                <h4 className="text-3xl font-bold text-primary">4+</h4>
                <p className="text-sm text-slate-500">Years with Laravel</p>
              </div>
              <div className="p-4 glass rounded-2xl">
                <h4 className="text-3xl font-bold text-secondary">2+</h4>
                <p className="text-sm text-slate-500">Years with Node.js</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
