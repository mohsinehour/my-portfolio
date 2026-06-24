const fs = require('fs');

// Contact.tsx
let contact = fs.readFileSync('src/components/Contact.tsx', 'utf8');
contact = contact.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useTranslation } from 'react-i18next';");

contact = contact.replace("export default function Contact() {\n  const [status", "export default function Contact() {\n  const { t } = useTranslation();\n  const [status");

contact = contact.replace(/<h2 className=\"text-4xl md:text-5xl font-bold mb-4 text-primary\">\n\s*Let's Build <span className=\"bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary\">Together<\/span>\n\s*<\/h2>/, "<h2 className=\"text-4xl md:text-5xl font-bold mb-4 text-primary\">\n            {t('contact.title')}\n          </h2>");

contact = contact.replace(/<p className=\"text-secondary max-w-2xl mx-auto\">\n\s*Have a project in mind.*?\n\s*<\/p>/, "<p className=\"text-secondary max-w-2xl mx-auto\">\n            {t('contact.subtitle')}\n          </p>");

contact = contact.replace("<h3 className=\"text-3xl font-bold mb-6\">Get in touch</h3>", "<h3 className=\"text-3xl font-bold mb-6\">{t('contact.getInTouch')}</h3>");
contact = contact.replace(/<p className=\"text-white mb-10 leading-relaxed\">\n\s*Whether you have a question.*?\n\s*<\/p>/, "<p className=\"text-white mb-10 leading-relaxed\">\n                {t('contact.getInTouchDesc')}\n              </p>");
contact = contact.replace("Book a Call <ExternalLink size={18} />", "{t('contact.bookACall')} <ExternalLink size={18} />");
contact = contact.replace("<p className=\"font-md text-md text-white\">Schedule a 30 min call with me</p>", "<p className=\"font-md text-md text-white\">{t('contact.bookACallDesc')}</p>");

contact = contact.replace("<p className=\"text-sm text-white mb-4\">Connect with me</p>", "<p className=\"text-sm text-white mb-4\">{t('contact.connectWithMe')}</p>");

contact = contact.replace(">Name</label>", ">{t('contact.name')}</label>");
contact = contact.replace(">Email</label>", ">{t('contact.email')}</label>");
contact = contact.replace(">Message</label>", ">{t('contact.message')}</label>");

contact = contact.replace("{status === 'loading' ? 'Sending...' : 'Send Message'}", "{status === 'loading' ? t('contact.sending') : t('contact.sendMessage')}");
contact = contact.replace("Message sent! I'll get back to you soon.", "{t('contact.success')}");
contact = contact.replace("Something went wrong. Please try emailing me directly.", "{t('contact.error')}");

fs.writeFileSync('src/components/Contact.tsx', contact);

// CaseStudies.tsx
let cs = fs.readFileSync('src/components/CaseStudies.tsx', 'utf8');
cs = cs.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useTranslation } from 'react-i18next';");

// Rewrite caseStudies mapping
let newMapping = `const studiesBase = [
  {
    id: 'mycoach',
    image: mycoachCaseStudyImage,
    overviewImage: mycoachOverviewImg,
    solutionImage: mycoachSolutionImg,
    outcomeImage: mycoachOutcomeImg,
    technologies: ['React', 'Laravel', 'MySQL', 'Figma'],
    site: 'https://mycoach.ma/',
  },
  {
    id: 'vouchify',
    image: vouchifyCaseStudyImage,
    overviewImage: vouchifyOverviewImg,
    solutionImage: vouchifySolutionImg,
    outcomeImage: vouchifyOutcomeImg,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'],
    site: 'https://usevouchify.com/',
  },
  {
    id: 'lifeline',
    image: lifelineCaseStudyImage,
    overviewImage: lifelineOverviewImg,
    solutionImage: lifelineSolutionImg,
    outcomeImage: lifelineOutcomeImg,
    technologies: ['TypeScript', 'React', 'Node.js', 'Figma'],
    site: 'https://mylifeline.health/',
  },
];`;

cs = cs.replace(/const caseStudies: CaseStudy\[\] = \[\n  \{\n    id: 'mycoach'.*?\n\];/s, newMapping);

let funcRepl = `export default function CaseStudies() {
  const { t } = useTranslation();
  const caseStudies = studiesBase.map(base => {
    const tData = t(\`work.caseStudies.\${base.id}\`, { returnObjects: true }) as any;
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

  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);`;

cs = cs.replace("export default function CaseStudies() {\n  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);", funcRepl);

cs = cs.replace("Featured Work\n          </h2>", "{t('work.title')}\n          </h2>");
cs = cs.replace(/<h2 className=\"text-3xl md:text-4xl font-bold mb-3 text-primary\">\n\s*Case Studies I'm <span .*?<\/span> Of\n\s*<\/h2>/, "<h2 className=\"text-3xl md:text-4xl font-bold mb-3 text-primary\">\n            {t('work.subtitle')}\n          </h2>");
cs = cs.replace(/<p className=\"text-secondary\">\n\s*Deep dives into some of my most impactful.*?\n\s*<\/p>/, "<p className=\"text-secondary\">\n            {t('work.description')}\n          </p>");

cs = cs.replace("View Case Study <ArrowUpRight size={16} />", "{t('work.viewCaseStudy')} <ArrowUpRight size={16} />");
cs = cs.replace("Visit Live Site <ExternalLink size={16} />", "{t('work.visitLiveSite')} <ExternalLink size={16} />");

cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-3\">Overview</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-3\">{t('work.overview')}</h3>");
cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-3\">The Challenge</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-3\">{t('work.theChallenge')}</h3>");
cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-4\">My Role</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-4\">{t('work.myRole')}</h3>");
cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-3\">Solution</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-3\">{t('work.solution')}</h3>");
cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-3\">Process</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-3\">{t('work.process')}</h3>");
cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-3\">Outcome</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-3\">{t('work.outcome')}</h3>");
cs = cs.replace("<h3 className=\"text-xl font-semibold text-brand mb-4\">Technologies</h3>", "<h3 className=\"text-xl font-semibold text-brand mb-4\">{t('work.technologies')}</h3>");

fs.writeFileSync('src/components/CaseStudies.tsx', cs);
