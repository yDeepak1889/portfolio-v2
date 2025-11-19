import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior UX Writer',
            company: 'ALLEN Digital',
            period: '2023 - Present',
            location: 'Bengaluru, India',
            current: true,
            description: 'Leading UX writing initiatives for digital education products, creating user-focused content that enhances learning experiences.',
            responsibilities: [
                'Designing content for 10+ new features from naming to end-user journey',
                'Building content and tone of voice guidelines for product teams',
                'Leading 0-1 design journeys for new product features',
                'Collaborating with cross-functional teams to ensure inclusive, simple design'
            ]
        },
        {
            title: 'UX Writer II',
            company: 'Uni Cards',
            period: '2022 - 2023',
            location: 'Bengaluru, India',
            description: 'Crafted user-centric content for fintech products, simplifying complex financial concepts for users.',
            responsibilities: [
                'Designed content for financial products including Uni Cash and P2P Lending',
                'Created comprehensive writing style guidelines',
                'Developed tone and voice framework for brand consistency',
                'Led campaign content for user engagement initiatives'
            ]
        },
        {
            title: 'UX Writer',
            company: 'Fisdom',
            period: '2021 - 2022',
            location: 'Bengaluru, India',
            description: 'Developed clear, trustworthy content for investment and wealth management platforms.',
            responsibilities: [
                'Wrote user-focused microcopy for investment flows',
                'Simplified complex financial terminology for better user understanding',
                'Collaborated with design and product teams on feature launches'
            ]
        },
        {
            title: 'UX Writer Intern',
            company: 'Yulu',
            period: '2020 - 2021',
            location: 'Bengaluru, India',
            description: 'Contributed to UX writing for micro-mobility platform, focusing on user engagement and clarity.',
            responsibilities: [
                'Created content for app features and user flows',
                'Assisted in developing content guidelines',
                'Conducted content audits and improvements'
            ]
        },
        {
            title: 'Corporate Communications Intern',
            company: 'ABB India',
            period: '2020',
            location: 'India',
            description: 'Supported corporate communications initiatives and internal content development.',
            responsibilities: [
                'Assisted in creating internal communications',
                'Developed content for corporate initiatives',
                'Supported brand messaging efforts'
            ]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">
                    Where I've <span className="gradient-text">Worked</span>
                </h2>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-item ${exp.current ? 'current' : ''}`}
                        >
                            <div className="experience-marker"></div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div>
                                        <h3>{exp.title}</h3>
                                        <p className="company">{exp.company}</p>
                                        <p className="period">{exp.period} • {exp.location}</p>
                                    </div>
                                    {exp.current && <span className="badge">Current Role</span>}
                                </div>

                                <p className="description">{exp.description}</p>

                                {exp.responsibilities && (
                                    <ul className="responsibilities">
                                        {exp.responsibilities.map((resp, respIndex) => (
                                            <li key={respIndex}>{resp}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
