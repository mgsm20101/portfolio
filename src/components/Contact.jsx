import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  if (!data) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can integrate with a backend or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
    <section id="contact" ref={ref} className="py-20 px-4">
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
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-textSecondary text-lg mb-12 max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-textSecondary hover:text-primary transition-colors"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${data.phone}`}
                      className="text-textSecondary hover:text-primary transition-colors"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-textSecondary">{data.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {data.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface hover:bg-primary transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-xl">{getSocialIcon(social.icon)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            {data.form.enabled && (
              <motion.div variants={itemVariants}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {data.form.fields.map((field, index) => (
                    <div key={index}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium mb-2"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-accent ml-1">*</span>
                        )}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          rows={5}
                          className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:border-primary focus:outline-none transition-colors"
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-3 bg-surface border border-surface rounded-lg focus:border-primary focus:outline-none transition-colors"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
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

export default Contact;
