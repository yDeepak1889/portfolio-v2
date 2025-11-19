import './Projects.css';

const Projects = () => {
    const projects = [
        {
            name: 'Break',
            category: 'Feature Design',
            description: 'A feature to support the mental well-being of students during their JEE/ NEET (Engineering / Medical) entrance exams preparation phase.',
            pdfLink: 'https://drive.google.com/file/d/1UIKKkfZ52HHGkljXCWRUSnAp8Pc8aGZ7/view'
        },
        {
            name: 'Login & Onboarding',
            category: 'User Flow',
            description: 'One of my initial tasks was to audit the Login and Onboarding process. I analyzed why students were dropping off at the login stage and revised the content design to increase the number of onboardings.',
            pdfLink: 'https://drive.google.com/file/d/1hYQT9Q3GE_oQ3JOcPwdUlsbCcI4qjdAZ/view?usp=sharing'
        },
        {
            name: 'Uni Cash',
            category: 'Product Feature',
            description: 'A feature to transfer credit into your bank account up to a certain limit, which varies based on the customer\'s risk profile.',
            pdfLink: 'https://drive.google.com/file/d/1xmYA9B4Nm7xkt9Re3Ro37nV0c3qf4UGd/view'
        },
        {
            name: 'P2P Lending',
            category: 'Financial Product',
            description: 'Peer to Peer lending. Better than Fixed Deposits, Safer than Mutual Funds.',
            pdfLink: 'https://drive.google.com/file/d/1uhhuNNlgvBDS6A3H4M6c3lRne7RVTNMT/view'
        },
        {
            name: 'SIM Binding',
            category: 'Security Feature',
            description: 'SIM binding is like a matchmaking process between your phone and SIM card.',
            pdfLink: 'https://drive.google.com/file/d/1l85lHp6qKcx0P_yGDDNjnoDljB7GltXY/view?usp=drive_link'
        },
        {
            name: 'Writing Style Guidelines',
            category: 'Documentation',
            description: 'If you\'re starting your content design practice, this is your bible. I drew inspiration from the excellent guidelines of Microsoft, Spotify, and Mailchimp to create a simplified version tailored for a small team. This approach helped establish consistency.',
            pdfLink: 'https://drive.google.com/file/d/1NKc6zPL_0I2bOUS98Y-_c2cIEujYzaq6/view'
        },
        {
            name: 'Grand Uni Carnival',
            category: 'Campaign',
            description: 'To enhance adoption of a newly launched app, we developed a feature that encourages users to increase transactions and discover more about the Uni app.',
            pdfLink: 'https://drive.google.com/file/d/1x4GCBzHLmO62HMHl2bM8r3nPxVkSUII9/view'
        },
        {
            name: 'Tone & Voice Framework',
            category: 'Brand Guidelines',
            description: 'How do you decide how to communicate—whether to be empathetic, apologetic, helpful, or a combination of all three? The framework I designed helps my team understand and map tones based on emotion and needs.',
            pdfLink: 'https://drive.google.com/file/d/1DbdsykCIBNZN0JgplAp2_dhUY0woflnt/view'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">
                    Some Things I've <span className="gradient-text">Designed</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-icon">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="8" fill="url(#gradient)" opacity="0.2" />
                                    <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="url(#gradient)" />
                                    <defs>
                                        <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="40" y2="40">
                                            <stop offset="0%" stopColor="#7c3aed" />
                                            <stop offset="100%" stopColor="#ec4899" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <h3>{project.name}</h3>
                            <p className="project-description">{project.description}</p>

                            {project.pdfLink && (
                                <a
                                    href={project.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-project-btn"
                                >
                                    View Project
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
