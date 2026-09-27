import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Coffee, Rocket } from 'lucide-react';

const timeline = [
  {
    year: '2024 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise-grade applications using React, Node.js, and cloud technologies.',
    icon: Briefcase,
  },
  {
    year: '2022 - 2024',
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Built responsive web applications and contributed to design system development.',
    icon: Rocket,
  },
  {
    year: '2021 - 2022',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    description: 'Started my professional journey building web applications and learning modern frameworks.',
    icon: Coffee,
  },
  {
    year: '2017 - 2021',
    title: 'B.Tech in Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, focusing on software engineering and web technologies.',
    icon: GraduationCap,
  },
];

const interests = ['Open Source', 'AI/ML', 'Photography', 'Gaming', 'Music', 'Travel'];

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image / Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-cyan-500 rotate-6 opacity-50 blur-sm" />
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">K</span>
                    </div>
                    <p className="text-gray-400 text-sm">Kashyap</p>
                  </div>
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium"
                >
                  🚀 Developer
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                >
                  💡 Creative
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm Kashyap, a passionate Full Stack Developer with a keen eye for design and a love for creating seamless digital experiences. With over 3 years of experience in web development, I've worked on a diverse range of projects from startups to enterprise applications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                I believe in writing clean, maintainable code and building products that make a real impact. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or capturing moments through my camera lens.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">3+ Years Exp</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">B.Tech CS</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Freelancer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-gray-950 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-400 font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{item.company}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-12"
          >
            Beyond <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Code</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-sm hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
