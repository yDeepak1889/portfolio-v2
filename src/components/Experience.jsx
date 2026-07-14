import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Content Designer',
            company: 'SAP Labs',
            period: '2025 - Present',
            location: 'Bengaluru, India',
            current: true,
            description: 'Leading enterprise content design, AI initiatives, and scalable content systems across SAP products and teams.',
            responsibilities: [
                'Lead the Content Design team\'s AI initiative by defining processes, content standards, and best practices, while conducting organization-wide training on AI-assisted content design and emerging workflows.',
                'Contribute to SAP Joule AI by developing conversational design guidelines and shaping AI experiences aligned with SAP\'s content design principles.',
                'Drive enterprise content strategy and design systems by establishing UX writing standards, rewriting content guidelines, and ensuring consistency across multiple SAP products, including Fieldglass and Concur.',
                'Apply Context Engineering principles while designing scalable content systems and AI experiences for SAP Joule, leveraging structured context and conversational design to create more effective, context-aware AI interactions.',
                'Partner with cross-functional leaders across Product, Design, Engineering, and Program Management to align content strategy with business goals, influence product direction, and deliver scalable user experiences.',
                'Shape foundational content design practices as part of SAP\'s inaugural Global Core Content Design Team, building governance models, reusable frameworks, and enterprise-wide content standards.',
                'Design and deliver structured training programs and workshops that enable User Assistance Developers and Technical Writers to transition into Content Design roles, building capability across global teams.',
                'Optimize content operations and workflows by identifying process gaps, improving collaboration models, and implementing scalable systems that increase efficiency and consistency.',
                'Leverage WalkMe Builder Levels 1 & 2 certification to contribute to the integration and optimization of WalkMe content across multiple Lines of Business (LOBs).'
            ]
        },
        {
            title: 'Senior UX Writer',
            company: 'ALLEN Digital',
            period: '2023 - 2025',
            location: 'Bengaluru, India',
            description: 'Led UX writing initiatives for digital education products and created user-focused content that enhanced learning experiences.',
            responsibilities: [
                'Designed content for 10+ new features from naming to end-user journey',
                'Built content and tone of voice guidelines for product teams',
                'Led 0-1 design journeys for new product features',
                'Collaborated with cross-functional teams to ensure inclusive, simple design'
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
