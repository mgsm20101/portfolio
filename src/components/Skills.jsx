import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const categoryVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

/**
 * Skills as named lists, not percentage bars.
 *
 * "Kubernetes 85%" is a number with no measurement behind it, and a page that
 * puts one beside benchmark results that DO have commits and raw files behind
 * them devalues the second kind. Grouping by how the skill is actually held —
 * production use versus study — says more and claims less.
 */
const Skills = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (!data) return null;

  const categories = data.categories ?? [];

  return (
    <section id="skills" ref={ref} className="bg-surface/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={categoryVariants}
            className="mb-4 text-center font-heading text-4xl font-bold md:text-5xl"
          >
            {data.title}
          </motion.h2>

          <motion.div
            variants={categoryVariants}
            className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"
          />

          {data.subtitle && (
            <motion.p
              variants={categoryVariants}
              className="mx-auto mb-14 max-w-2xl text-center text-sm text-textSecondary"
            >
              {data.subtitle}
            </motion.p>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                variants={categoryVariants}
                className="rounded-xl bg-surface p-6 transition-all duration-300 hover:bg-surface/80"
              >
                <h3 className="text-gradient text-xl font-semibold">{category.name}</h3>

                {category.context && (
                  <p className="mt-1 text-xs uppercase tracking-wide text-textSecondary">
                    {category.context}
                  </p>
                )}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {(category.skills ?? []).map((skill) => {
                    const name = typeof skill === 'string' ? skill : skill.name;
                    return (
                      <li
                        key={name}
                        className="rounded-full bg-background px-3 py-1.5 text-sm text-text"
                      >
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
