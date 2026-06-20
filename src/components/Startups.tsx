import { motion } from 'framer-motion';
import { Target, Zap, Brain, Layers, TrendingUp, Store, ArrowUpRight } from 'lucide-react';

const cards = [
  {
    icon: <Target size={24} />,
    title: 'Product Strategy',
    description: 'From market research to product vision — I define the roadmap that balances user needs with business goals.',
    tags: ['Market Sizing', 'OKR Settings', 'LaravelRoadmap Planning', 'Conmpetetive Analysis']
  },
  {
    icon: <Zap size={24} />,
    title: 'MVP Development',
    description: 'I ship working products fast. Design + engineering in one person means fewer handoffs, faster iterations.',
    tags: ['4 - 8 Week MVP Cycles', 'Full-Stack Execution', 'Design → Code', 'Lean Validation']
  },
  {
    icon: <Brain size={24} />,
    title: 'AI-Powered Development',
    description: 'I use AI tools natively — from code generation to design automation — to build at startup speed.',
    tags: ['Cursor IDE', 'Claude API', 'AI Prototyping', 'Prompt Engineering']
  },
  {
    icon: <Layers size={24} />,
    title: 'User Experience Design',
    description: 'Every interaction is intentional. I design for clarity, delight, and conversion — not just aesthetics.',
    tags: ['UX Research', 'Wireframing', 'Hi-Fi Prototypes', 'Design Systems']
  },
  {
    icon: <Store size={24} />,
    title: 'Marketplace Design',
    description: 'I understand two-sided marketplace dynamics — designing for both supply and demand simultaneously.',
    tags: ['Supply & Demand UX', 'Trust Systems', 'Search & Discovery ', 'Onboarding Flows']
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Startup Operations',
    description: 'As a founder, I\'ve navigated fundraising, team building, legal structure, and early customer acquisition.',
    tags: ['Fundraising', 'Team Building', 'Legal Structure', 'Metrics & KPIs']
  },
];

export default function Startups() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-md tracking-widest font-medium uppercase bg-clip-text text-transparent "
            style={{ backgroundImage: 'linear-gradient(to right, #0088FF 0%, #364a65ff 100%)' }}>
            Startup Builder
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            I Build <span className="text-brand">Startups</span>, not just Features
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((startup, index) => (
            <motion.div
              key={startup.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:scale-[1.04] hover:shadow-lg hover:shadow-blue-500/20 ease-in-out duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#0088FF]/10 text-brand rounded-xl mb-6 flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-brand group-hover:border-2">
                <div className="group-hover:scale-110 transition-all duration-200">
                  {startup.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{startup.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {startup.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {startup.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          ))}
        </div>
        <div className="mt-12 inline-flex justify-between w-full bg-gradient-brand rounded-2xl px-6 py-4">
          <div className="flex flex-col items-start">
            <h2 className='text-2xl font-bold text-white'>Need a co-founder-level collaborator?</h2>
            <p className='text-white text-md leading-relaxed'>I embed with founding teams to drive product from 0→1 — design, engineering, and strategy in one person.</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200">
              Get In Touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
