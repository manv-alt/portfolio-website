import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentPrimary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentSecondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accentPrimary font-medium text-sm mb-6">
              Hi, I am Manish Karkera
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting Digital <br className="hidden md:block" />
            <span className="text-gradient">Experiences</span> With Code
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Motivated and detail-oriented Full Stack MERN Developer, passionate about building scalable web applications and delivering seamless user experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-darkBg font-semibold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            className="mt-16 flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://github.com/manv-alt" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/karkera-shivananda-b6965138" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accentPrimary transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-[#1DA1F2] transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
