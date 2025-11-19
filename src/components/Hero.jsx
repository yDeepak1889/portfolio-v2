import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-content" ref={heroRef}>
                <p className="hero-greeting">Hi, there I'm</p>
                <h1 className="hero-name">
                    Richa Chaturvedi<span className="gradient-text">.</span>
                </h1>
                <h2 className="hero-tagline">
                    I design products with <span className="gradient-text">words</span>
                </h2>

                <p className="hero-description">
                    Working as a <strong>Senior UX Writer (4+ YOE)</strong> at ALLEN Digital in Bengaluru.
                    I have a passion for understanding people and crafting messages that resonate.
                    I love talking about inclusive, simple design and enjoy building content and tone
                    of voice guidelines to make things easier for teams.
                </p>

                <p className="hero-description">
                    My goal is to create meaningful connections through clear, user-focused content.
                    I've designed more than 10+ new features, from naming them with respect to user
                    perspective to the end journey. I love building 0-1 design journeys.
                </p>

                <div className="hero-cta">
                    <button className="btn btn-primary" onClick={scrollToContact}>
                        Get In Touch
                    </button>
                    <a
                        href="mailto:richauxw@gmail.com"
                        className="btn btn-secondary"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
