import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const EMAIL = 'mailto:richauxw@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/richa-chaturvedi-ux/';
const RESUME =
  'https://drive.google.com/file/d/199LRFkWY4J9XqNrGREDN8jXGwIatEJoK/view?usp=drive_link';

const sections = [
  { id: 'home', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'contact', label: 'Contact' },
];

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
    />
  </svg>
);

const Navigation = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const isArticlesPage = location.pathname.replace(/\/$/, '') === '/articles';
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isArticlesPage) {
      setActiveSection(null);
      return undefined;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const present = sections
        .map(({ id }) => ({ id, element: document.getElementById(id) }))
        .filter(({ element }) => element);

      if (!present.length) return;

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (atBottom) {
        setActiveSection(present[present.length - 1].id);
        return;
      }

      const probe = window.scrollY + 120;
      const passed = present.filter(
        ({ element }) => element.getBoundingClientRect().top + window.scrollY <= probe
      );

      setActiveSection((passed[passed.length - 1] ?? present[0]).id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isArticlesPage]);

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

  const sectionHref = (id) => {
    if (!isArticlesPage) return `#${id}`;
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    return `${base}/#${id}`;
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav
        className={`navigation ${isScrolled || isArticlesPage ? 'scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="container nav-container">
          <Link
            to="/"
            className="nav-logo"
            aria-label="Richa Chaturvedi, home"
            onClick={closeMenu}
          >
            RC<span>.</span>
          </Link>

          <ul id="primary-menu" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={sectionHref(id)}
                  className={!isArticlesPage && activeSection === id ? 'active' : ''}
                  aria-current={
                    !isArticlesPage && activeSection === id ? 'location' : undefined
                  }
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/articles"
                className={isArticlesPage ? 'active' : ''}
                aria-current={isArticlesPage ? 'page' : undefined}
                onClick={closeMenu}
              >
                Articles
              </Link>
            </li>
            <li className="mobile-external">
              <a href={EMAIL} onClick={closeMenu}>
                Email
              </a>
            </li>
            <li className="mobile-external">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                LinkedIn
              </a>
            </li>
            <li className="mobile-external">
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Resume ↗
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a
              href={EMAIL}
              className="nav-icon"
              aria-label="Email Richa"
            >
              <MailIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="Richa on LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={RESUME}
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
