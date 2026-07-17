import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-layout">
                <div className="hero-copy fade-in-up">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1>
                        Richa Chaturvedi<span className="accent-text">.</span>
                    </h1>
                    <h2 className="hero-role">
                        Senior Content Designer creating clear, human experiences.
                    </h2>
                    <div className="hero-bio">
                        <p>
                            I'm a <strong>Senior Content Designer</strong> at <strong>SAP Labs</strong> with <strong>6+ years of experience</strong> designing user-centered content for complex digital products.
                        </p>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View selected work
                            <span aria-hidden="true">↓</span>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/199LRFkWY4J9XqNrGREDN8jXGwIatEJoK/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            View resume
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                    <details className="hero-more">
                        <summary>More about my work</summary>
                        <div>
                            <p>
                                At SAP, I'm redefining content design systems and rewriting content guidelines across multiple products and features to create more consistent, scalable user experiences. I've also contributed to conversational design guidelines for Joule AI, helping shape the voice and interaction patterns for AI-powered experiences.
                            </p>
                            <p>
                                I enjoy designing end-to-end product experiences and building 0–1 products, collaborating with cross-functional teams to bring user-centered ideas to life.
                            </p>
                            <p>
                                Currently, I'm building my expertise in Context Engineering, exploring how content, structured context, and AI systems come together to create more intelligent, user-centered experiences. If you're working in this space or would like to chat about Context Engineering, I'd love to connect and exchange ideas.
                            </p>
                        </div>
                    </details>
                </div>

                <aside className="hero-summary" aria-label="Professional summary">
                    <div className="summary-header">
                        <div className="summary-monogram" aria-hidden="true">RC</div>
                        <div>
                            <p>Senior Content Designer</p>
                            <span>SAP Labs · Bengaluru</span>
                        </div>
                    </div>
                    <div className="summary-stats">
                        <div>
                            <strong>6+</strong>
                            <span>Years of experience</span>
                        </div>
                        <div>
                            <strong>15+</strong>
                            <span>Features designed</span>
                        </div>
                    </div>
                    <ul className="summary-thinking" aria-label="How I approach design">
                        <li>
                            <strong>Product thinking</strong>
                            <span>Frame the right problem and align user and business needs.</span>
                        </li>
                        <li>
                            <strong>UX thinking</strong>
                            <span>Shape intuitive journeys and remove cognitive friction.</span>
                        </li>
                        <li>
                            <strong>UI & content thinking</strong>
                            <span>Make every label, state, and interaction clear and purposeful.</span>
                        </li>
                    </ul>
                    <div className="summary-contact">
                        <a href="mailto:richauxw@gmail.com">richauxw@gmail.com</a>
                        <a
                            href="https://www.linkedin.com/in/richa-chaturvedi-ux/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Hero;
