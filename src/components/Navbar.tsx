import { Menu, X, ArrowUpRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', countryCode: 'GB' },
  { code: 'fr', label: 'French', countryCode: 'FR' },
];

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    languages.find(l => l.code === i18n.language) || languages[0]
  );

  const handleSelect = (lang: typeof languages[0]) => {
    setSelected(lang);
    i18n.changeLanguage(lang.code); // ← this triggers the whole site to re-render
    setIsOpen(false);
  };
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-secondary hover:text-brand transition-colors text-sm font-medium cursor-pointer"
        aria-label="Select language"
      >
        <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
          <ReactCountryFlag countryCode={selected.countryCode} svg style={{ width: '1.5em', height: '1.5em', objectFit: 'cover' }} />
        </span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="absolute right-0 top-full mt-2 w-36 bg-white rounded-2xl shadow-[0_8px_30px_rgba(17,17,17,0.12)] border border-gray-100 overflow-hidden z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-primary hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Checkmark — visible only for selected */}
              <span className={`w-4 flex-shrink-0 ${selected.code === lang.code ? 'text-brand' : 'text-transparent'}`}>
                <Check size={14} strokeWidth={2.5} />
              </span>
              <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <ReactCountryFlag countryCode={lang.countryCode} svg style={{ width: '1.5em', height: '1.5em', objectFit: 'cover' }} />
              </span>
              <span className="font-medium">{lang.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-ivory/75 px-5 py-2 shadow-[0_8px_30px_rgba(17,17,17,0.15)] backdrop-blur-xl md:px-7">
        <a href="#" className="flex items-center">
          <img className="h-8 w-auto md:h-10" src={logo} alt="logo" />
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="relative text-secondary hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full transition-colors text-sm font-medium">{t('nav.about')}</a>
          <a href="#experience" className="relative text-secondary hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full transition-colors text-sm font-medium">{t('nav.experience')}</a>
          <a href="#work" className="relative text-secondary hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full transition-colors text-sm font-medium">{t('nav.work')}</a>
          <a href="#skills" className="relative text-secondary hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full transition-colors text-sm font-medium">{t('nav.skills')}</a>
          <a href="#education" className="relative text-secondary hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full transition-colors text-sm font-medium">{t('nav.education')}</a>
          <a href="#contact" className="relative text-secondary hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full transition-colors text-sm font-medium">{t('nav.contact')}</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageDropdown />
          <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md transform hover:scale-102 duration-200">
            {t('nav.letsTalk')} <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200' />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageDropdown />
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-brand">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.1 }}
      >
        {isOpen && (
          <div className="md:hidden glass-nav absolute top-20 left-0 right-0 mx-4 bg-white/95 rounded-3xl">
            <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col shadow-lg border-t border-gray-100">
              <a href="#about" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
              <a href="#experience" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>{t('nav.experience')}</a>
              <a href="#work" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>{t('nav.work')}</a>
              <a href="#skills" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>{t('nav.skills')}</a>
              <a href="#education" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>{t('nav.education')}</a>
              <a href="#contact" className="block px-3 py-3 text-base font-medium text-secondary hover:text-brand hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('nav.letsTalk')} <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}