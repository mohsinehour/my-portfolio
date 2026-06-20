import { Award, Package, Quote, Sprout } from 'lucide-react';
import aboutImage from '../assets/about-image.jpeg';
import { motion } from 'framer-motion';

export default function About() {
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
                            About Me
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
                            <h1 className="text-4xl font-semibold text-primary mb-6">I build products like a <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Founder,</span><br /> design like an <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Artist</span></h1>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">
                                I'm a Product Designer, Full-Stack Developer, and Startup Founder with a rare combination of technical depth and design sensibility. My work sits at the intersection of engineering, creativity, and entrepreneurship.

                            </p>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">
                                After studying Automation Engineering and earning a European Master in Intelligent Applications & Big Data, I shifted my focus to building digital products that solve real human problems — from HealthTech platforms to AI-powered coaching marketplaces.
                            </p>
                            <p className="text-lg text-secondary mb-4 max-w-lg leading-relaxed">
                                As Co-Founder and CEO of My Coach, I've worn every hat imaginable — product strategy, UX research, engineering, and growth. That founder mindset informs everything I design and build.
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="relative rounded-2xl overflow-hidden w-[400px] h-[450px]">
                                {/* Image */}
                                <img
                                    src={aboutImage}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                                {/* Inner bottom shadow overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Quote text */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    {/* Quote mark */}
                                    <Quote className='w-8 h-8 text-white mb-2 rotate-180' />
                                    <p className="text-white text-sm leading-relaxed">
                                        I don't just design screens or write code. I think about the full product — the user's journey, the business model, the growth lever, the technical architecture. That's what makes the difference between good work and great work.
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
                        className="flex flex-col items-center justify-center rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase bg-clip-text text-transparent'
                            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #1D2939 100%)' }}>
                            4+
                        </h2>
                        <h3 className="text-sm md:text-md text-center bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary mb-4 leading-relaxed">
                            Products Built
                        </h3>
                        <Package className='w-8 h-8 text-brand' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col items-center justify-center rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase bg-clip-text text-transparent'
                            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #1D2939 100%)' }}>
                            3+
                        </h2>
                        <h3 className="text-sm md:text-md text-center bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary mb-4 leading-relaxed">
                            Years of Experience
                        </h3>
                        <Award className='w-8 h-8 text-brand' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center justify-center rounded-3xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] p-1 md:p-5"
                    >
                        <h2 className='text-xl md:text-2xl tracking-widest font-medium uppercase bg-clip-text text-transparent'
                            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #1D2939 100%)' }}>
                            100%
                        </h2>
                        <h3 className="text-sm md:text-md text-center bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary mb-4 leading-relaxed">
                            Founder Mindset
                        </h3>
                        <Sprout className='w-8 h-8 text-brand' />
                    </motion.div>

                </div>

            </div>
        </section>
    )
}