import './Footer.css';

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

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="container footer-cta">
                <p className="eyebrow">Let's connect</p>
                <h2>Working on a complex product experience?</h2>
                <p>I'd love to exchange ideas about content design, product UX, AI, and Context Engineering.</p>
                <div className="footer-links">
                    <a
                        className="footer-icon"
                        href="mailto:richauxw@gmail.com"
                        aria-label="Email Richa"
                    >
                        <MailIcon />
                    </a>
                    <a
                        className="footer-icon"
                        href="https://www.linkedin.com/in/richa-chaturvedi-ux/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Richa on LinkedIn"
                    >
                        <LinkedInIcon />
                    </a>
                </div>
                <blockquote className="footer-quote">
                    “Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.”
                </blockquote>
            </div>
            <div className="container footer-content">
                <p className="footer-text">
                    Richa Chaturvedi · Senior Content Designer
                </p>
                <p className="footer-copyright">
                    © {currentYear} · Designed with product, UX, and content thinking
                </p>
            </div>
        </footer>
    );
};

export default Footer;
