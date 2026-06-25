import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import kingChukwumere from '../assets/testimonials/king-lifeline.jpg';
import anasOudadsse from '../assets/testimonials/anas-mycoach.jpeg';
import lotfBelych from '../assets/testimonials/lotf-alx.jpg';

const testimonialImages = [kingChukwumere, anasOudadsse, lotfBelych];

const AUTOPLAY_INTERVAL = 4000;

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = (t('testimonials.list', { returnObjects: true }) as any[]).map((tItem, i) => ({ ...tItem, image: testimonialImages[i] }));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAutoScrolling = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonials.length;
    isAutoScrolling.current = true;
    el.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  }, []);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  // Autoplay — advances to next card, loops infinitely
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [scrollToIndex]);

  // Manual scroll detection — updates activeIndex + dots when user scrolls by hand
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonials.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 16%, #1D2939 100%)' }}>
            {t('testimonials.title')}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {t('testimonials.subtitle1')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">{t('testimonials.subtitle2')}</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">{t('testimonials.subtitle3')}</span> {t('testimonials.subtitle4')}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Carousel — horizontal scroll-snap */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0 snap-center px-1">
                <div className="px-8 py-6 rounded-3xl glass-card relative min-h-[280px]">
                  {/* Quote mark decoration */}
                  <div className="absolute top-8 left-8 text-6xl text-gray-100 font-serif leading-none select-none">"</div>

                  <div className="relative z-10 mt-10">
                    <p className="text-primary text-md leading-snug mb-6">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=0D8ABC&color=fff`; }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{testimonial.name}</h4>
                        <p className="text-sm text-secondary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'w-8 h-2.5 bg-gradient-brand'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}