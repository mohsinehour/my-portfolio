const fs = require('fs');

// Skills.tsx
let skills = fs.readFileSync('src/components/Skills.tsx', 'utf8');
skills = skills.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
skills = skills.replace("export default function Skills() {\n  return (", "export default function Skills() {\n  const { t } = useTranslation();\n  return (");
skills = skills.replace("Technical Expertise\n          </h2>", "{t('skills.title')}\n          </h2>");
skills = skills.replace(/<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-primary\">\n\s*Full-stack capabilities from <span .*?<\/span>\n\s*<\/h2>/, "<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-primary\">\n            {t('skills.subtitle')}\n          </h2>");
fs.writeFileSync('src/components/Skills.tsx', skills);

// Startups.tsx
let startups = fs.readFileSync('src/components/Startups.tsx', 'utf8');
startups = startups.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
startups = startups.replace(/const cards = \[\n\s*\{\n\s*icon: <Target size=\{24\} \/>,.*?\n\];/s, `const icons = [
  <Target size={24} />,
  <Zap size={24} />,
  <Brain size={24} />,
  <Layers size={24} />,
  <Store size={24} />,
  <TrendingUp size={24} />
];`);
startups = startups.replace("function StartupCard({ startup, index }: { startup: typeof cards[number]; index: number })", "function StartupCard({ startup, index }: { startup: any; index: number })");

startups = startups.replace("export default function Startups() {\n  const scrollRef", "export default function Startups() {\n  const { t } = useTranslation();\n  const cardsData = t('startups.cards', { returnObjects: true }) as any[];\n  const cards = cardsData.map((c, i) => ({ ...c, icon: icons[i] }));\n  const scrollRef");

startups = startups.replace("Startup Builder\n          </h2>", "{t('startups.title')}\n          </h2>");
startups = startups.replace(/<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-white\">\n\s*I Build <span className=\"text-brand\">Startups<\/span>, not just Features\n\s*<\/h2>/, "<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-white\">\n            {t('startups.subtitle')}\n          </h2>");

startups = startups.replace("<h2 className='text-2xl font-bold text-white'>Need a co-founder-level collaborator?</h2>", "<h2 className='text-2xl font-bold text-white'>{t('startups.ctaTitle')}</h2>");
startups = startups.replace("<p className='text-white text-md leading-relaxed'>I embed with founding teams to drive product from 0→1 — design, engineering, and strategy in one person.</p>", "<p className='text-white text-md leading-relaxed'>{t('startups.ctaDesc')}</p>");
startups = startups.replace("Get In Touch <ArrowUpRight size={16} />", "{t('startups.ctaButton')} <ArrowUpRight size={16} />");

fs.writeFileSync('src/components/Startups.tsx', startups);
