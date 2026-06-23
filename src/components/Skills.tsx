import { motion } from 'framer-motion';
import htmlIcon from '../assets/technical-experties/html.png';
import cssIcon from '../assets/technical-experties/css.png';
import javascriptIcon from '../assets/technical-experties/javascript.png';
import typescriptIcon from '../assets/technical-experties/typescript.png';
import reactIcon from '../assets/technical-experties/react.png';
import tailwindIcon from '../assets/technical-experties/tailwind.png';
import nodejsIcon from '../assets/technical-experties/nodejs.png';
import phpIcon from '../assets/technical-experties/php.png';
import laravelIcon from '../assets/technical-experties/laravel.png';
import pythonIcon from '../assets/technical-experties/python.png';
import mongodbIcon from '../assets/technical-experties/mongodb.png';
import mysqlIcon from '../assets/technical-experties/mysql.png';
import postmanIcon from '../assets/technical-experties/postman.png';
import gitIcon from '../assets/technical-experties/git.png';
import githubIcon from '../assets/technical-experties/github.png';
import linuxIcon from '../assets/technical-experties/linux.png';
import figmaIcon from '../assets/technical-experties/figma.png';
import notionIcon from '../assets/technical-experties/notion.png';
import cursorIcon from '../assets/technical-experties/cursor.png';
import claudeIcon from '../assets/technical-experties/claude.png';
import geminiIcon from '../assets/technical-experties/gemini.png';

const skills = [
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Tailwind', icon: tailwindIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Linux', icon: linuxIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Notion', icon: notionIcon },
  { name: 'Cursor', icon: cursorIcon },
  { name: 'Claude', icon: claudeIcon },
  { name: 'Gemini', icon: geminiIcon }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-start mb-12 text-left"
        >
          <h2 className="text-md mb-2 tracking-widest font-medium uppercase bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">
            Technical Expertise
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Full-stack capabilities from <span className="bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">Design</span> to <span className="bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">Deploy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15, ease: "easeOut" } }}
              className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 glass-card rounded-2xl p-4 group cursor-pointer"
              style={{ willChange: "transform" }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain mb-2 transition-transform group-hover:-scale-x-100"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48'; }}
              />
              <span className="text-xs font-medium text-secondary group-hover:bg-gradient-brand group-hover:bg-clip-text group-hover:text-transparent transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
