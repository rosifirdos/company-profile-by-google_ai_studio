import { motion } from 'motion/react';
import { 
  Code, 
  Cloud, 
  Database, 
  Smartphone, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software',
    desc: 'Bespoke web and enterprise systems tailored to your unique workflows and goals.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'Scalable and secure cloud architecture to power your business growth and agility.',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'High-performance native and cross-platform mobile apps for iOS and Android.',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    desc: 'Converting raw data into actionable business intelligence and predictive insights.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    desc: 'Robust protection strategies for your digital assets and customer privacy.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: BarChart3,
    title: 'UI/UX Design',
    desc: 'Crafting intuitive and engaging user experiences that delight and convert.',
    color: 'bg-orange-50 text-orange-600'
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-text-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="lg:w-1/3">
            <span className="label-uppercase text-accent opacity-80">Core Expertise</span>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter">
              Exceptional<br/>Digital<br/>Services.
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We provide end-to-end digital expertise to help you build, launch, and scale your digital products in the modern market.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col w-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-white/20 py-8 flex items-end justify-between hover:border-accent transition-colors cursor-default"
              >
                <div className="flex items-start gap-8">
                   <div className="text-accent font-black text-xl italic opacity-40 group-hover:opacity-100 transition-opacity">
                     0{index + 1}
                   </div>
                   <div>
                     <h4 className="text-2xl md:text-4xl font-light italic text-white group-hover:text-accent transition-colors">
                       {service.title}
                     </h4>
                     <p className="text-slate-500 max-w-md mt-4 text-sm leading-relaxed hidden md:block group-hover:text-slate-300 transition-colors">
                       {service.desc}
                     </p>
                   </div>
                </div>
                <service.icon className="w-8 h-8 text-white/10 group-hover:text-accent transition-all group-hover:scale-125" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
