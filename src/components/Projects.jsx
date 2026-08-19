import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const toggleRef = useRef(null);
    const restoreAfterCollapse = useRef(false);
    const featuredProjects = projects.filter((project) => project.featured);
    const additionalProjects = projects.filter((project) => !project.featured);

    const collapseProjects = () => {
        restoreAfterCollapse.current = true;
        setShowAllProjects(false);
    };

    useLayoutEffect(() => {
        if (showAllProjects || !restoreAfterCollapse.current) return;

        restoreAfterCollapse.current = false;
        toggleRef.current?.scrollIntoView({ block: 'center' });
        toggleRef.current?.focus({ preventScroll: true });
    }, [showAllProjects]);

    // The hero card fills a whole row, so a trailing card is only left stranded
    // in a half-empty row when the total number of grid slots is odd.
    const strandsFeaturedLast = (featuredProjects.length + 1) % 2 === 1;
    const strandsAdditionalLast = additionalProjects.length % 2 === 1;

    const renderProject = (project, index, isWide = false) => (
        <article
            key={project.name}
            className={[
                'project-card',
                project.featured ? 'featured' : '',
                project.thumbnail ? 'has-thumbnail' : '',
                isWide ? 'is-wide' : '',
            ].filter(Boolean).join(' ')}
        >
            <div className="project-meta">
                <span>{index + 1}</span>
                <span>{project.category}</span>
            </div>

            <div className="project-body">
                {project.thumbnail && (
                    <div className="project-thumbnail">
                        <img
                            src={project.thumbnail}
                            alt={project.thumbnailAlt ?? ''}
                            loading="lazy"
                        />
                    </div>
                )}

                <div className="project-content">
                    <div className="project-title">
                        <p>{project.context}</p>
                        <h3>{project.name}</h3>
                    </div>

                    <dl className="project-summary">
                        <div>
                            <dt>Challenge</dt>
                            <dd>{project.challenge}</dd>
                        </div>
                        <div>
                            <dt>Approach</dt>
                            <dd>{project.approach}</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="project-footer">
                <p>{project.contribution}</p>
                {project.caseStudyLink ? (
                    <Link
                        to={project.caseStudyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View the ${project.name} case study in a new tab`}
                    >
                        View Project <span aria-hidden="true">↗</span>
                    </Link>
                ) : (
                    <a
                        href={project.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} project PDF in a new tab`}
                    >
                        View Project <span aria-hidden="true">↗</span>
                    </a>
                )}
            </div>
        </article>
    );

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Projects</p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => renderProject(
                        project,
                        index,
                        index === 0 || (strandsFeaturedLast && index === featuredProjects.length - 1),
                    ))}
                </div>

                {showAllProjects ? (
                    <>
                        <div className="projects-grid more-projects">
                            {additionalProjects.map((project, index) => renderProject(
                                project,
                                index + featuredProjects.length,
                                strandsAdditionalLast && index === additionalProjects.length - 1,
                            ))}
                        </div>
                        <div className="more-work">
                            <button
                                type="button"
                                className="more-work-collapse"
                                onClick={collapseProjects}
                                aria-label="Collapse additional projects"
                            >
                                <span aria-hidden="true">↑</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="more-work">
                        <button
                            ref={toggleRef}
                            type="button"
                            className="more-work-toggle"
                            onClick={() => setShowAllProjects(true)}
                        >
                            View more
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
