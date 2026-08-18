import heroIllustration from '../assets/richa-illustration.png';
import './Hero.css';

const skills = [
    { label: 'Context Engineering', tooltip: 'Current favourite' },
    { label: 'UX Design' },
    { label: 'Product Thinking' },
    { label: 'Design Systems' },
];

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-layout">
                <div className="hero-copy fade-in-up">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1>
                        Richa Chaturvedi<span className="accent-text"></span>
                    </h1>
                    <div className="hero-bio">
                        <p>
                            As a Content Designer with 6+ years of experience, I enjoy making complex products feel simpler, bringing together content, design, and systems to create experiences that are clear, useful, and human.
                        </p>
                    </div>

                    <details className="hero-more">
                        <summary>More about my current role</summary>
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

                <div className="hero-visual">
                    <img
                        src={heroIllustration}
                        width={1254}
                        height={1254}
                        alt="Illustration of Richa at her desk with two dogs, surrounded by notes on content design, product thinking, UX thinking, systems thinking, and context engineering."
                    />
                </div>
            </div>

            <div className="container">
                <ul className="hero-skills" aria-label="Areas of focus">
                    {skills.map(({ label, tooltip }) => (
                        <li key={label} className={tooltip ? 'has-tooltip' : undefined}>
                            {tooltip ? (
                                <span tabIndex={0} aria-describedby="skill-tooltip-favourite">
                                    {label}
                                    <span
                                        id="skill-tooltip-favourite"
                                        role="tooltip"
                                        className="skill-tooltip"
                                    >
                                        {tooltip}
                                    </span>
                                </span>
                            ) : (
                                <span>{label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
