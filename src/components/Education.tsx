import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, GraduationCap, MousePointerClick } from 'lucide-react';
import fstLogo from '../assets/education-certifications/fst-logo.png';
import fedeLogo from '../assets/education-certifications/fede-logo.png';
import alxLogo from '../assets/education-certifications/alx-logo.jpeg';
import alxVenturesLogo from '../assets/education-certifications/alx-ventures-logo.png';
import mckinseyLogo from '../assets/education-certifications/mckinsey-logo.png';
import softwareEngineeringBg from '../assets/education-certifications/software-engineering.jpg';
import mckinseyBg from '../assets/education-certifications/mcKinsey.jpg';
import founderAcademyBg from '../assets/education-certifications/founder-academy.png';

const education = [
  {
    title: 'European Master in Intelligent Applications & Big Data',
    institution: 'MIAGE Casablanca | FEDE',
    date: '2024 - 2026',
    description: 'Advanced study in AI systems, machine learning, big data architectures, and intelligent application design',
    image: fedeLogo,
  },
  {
    title: 'Bachelor in Automation Engineering',
    institution: 'FST Settat',
    date: '2016 - 2017',
    description: 'Foundation in systems engineering, control systems, and automation — building analytical and technical problem-solving skills',
    image: fstLogo,
  }
];

const certifications = [
  {
    title: 'Software Engineering',
    institution: 'ALX Africa',
    date: 'November 2024',
    description: 'Intensive 12-month program covering full-stack development, algorithms, system design, and engineering best practices',
    bgImage: softwareEngineeringBg,
    logo: alxLogo,
    credential: "https://intranet.alxswe.com/certificates/N5YnzP8frB",
  },
  {
    title: 'McKinsey Forward Program',
    institution: 'McKinsey & Company',
    date: 'July 2024',
    description: 'Selected for McKinsey\'s leadership and problem-solving program for high-potential individuals from emerging markets',
    bgImage: mckinseyBg,
    logo: mckinseyLogo,
    credential: "https://www.credly.com/badges/186b2104-af1a-4f5c-a200-f28ffde61ee7/",
  },
  {
    title: 'Founder Academy',
    institution: 'ALX Ventures',
    date: 'July 2024',
    description: 'Startup fundamentals — product-market fit, fundraising, go-to-market strategy, and founding team dynamics',
    bgImage: founderAcademyBg,
    logo: alxVenturesLogo,
    credential: "https://intranet.alxswe.com/certificates/L7Nrme6XHM",
  },
];

export default function Education() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #1D2939 30%)' }}>
            Education & Certifications
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Credentials & <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Continuous Learning</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* EDUCATION */}
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2 text-xl font-bold text-primary"><GraduationCap size={24} className="text-brand" /> Academic Education</h3>
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-start text-start"
              >
                <div className="w-16 h-16 p-1 rounded-lg mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <img
                    src={item.image}
                    alt={item.institution}
                    className="w-full h-full object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80'; }}
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                <div className='flex items-center justify-between text-sm text-brand w-full mb-2'>
                  <p>{item.institution}</p>
                  <p>{item.date}</p>
                </div>
                <p className="text-sm text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATIONS — flip cards (hover on desktop, tap on mobile) */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2"><Award size={24} className="text-brand" /> Certifications</h3>
            {certifications.map((item, index) => {
              const isFlipped = flippedIndex === index;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => toggleFlip(index)}
                  className="group [perspective:1200px] h-58 cursor-pointer md:cursor-default"
                >
                  <div
                    className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 md:group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                      }`}
                  >

                    {/* FRONT — image background */}
                    <div
                      className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                      {/* Institution tag — top right */}
                      <span className="absolute flex items-center gap-2 top-4 right-4 bg-primary text-gray-200 text-xs font-small px-3 py-1 rounded-full backdrop-blur-sm">
                        <GraduationCap size={20} /> {item.institution}
                      </span>

                      {/* Pulsing hover/tap hint — bottom left */}
                      <div className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
                        <MousePointerClick size={14} className="relative text-white" />
                      </div>

                      {/* Title + date — bottom left */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200 flex items-center gap-2"><Calendar size={16} />{item.date}</p>
                      </div>
                    </div>

                    {/* BACK — full info, same style as education card */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start text-start justify-center">
                      <div className="flex items-start justify-between w-full">
                        <div className="w-16 h-16 rounded-lg mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200">
                          <img
                            src={item.logo}
                            alt={item.institution}
                            className="w-full h-full object-contain rounded-lg"
                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80'; }}
                          />
                        </div>
                        <a
                          href={item.credential}
                          target='_blank'
                          rel='noopener noreferrer'
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center gap-2 rounded-full px-3 py-1 shadow-sm  text-xs font-small text-gray-400 mb-1 hover:scale-105 hover:-translate-y-0.5 hover:text-white hover:bg-gradient-brand text-center transition-all duration-200">Show Credential <ExternalLink size={14} /></div>
                        </a>
                      </div>
                      <div className='flex items-center justify-between text-sm text-brand w-full mb-2'>
                        <p>{item.institution}</p>
                        <p>{item.date}</p>
                      </div>
                      <p className="text-sm text-secondary">{item.description}</p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}