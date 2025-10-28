import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      
      <motion.div
        className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading">
              Hi, I'm <span className="text-gradient">{data.name}</span>
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-textSecondary"
          >
            {data.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-textSecondary"
          >
            {data.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-textSecondary/80"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center"
            >
              {data.cta.primary}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
            >
              {data.cta.secondary}
            </a>
            <a
              href="/portfolio/Mohamed Gamal Sedeek.pdf"
              download
              className="px-8 py-4 bg-accent rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <span>📄</span>
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            {data.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-primary transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <span className="text-xl">{getSocialIcon(social.icon)}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          variants={itemVariants}
          className="relative order-first md:order-last"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={data.image}
              alt={data.name}
              className="relative rounded-full w-full h-auto border-4 border-surface shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-textSecondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-textSecondary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

const getSocialIcon = (icon) => {
  const icons = {
    github: '💻',
    linkedin: '💼',
    twitter: '🐦',
    email: '📧',
  };
  return icons[icon] || '🔗';
};

export default Hero;
