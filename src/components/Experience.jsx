import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-4"
          >
            {data.title}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"
          ></motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {data.items.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-12 border-l-2 border-primary/30 hover:border-primary transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                {/* Content Card */}
                <div className="bg-surface p-6 rounded-xl hover:bg-surface/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex flex-wrap gap-2 items-center text-textSecondary">
                      <span className="font-semibold text-primary">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-textSecondary mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex gap-2 text-sm text-textSecondary"
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
