import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-cta">
                <p className="eyebrow">Let's connect</p>
                <h2>Working on a complex product experience?</h2>
                <p>I'd love to exchange ideas about content design, product UX, AI, and Context Engineering.</p>
                <div className="footer-links">
                    <a className="btn btn-primary" href="mailto:richauxw@gmail.com">Email me</a>
                    <a
                        className="btn btn-secondary"
                        href="https://www.linkedin.com/in/richa-chaturvedi-ux/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        className="btn btn-secondary"
                        href="https://drive.google.com/file/d/199LRFkWY4J9XqNrGREDN8jXGwIatEJoK/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume ↗
                    </a>
                </div>
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
