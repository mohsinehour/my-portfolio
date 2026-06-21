import { motion } from 'framer-motion';
import mycoachLogo from '../assets/experience/mycoach-logo.png';
import vouchifyLogo from '../assets/experience/vouchify-logo.png';
import lifelineLogo from '../assets/experience/lifeline-logo.png';

const experiences = [
  {
    company: 'MYCOACH',
    logo: mycoachLogo,
    role: 'Co-Founder & CEO',
    date: 'Jan 2025 - Present',
    description: 'Founded and built a coaching marketplace platform from zero — leading product strategy, UX design, full-stack engineering, and business operations.',
    Bulletpoints: [
      'Designed and shipped the full product in under 4 months',
      'Built coach-matching algorithm and real-time booking system',
      'Grew to 2,400+ users with minimal marketing spend',
      'Raised initial funding and managed a cross-functional team'
    ],
    skills: ['Figma', 'ReactJS', 'Laravel', 'MySQL']
  },
  {
    company: 'VOUCHIFY',
    logo: vouchifyLogo,
    role: 'Product Designer & Web Developer',
    date: 'January 2026 - Present',
    description: 'Developed the web platform for a digital membership and voucher management system that helps businesses retain customers through wallet-based loyalty programs.',
    Bulletpoints: [
      'Built digital voucher creation and management system',
      'Integrated Apple & Google Wallet pass generation',
      'Developed merchant dashboard with analytics',
      'Shipped mobile-first PWA for end users'
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    company: 'LifeLine',
    logo: lifelineLogo,
    role: 'Front-End Developer & UI/UX Designer',
    date: 'July 2024 - December 2025',
    description: 'Led product design and engineering for a comprehensive HealthTech platform connecting patients, pharmacies, and insurance providers across Africa.',
    Bulletpoints: [
      'Designed and built the patient booking flow from research to launch',
      'Engineered pharmacy dashboard with real-time inventory management',
      'Integrated insurance claim verification system',
      'Achieved 98% user satisfaction on first release'
    ],
    skills: ['Figma', 'React', 'Tailwind CSS']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className='flex justify-start mb-5'>
            <h2 className="text-md tracking-widest font-medium uppercase text-brand">
              Experience
            </h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where I've Built & Shipped <span className="text-brand">Products</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg shadow-[0_0px_5px_rgba(17,17,17,0.15)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 overflow-hidden z-10 hover:scale-[1.1] hover:shadow-lg hover:shadow-blue-500/20 ease-in-out duration-200 cursor-pointer">
                <img src={exp.logo} alt={`${exp.company} Logo`} className="w-full h-full rounded-xl object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40'; }}
                />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-700 backdrop-blur-sm hover:scale-101 ease-in-out duration-200 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                    <p className="text-brand font-medium text-sm">{exp.role}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 sm:mt-0 font-small">{exp.date}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div>
                  <ul className='text-brand text-sm leading-relaxed mb-4'>
                    {exp.Bulletpoints.map(bullet => (
                      <li key={bullet} className="flex items-start gap-2 text-primary text-sm leading-tight mb-4">
                        <span className="mt-2 w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-gray-500 text-xs rounded-full shadow-[0_0px_5px_rgba(17,17,17,0.15)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
