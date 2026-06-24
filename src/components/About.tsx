import { Award, Package, Quote, Sprout } from 'lucide-react';
import aboutImage from '../assets/about-image1.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
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
                        <h2 className="text-md tracking-widest  font-medium uppercase bg-clip-text text-transparent "
                            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #1D2939 100%)' }}>
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
                            <h1 className="text-4xl font-semibold text-primary mb-6">{t('about.subtitle1')}<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary"> {t('about.subtitle2')}</span> {t('about.subtitle3')}<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary"> {t('about.subtitle4')}</span></h1>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">
                                {t('about.description1')}
                            </p>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">
                                {t('about.description2')}
                            </p>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">
                                {t('about.description3')}
                            </p>
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
                            {/* Ambient glow behind the card */}
                            <div className="absolute inset-0 -z-10 rounded-2xl bg-[#004F94]/60 blur-3xl scale-85 translate-y-4 pointer-events-none" />

                            <div className="relative z-10 rounded-2xl overflow-hidden w-[400px] h-[450px]">
                                <img
                                    src={aboutImage}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <Quote className='w-8 h-8 text-white mb-2 rotate-180' />
                                    <p className="text-white text-sm leading-relaxed">
                                        {t('about.quote')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 md:gap-8 items-stretch mt-6'>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0 }}
                        className="group flex flex-col items-center justify-center bg-gradient-to-br from-brand to-primary rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5 hover:scale-103 hover:cursor-pointer transition-all duration-300"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase text-white'>
                            4+
                        </h2>
                        <h3 className="text-sm md:text-md text-center text-white mb-4 leading-relaxed">
                            {t('about.products')}
                        </h3>
                        <Package className='w-8 h-8 text-white group-hover:-rotate-6 group-hover:cursor-pointer transition-all duration-300' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group flex flex-col items-center justify-center bg-gradient-to-br from-brand to-primary rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5 hover:scale-103 hover:cursor-pointer transition-all duration-300"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase text-white'>
                            3+
                        </h2>
                        <h3 className="text-sm md:text-md text-center text-white mb-4 leading-relaxed">
                            {t('about.years')}
                        </h3>
                        <Award className='w-8 h-8 text-white group-hover:-rotate-6 group-hover:cursor-pointer transition-all duration-300' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group flex flex-col items-center justify-center bg-gradient-to-br from-brand to-primary rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5 hover:scale-103 hover:cursor-pointer transition-all duration-300"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase text-white'>
                            100%
                        </h2>
                        <h3 className="text-sm md:text-md text-center text-white mb-4 leading-relaxed">
                            {t('about.mindset')}
                        </h3>
                        <Sprout className='w-8 h-8 text-white group-hover:-rotate-6 group-hover:cursor-pointer transition-all duration-300' />
                    </motion.div>

                </div>

            </div>
        </section>
    )
}