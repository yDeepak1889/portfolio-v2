import { useEffect } from 'react';
import guidancePage from '../assets/sap/notifications-guidance-page.png';
import notificationGroups from '../assets/sap/notification-groups.jpg';
import notificationActions from '../assets/sap/notification-actions.jpg';
import notificationList from '../assets/sap/notification-list.jpg';
import notificationAnatomy from '../assets/sap/notification-item-anatomy.jpg';
import './SapNotifications.css';

const projectMeta = [
    { label: 'Design system', value: 'SAP Fiori Design System' },
    { label: 'Role', value: 'Senior Content Designer' },
    { label: 'Disciplines', value: 'Content Strategy · UX Writing · Information Architecture' },
    { label: 'Scope', value: 'End-to-end rewrite of the Notification guidelines' },
];

const designerQuestions = [
    'when to use notifications',
    'what information belongs in a notification',
    'how notifications should be grouped',
    'how priority works',
    'when to use actions',
    'how notifications behave across screen sizes',
    'how users interact with individual items and groups',
];

const roleAreas = [
    {
        title: 'Content strategy',
        copy: 'Defined what users needed to know and in what order.',
    },
    {
        title: 'Information architecture',
        copy: 'Restructured the content around the decisions designers need to make.',
    },
    {
        title: 'UX writing',
        copy: 'Rewrote explanations, instructions, headings, and guidance for clarity.',
    },
    {
        title: 'Content systems',
        copy: 'Created more consistent terminology and patterns across the page.',
    },
    {
        title: 'Design-system thinking',
        copy: 'Designed the guidelines to work as a reusable reference for teams across SAP.',
    },
];

const approachQuestions = [
    {
        number: '1',
        title: 'What does the user need to know?',
        copy: 'Separate essential guidance from supporting detail.',
    },
    {
        number: '2',
        title: 'When do they need to know it?',
        copy: 'Put information closer to the decision it supports.',
    },
    {
        number: '3',
        title: 'How can we make it easier to scan?',
        copy: 'Use clear hierarchy, concise sections, and descriptive headings.',
    },
    {
        number: '4',
        title: 'How can we make the guidelines actionable?',
        copy: 'Tell users what to do—not just how the component works.',
    },
];

const notificationLayers = [
    'Notification',
    'Notification group',
    'Notification item',
    'Actions',
    'Status',
    'Operations',
    'Content',
    'Settings',
    'Behavior',
];

const sectionQuestions = [
    'What is it?',
    'When should I use it?',
    'What does it contain?',
    'How does it behave?',
    'How should I write it?',
];

const terminology = [
    'notification',
    'notification item',
    'notification group',
    'priority',
    'status',
    'actions',
    'operations',
    'settings',
    'banner',
    'badge',
    'navigation',
];

const audiences = [
    { role: 'A designer might want to know', question: 'When should I use a notification?' },
    { role: 'A content designer might ask', question: 'What should the headline contain?' },
    { role: 'A developer might need', question: 'How does the component behave?' },
];

const guidanceAreas = [
    { title: 'Usage', copy: 'When and why to use notifications' },
    { title: 'Types', copy: 'How notifications are organized' },
    { title: 'Components', copy: 'What makes up the experience' },
    { title: 'Items', copy: 'Content, actions, status, and navigation' },
    { title: 'Settings', copy: 'How users control notification behaviour' },
    { title: 'Behavior & interaction', copy: 'How users access and interact with notifications' },
    { title: 'Responsiveness', copy: 'How the experience adapts across contexts' },
    { title: 'Mobile integration', copy: 'How notifications extend into mobile experiences' },
];

const architectureRows = [
    { section: 'Usage', question: 'When should I use notifications?' },
    { section: 'Responsiveness', question: 'How should they adapt across contexts?' },
    { section: 'Types', question: 'What kinds of notifications exist?' },
    { section: 'Components', question: 'What makes up the experience?' },
    { section: 'Items', question: 'What goes inside a notification?' },
    { section: 'Settings', question: 'How can users control notifications?' },
    { section: 'Behavior & interaction', question: 'How should users interact with them?' },
    { section: 'Mobile integration', question: 'How does the experience extend to mobile?' },
];

const sharedLanguageTerms = [
    'Notifications',
    'Groups',
    'Items',
    'Priority',
    'Status',
    'Actions',
    'Operations',
    'Settings',
];

