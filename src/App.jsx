import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Ara Studio — All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
