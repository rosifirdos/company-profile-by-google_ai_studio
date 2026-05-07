import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'Data'];

const projects = [
  {
    id: 1,
    title: 'EduFlow Learning Platform',
    category: 'Web',
    img: 'https://picsum.photos/seed/project1/800/600',
    desc: 'Scalable LMS for corporate training with AI-driven paths.'
  },
  {
    id: 2,
    title: 'SafePay Mobile Wallet',
    category: 'Mobile',
    img: 'https://picsum.photos/seed/project2/800/600',
    desc: 'Fintech solution with biometric security and instant transfers.'
  },
  {
    id: 3,
    title: 'MarketInsights Dashboard',
    category: 'Data',
    img: 'https://picsum.photos/seed/project3/800/600',
    desc: 'Real-time retail analytics with predictive supply chain integration.'
  },
  {
    id: 4,
    title: 'EcoHome IoT System',
    category: 'Web',
    img: 'https://picsum.photos/seed/project4/800/600',
    desc: 'Connected device management with energy optimization hooks.'
  },
  {
    id: 5,
    title: 'HealthLink Patient App',
    category: 'Mobile',
    img: 'https://picsum.photos/seed/project5/800/600',
    desc: 'Telemedicine platform connecting 50k+ active users.'
  },
  {
    id: 6,
    title: 'RetailFlow POS',
    category: 'Web',
    img: 'https://picsum.photos/seed/project6/800/600',
    desc: 'Modern point-of-sale system for multi-location businesses.'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="label-uppercase text-accent">Selected Projects</span>
            <h3 className="text-5xl md:text-8xl font-black text-text-primary tracking-tighter">
              LATEST<br/>WORK.
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-4 border-b border-theme pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-black uppercase tracking-widest transition-all px-4 py-2 ${
                  activeCategory === cat 
                    ? 'bg-text-primary text-white' 
                    : 'text-text-primary/40 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-theme"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative border-r border-b border-theme aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-accent/90 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-black/20">
                      {project.category}
                    </span>
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white uppercase leading-none mb-2">
                      {project.title}
                    </h4>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wider">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
