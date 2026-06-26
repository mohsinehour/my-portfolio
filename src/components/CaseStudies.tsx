import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';



const BulletList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col items-start gap-3 mt-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-center gap-2 text-primary leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </li>
    ))}
  </ul>
);

const SectionImage = ({ src, alt }: { src?: string; alt: string }) => {
  if (!src) return null;
  return (
    <div className="mt-5 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <img src={src} alt={alt} className="w-full object-cover" />
    </div>
  );
};

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  metrics: { label: string; value: string }[];
  overview: React.ReactNode;
  overviewImage?: string;
  challenge: React.ReactNode;
  role: string[];
  solution: React.ReactNode;
  solutionImage?: string;
  process: React.ReactNode;
  outcome: React.ReactNode;
  outcomeImage?: string;
  technologies: string[];
  site?: string;
};

const studiesBase = [
  {
    id: 'mycoach',
    image: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468803/mycoach-casestudy_tsukzz.png",
    overviewImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468805/mycoach-header_ijp9oi.png",
    solutionImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468807/mycoach-solution_b9fe3q.jpg",
    outcomeImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468805/mycoach-outcome_mmbvre.jpg",
    technologies: ['React', 'Laravel', 'MySQL', 'Figma'],
    site: 'https://mycoach.ma/',
  },
  {
    id: 'vouchify',
    image: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468808/vouchify-casestudy_pcbtlh.png",
    overviewImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468966/vouchify-header_cqbosp.png",
    solutionImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468811/vouchify-solution_r1zyru.png",
    outcomeImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468810/vouchify-outcome_g7dwp0.png",
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'],
    site: 'https://usevouchify.com/',
  },
  {
    id: 'lifeline',
    image: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468785/lifeline-casestudy_n6lqqs.png",
    overviewImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468965/lifeline-header_bxs3bd.png",
    solutionImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468802/lifeline-solution_r8yn2k.png",
    outcomeImage: "https://res.cloudinary.com/dfks1mhg5/image/upload/v1782468802/lifeline-outcome_ocguwd.png",
    technologies: ['TypeScript', 'React', 'Node.js', 'Figma'],
    site: 'https://mylifeline.health/',
  },
];

export default function CaseStudies() {
  const { t } = useTranslation();
  const caseStudies = studiesBase.map(base => {
    const tData = t(`work.caseStudies.${base.id}`, { returnObjects: true }) as any;
    return {
      ...base,
      title: tData.title,
      subtitle: tData.subtitle,
      metrics: Object.values(tData.metrics),
      overview: (
        <>
          {tData.overview[0]}
          {tData.overview[1] && <><br /><br />{tData.overview[1]}</>}
        </>
      ),
      challenge: (
        <>
          {tData.challenge[0]}
          {tData.challenge[1] && <><br /><br />{tData.challenge[1]}</>}
        </>
      ),
      role: tData.roles,
      solution: tData.solution,
      process: (
        <>
          {tData.processText[0]}
          {tData.processText[1] && <><br /><br />{tData.processText[1]}</>}
          <BulletList items={tData.processBullets} />
          {tData.processFooter && <><br />{tData.processFooter}</>}
        </>
      ),
      outcome: <BulletList items={tData.outcomeBullets} />,
    };
  }) as CaseStudy[];

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
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #364a65ff 100%)' }}>
            {t('work.title')}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
            {t('work.subtitle1')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">{t('work.subtitle2')}</span>
          </h2>
          <p className="text-secondary">
            {t('work.description')}
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
                    className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white mt-2 px-8 py-1 rounded-full font-medium transition-all shadow-md hover:shadow-lg duration-200 cursor-pointer"
                  >
                    {t('work.viewCaseStudy')} <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
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

              {/* Header image */}
              <div className="w-full h-64 md:h-80 relative bg-gray-100">
                <img
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x600'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:p-8">
                  <motion.div className="flex flex-col gap-2 w-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-4 w-full">
                      <h2 className="text-4xl font-bold text-white">{activeStudy.title}</h2>
                      {activeStudy.site && (
                        <a
                          href={activeStudy.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 bg-gradient-brand text-white px-3 py-1 md:px-5 md:py-2 rounded-full font-medium hover:scale-102 transition-all duration-200 shadow-md text-sm md:text-base whitespace-nowrap"
                        >
                          {t('work.visitLiveSite')} <ExternalLink size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out' />
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-gray-300">{activeStudy.subtitle}</p>
                  </motion.div>
                </div>
              </div>

              <div className="p-8">
                {/* Metrics */}
                <motion.div className="grid grid-cols-3 gap-4 mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  {activeStudy.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-2 md:p-4 rounded-2xl border border-gray-100 bg-gray-50">
                      <h4 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary mb-1">{metric.value}</h4>
                      <p className="text-sm md:font-medium text-secondary">{metric.label}</p>
                    </div>
                  ))}
                </motion.div>

                <div className="space-y-8">
                  {/* Overview */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-3">{t('work.overview')}</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.overview}</div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px 0px" }}
                      transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                      <SectionImage src={activeStudy.overviewImage} alt={`${activeStudy.title} overview`} />
                    </motion.div>
                  </motion.div>

                  {/* Challenge */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-3">{t('work.theChallenge')}</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.challenge}</div>
                  </motion.div>

                  {/* Role */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-4">{t('work.myRole')}</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeStudy.role.map((role, i) => (
                        <span key={i} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-sm text-primary">
                          {role}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Solution */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-3">{t('work.solution')}</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.solution}</div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px 0px" }}
                      transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                      <SectionImage src={activeStudy.solutionImage} alt={`${activeStudy.title} solution`} />
                    </motion.div>
                  </motion.div>

                  {/* Process */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-3">{t('work.process')}</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.process}</div>
                  </motion.div>

                  {/* Outcome */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-3">{t('work.outcome')}</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.outcome}</div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px 0px" }}
                      transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                      <SectionImage src={activeStudy.outcomeImage} alt={`${activeStudy.title} outcome`} />
                    </motion.div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h3 className="text-xl font-semibold text-brand mb-4">{t('work.technologies')}</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeStudy.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}