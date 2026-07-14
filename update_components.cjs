const fs = require('fs');

// About.tsx
let about = fs.readFileSync('src/components/About.tsx', 'utf8');
about = about.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
about = about.replace("export default function About() {\n    return (", "export default function About() {\n    const { t } = useTranslation();\n    return (");
about = about.replace("About Me\n                        </h2>", "{t('about.title')}\n                        </h2>");
about = about.replace(/<h1 className=\"text-4xl font-semibold text-primary mb-6\">.*<\/h1>/, "<h1 className=\"text-4xl font-semibold text-primary mb-6\">{t('about.subtitle')}</h1>");
about = about.replace(/<p className=\"text-lg text-secondary mb-4 max-w-lg leading-relaxed\">\n\s*I'm a Product Manager.*?\n\s*<\/p>/s, "<p className=\"text-lg text-secondary mb-4 max-w-lg leading-relaxed\">\n                                {t('about.description1')}\n                            </p>");
about = about.replace(/<p className=\"text-lg text-secondary mb-4 max-w-lg leading-relaxed\">\n\s*After studying Automation.*?\n\s*<\/p>/s, "<p className=\"text-lg text-secondary mb-4 max-w-lg leading-relaxed\">\n                                {t('about.description2')}\n                            </p>");
about = about.replace(/<p className=\"text-lg text-secondary mb-4 max-w-lg leading-relaxed\">\n\s*As Co-Founder.*?\n\s*<\/p>/s, "<p className=\"text-lg text-secondary mb-4 max-w-lg leading-relaxed\">\n                                {t('about.description3')}\n                            </p>");
about = about.replace(/<p className=\"text-white text-sm leading-relaxed\">\n\s*I don't just design.*?\n\s*<\/p>/s, "<p className=\"text-white text-sm leading-relaxed\">\n                                        {t('about.quote')}\n                                    </p>");
about = about.replace("Products Built", "{t('about.products')}");
about = about.replace("Years of Experience", "{t('about.years')}");
about = about.replace("Founder Mindset", "{t('about.mindset')}");
fs.writeFileSync('src/components/About.tsx', about);

// Experience.tsx
let exp = fs.readFileSync('src/components/Experience.tsx', 'utf8');
exp = exp.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
exp = exp.replace(/const experiences = \[\n\s*\{\n\s*company: 'MYCOACH',.*?\n\];/s, "const logos = [mycoachLogo, vouchifyLogo, lifelineLogo];");
exp = exp.replace("export default function Experience() {\n  return (", "export default function Experience() {\n  const { t } = useTranslation();\n  const experiences = (t('experiences.timeline', { returnObjects: true }) as any[]).map((exp, idx) => ({ ...exp, logo: logos[idx] }));\n  return (");
exp = exp.replace("Experience\n            </h2>", "{t('experiences.title')}\n            </h2>");
exp = exp.replace(/<h2 className=\"text-3xl md:text-4xl font-bold mb-4\">\n\s*Where I've Built & Shipped <span className=\"text-brand\">Products<\/span>\n\s*<\/h2>/, "<h2 className=\"text-3xl md:text-4xl font-bold mb-4\">\n            {t('experiences.subtitle')}\n          </h2>");
exp = exp.replace("{exp.date}", "{exp.dates}");
exp = exp.replace("exp.Bulletpoints.map(bullet", "exp.key_contributions.map((bullet: string)");
fs.writeFileSync('src/components/Experience.tsx', exp);
