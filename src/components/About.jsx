import { motion } from 'framer-motion';
import { Code, Layout, Server, Database } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Layout size={24} />, name: 'Frontend', desc: 'HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS.' },
    { icon: <Server size={24} />, name: 'Backend', desc: 'Node.js, Express.js for building scalable REST APIs.' },
    { icon: <Database size={24} />, name: 'Databases', desc: 'MongoDB, MySQL for efficient and secure data management.' },
    { icon: <Code size={24} />, name: 'Other Skills', desc: 'Git, GitHub, VS Code, Responsive Web Design, Java (Basic).' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-accentPrimary">Me</span>.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Currently pursuing my Bachelor's in Computer Application at St. Mary's College Shirva (Mangalore University). I'm a motivated and detail-oriented Full Stack MERN Developer, passionate about learning new technologies and building scalable web applications.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, writing technical articles, or enjoying outdoor adventures to stay inspired.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">MERN</h4>
                <p className="text-slate-500 font-medium">Stack Developer</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">BCA</h4>
                <p className="text-slate-500 font-medium">Computer Science</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-darkCard p-6 rounded-2xl border border-white/5 hover:border-accentPrimary/50 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accentPrimary mb-4 group-hover:bg-accentPrimary group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