const notificationItemParts = [
    { number: '1', title: 'Title', copy: 'Communicates the primary message.' },
    {
        number: '2',
        title: 'Supporting information',
        copy: 'Provides the context needed to understand the notification.',
    },
    {
        number: '3',
        title: 'Priority',
        copy: 'Helps communicate importance when a notification requires attention.',
    },
    {
        number: '4',
        title: 'Actions',
        copy: 'Provides actions when users need to take the next step.',
    },
    {
        number: '5',
        title: 'Context',
        copy: 'Shows the relevant product or area associated with the notification.',
    },
    {
        number: '6',
        title: 'Grouping',
        copy: 'Organizes notifications by time, making the list easier to scan.',
    },
];

const clarityAtScale = [
    { term: 'One sentence', copy: 'Should be clear.' },
    { term: 'One recommendation', copy: 'Should be actionable.' },
    { term: 'One section', copy: 'Should answer one question.' },
    { term: 'One pattern', copy: 'Should be reusable.' },
    {
        term: 'One design-system resource',
        copy: 'Should help teams create more consistent experiences.',
    },
];

const outcomes = [
    {
        title: 'Clearer structure',
        copy: 'Designers can navigate the guidelines based on what they are trying to understand.',
    },
    {
        title: 'More actionable recommendations',
        copy: 'Principles help designers make decisions rather than simply interpret documentation.',
    },
    {
        title: 'Consistent language',
        copy: 'Related concepts are described using a shared vocabulary.',
    },
    {
        title: 'Scalable guidelines',
        copy: 'The system can support teams working across different SAP products and experiences.',
    },
    {
        title: 'A stronger connection between content and design',
        copy: 'Content becomes part of how the design system teaches people to design.',
    },
];

const impact = [
    {
        title: 'End-to-end rewrite',
        copy: 'Reworked the notification guidelines across content, structure, terminology, and recommendations.',
    },
    {
        title: 'System-level thinking',
        copy: 'Created a clearer framework for navigating a complex notification ecosystem.',
    },
    {
        title: 'Shared language',
        copy: 'Improved consistency across notification concepts and guidelines.',
    },
    {
        title: 'Decision-focused',
        copy: 'Shifted the guidelines toward helping designers make informed choices.',
    },
];

