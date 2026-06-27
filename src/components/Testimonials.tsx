import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const testimonialImages = ["https://res.cloudinary.com/dfks1mhg5/image/upload/v1782469663/king-lifeline_d6tzdk.jpg",
  "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782469660/anas-mycoach_uafzua.jpg",
  "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782469664/lotf-alx_vxi9qy.jpg",
  "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782469662/ghita_n8ph9l.jpg"];

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = (t('testimonials.list', { returnObjects: true }) as any[]).map(
    (tItem, i) => ({ ...tItem, image: testimonialImages[i] })
  );

  // Duplicate for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  const [paused, setPaused] = useState(false);

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
          <h2
            className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 16%, #1D2939 100%)' }}
          >
            {t('testimonials.title')}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {t('testimonials.subtitle1')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">
              {t('testimonials.subtitle2')}
            </span>{' '}
            &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">
              {t('testimonials.subtitle3')}
            </span>{' '}
            {t('testimonials.subtitle4')}
          </h2>
        </motion.div>

        {/* Overflow clip wrapper */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          {/* Marquee track */}
          <div
            className="flex items-stretch gap-6 w-max my-4 cursor-pointer"
            style={{
              animation: 'marquee 30s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {doubled.map((testimonial, i) => (
              <div key={`${testimonial.name}-${i}`} className="w-[340px] shrink-0 flex">
                <div
                  className="px-8 py-6 rounded-3xl bg-white shadow-sm relative flex flex-col w-full transition-all duration-300 ease-out hover:scale-[1.02]"
                >
                  {/* Decorations */}
                  <div className="absolute top-8 left-8 text-6xl text-gray-100 font-serif leading-none select-none">"</div>
                  <div className="absolute top-6 right-8 text-md bg-gradient-brand text-transparent bg-clip-text font-serif leading-none select-none opacity-75">
                    ★★★★★
                  </div>

                  <div className="relative z-10 mt-10 flex flex-col flex-1">
                    <p className="text-primary text-md leading-snug mb-4 flex-1">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=0D8ABC&color=fff`;
                          }}
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
        </div>
      </div>

      {/* Keyframe — injected once, scoped to this component */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}