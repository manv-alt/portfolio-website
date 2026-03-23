import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'GroceryMart - E-commerce App',
      desc: 'A full-stack e-commerce grocery platform with JWT authentication, real-time WebSockets, and robust Zod validation.',
      tech: ['MERN', 'Tailwind', 'WebSockets', 'Zod'],
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop',
      live: '#',
      github: 'https://github.com/manv-alt/project2'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-darkCard/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-accentPrimary">Projects</span>.
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A selection of my recent works. Each project was built to solve specific challenges and deliver a seamless user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-darkBg rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-darkBg/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-slate-400 hover:text-accentPrimary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-300">
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

export default Projects;
