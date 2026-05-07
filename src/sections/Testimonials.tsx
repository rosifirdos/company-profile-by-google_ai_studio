import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, Fintech Solutions',
    img: 'https://i.pravatar.cc/150?u=10',
    quote: 'NexusTech transformed our legacy system into a modern, cloud-native masterpiece. Their engineering depth is truly world-class.',
    company: 'Fintech Solutions'
  },
  {
    name: 'James Rodriguez',
    role: 'Product Manager, Global Pulse',
    img: 'https://i.pravatar.cc/150?u=11',
    quote: 'Responsive, professional, and highly skilled. They didn\'t just build an app; they built a scalable solution for our thousands of users.',
    company: 'Global Pulse'
  },
  {
    name: 'Elena Gilbert',
    role: 'Founder, EcoStart',
    img: 'https://i.pravatar.cc/150?u=12',
    quote: 'The design team at NexusTech is incredible. They understood our brand vision and executed it flawlessly across all platforms.',
    company: 'EcoStart'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-text-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="label-uppercase text-accent opacity-80">Testimonials</span>
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">CLIENT VOICES.</h3>
          <p className="text-lg text-slate-400">
            Driving transformation for the world's most ambitious brands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 border border-theme">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 border-b lg:border-b-0 border-theme ${index < testimonials.length - 1 ? 'lg:border-r' : ''} bg-slate-900/50 relative group cursor-default`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="flex gap-1 mb-8 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>

              <p className="text-lg text-slate-200 italic mb-10 leading-relaxed font-light">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 grayscale border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white">{t.name}</h4>
                  <p className="text-[10px] uppercase font-medium text-slate-500 tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-20 grayscale">
           {['Microsoft', 'Google', 'Amazon', 'Spotify', 'Netflix'].map((brand) => (
             <span key={brand} className="text-xl md:text-3xl font-black tracking-tighter cursor-default hover:text-white transition-colors">
               {brand.toUpperCase()}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
}
