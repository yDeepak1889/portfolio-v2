import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const sections = [
  { id: 'projects', label: 'Case Studies' },
  { id: 'experience', label: 'Experience' }
];

const Navigation = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionIds = ['home', ...sections.map(({ id }) => id)];
      const current = sectionIds.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
      <div className="container nav-container">
        <a href="#home" className="nav-logo" aria-label="Richa Chaturvedi, home" onClick={closeMenu}>
          RC<span>.</span>
        </a>

        <ul id="primary-menu" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mobile-external">
            <a
              href="https://www.linkedin.com/in/richa-chaturvedi-ux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </li>
          <li className="mobile-external">
            <a
              href="https://drive.google.com/file/d/199LRFkWY4J9XqNrGREDN8jXGwIatEJoK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="https://www.linkedin.com/in/richa-chaturvedi-ux/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://drive.google.com/file/d/199LRFkWY4J9XqNrGREDN8jXGwIatEJoK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume ↗
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navigation;

