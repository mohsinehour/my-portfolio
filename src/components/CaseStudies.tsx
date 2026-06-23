import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
import mycoachCaseStudyImage from '../assets/featured-work/mycoach-casestudy.png';
import vouchifyCaseStudyImage from '../assets/featured-work/vouchify-casestudy.png';
import lifelineCaseStudyImage from '../assets/featured-work/lifeline-casestudy.png';
import mycoachOverviewImg from '../assets/featured-work/mycoach-header.png';
import vouchifyOverviewImg from '../assets/featured-work/vouchify-header.png';
import lifelineOverviewImg from '../assets/featured-work/lifeline-header.png';
import vouchifySolutionImg from '../assets/featured-work/vouchify-solution.png';
import vouchifyOutcomeImg from '../assets/featured-work/vouchify-outcome.png';
import lifelineSolutionImg from '../assets/featured-work/lifeline-solution.png';
import lifelineOutcomeImg from '../assets/featured-work/lifeline-outcome.png';
import mycoachSolutionImg from '../assets/featured-work/mycoach-solution.jpg';
import mycoachOutcomeImg from '../assets/featured-work/mycoach-outcome.jpg';



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

const caseStudies: CaseStudy[] = [
  {
    id: 'mycoach',
    title: 'MYCOACH',
    subtitle: 'Coaching Marketplace Platform',
    image: mycoachCaseStudyImage,
    overviewImage: mycoachOverviewImg,
    solutionImage: mycoachSolutionImg,
    outcomeImage: mycoachOutcomeImg,
    metrics: [
      { label: 'Users', value: '1000+' },
      { label: 'Booking Rate', value: '89%' },
      { label: 'Rating', value: '4.8/5' }
    ],
    overview: <>
      My Coach is a coaching marketplace designed to help individuals discover, connect with, and book qualified personal trainers based on their personal goals and preferences. The platform aims to remove the friction often associated with finding trusted coaches while providing trainers with tools to manage and grow their businesses.
      <br /><br />
      As Co-Founder, Product Designer, and Full-Stack Developer, I was responsible for transforming the idea into a functional MVP, leading product strategy, designing the user experience, and developing the platform's architecture.
    </>,
    challenge: <>
      Many people struggle to find trustworthy fitness coaches who match their specific needs. Existing solutions often lack transparency, personalization, and streamlined booking experiences. Coaches also face challenges managing client relationships and showcasing their expertise online.
      <br /><br />
      The goal was to create a platform that would simplify coach discovery, improve trust, and provide a seamless booking experience for both coaches and clients.
    </>,
    role: ['CEO', 'Product Strategy', 'UX Research', 'MVP Development', 'Growth Marketing', 'Sales & Partnerships'],
    solution: 'To address the challenges faced by both coaches and clients, I designed and developed a platform that streamlined the entire coaching journey, from discovery to long-term engagement. The experience was built around personalized coach matching, allowing users to find professionals aligned with their goals, preferences, and coaching needs. I created detailed coach profiles that established trust through transparent information and social proof, while a seamless booking flow simplified scheduling and session management. Beyond the client experience, I designed tools that empowered coaches to manage their services, monitor client progress, and grow their businesses more effectively. The result was a scalable, mobile-responsive platform that balanced user experience, business objectives, and operational efficiency.',
    process: <>
      I started by identifying the key pain points experienced by both coaches and clients. Based on these findings, I designed user journeys focused on reducing friction during onboarding, coach discovery, and booking.
      <br /><br />
      The platform was structured around three core experiences:
      <BulletList items={[
        'Coach discovery and matching',
        'Session booking and management',
        'Progress tracking and client engagement',
      ]} />
    </>,
    outcome: <BulletList items={[
      'Successfully onboarded <strong>14</strong> certified coaches before launch',
      'Built a waiting list of <strong>25+</strong> early users',
      'Participated in <strong>ALX Ventures</strong> and <strong>Accelab x MDJS</strong> accelerator programs',
      'Established the foundation for scaling into additional coaching categories',
      'Created a complete MVP ready for beta testing',
    ]} />,
    technologies: ['React', 'Laravel', 'MySQL', 'Figma'],
    site: 'https://mycoach.ma/',
  },
  {
    id: 'vouchify',
    title: 'VOUCHIFY',
    subtitle: 'Digital Membership & Voucher Platform',
    image: vouchifyCaseStudyImage,
    overviewImage: vouchifyOverviewImg,
    solutionImage: vouchifySolutionImg,
    outcomeImage: vouchifyOutcomeImg,
    metrics: [
      { label: 'Businesses', value: '1000+' },
      { label: 'Subscriptions Sold', value: '100K+' },
      { label: 'Countries', value: '20+' },
    ],
    overview: <>
      Vouchify is a digital membership and voucher platform that enables businesses to create, distribute, and manage digital passes that integrate seamlessly with mobile wallets.
      <br /><br />
      As a Full-Stack Developer and Product Designer, I worked on both the user experience and technical implementation of key platform features.
    </>,
    challenge: <>
      Traditional membership and voucher systems often rely on outdated processes, creating friction for both businesses and customers. The challenge was to create a scalable and intuitive platform that simplified pass creation, management, and distribution.
    </>,
    role: ['Product Design', 'Full-Stack Development', 'User Experience Design', 'Feature Planning', 'Technical Architecture'],
    solution: 'I helped create a modern digital membership and voucher platform that made it easy for businesses to issue, manage, and distribute digital passes while delivering a seamless experience for end users. The product was designed to eliminate the complexity traditionally associated with membership programs by providing intuitive workflows, streamlined onboarding, and centralized management tools. I worked across both design and development to ensure that businesses could efficiently manage their digital offerings while customers could easily access and use passes through mobile wallet integrations. The result was a scalable platform that combined simplicity, flexibility, and strong user experience, making digital memberships more accessible for organizations of all sizes.',
    process: <>
      I worked closely with the founding team to understand business requirements and user expectations.
      <br /><br />
      The focus was on:
      <BulletList items={[
        'Streamlining onboarding flows',
        'Simplifying pass management',
        'Creating intuitive dashboards',
        'Ensuring mobile wallet compatibility',
        'Building scalable frontend experiences',
      ]} />
      <br />
      Every feature was designed to reduce complexity while maintaining flexibility for different business use cases.
    </>,
    outcome: <BulletList items={[
      'Delivered end-to-end product experiences from design to implementation',
      'Improved usability through simplified workflows',
      'Built scalable frontend architecture for future growth',
      'Helped create a seamless digital membership experience for businesses and customers',
    ]} />,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'],
    site: 'https://usevouchify.com/',
  },
  {
    id: 'lifeline',
    title: 'LifeLine',
    subtitle: 'Health-Tech Platform',
    image: lifelineCaseStudyImage,
    overviewImage: lifelineOverviewImg,
    solutionImage: lifelineSolutionImg,
    outcomeImage: lifelineOutcomeImg,
    metrics: [
      { label: 'Patients', value: '50K+' },
      { label: 'Hospitals', value: '12' },
      { label: 'Uptime', value: '99.9%' },
    ],
    overview: <>
      LifeLine is a healthcare platform designed to improve access to medical services through digital solutions that connect patients, healthcare providers, pharmacies, and insurers. The platform includes appointment booking, insurance workflows, pharmacy management tools, and patient engagement experiences.
      <br /><br />
      As a Product Designer and Frontend Developer, I contributed to both the design and implementation of multiple products within the LifeLine ecosystem.
    </>,
    challenge: <>
      Healthcare workflows are often complex, fragmented, and difficult for patients to navigate. Providers also face operational challenges caused by disconnected systems and inefficient processes.
      <br /><br />
      The objective was to simplify healthcare interactions while maintaining compliance, trust, and accessibility for all stakeholders.
    </>,
    role: ['Product Design', 'UX/UI Design', 'Frontend Development', 'Workflow Optimization', 'User Journey Mapping'],
    solution: 'The solution focused on creating a unified digital healthcare experience that simplified interactions between patients, healthcare providers, pharmacies, and insurance partners. I designed and developed intuitive interfaces that transformed complex healthcare workflows into clear, user-friendly experiences. This included patient appointment booking journeys, insurance onboarding processes, pharmacy management tools, and provider dashboards. By establishing a consistent design system and reusable frontend components, I ensured a seamless experience across the entire ecosystem while improving efficiency for both end users and healthcare professionals. The final product reduced friction throughout the healthcare journey and provided a scalable foundation for future services and integrations.',
    process: <>
      I collaborated closely with stakeholders to understand the needs of patients, clinics, pharmacies, and insurance partners.
      <br /><br />
      The design process focused on:
      <BulletList items={[
        'Simplifying healthcare journeys',
        'Reducing cognitive load',
        'Improving information accessibility',
        'Creating scalable design systems',
        'Building responsive interfaces',
      ]} />
      <br />
      I translated complex healthcare processes into intuitive digital experiences while ensuring consistency across the platform.
    </>,
    outcome: <BulletList items={[
      'Delivered responsive and scalable interfaces across multiple healthcare products',
      'Improved workflow efficiency through intuitive dashboard experiences',
      'Helped create a consistent design language across the platform',
      'Accelerated development through reusable components and structured frontend architecture',
    ]} />,
    technologies: ['TypeScript', 'React', 'Node.js', 'Figma'],
    site: 'https://mylifeline.health/',
  },
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
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent"
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
                    className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white mt-2 px-8 py-1 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 cursor-pointer"
                  >
                    View Case Study <ArrowUpRight size={16} />
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-4 w-full">
                      <h2 className="text-4xl font-bold text-white">{activeStudy.title}</h2>
                      {activeStudy.site && (
                        <a
                          href={activeStudy.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-brand text-white px-3 py-1 md:px-5 md:py-2 rounded-full font-medium hover:-translate-y-0.5 transition-all duration-200 shadow-md text-sm md:text-base whitespace-nowrap"
                        >
                          Visit Live Site <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-gray-300">{activeStudy.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {activeStudy.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-2 md:p-4 rounded-2xl border border-gray-100 bg-gray-50">
                      <h4 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary mb-1">{metric.value}</h4>
                      <p className="text-sm font-medium text-secondary">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Overview</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.overview}</div>
                    <SectionImage src={activeStudy.overviewImage} alt={`${activeStudy.title} overview`} />
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">The Challenge</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.challenge}</div>
                  </div>

                  {/* Role */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-4">My Role</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeStudy.role.map((role, i) => (
                        <span key={i} className="px-4 py-2 border border-gray-200 rounded-full text-sm font-sm text-primary">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Solution</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.solution}</div>
                    <SectionImage src={activeStudy.solutionImage} alt={`${activeStudy.title} solution`} />
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Process</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.process}</div>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h3 className="text-xl font-semibold text-brand mb-3">Outcome</h3>
                    <div className="text-primary leading-relaxed">{activeStudy.outcome}</div>
                    <SectionImage src={activeStudy.outcomeImage} alt={`${activeStudy.title} outcome`} />
                  </div>

                  {/* Technologies */}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}