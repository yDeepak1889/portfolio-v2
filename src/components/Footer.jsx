import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="container footer-cta">
                <p className="eyebrow">Let's connect</p>
                <h2>Have a tricky product problem? Let’s talk.</h2>
                <p>I’m always up for conversations about content design, product thinking, AI, and the messy bits in between.</p>
                <div className="footer-links">
                    <a className="footer-email" href="mailto:richauxw@gmail.com">
                        richauxw@gmail.com
                    </a>
                </div>
                <blockquote className="footer-quote">
                    “Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.” — Albus Dumbledore
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
