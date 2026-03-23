import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accentSecondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="text-accentPrimary">Connect</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accentPrimary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400">manishkarkera068@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accentPrimary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-400">+91 91367 15412</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accentPrimary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">Udupi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-darkCard/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accentPrimary/50 transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accentPrimary hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
