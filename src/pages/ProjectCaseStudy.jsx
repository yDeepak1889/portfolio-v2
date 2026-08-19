import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import './SapNotifications.css';

const ContentBlock = ({ block }) => {
    switch (block.type) {
        case 'paragraph':
            return <p className={block.emphasis ? 'cs-emphasis' : undefined}>{block.text}</p>;
        case 'list':
            return (
                <ul className="cs-list">
                    {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
            );
        case 'quote':
            return (
                <blockquote className="cs-callout">
                    {block.lines.map((line) => <p key={line}>{line}</p>)}
                </blockquote>
            );
        case 'cards':
            return (
                <div className="cs-cards">
                    {block.items.map(({ title, copy }) => (
                        <div className="cs-card" key={title}>
                            <h3>{title}</h3>
                            <p>{copy}</p>
                        </div>
                    ))}
                </div>
            );
        case 'steps':
            return (
                <ol className="cs-steps">
                    {block.items.map(({ number, title, copy }) => (
                        <li key={`${number}-${title}`}>
                            <span className="cs-step-number">{number}</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{copy}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            );
        case 'stats':
            return (
                <dl className="cs-stats">
                    {block.items.map(({ value, label }) => (
                        <div key={`${value}-${label}`}>
                            <dt>{value}</dt>
                            <dd>{label}</dd>
                        </div>
                    ))}
                </dl>
            );
        case 'image':
            return (
                <figure className="cs-figure">
                    <img src={block.src} alt={block.alt} loading="lazy" />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );
        case 'gallery':
            return (
                <div className="cs-gallery">
                    {block.items.map(({ src, alt, caption }) => (
                        <figure className="cs-figure" key={src}>
                            <img src={src} alt={alt} loading="lazy" />
                            {caption && <figcaption>{caption}</figcaption>}
                        </figure>
                    ))}
                </div>
            );
        default:
            return null;
    }
};

const ProjectCaseStudy = () => {
    const { slug } = useParams();
    const project = caseStudies[slug];

    useEffect(() => {
        if (!project) return undefined;

        window.scrollTo(0, 0);
        const previousTitle = document.title;
        document.title = `${project.title} — Richa Chaturvedi`;

        return () => {
            document.title = previousTitle;
        };
    }, [project]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <main id="main-content" className="case-study">
            <article>
                <header className="cs-hero">
                    <div className="container">
                        <h1>{project.title}</h1>
                        <p className="cs-lead">{project.lead}</p>

                        <dl className="cs-meta">
                            {project.meta.map(({ label, value }) => (
                                <div key={label}>
                                    <dt>{label}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>

                        <figure className="cs-figure cs-figure-hero">
                            <img src={project.hero.src} alt={project.hero.alt} />
                            {project.hero.caption && (
                                <figcaption>{project.hero.caption}</figcaption>
                            )}
                        </figure>
                    </div>
                </header>

                {project.sections.map((section, index) => (
                    <section
                        className={`cs-section ${index % 2 === 1 ? 'cs-section-alt' : ''}`}
                        key={`${section.eyebrow}-${section.title ?? index}`}
                    >
                        <div className="container cs-column">
                            <p className="cs-kicker">{section.eyebrow}</p>
                            {section.title && <h2>{section.title}</h2>}
                            {section.blocks.map((block, blockIndex) => (
                                <ContentBlock
                                    block={block}
                                    key={`${block.type}-${blockIndex}`}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </article>
        </main>
    );
};

export default ProjectCaseStudy;
