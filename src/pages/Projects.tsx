import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'Open Source'];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web App',
    gradient: 'from-purple-500 to-violet-600',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'Intelligent chat application powered by GPT with real-time messaging and smart response suggestions.',
    image: '🤖',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'Redis'],
    category: 'Web App',
    gradient: 'from-cyan-500 to-blue-600',
    link: '#',
    github: '#',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
    image: '💪',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    category: 'Mobile',
    gradient: 'from-green-500 to-emerald-600',
    link: '#',
    github: '#',
  },
  {
    title: 'Design System',
    description: 'Comprehensive design system with 100+ components, accessibility-first approach, and dark mode support.',
    image: '🎨',
    tags: ['Figma', 'Storybook', 'React', 'Tailwind'],
    category: 'UI/UX',
    gradient: 'from-pink-500 to-rose-600',
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management Tool',
    description: 'Kanban-style project management tool with real-time collaboration, file sharing, and analytics.',
    image: '📋',
    tags: ['Vue.js', 'Supabase', 'TypeScript'],
    category: 'Web App',
    gradient: 'from-amber-500 to-orange-600',
    link: '#',
    github: '#',
  },
  {
    title: 'React Component Library',
    description: 'Open-source React component library with 50+ accessible, customizable components and full documentation.',
    image: '📦',
    tags: ['React', 'TypeScript', 'Jest', 'Storybook'],
    category: 'Open Source',
    gradient: 'from-indigo-500 to-purple-600',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.',
    image: '🌤️',
    tags: ['React', 'D3.js', 'Weather API'],
    category: 'Web App',
    gradient: 'from-sky-500 to-cyan-600',
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'Modern, responsive portfolio template with smooth animations, dark mode, and CMS integration.',
    image: '✨',
    tags: ['Next.js', 'Framer Motion', 'MDX'],
    category: 'Open Source',
    gradient: 'from-violet-500 to-purple-600',
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
          >
            A collection of projects I've built, showcasing my skills in full-stack development, design, and problem-solving.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                >
                  {/* Project Image/Icon Area */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="text-6xl relative z-10 group-hover:scale-125 transition-transform duration-500">
                      {project.image}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href={project.link} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.github} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-xs border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
