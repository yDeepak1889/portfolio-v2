import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <h2 className="section-title">
                        Let's Get In <span className="gradient-text">Touch</span>
                    </h2>

                    <p className="contact-intro">
                        It was great meeting you! I'm always up for a good conversation about
                        simple designs, movies, and books. If you have any questions about
                        starting your career in UX Writing, I'd be happy to chat with you.
                    </p>

                    <div className="contact-info">
                        <a
                            href="mailto:richauxw@gmail.com"
                            className="email-link"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            richauxw@gmail.com
                        </a>
                    </div>

                    <p className="contact-cta">
                        Feel free to reach out for collaborations, questions, or just a friendly chat!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
