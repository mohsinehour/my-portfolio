import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-ivory/75 px-5 py-2 shadow-[0_8px_30px_rgba(17,17,17,0.15)] backdrop-blur-xl md:px-7">
        <a href="#" className="flex items-center">
          <img className="h-8 w-auto md:h-10" src={logo} alt="logo" />
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-secondary hover:text-brand transition-colors text-sm font-medium">About</a>
          <a href="#experience" className="text-secondary hover:text-brand transition-colors text-sm font-medium">Experience</a>
          <a href="#work" className="text-secondary hover:text-brand transition-colors text-sm font-medium">Work</a>
          <a href="#skills" className="text-secondary hover:text-brand transition-colors text-sm font-medium">Skills</a>
          <a href="#education" className="text-secondary hover:text-brand transition-colors text-sm font-medium">Education</a>
          <a href="#contact" className="text-secondary hover:text-brand transition-colors text-sm font-medium">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-brand">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
      <motion.div animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.1 }}>
        {isOpen && (
          <div className="md:hidden glass-nav absolute top-20 left-0 right-0 mx-4 bg-white/95 rounded-3xl">
            <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col shadow-lg border-t border-gray-100">
              <a href="#about" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>About</a>
              <a href="#experience" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#work" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Work</a>
              <a href="#skills" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#education" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Education</a>
              <a href="#contact" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>Contact</a>

              {/* Let's Talk button — bottom of menu */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}