const SapNotifications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main id="main-content" className="case-study">
            <article>
                <header className="cs-hero">
                    <div className="container">
                        <h1>Designing a shared language for notification experiences</h1>
                        <p className="cs-lead">
                            Reframing SAP Fiori&apos;s notification guidelines into a clearer, more
                            scalable system for designing enterprise experiences.
                        </p>

                        <dl className="cs-meta">
                            {projectMeta.map(({ label, value }) => (
                                <div key={label}>
                                    <dt>{label}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>

                        <figure className="cs-figure cs-figure-hero">
                            <img
                                src={guidancePage}
                                alt="The published SAP Fiori Notifications guidelines page, showing the intro section and an on-this-page navigation list."
                                loading="lazy"
                            />
                            <figcaption>
                                SAP&apos;s notification guidelines cover usage, responsiveness,
                                notification types, lists, groups, items, settings, behavior,
                                interaction, and mobile integration.
                            </figcaption>
                        </figure>
                    </div>
                </header>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">The challenge</p>
                        <h2>The guidelines had the information. They needed a better experience.</h2>
                        <p>
                            Notifications are a small UI element with a surprisingly complex set of
                            decisions behind them. Designers need to understand:
                        </p>
                        <ul className="cs-list">
                            {designerQuestions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p>
                            The existing guidelines covered these topics, but the information could be
                            difficult to scan and apply.
                        </p>
                        <blockquote className="cs-callout">
                            <p>The challenge wasn&apos;t to add more information.</p>
                            <p>It was to make the existing information easier to understand and act on.</p>
                        </blockquote>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">My role</p>
                        <h2>I led the content rewrite and restructuring of the Notification guidelines.</h2>
                        <p>My work included:</p>
                        <div className="cs-cards">
                            {roleAreas.map(({ title, copy }) => (
                                <div className="cs-card" key={title}>
                                    <h3>{title}</h3>
                                    <p>{copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">The approach</p>
                        <h2>I treated documentation like a product.</h2>
                        <p>Instead of asking:</p>
                        <blockquote className="cs-quote">
                            <p>How can we rewrite this paragraph?</p>
                        </blockquote>
                        <p>I started with:</p>
                        <blockquote className="cs-quote">
                            <p>What is the user trying to decide?</p>
                        </blockquote>
                        <p>
                            That shifted the work from sentence-level editing to experience-level
                            content design.
                        </p>
                        <p>I worked through four questions:</p>
                        <ol className="cs-steps">
                            {approachQuestions.map(({ number, title, copy }) => (
                                <li key={number}>
                                    <span className="cs-step-number">{number}</span>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{copy}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">1 — Start with the user&apos;s decision</p>
                        <div className="cs-compare">
                            <div>
                                <h3>Before</h3>
                                <p>
                                    The documentation often explained the component before helping
                                    the reader understand when or why to use it.
                                </p>
                            </div>
                            <div>
                                <h3>After</h3>
                                <p>I shifted the content toward practical guidance.</p>
                            </div>
                        </div>
                        <blockquote className="cs-callout">
                            <p>
                                Use notifications to make users aware of situations that require
                                attention.
                            </p>
                        </blockquote>
                        <p>Then explained the principles that help designers make decisions.</p>
                        <p>
                            For example, the published guidelines recommend minimizing information
                            and actions while still providing enough context for users to judge
                            importance.
                        </p>
                        <h3>Why this matters</h3>
                        <p>A design-system user usually isn&apos;t reading for fun.</p>
                        <p>They&apos;re asking:</p>
                        <blockquote className="cs-quote">
                            <p>What should I do?</p>
                        </blockquote>
                        <p>The content should help them answer that question quickly.</p>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">2 — Make information scannable</p>
                        <h3>The problem</h3>
                        <p>The notification experience contains multiple layers:</p>
                        <ol className="cs-layers">
                            {notificationLayers.map((layer) => (
                                <li key={layer}>{layer}</li>
                            ))}
                        </ol>
                        <p>
                            Without a clear hierarchy, users have to read too much before finding
                            the information relevant to them.
                        </p>
                        <h3>The solution</h3>
                        <p>
                            I reorganized the content into clearer conceptual sections and made each
                            section answer a specific question.
                        </p>
                        <ul className="cs-question-list">
                            {sectionQuestions.map((question) => (
                                <li key={question}>{question}</li>
                            ))}
                        </ul>
                        <p>
                            This made the page easier to navigate without removing the depth
                            expected from enterprise documentation.
                        </p>

                        <div className="cs-gallery">
                            <figure className="cs-figure">
                                <img
                                    src={notificationGroups}
                                    alt="A notification panel with By Date, By Type, and By Priority tabs, showing grouped notifications for invoices and trip requests."
                                    loading="lazy"
                                />
                                <figcaption>
                                    Grouping and ordering shape how quickly a list can be scanned.
                                </figcaption>
                            </figure>
                            <figure className="cs-figure">
                                <img
                                    src={notificationActions}
                                    alt="A notification with an overflow menu open, showing Release, Reject, Request Rework, and Close actions."
                                    loading="lazy"
                                />
                                <figcaption>
                                    Multiple actions move into the overflow, keeping the item
                                    readable.
                                </figcaption>
                            </figure>
                            <figure className="cs-figure">
                                <img
                                    src={notificationList}
                                    alt="A notification list showing purchase order and leave request notifications with Accept, Reject, Approve, and Deny actions."
                                    loading="lazy"
                                />
                                <figcaption>
                                    Priority, timing, and actions all compete for attention within a
                                    single item.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">3 — Turn explanations into guidance</p>
                        <p>
                            One of the biggest shifts was moving from describing functionality to
                            guiding decisions.
                        </p>
                        <p>Instead of:</p>
                        <blockquote className="cs-quote cs-quote-muted">
                            <p>
                                Notifications contain several properties and can have different
                                actions, statuses, and operations.
                            </p>
                        </blockquote>
                        <p>We guide the designer toward a decision:</p>
                        <blockquote className="cs-callout">
                            <p>
                                Use only actions that are self-explanatory and don&apos;t require
                                additional context.
                            </p>
                        </blockquote>
                        <p>
                            The published guidelines now explicitly recommend displaying only
                            self-explanatory actions and explains how multiple actions move into the
                            overflow.
                        </p>
                        <h3>The principle</h3>
                        <p className="cs-emphasis">
                            Don&apos;t just describe the interface. Help people design it well.
                        </p>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">4 — Create a consistent content system</p>
                        <p>A design system isn&apos;t only visual. It has a language system too.</p>
                        <p>
                            I looked across the notification experience and standardized how we
                            talked about concepts such as:
                        </p>
                        <ul className="cs-chips">
                            {terminology.map((term) => (
                                <li key={term}>{term}</li>
                            ))}
                        </ul>
                        <p>
                            This matters because inconsistent terminology creates cognitive
                            friction.
                        </p>
                        <blockquote className="cs-callout">
                            <p>If two concepts are different, they should sound different.</p>
                            <p>If two concepts are the same, they should be called the same thing.</p>
                        </blockquote>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">5 — Design for different levels of detail</p>
                        <p>A design-system page has multiple audiences.</p>
                        <dl className="cs-audiences">
                            {audiences.map(({ role, question }) => (
                                <div key={role}>
                                    <dt>{role}</dt>
                                    <dd>{question}</dd>
                                </div>
                            ))}
                        </dl>
                        <p>
                            So the content needs to support quick scanning and deeper exploration.
                        </p>
                        <p>
                            The notification guidelines cover everything from notification ordering
                            and grouping to actions, truncation, read/unread states, settings, and
                            responsive behavior.
                        </p>
                        <h3>The goal</h3>
                        <ul className="cs-goal-list">
                            <li>Easy to scan.</li>
                            <li>Easy to understand.</li>
                            <li>Easy to come back to.</li>
                        </ul>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">Reframing the guidelines</p>
                        <p>The challenge wasn&apos;t simply to rewrite individual sentences.</p>
                        <p className="cs-emphasis">
                            It was to rethink how designers find, understand, and use the guidelines when
                            designing notification experiences.
                        </p>
                        <p>I focused on three areas:</p>

                        <div className="cs-focus">
                            <h3>1 — Make the guidelines actionable</h3>
                            <p>
                                Instead of explaining what notifications are, the content should
                                help designers understand when and why to use them.
                            </p>
                            <blockquote className="cs-callout">
                                <p>
                                    Use notifications to make users aware of situations that require
                                    attention.
                                </p>
                            </blockquote>
                            <p>
                                The shift was from describing the component to guiding the decision.
                            </p>
                            <p className="cs-focus-label">What I focused on</p>
                            <ul className="cs-arrow-list">
                                <li>Lead with the user&apos;s decision</li>
                                <li>Remove unnecessary context</li>
                                <li>Make recommendations clear and actionable</li>
                            </ul>
                        </div>

                        <div className="cs-focus">
                            <h3>2 — Create a clearer hierarchy</h3>
                            <p>
                                Notification experiences involve multiple concepts, patterns, and
                                behaviours. The content needed a structure that made those
                                relationships easier to understand.
                            </p>
                            <p>
                                I organized the guidelines around the areas designers need to
                                navigate:
                            </p>
                            <div className="cs-cards cs-cards-compact">
                                {guidanceAreas.map(({ title, copy }) => (
                                    <div className="cs-card" key={title}>
                                        <h4>{title}</h4>
                                        <p>{copy}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="cs-focus-label">What I focused on</p>
                            <ul className="cs-arrow-list">
                                <li>Group related information</li>
                                <li>Create a clear hierarchy</li>
                                <li>Make the content easier to scan</li>
                                <li>Give each section a distinct purpose</li>
                            </ul>
                        </div>

                        <div className="cs-focus">
                            <h3>3 — Turn principles into decisions</h3>
                            <p>
                                Design-system guidance becomes more useful when it doesn&apos;t just
                                describe what is possible—it helps designers decide what is
                                appropriate.
                            </p>
                            <p>For example:</p>
                            <blockquote className="cs-callout">
                                <p>
                                    Display only actions that are self-explanatory and don&apos;t
                                    require additional context.
                                </p>
                            </blockquote>
                            <p>
                                This gives a designer a principle they can apply to their own
                                experience.
                            </p>
                            <p className="cs-focus-label">What I focused on</p>
                            <ul className="cs-arrow-list">
                                <li>Make recommendations specific</li>
                                <li>Explain the reasoning behind them</li>
                                <li>Give designers principles they can apply independently</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">Designing the content architecture</p>
                        <p>The rewrite wasn&apos;t just about individual sentences.</p>
                        <p>
                            It was about creating a system that people could navigate and reuse.
                        </p>
                        <p>
                            I structured the guidelines so that each section answers a different
                            question:
                        </p>
                        <div className="cs-table-wrap">
                            <table className="cs-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Section</th>
                                        <th scope="col">The question it answers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {architectureRows.map(({ section, question }) => (
                                        <tr key={section}>
                                            <th scope="row">{section}</th>
                                            <td>{question}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h3>The principle behind the structure</h3>
                        <blockquote className="cs-callout">
                            <p>
                                Don&apos;t make people read the system to find an answer. Help them
                                find the answer they came for.
                            </p>
                        </blockquote>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">Designing a shared language</p>
                        <p>A design system isn&apos;t only a collection of UI components.</p>
                        <p className="cs-emphasis">It&apos;s also a language system.</p>
                        <p>
                            I worked across the notification experience to create greater
                            consistency in how concepts were named, explained, and connected.
                        </p>
                        <p>This included terminology around:</p>
                        <ul className="cs-chips">
                            {sharedLanguageTerms.map((term) => (
                                <li key={term}>{term}</li>
                            ))}
                        </ul>
                        <p>
                            The goal was to make the language predictable enough that designers
                            could move between different parts of the guidelines without having to
                            relearn the terminology.
                        </p>
                        <blockquote className="cs-callout">
                            <p>One concept. One name. One meaning.</p>
                        </blockquote>
                        <p>
                            At an enterprise scale, that consistency becomes part of the experience
                            itself.
                        </p>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">A closer look at the notification item</p>
                        <h2>The content needs to explain the system, not just the screen.</h2>
                        <p>
                            The notification item brings together several pieces of information that
                            help users understand what needs their attention and what they can do
                            next.
                        </p>
                        <figure className="cs-figure">
                            <img
                                src={notificationAnatomy}
                                alt="Annotated breakdown of a notification panel and a single notification item, labelling title, supporting information, priority, actions, context, and grouping."
                                loading="lazy"
                            />
                            <figcaption>
                                The anatomy of a notification item, annotated at both the panel and
                                item level.
                            </figcaption>
                        </figure>
                        <ol className="cs-steps">
                            {notificationItemParts.map(({ number, title, copy }) => (
                                <li key={number}>
                                    <span className="cs-step-number">{number}</span>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{copy}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="cs-emphasis">
                            The goal was to make the guidelines useful at both the component level and
                            the experience level—helping designers understand not only what each
                            element does, but how the pieces work together.
                        </p>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">Designing for clarity at scale</p>
                        <p>The real value of this work isn&apos;t one improved page.</p>
                        <p className="cs-emphasis">
                            It&apos;s creating guidance that many product teams can use to make
                            better decisions consistently.
                        </p>
                        <p>That changes the way content needs to be designed.</p>
                        <dl className="cs-definitions">
                            {clarityAtScale.map(({ term, copy }) => (
                                <div key={term}>
                                    <dt>{term}</dt>
                                    <dd>{copy}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">The outcome</p>
                        <h2>
                            A clearer foundation for designing notification experiences across SAP.
                        </h2>
                        <p>The rewritten guidelines bring together:</p>
                        <div className="cs-cards">
                            {outcomes.map(({ title, copy }) => (
                                <div className="cs-card" key={title}>
                                    <h3>{title}</h3>
                                    <p>{copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cs-section">
                    <div className="container cs-column">
                        <p className="cs-kicker">What I learned</p>
                        <h2>Content design at the design-system level is systems thinking.</h2>
                        <p>
                            When you&apos;re designing content for one screen, you&apos;re solving
                            for one experience.
                        </p>
                        <p>
                            When you&apos;re designing guidance for a design system, you&apos;re
                            solving for the many experiences that come after it.
                        </p>
                        <p>That changes the question.</p>
                        <div className="cs-compare">
                            <div>
                                <h3>Not</h3>
                                <p>Does this sentence sound good?</p>
                            </div>
                            <div>
                                <h3>But</h3>
                                <p>Will this help another designer make a better decision?</p>
                            </div>
                        </div>
                        <p>For me, that&apos;s the real value of content design at scale.</p>
                        <blockquote className="cs-callout">
                            <p>Good content isn&apos;t just clear.</p>
                            <p>It&apos;s reusable. It&apos;s consistent. It&apos;s actionable.</p>
                            <p>And it helps other people create better experiences.</p>
                        </blockquote>
                    </div>
                </section>

                <section className="cs-section cs-section-alt">
                    <div className="container cs-column">
                        <p className="cs-kicker">The impact</p>
                        <div className="cs-cards">
                            {impact.map(({ title, copy }) => (
                                <div className="cs-card" key={title}>
                                    <h3>{title}</h3>
                                    <p>{copy}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cs-section cs-takeaway">
                    <div className="container cs-column">
                        <p className="cs-kicker">The takeaway</p>
                        <h2>Designing the language behind the experience.</h2>
                        <p>A notification may be a small part of a product.</p>
                        <p>
                            But behind every notification are decisions about what to say, when to
                            say it, how much context to provide, what action to offer, and how to
                            communicate importance.
                        </p>
                        <p>
                            This project gave me the opportunity to design those decisions at the
                            system level.
                        </p>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default SapNotifications;
