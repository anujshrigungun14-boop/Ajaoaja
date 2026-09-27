import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 },
      { name: 'HTML5 / CSS3', level: 98 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 88 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS / Cloud', level: 75 },
      { name: 'CI/CD', level: 82 },
      { name: 'Linux', level: 78 },
      { name: 'Vercel / Netlify', level: 90 },
    ],
  },
  {
    title: 'Design & Other',
    icon: '✨',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Accessibility', level: 88 },
      { name: 'SEO', level: 82 },
      { name: 'Testing (Jest)', level: 78 },
    ],
  },
];

const techStack = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', color: 'from-blue-400 to-indigo-500' },
  { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
  { name: 'Python', color: 'from-yellow-400 to-green-500' },
  { name: 'PostgreSQL', color: 'from-blue-400 to-purple-500' },
  { name: 'MongoDB', color: 'from-green-400 to-lime-500' },
  { name: 'Docker', color: 'from-blue-400 to-cyan-500' },
  { name: 'AWS', color: 'from-orange-400 to-amber-500' },
  { name: 'Figma', color: 'from-purple-400 to-pink-500' },
  { name: 'Git', color: 'from-red-400 to-orange-500' },
  { name: 'Tailwind', color: 'from-cyan-400 to-teal-500' },
  { name: 'Next.js', color: 'from-gray-400 to-white' },
];

export default function Skills() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 cursor-default"
              >
                <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} mr-2`} />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-purple-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 + catIndex * 0.2, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Quick <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stats</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '10K+', label: 'Lines of Code' },
                { value: '500+', label: 'Commits' },
                { value: '50+', label: 'Projects' },
                { value: '∞', label: 'Cups of Coffee' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
