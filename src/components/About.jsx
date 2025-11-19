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
                            I'm a <strong>Senior UX Writer</strong> with over 4 years of experience,
                            currently working at <strong>ALLEN Digital</strong> in Bengaluru. My journey
                            in UX writing is driven by a deep passion for understanding people and
                            crafting messages that truly resonate with them.
                        </p>

                        <p>
                            I specialize in creating <strong>inclusive, simple designs</strong> and have
                            a particular love for building content and tone of voice guidelines that make
                            collaboration easier for teams. My approach is always user-focused, ensuring
                            that every word serves a purpose and creates meaningful connections.
                        </p>

                        <p>
                            Throughout my career, I've had the privilege of designing <strong>10+ new
                                features</strong> from the ground up, handling everything from naming conventions
                            that align with user perspectives to crafting complete user journeys. I thrive
                            on <strong>0-1 design challenges</strong> where I can shape experiences from
                            their inception.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <h3>4+</h3>
                                <p>Years of Experience</p>
                            </div>
                            <div className="highlight-item">
                                <h3>10+</h3>
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
