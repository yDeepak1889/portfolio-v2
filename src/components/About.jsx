import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a <strong>Senior Content Designer</strong> at <strong>SAP Labs</strong> with <strong>6+ years of experience</strong> designing user-centered content for complex digital products.
                        </p>

                        <p>
                            At SAP, I'm redefining <strong>content design systems</strong> and rewriting <strong>content guidelines</strong> across multiple products and features to create more consistent, scalable user experiences. I've also contributed to conversational design guidelines for <strong>Joule AI</strong>, helping shape the voice and interaction patterns for AI-powered experiences.
                        </p>

                        <p>
                            I enjoy designing <strong>end-to-end product experiences</strong> and building <strong>0–1 products</strong>, collaborating with cross-functional teams to bring user-centered ideas to life.
                        </p>

                        <p>
                            Currently, I'm building my expertise in <strong>Context Engineering</strong>, exploring how content, structured context, and AI systems come together to create more intelligent, user-centered experiences. If you're working in this space or would like to chat about Context Engineering, I'd love to connect and exchange ideas.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <h3>6+</h3>
                                <p>Years of Experience</p>
                            </div>
                            <div className="highlight-item">
                                <h3>15+</h3>
                                <p>Features Designed</p>
                            </div>
                            <div className="highlight-item">
                                <h3>5</h3>
                                <p>Companies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
