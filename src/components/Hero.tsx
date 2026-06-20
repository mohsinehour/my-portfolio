import { motion } from 'framer-motion';
import heroImage from '../assets/hero/hero-image.jpg';
import helloTag from '../assets/hero/hello-tag.svg';
import linkedinIcon from '../assets/hero/linkedin-icon.svg';
import twitterIcon from '../assets/hero/twitter-icon.svg';
import githubIcon from '../assets/hero/github-icon.svg';
import mailIcon from '../assets/hero/mail-icon.svg';
import { ArrowUpRight } from 'lucide-react';

function Strip() {
  return (
    <section className="bg-ivory/75 px-5 py-3 shadow-[0_8px_30px_rgba(17,17,17,0.1)] backdrop-blur-xl my-8">
      <div className="strip flex whitespace-nowrap text-primary text-sm tracking-wider md:text-md [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        {[...Array(3)].map((_, group) => (
          <div key={group} className="strip-track flex items-center gap-8 pr-8">
            {["3+ Years Experience", "Startup Founder", "Product Designer", "Full-Stack Developer"].map((item) => (
              <span key={`${group}-${item}`} className="flex items-center gap-8">
                {item}
                <span className="h-1 w-1 rounded-full bg-brand" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-8 md:pt-32 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="relative rounded-3xl overflow-hidden p-0.5 border-white/40 shadow-[0_0_10px_rgba(17,17,17,0.15)] z-10 mb-10 md:mb-0 max-w-full h-[300px] md:max-w-[540px] md:h-full">
              <img
                src={heroImage}
                alt="Mohsine Hourmat Allah"
                className="w-full object-cover rounded-[23px] h-[300px] md:h-[570px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x800?text=Hero+Image';
                }}
              />
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative h-full flex flex-col justify-center">
              {/* Decorative background blob */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#004F94]/20 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob -z-10 pointer-events-none"></div>

              <img src={helloTag} alt="" className='max-w-20 md:max-w-30 mb-2 md:mb-5 ' />
              <h1 className="text-2xl  md:text-4xl font-semibold text-primary mb-6">
                I'm Mohsine Hourmat Allah,
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">
                  Founder, Product Designer <span className='text-primary'> <br />&</span></span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Full-Stack Developer
                </span>
              </h1>
              <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
                I design and build digital products that matter — from marketplace platforms to SaaS applications. I bring founder-level thinking to every project I touch.
              </p>
              <div className=" flex justify-center">
                <div className="flex items-center justify-center gap-4 px-2 py-2 w-fit">
                  <a href="#work" className="bg-gradient-brand text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                    View My Work
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 bg-white text-primary border border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200">
                    Let's Talk <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-6 md:mt-12 flex justify-center gap-6">
                <a href='https://www.linkedin.com/in/mohsine-hourmat-allah/' target='_blank' rel='noopener noreferrer' className='group flex items-center gap-2 px-4 py-4 rounded-2xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] backdrop-blur-xl w-fit whitespace-nowrap transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200 cursor-pointer'>
                  <img src={linkedinIcon} alt="LinkedIn" className='w-6 h-6 text-brand transform group-hover:scale-105 duration-200' />
                </a>
                <a href='https://x.com/mohsinehour_' target='_blank' rel='noopener noreferrer' className='group flex items-center gap-2 px-4 py-4 rounded-2xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] backdrop-blur-xl w-fit whitespace-nowrap transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200 cursor-pointer'>
                  <img src={twitterIcon} alt="Twitter" className='w-6 h-6 text-brand transform group-hover:scale-105 duration-200' />
                </a>
                <a href='https://github.com/mohsinehour' target='_blank' rel='noopener noreferrer' className='group flex items-center gap-2 px-4 py-4 rounded-2xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] backdrop-blur-xl w-fit whitespace-nowrap transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200 cursor-pointer'>
                  <img src={githubIcon} alt="GitHub" className='w-6 h-6 text-brand transform group-hover:scale-105 duration-200' />
                </a>
                <a href='mailto:hourmatallahmohsine@gmail.com' className='group flex items-center gap-2 px-4 py-4 rounded-2xl shadow-[0_0px_5px_rgba(17,17,17,0.15)] backdrop-blur-xl w-fit whitespace-nowrap transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200 cursor-pointer'>
                  <img src={mailIcon} alt="Mail" className='w-6 h-6 text-brand transform group-hover:scale-105 duration-200' />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Strip />
    </section>
  );
}
