import React from 'react';
import '../Style/Community.css';

const Community = () => {
    const clubs = [
        { title: "Women’s Empowerment", desc: "Empowering women through economic, social, and leadership development, literacy, and self-reliance initiatives." },
        { title: "Education Development", desc: "Improving government school infrastructure, digital tools, and mentoring for rural students." },
        { title: "Preserve Culture", desc: "Nurturing talent in music, dance, drama, and traditional arts within rural communities." },
        { title: "Social Responsibility", desc: "Community service through cleanliness drives, health camps, and blood donation programs." },
        { title: "Environment Sustainability", desc: "Tree plantation drives, climate awareness, and green initiatives for greener villages." },
        { title: "Agricultural Growth", desc: "Promoting organic farming, modern practices, and market linkage for farmers." },
        { title: "Road Safety", desc: "Reducing road accidents through safety awareness, helmet drives, and public drills." },
        { title: "Career & Leadership", desc: "Developing responsible, skilled, and future-ready youth through career guidance." }
    ];

    const businessAreas = [
        { title: "Vegetable Farming", desc: "Our vegetable farming initiative focuses on growing a wide range of vegetables using sustainable farming practices." },
        { title: "Millets Farming", desc: "Promoting the cultivation of nutritious and drought-resistant millets for rural growth." },
        { title: "Fish Farming", desc: "Sustainable aquaculture practices providing high-quality fish and seafood products." },
        { title: "Poultry Farm", desc: "High-quality poultry products while promoting humane and sustainable farming practices." },
        { title: "Grocery Stores", desc: "Providing rural communities with access to high-quality groceries and essential products." },
        { title: "Healthcare Needs", desc: "Access to quality healthcare services and products for rural families." }
    ];

    const impacts = [
        { title: "Providing Homes", desc: "Safe and comfortable housing for elderly individuals in need." },
        { title: "Preliminary Infrastructure", desc: "Essential facilities for farming, dairy processing, and old-age care." },
        { title: "Donation Program", desc: "Encouraging community participation through impactful donation initiatives." }
    ];

    return (
        <div className="community-container">
            {/* Hero Section */}
            <section className="community-hero">
                <div className="hero-glow"></div>
                <div className="content-wrapper">
                    <div className="community-badge">Our Impact</div>
                    <h1 className="hero-title">Rural Empowerment</h1>
                    <p className="hero-lead">
                        Be part of The Baap Company community and create real impact through technology-driven rural development programs.
                    </p>
                </div>
            </section>

            {/* Gaon Gotha Section */}
            <section className="gaon-gotha-section">
                <div className="container">
                    <div className="gaon-gotha-card">
                        <h2>The FPC Model (Gaon Gotha)</h2>
                        <p>
                            Gaon Gotha follows a circular economy model, where every element feeds into the next, creating a sustainable cycle of growth. From fodder production to organic fertilizers, dairy processing to bio-energy, each FPC is a pillar that strengthens rural livelihoods.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clubs Grid */}
            <section className="clubs-section">
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '42px', fontWeight: '800' }}>Our Community Clubs</h2>
                    <div className="clubs-grid">
                        {clubs.map((club, index) => (
                            <div className="club-card" key={index}>
                                <h3>{club.title}</h3>
                                <p>{club.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Area Section */}
            <section className="business-section">
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '42px', fontWeight: '800' }}>Our Area of Business</h2>
                    <p className="text-center mt-3" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
                        Gao Gotha blends agriculture, enterprise, and essential services to build self-reliant rural ecosystems.
                    </p>
                    <div className="business-grid">
                        {businessAreas.map((area, index) => (
                            <div className="business-card" key={index}>
                                <h3>{area.title}</h3>
                                <p>{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="impact-section">
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '42px', fontWeight: '800' }}>Infrastructure & Impact</h2>
                    <div className="impact-grid">
                        {impacts.map((impact, index) => (
                            <div className="impact-card" key={index}>
                                <h3>{impact.title}</h3>
                                <p>{impact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
