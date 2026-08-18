import { useEffect, useState } from 'react';
import './Footer.css';

const EMAIL = 'richauxw@gmail.com';

const CopyIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return undefined;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {
            const input = document.createElement('textarea');
            input.value = EMAIL;
            input.setAttribute('readonly', '');
            input.style.position = 'absolute';
            input.style.left = '-9999px';
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            setCopied(true);
        }
    };

    return (
        <footer id="contact" className="footer">
            <div className="container footer-cta">
                <p className="eyebrow">Let's connect</p>
                <h2>Have a tricky product problem? Let’s talk.</h2>
                <p>I’m always up for conversations about content design, product thinking, AI, and the messy bits in between.</p>
                <div className="footer-links">
                    <a className="footer-email" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                    </a>
                    <button
                        type="button"
                        className={`footer-copy ${copied ? 'copied' : ''}`}
                        onClick={copyEmail}
                        aria-label={copied ? 'Email address copied' : `Copy ${EMAIL} to clipboard`}
                    >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                    </button>
                    <span className="visually-hidden" aria-live="polite">
                        {copied ? 'Email address copied to clipboard' : ''}
                    </span>
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
