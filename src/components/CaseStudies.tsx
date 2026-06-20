import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'mycoach',
    title: 'MYCOACH',
    subtitle: 'Coaching Marketplace Platform',
    image: '/src/assets/featured-work/mycoach-casestudy.png',
    metrics: [
      { label: 'Users', value: '1000+' },
      { label: 'Booking Rate', value: '89%' },
      { label: 'Rating', value: '4.8/5' }
    ],
    overview: 'A full-featured marketplace connecting coaches with clients, featuring intelligent matching, real-time booking, payment processing, and session management.',
    problem: 'The coaching industry was fragmented and hard to navigate. Clients struggled to find the right coach, and coaches lacked professional tools to manage their business.',
    solution: 'We built an end-to-end platform with a smart matching algorithm, integrated booking calendar, payment rails, video session links, and a coach analytics dashboard.',
    process: 'Discovery → User Research → Wireframes → Hi-fi Prototypes → Engineering → Beta Testing → Launch',
    outcome: '2,400+ registered users, 89% booking completion rate, and 4.8/5 average coach rating within first 6 months of launch.',
    technologies: ['React', 'Laravel', 'MySQL', 'Figma'],
    site: 'https://mycoach.ma/'
  },
  {
    id: 'vouchify',
    title: 'VOUCHIFY',
    subtitle: 'Digital Membership & Voucher',
    image: '/src/assets/featured-work/vouchify-casestudy.png',
    metrics: [
      { label: 'Active Widgets', value: '500+' },
      { label: 'Conversion Lift', value: '+24%' },
      { label: 'Reviews Managed', value: '10K+' }
    ],
    overview: 'An all-in-one platform for gathering, managing, and showcasing customer testimonials via customizable widgets and dedicated landing pages.',
    problem: 'Businesses struggle to collect authentic video and text testimonials, and displaying them attractively requires custom development.',
    solution: 'A seamless platform with automated collection campaigns, a moderation dashboard, and embeddable wall-of-love widgets.',
    process: 'Concept → MVP → Customer Feedback → Iteration → V2 Release',
    outcome: 'Helped over 100 businesses increase their landing page conversion rates by an average of 24% through social proof.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    site: 'https://usevouchify.com/'
  },
  {
    id: 'lifeline',
    title: 'LifeLine',
    subtitle: 'Health-Tech Platform',
    image: '/src/assets/featured-work/lifeline-casestudy.png',
    metrics: [
      { label: 'Patients', value: '50K+' },
      { label: 'Hospitals', value: '12' },
      { label: 'Uptime', value: '99.9%' }
    ],
    overview: 'A comprehensive patient portal designed to streamline communication between patients and healthcare providers.',
    problem: 'Patients experienced long wait times for appointments and difficulty accessing their medical records securely.',
    solution: 'A secure, HIPAA-compliant portal offering appointment scheduling, secure messaging, and easy access to test results.',
    process: 'Requirements Gathering → Security Audits → Prototyping → Development → Staged Rollout',
    outcome: 'Reduced average appointment scheduling time by 60% and decreased hospital administrative overhead by 30%.',
    technologies: ['Vue.js', 'Python', 'AWS', 'Docker'],
    site: 'https://mylifeline.health/'
  }
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

  const activeStudy = caseStudies.find(study => study.id === selectedStudy);

  return (
    <section id="work" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12 text-left"
        >
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent "
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #364a65ff 100%)' }}>
            Featured Work
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
            Case Studies I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Proud</span> Of
          </h2>
          <p className="text-secondary">
            Deep dives into some of my most impactful projects, showcasing the problem, solution, and outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-card"
            >
              <div className="relative h-74 overflow-hidden bg-gray-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-gray-300 text-sm">{study.subtitle}</p>
                  <button
                    onClick={() => setSelectedStudy(study.id)}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white mt-2 px-8 py-1 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 cursor-pointer">View Case Study<ArrowUpRight size={16} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="group absolute top-4 right-4 p-2 bg-white/60 hover:bg-white/80 rounded-full transition-colors z-10 cursor-pointer"
              >
                <X size={20} className="text-primary group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="w-full h-64 md:h-80 relative bg-gray-100">
                <img
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x600'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{activeStudy.title}</h2>
                    <p className="text-xl text-gray-300">{activeStudy.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {activeStudy.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl border border-gray-100 bg-gray-50">
                      <h4 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary mb-1">{metric.value}</h4>
                      <p className="text-sm font-medium text-secondary">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Overview</h3>
                    <p className="text-primary leading-relaxed">{activeStudy.overview}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Problem</h3>
                    <p className="text-primary leading-relaxed">{activeStudy.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Solution</h3>
                    <p className="text-primary leading-relaxed">{activeStudy.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Process</h3>
                    <p className="text-primary leading-relaxed">{activeStudy.process}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Outcome</h3>
                    <p className="text-primary leading-relaxed">{activeStudy.outcome}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeStudy.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
                  <a href={activeStudy.site} target='_blank' className="flex items-center gap-2 bg-gradient-brand text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors shadow-md">
                    Visit Live Site <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
