import { useLayoutEffect, useRef, useState } from 'react';
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

    const renderProject = (project, index) => (
        <article
            key={project.name}
            className={`project-card ${project.featured ? 'featured' : ''}`}
        >
            <div className="project-meta">
                <span>{index + 1}</span>
                <span>{project.category}</span>
            </div>

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

            <div className="project-footer">
                <p>{project.contribution}</p>
                <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} project PDF in a new tab`}
                >
                    View Project <span aria-hidden="true">↗</span>
                </a>
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
                    {featuredProjects.map((project, index) => renderProject(project, index))}
                </div>

                {showAllProjects ? (
                    <>
                        <div className="projects-grid more-projects">
                            {additionalProjects.map((project, index) => (
                                renderProject(project, index + featuredProjects.length)
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
