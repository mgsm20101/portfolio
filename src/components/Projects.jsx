import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Groups render in this order. A project with no `group` falls into
// 'supporting', so a new entry can never vanish from the page by omission.
const GROUPS = [
  {
    id: 'flagship',
    label: 'Flagship',
    blurb: 'Measured end to end. Every number below has a command and a commit behind it.',
  },
  {
    id: 'supporting',
    label: 'Supporting work',
    blurb: 'Production systems delivered in employment. Proprietary — no public repository.',
  },
  {
    id: 'learning',
    label: 'Learning track',
    blurb: 'Smaller builds, listed for range rather than depth.',
  },
];

const STATUS_STYLES = {
  measured: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
  hypothesis: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
  proprietary: 'bg-slate-500/15 text-slate-300 ring-1 ring-slate-500/30',
  demo: 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30',
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/**
 * The reproduction details, collapsed.
 *
 * A recruiter reads the metric and moves on; an engineer opens this and gets
 * the exact command and the commit it ran at. Both audiences are served by the
 * same card, which is the only reason the numbers can stay this short above.
 */
const Evidence = ({ evidence }) => {
  const [open, setOpen] = useState(false);
  if (!evidence) return null;

  const { command, commit, environment, dataset, raw, note } = evidence;

  return (
    <div className="pt-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="text-xs font-semibold tracking-wide uppercase text-primary hover:text-secondary transition-colors"
      >
        {open ? '− Hide evidence' : '+ Evidence / Reproduce'}
      </button>

      {open && (
        <dl className="mt-3 space-y-2 rounded-lg bg-background/70 p-4 text-xs">
          {command && (
            <div>
              <dt className="text-textSecondary">Command</dt>
              <dd className="mt-1 break-all font-mono text-[11px] text-text">{command}</dd>
            </div>
          )}
          {commit && (
            <div>
              <dt className="text-textSecondary">Source commit</dt>
              <dd className="mt-1 font-mono text-[11px] text-text">{commit}</dd>
            </div>
          )}
          {environment && (
            <div>
              <dt className="text-textSecondary">Environment</dt>
              <dd className="mt-1 text-text">{environment}</dd>
            </div>
          )}
          {dataset && (
            <div>
              <dt className="text-textSecondary">Eval set</dt>
              <dd className="mt-1 text-text">{dataset}</dd>
            </div>
          )}
          {raw && (
            <div>
              <dt className="text-textSecondary">Raw result</dt>
              <dd className="mt-1">
                <a
                  href={raw}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:text-secondary"
                >
                  open the result file
                </a>
              </dd>
            </div>
          )}
          {note && <p className="pt-1 text-textSecondary">{note}</p>}
        </dl>
      )}
    </div>
  );
};

const ProjectCard = ({ project, wide }) => {
  const tags = project.tags ?? [];
  const links = project.links ?? {};
  const metrics = project.metrics ?? [];
  const status = project.status;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className={`flex flex-col overflow-hidden rounded-xl bg-surface transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
        wide ? 'lg:col-span-3' : ''
      }`}
    >
      {project.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {status && (
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                STATUS_STYLES[status.kind] ?? STATUS_STYLES.demo
              }`}
            >
              {status.label}
            </span>
          )}
        </div>

        {project.problem && (
          <p className="text-sm leading-relaxed text-textSecondary">
            <span className="font-semibold text-text">Problem. </span>
            {project.problem}
          </p>
        )}

        {project.description && (
          <p className="text-sm leading-relaxed text-textSecondary">
            {project.description}
          </p>
        )}

        {metrics.length > 0 && (
          <div className={`grid gap-3 ${wide ? 'sm:grid-cols-3' : 'grid-cols-2'}`}>
            {metrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-background/70 px-3 py-2">
                <div className="text-lg font-bold text-primary">{m.value}</div>
                <div className="text-[11px] leading-tight text-textSecondary">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {project.limitation && (
          <p className="rounded-lg border-l-2 border-amber-500/60 bg-amber-500/5 py-2 pl-3 text-xs leading-relaxed text-textSecondary">
            <span className="font-semibold text-amber-300">Limitation. </span>
            {project.limitation}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-textSecondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto space-y-2 pt-2">
          <div className="flex flex-wrap gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Code →
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Live demo →
              </a>
            )}
            {links.writeup && (
              <a
                href={links.writeup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Write-up →
              </a>
            )}
            {!links.github && !links.live && !links.writeup && project.noRepoReason && (
              <span className="text-xs italic text-textSecondary">{project.noRepoReason}</span>
            )}
          </div>

          <Evidence evidence={project.evidence} />
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (!data) return null;

  const items = data.items ?? [];

  return (
    <section id="projects" ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={cardVariants}
            className="mb-4 text-center font-heading text-4xl font-bold md:text-5xl"
          >
            {data.title}
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary"
          />

          {data.subtitle && (
            <motion.p
              variants={cardVariants}
              className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-textSecondary"
            >
              {data.subtitle}
            </motion.p>
          )}

          {GROUPS.map((group) => {
            const groupItems = items.filter((p) =>
              group.id === 'supporting'
                ? !p.group || p.group === 'supporting'
                : p.group === group.id,
            );
            if (groupItems.length === 0) return null;

            return (
              <div key={group.id} className="mb-16 last:mb-0">
                <motion.div variants={cardVariants} className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    {group.label}
                  </h3>
                  <p className="mt-1 text-sm text-textSecondary">{group.blurb}</p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                  {groupItems.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      wide={group.id === 'flagship' && groupItems.length === 1}
                    />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
