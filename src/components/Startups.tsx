import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Zap, Brain, Layers, TrendingUp, Store, ArrowUpRight } from 'lucide-react';

const icons = [
  <Target size={24} />,
  <Zap size={24} />,
  <Brain size={24} />,
  <Layers size={24} />,
  <Store size={24} />,
  <TrendingUp size={24} />
];

interface StartupData {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

function StartupCard({ startup, index }: { startup: StartupData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.01, y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
      className="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
      style={{ willChange: "transform" }}
    >
      <div className="w-12 h-12 bg-[#0088FF]/10 text-brand rounded-xl mb-6 flex items-center justify-center font-bold transition-transform duration-200 group-hover:scale-101 group-hover:outline-2 group-hover:outline-brand">
        <div className="group-hover:scale-103 transition-transform duration-200">
          {startup.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{startup.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {startup.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {startup.tags.map((tag: string, i: number) => (
          <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Startups() {
  const { t } = useTranslation();
  const cardsData = t('startups.cards', { returnObjects: true }) as Omit<StartupData, 'icon'>[];
  const cards: StartupData[] = cardsData.map((c, i: number) => ({ ...c, icon: icons[i] }));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / cards.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), cards.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const goToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / cards.length;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-md tracking-widest font-medium uppercase bg-clip-text text-transparent "
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #364a65ff 100%)' }}>
            {t('startups.title')}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('startups.subtitle1')} {' '}
            <span className='text-brand'>{t('startups.subtitle2')}</span>,{' '}
            {t('startups.subtitle3')}
          </h2>
        </motion.div>

        {/* Mobile — horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          {cards.map((startup, index) => (
            <div key={startup.title} className="w-[85vw] shrink-0 snap-center">
              <StartupCard startup={startup} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile dot indicators */}
        <div className="md:hidden flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to card ${index + 1}`}
              onClick={() => goToIndex(index)}
              className={`rounded-full transition-transform duration-300 ${index === activeIndex ? 'w-6 h-2.5 bg-brand' : 'w-2.5 h-2.5 bg-gray-600'
                }`}
            />
          ))}
        </div>

        {/* Desktop — grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((startup, index) => (
            <StartupCard key={startup.title} startup={startup} index={index} />
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full bg-gradient-brand rounded-2xl px-6 py-6">
          <div className="flex flex-col items-start gap-2 md:gap-0">
            <h2 className='text-2xl font-bold text-white'>{t('startups.ctaTitle')}</h2>
            <p className='text-white text-md leading-relaxed'>{t('startups.ctaDesc')}</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#contact" className="group inline-flex w-full items-center justify-center gap-2 bg-white text-primary px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md transform hover:scale-102 duration-200">
              {t('startups.ctaButton')} <ArrowUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}