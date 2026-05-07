import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row border border-theme">
          <div className="lg:w-1/2 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-theme space-y-12">
            <div>
              <span className="label-uppercase text-accent">Get in Touch</span>
              <h3 className="text-4xl md:text-6xl font-black text-text-primary leading-[0.9] tracking-tighter mb-8 text-balance">
                READY TO START THE CONVERSATION?
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-text-primary hover:text-accent transition-colors cursor-pointer group">
                <div className="w-10 h-10 border border-theme flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">hello@nexus.digital</span>
              </div>
              <div className="flex items-center gap-4 text-text-primary hover:text-accent transition-colors cursor-pointer group">
                <div className="w-10 h-10 border border-theme flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">+1 (555) 000-0000</span>
              </div>
            </div>

            <div className="aspect-video w-full grayscale border border-theme brightness-90 contrast-125">
               <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.21773099908!2d-122.1524!3d37.4524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1655000000000"
                className="w-full h-full grayscale opacity-60 hover:opacity-100 transition-opacity"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 p-8 lg:p-16 bg-accent/5 flex flex-col justify-center"
          >
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-10">Send Your Query</h4>
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2 border-b border-theme pb-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-primary/40">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent text-sm font-bold pb-2 outline-none placeholder:text-text-primary/10"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2 border-b border-theme pb-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-primary/40">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent text-sm font-bold pb-2 outline-none placeholder:text-text-primary/10"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 border-b border-theme pb-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-primary/40">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-transparent text-sm font-bold pb-2 outline-none placeholder:text-text-primary/10"
                  placeholder="john@nexus.digital"
                  required
                />
              </div>

              <div className="space-y-2 border-b border-theme pb-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-primary/40">Project Details</label>
                <textarea
                  className="w-full bg-transparent text-sm font-bold pb-2 outline-none min-h-[100px] resize-none placeholder:text-text-primary/10"
                  placeholder="Tell us about the digital legacy we're building..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-text-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-3 active:scale-95"
              >
                Submit Query
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
