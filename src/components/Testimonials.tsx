import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'King Chukwumere',
    role: 'CEO, LifeLine Africa',
    content: "Working with Mohsine was the best decision we made. He delivered a complex healthcare platform on time and exceeding our expectations. His attention to UX details and scalable architecture is outstanding.",
    image: '/src/assets/testimonials/king-lifeline.jpg'
  },
  {
    name: 'Anas Oudadsse',
    role: 'CTO, MYCOACH',
    content: "Mohsine is exceptional. He didn't just build our product; he helped shape our entire business strategy. His technical skills are matched only by his understanding of product-market fit. A true asset to any founding team.",
    image: '/src/assets/testimonials/anas-mycoach.jpeg'
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToIndex = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Autoplay — infinite loop
  useEffect(() => {
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 30%, #1D2939 100%)' }}>
            Testimonials
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Founders</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Clients</span> Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Card container — fixed height to prevent layout shift between cards */}
          <div className="relative overflow-hidden min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="px-8 py-6 rounded-3xl glass-card relative"
              >
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
              </motion.div>
            </AnimatePresence>
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