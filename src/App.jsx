import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-slate-300 selection:bg-accentPrimary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center mt-auto backdrop-blur-md">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} John Doe. Designed & Built with Code & Coffee.
        </p>
      </footer>
    </div>
  );
}

export default App;
