import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
    const featuredProjects = projects.filter((project) => project.featured);
    const additionalProjects = projects.filter((project) => !project.featured);

    const renderProject = (project, index) => (
        <article
            key={project.name}
            className={`project-card ${project.featured ? 'featured' : ''}`}
        >
            <div className="project-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
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
                    aria-label={`View ${project.name} case study PDF in a new tab`}
                >
                    View case study <span aria-hidden="true">↗</span>
                </a>
            </div>
        </article>
    );

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-heading">
                    <p className="eyebrow">Case studies</p>
                    <h2>Problems framed. Journeys shaped. <span className="accent-text">Systems built.</span></h2>
                    <p className="section-intro">
                        A selection of product features, user flows, and content systems that show how I move
                        from ambiguity to a clearer experience.
                    </p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => renderProject(project, index))}
                </div>

                <details className="more-work">
                    <summary>View {additionalProjects.length} more case studies</summary>
                    <div className="projects-grid more-projects">
                        {additionalProjects.map((project, index) => (
                            renderProject(project, index + featuredProjects.length)
                        ))}
                    </div>
                </details>
            </div>
        </section>
    );
};

export default Projects;
