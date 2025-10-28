import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import portfolioData from './data/portfolio.json';

function App() {
  const [data, setData] = useState(portfolioData);
  const [isScrolled, setIsScrolled] = useState(false);

  // Watch for changes in portfolio.json (hot reload in development)
  useEffect(() => {
    setData(portfolioData);
  }, []);

  // Handle scroll for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply theme colors to CSS variables (optional for advanced theming)
  useEffect(() => {
    if (data?.theme?.colors) {
      const root = document.documentElement;
      Object.entries(data.theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-gradient">
              {data?.hero?.name || 'Portfolio'}
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-textSecondary hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-textSecondary hover:text-primary transition-colors font-medium"
                    onClick={() => {
                      document.getElementById('mobile-menu')?.classList.add('hidden');
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero data={data?.hero} />
        <About data={data?.about} />
        <Skills data={data?.skills} />
        <Projects data={data?.projects} />
        <Experience data={data?.experience} />
        <Contact data={data?.contact} />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-surface">
        <div className="max-w-7xl mx-auto text-center text-textSecondary">
          <p>
            © {new Date().getFullYear()} {data?.hero?.name || 'Portfolio'}. All
            rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with React, TailwindCSS, and Framer Motion
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:scale-110 shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </>
  );
}

export default App;
