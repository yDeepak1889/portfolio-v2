import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    Designed & Built by <span className="gradient-text">Richa Chaturvedi</span>
                </p>
                <p className="footer-copyright">
                    © {currentYear} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
