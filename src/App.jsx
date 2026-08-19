import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Articles from './pages/Articles';
import SapNotifications from './pages/SapNotifications';
import ProjectCaseStudy from './pages/ProjectCaseStudy';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) {
      target.scrollIntoView();
    }
  }, [location.hash]);

  return (
    <>
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route
            path="/projects/sap-fiori-notifications"
            element={<SapNotifications />}
          />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
