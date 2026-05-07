import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 lg:pt-40 border-b border-theme overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Left Column */}
          <div className="lg:w-[60%] lg:border-r border-theme py-12 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-uppercase text-accent underline underline-offset-4">Est. 2024</span>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-10">
                Building<br/>Digital<br/>Legacies.
              </h1>
              
              <p className="max-w-md text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                We transform ambitious visions into high-performance digital realities through precision engineering and avant-garde design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-brutalist">
                  Start a Project
                </a>
                <a href="#services" className="btn-brutalist-outline">
                  Our Process
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Featured Visual */}
          <div className="lg:w-[40%] flex flex-col pt-12 lg:pt-0">
            <div className="flex-1 p-8 lg:p-12 flex items-center justify-center bg-slate-100">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.3 }}
                 className="w-full h-full relative"
               >
                 <img
                    src="https://picsum.photos/seed/cyber-brutalism/1200/1600"
                    alt="Cyber Abstract"
                    className="w-full h-full object-cover grayscale brightness-75 border border-theme"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-text-primary text-white text-[10px] font-bold uppercase tracking-widest">
                    Featured Project: Solara
                  </div>
               </motion.div>
            </div>
            
            <div className="h-40 border-t border-theme flex items-center px-8 lg:px-12 gap-6 bg-accent text-white">
              <div className="w-16 h-16 bg-white/20 border border-white/30 flex items-center justify-center">
                <Rocket className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-1">Our Mission</h3>
                <p className="text-sm italic opacity-90 leading-tight">"To bridge the gap between human creativity and technology."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
