const fs = require('fs');

// Education.tsx
let edu = fs.readFileSync('src/components/Education.tsx', 'utf8');
edu = edu.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useTranslation } from 'react-i18next';");

edu = edu.replace(/const education = \[\n\s*\{\n\s*title: 'European Master.*?\n\];/s, `const educationLogos = [fedeLogo, fstLogo];`);
edu = edu.replace(/const certifications = \[\n\s*\{\n\s*title: 'Software Engineering.*?\n\];/s, `const certificationBgImages = [softwareEngineeringBg, mckinseyBg, founderAcademyBg];\nconst certificationLogos = [alxLogo, mckinseyLogo, alxVenturesLogo];\nconst certificationCredentials = [\n  "https://intranet.alxswe.com/certificates/N5YnzP8frB",\n  "https://www.credly.com/badges/186b2104-af1a-4f5c-a200-f28ffde61ee7/",\n  "https://intranet.alxswe.com/certificates/L7Nrme6XHM"\n];`);

edu = edu.replace("export default function Education() {\n  const [flippedIndex, setFlippedIndex]", "export default function Education() {\n  const { t } = useTranslation();\n  const education = (t('education.academicList', { returnObjects: true }) as any[]).map((e, i) => ({ ...e, image: educationLogos[i] }));\n  const certifications = (t('education.certificationsList', { returnObjects: true }) as any[]).map((c, i) => ({ ...c, bgImage: certificationBgImages[i], logo: certificationLogos[i], credential: certificationCredentials[i] }));\n  const [flippedIndex, setFlippedIndex]");

edu = edu.replace("Education & Certifications\n          </h2>", "{t('education.title')}\n          </h2>");
edu = edu.replace(/<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-primary\">\n\s*Credentials & <span className=\"bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary\">Continuous Learning<\/span>\n\s*<\/h2>/, "<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-primary\">\n            {t('education.subtitle')}\n          </h2>");

edu = edu.replace("Academic Education</h3>", "{t('education.academic')}</h3>");
edu = edu.replace("Certifications</h3>", "{t('education.certifications')}</h3>");
edu = edu.replace("Show Credential <ExternalLink size={14} />", "{t('education.showCredential')} <ExternalLink size={14} />");

fs.writeFileSync('src/components/Education.tsx', edu);

// Testimonials.tsx
let test = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');
test = test.replace("import { useState, useEffect, useRef, useCallback } from 'react';", "import { useState, useEffect, useRef, useCallback } from 'react';\nimport { useTranslation } from 'react-i18next';");

test = test.replace(/const testimonials = \[\n\s*\{\n\s*name: 'King Chukwumere'.*?\n\];/s, `const testimonialImages = [kingChukwumere, anasOudadsse];`);

test = test.replace("export default function Testimonials() {\n  const scrollRef", "export default function Testimonials() {\n  const { t } = useTranslation();\n  const testimonials = (t('testimonials.list', { returnObjects: true }) as any[]).map((tItem, i) => ({ ...tItem, image: testimonialImages[i] }));\n  const scrollRef");

test = test.replace("Testimonials\n          </h2>", "{t('testimonials.title')}\n          </h2>");
test = test.replace(/<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-primary\">\n\s*What <span .*?<\/span>\n\s*<\/h2>/, "<h2 className=\"text-3xl md:text-4xl font-bold mb-4 text-primary\">\n            {t('testimonials.subtitle')}\n          </h2>");

fs.writeFileSync('src/components/Testimonials.tsx', test);
