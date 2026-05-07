import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 border border-theme">
          <div className="relative border-b lg:border-b-0 lg:border-r border-theme">
             <img
              src="https://picsum.photos/seed/brutalist-team/1000/1200"
              alt="Our Team"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 right-0 bg-text-primary p-6 text-white text-xs font-bold uppercase tracking-widest">
              Since 2012
            </div>
          </div>

          <div className="p-12 lg:p-20 bg-white">
            <span className="label-uppercase text-accent">About Nexus</span>
            <h3 className="text-4xl md:text-6xl font-black text-text-primary mb-10 leading-tight">
              Strategic Technology.<br/>Avant-Garde Design.
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We operate at the intersection of logic and imagination. Our approach is defined by uncompromising precision and a relentless drive for digital excellence.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-12 h-12 border border-theme flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Our Mission</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic">"To realize the potential of every digital ambitious through intentional architecture."</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-12 h-12 border border-theme flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Our Vision</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic">"To define the future of human-machine interaction."</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-slate-100 flex items-center gap-6 grayscale opacity-60">
              <Award className="w-10 h-10" />
              <p className="text-[10px] uppercase font-bold tracking-widest leading-none">
                ISO 9001:2015 Certified Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
