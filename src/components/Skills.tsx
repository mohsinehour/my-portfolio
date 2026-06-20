import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: '/src/assets/technical-experties/html.png' },
  { name: 'CSS3', icon: '/src/assets/technical-experties/css.png' },
  { name: 'JavaScript', icon: '/src/assets/technical-experties/javascript.png' },
  { name: 'TypeScript', icon: '/src/assets/technical-experties/typescript.png' },
  { name: 'React', icon: '/src/assets/technical-experties/react.png' },
  { name: 'Tailwind', icon: '/src/assets/technical-experties/tailwind.png' },
  { name: 'Node.js', icon: '/src/assets/technical-experties/nodejs.png' },
  { name: 'PHP', icon: '/src/assets/technical-experties/php.png' },
  { name: 'Laravel', icon: '/src/assets/technical-experties/laravel.png' },
  { name: 'Python', icon: '/src/assets/technical-experties/python.png' },
  { name: 'MongoDB', icon: '/src/assets/technical-experties/mongodb.png' },
  { name: 'MySQL', icon: '/src/assets/technical-experties/mysql.png' },
  { name: 'Postman', icon: '/src/assets/technical-experties/postman.png' },
  { name: 'Git', icon: '/src/assets/technical-experties/git.png' },
  { name: 'GitHub', icon: '/src/assets/technical-experties/github.png' },
  { name: 'Linux', icon: '/src/assets/technical-experties/linux.png' },
  { name: 'Figma', icon: '/src/assets/technical-experties/figma.png' },
  { name: 'Notion', icon: '/src/assets/technical-experties/notion.png' },
  { name: 'Cursor', icon: '/src/assets/technical-experties/cursor.png' },
  { name: 'Claude', icon: '/src/assets/technical-experties/claude.png' },
  { name: 'Gemini', icon: '/src/assets/technical-experties/gemini.png' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.001 }}
              whileHover={{ scale: 1.1, filter: 'saturate(1.5)' }}
              className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 glass-card rounded-2xl p-4 group cursor-pointer"
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
