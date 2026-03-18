import React from 'react';
import '../Style/BecomeAPartner.css';
import { HiOutlineChatAlt2 } from "react-icons/hi";

const BecomeAPartner = () => {
    const partnershipTypes = [
        {
            title: "Technology & Development Partners",
            desc: "The Baap Company collaborates with technology companies and digital agencies looking to work with a reliable software development partner.",
            benefits: [
                "Strong technology collaboration",
                "Opportunity to deliver enterprise software solutions",
                "Dedicated engineering and development support",
                "Scalable development resources",
                "Reliable project execution"
            ],
            idealFor: [
                "Technology companies looking for a partner",
                "Software startups building digital platforms",
                "Agencies outsourcing development projects"
            ]
        },
        {
            title: "Product & Solution Partners",
            desc: "Product and solution partners can collaborate with The Baap Company to deliver powerful business platforms and enterprise applications to their clients.",
            benefits: [
                "Access to modern enterprise software platforms",
                "Ability to expand service offerings",
                "Technical support and product guidance",
                "Build long-term business relationships"
            ],
            idealFor: [
                "Technology consultants",
                "IT solution providers",
                "Digital transformation companies"
            ]
        },
        {
            title: "Strategic Business Partnership",
            desc: "The Baap Company welcomes strategic business partners including ISVs, domain experts, and technology consultants.",
            benefits: [
                "Deliver scalable software platforms to clients",
                "Work with experienced engineering teams",
                "Expand service offerings with modern solutions",
                "Build long-term collaboration opportunities"
            ],
            idealFor: [
                "Business consultants",
                "Independent software vendors",
                "Domain specialists and industry experts"
            ]
        },
        {
            title: "Technology Collaboration Partnership",
            desc: "The Baap Company also offers collaboration opportunities for organizations looking to build innovative digital platforms and AI solutions.",
            benefits: [
                "Access to experienced software engineers",
                "Development of scalable digital platforms",
                "Integration of AI systems and automation",
                "Faster product development and innovation"
            ],
            idealFor: [
                "Startups building new digital products",
                "Tech companies looking for engineering collaboration",
                "Businesses planning AI or data-driven solutions"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Achyut Godbole",
            text: "The Baap Company connects industry requirements with practical engineering expertise. Their collaboration model helps professionals and organizations implement real-world technology solutions effectively."
        },
        {
            name: "Sagar Babar",
            text: "Working with The Baap Company feels like a true technology partnership. Their engineering mindset and transparent collaboration help organizations build reliable digital products."
        },
        {
            name: "Manoj Agarwal",
            text: "The Baap Company brings strong technical discipline and clarity to collaboration projects. Their structured approach helps organizations build scalable platforms."
        }
    ];

    return (
        <div className="partner-container">
            {/* Hero Section */}
            <section className="partner-hero">
                <div className="hero-glow"></div>
                <div className="content-wrapper">
                    <div className="partner-badge">Network for Growth</div>
                    <h1 className="hero-title">Build Powerful Digital Solutions Together</h1>
                    <p className="hero-lead">
                        Partner with The Baap Company to deliver scalable software platforms, AI systems, and enterprise digital infrastructure for organizations across the world.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="partner-intro">
                <div className="container">
                    <div className="intro-content text-center">
                        <h2 className="intro-title">Technology Partnership That Drives Real Innovation</h2>
                        <div className="intro-text">
                            <p>
                                The Baap Company is a technology company built in rural Sangamner, Maharashtra, proving that world-class engineering and digital innovation can emerge from anywhere.
                            </p>
                            <p>
                                Through our distributed engineering model, we collaborate with startups, enterprises, and technology partners to build scalable digital infrastructure and AI-driven solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Types Grid */}
            <section className="partnership-types">
                <div className="container">
                    <span className="section-label">Collaboration Models</span>
                    <h2 className="text-center" style={{ fontSize: '42px', fontWeight: '800' }}>Partnership Opportunities</h2>
                    
                    <div className="type-grid">
                        {partnershipTypes.map((type, index) => (
                            <div className="type-card" key={index}>
                                <h3 className="type-title">{type.title}</h3>
                                <p className="type-desc">{type.desc}</p>
                                
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="list-header">Key Benefits</div>
                                        <ul className="benefits-list">
                                            {type.benefits.map((benefit, bIndex) => (
                                                <li key={bIndex}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="list-header">Ideal For</div>
                                        <ul className="ideal-list">
                                            {type.idealFor.map((item, iIndex) => (
                                                <li key={iIndex}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="partner-testimonials">
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '42px', fontWeight: '800' }}>Hear From Our Partners</h2>
                    <div className="testimonial-grid">
                        {testimonials.map((testi, index) => (
                            <div className="testimonial-card" key={index}>
                                <div className="quote-icon">“</div>
                                <p className="testimonial-text">{testi.text}</p>
                                <div className="author-name">— {testi.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA placeholder */}
            <section style={{ padding: '100px 6%', textAlign: 'center' }}>
                <div style={{ 
                    background: 'linear-gradient(135deg, #1a0b2e 0%, #06060c 100%)', 
                    padding: '80px 40px', 
                    borderRadius: '40px', 
                    border: '1px solid rgba(139, 44, 245, 0.3)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <HiOutlineChatAlt2 style={{ fontSize: '60px', color: '#8b2cf5', marginBottom: '30px' }} />
                    <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '25px' }}>Interested in partnering with us?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '40px' }}>
                        Share your partnership requirements with our team and let's explore how we can build something impactful together.
                    </p>
                    <a href="#" style={{ 
                        background: '#8b2cf5', 
                        color: 'white', 
                        padding: '18px 50px', 
                        borderRadius: '50px', 
                        fontWeight: '700', 
                        textDecoration: 'none',
                        fontSize: '18px',
                        display: 'inline-block',
                        boxShadow: '0 10px 30px rgba(139, 44, 245, 0.3)'
                    }}>Contact Our Team</a>
                </div>
            </section>
        </div>
    );
};

export default BecomeAPartner;
