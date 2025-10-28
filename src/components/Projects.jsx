import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');

  if (!data) return null;

  const featuredProjects = data.items.filter((p) => p.featured);
  const displayProjects = filter === 'featured' ? featuredProjects : data.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-4"
          >
            {data.title}
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
          ></motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={cardVariants}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-surface text-textSecondary hover:bg-surface/80'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-primary text-white'
                  : 'bg-surface text-textSecondary hover:bg-surface/80'
              }`}
            >
              Featured
            </button>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-surface rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  
                  <p className="text-textSecondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium text-textSecondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <span>💻</span>
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        <span>🚀</span>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
