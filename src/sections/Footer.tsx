import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-text-primary text-white">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">
          © {currentYear} Nexus Digital Solutions Inc.
        </div>
        
        <div className="flex gap-8 items-center">
          <a href="#" className="text-[10px] uppercase font-black tracking-widest hover:text-accent transition-colors">
            Twitter
          </a>
          <a href="#" className="text-[10px] uppercase font-black tracking-widest hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-[10px] uppercase font-black tracking-widest hover:text-accent transition-colors">
            Github
          </a>
        </div>

        <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">
          Jakarta, Indonesia / Palo Alto, CA
        </div>
      </div>
    </footer>
  );
}
