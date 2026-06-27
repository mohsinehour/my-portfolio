import { useEffect, useRef, useState } from 'react';
import { Award, Package, Quote, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function useCountUp(target: number, duration: number, startCounting: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [startCounting, target, duration]);

    return count;
}

export default function About() {
    const { t } = useTranslation();
    const gridRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (gridRef.current) observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    const count4 = useCountUp(4, 1200, inView);
    const count3 = useCountUp(3, 1000, inView);
    const count100 = useCountUp(100, 1800, inView);

    return (
        <section id="about" className="pb-20 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='flex justify-start mb-5'>
                        <h2
                            className="text-md tracking-widest font-medium uppercase bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #1D2939 100%)' }}
                        >
                            {t('about.title')}
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    <div className='h-full'>
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl font-semibold text-primary mb-6">
                                {t('about.subtitle1')}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary"> {t('about.subtitle2')}</span>{' '}
                                {t('about.subtitle3')}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary"> {t('about.subtitle4')}</span>
                            </h1>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">{t('about.description1')}</p>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">{t('about.description2')}</p>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">{t('about.description3')}</p>
                        </motion.div>
                    </div>

                    <div className="flex items-center justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative isolate"
                        >
                            <div className="absolute inset-0 -z-10 rounded-2xl bg-[#004F94]/60 blur-3xl scale-85 translate-y-4 pointer-events-none" />
                            <div className="group relative z-10 rounded-2xl overflow-hidden w-full h-[550px] md:w-[400px] md:h-[450px] hover:scale-[1.02] hover:cursor-pointer transition-transform duration-500 ease-out">
                                <img
                                    src="https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468430/about-image1_cbhz3b.jpg"
                                    alt=""
                                    className="w-full h-full object-cover group-hover:scale-[1.02] group-hover:cursor-pointer transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                                    <Quote className='w-8 h-8 text-white mb-2 rotate-180' />
                                    <p className="text-white text-sm leading-relaxed">{t('about.quote')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats grid */}
                <div ref={gridRef} className='grid grid-cols-3 gap-2 md:gap-8 items-stretch mt-6'>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0 }}
                        className="group flex flex-col items-center justify-center bg-gradient-to-br from-brand to-primary rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5 hover:scale-[1.03] hover:cursor-pointer transition-transform duration-500 ease-out"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase text-white'>
                            {count4}+
                        </h2>
                        <h3 className="text-sm md:text-md text-center text-white mb-4 leading-relaxed">
                            {t('about.products')}
                        </h3>
                        <Package className='w-8 h-8 text-white group-hover:-rotate-6 transition-transform duration-300' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group flex flex-col items-center justify-center bg-gradient-to-br from-brand to-primary rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5 hover:scale-[1.03] hover:cursor-pointer transition-transform duration-500 ease-out"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase text-white'>
                            {count3}+
                        </h2>
                        <h3 className="text-sm md:text-md text-center text-white mb-4 leading-relaxed">
                            {t('about.years')}
                        </h3>
                        <Award className='w-8 h-8 text-white group-hover:-rotate-6 transition-transform duration-300' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group flex flex-col items-center justify-center bg-gradient-to-br from-brand to-primary rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5 hover:scale-[1.03] hover:cursor-pointer transition-transform duration-500 ease-out"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase text-white'>
                            {count100}%
                        </h2>
                        <h3 className="text-sm md:text-md text-center text-white mb-4 leading-relaxed">
                            {t('about.mindset')}
                        </h3>
                        <Sprout className='w-8 h-8 text-white group-hover:-rotate-6 transition-transform duration-300' />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}