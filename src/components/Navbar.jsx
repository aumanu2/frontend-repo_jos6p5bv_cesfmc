import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900">ARA STUDIO</a>
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-black">Contact</a>
        </div>
        <a href="#contact" className="md:hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white">Contact</a>
      </nav>
    </header>
  );
}
