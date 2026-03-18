import React from 'react';
import '../Style/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-glow"></div>
        <div className="content-wrapper">
          <div className="company-badge">About Us</div>
          <h1 className="hero-title">Building the Future from Rural India</h1>
          <p className="hero-lead">We are a distributed engineering ecosystem delivering scalable digital infrastructure, AI solutions, and enterprise platforms.</p>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="vision-section">
        <div className="vision-bg-text">Vision</div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="vision-content">
                <h2 className="vision-title">Founder’s Vision</h2>
                <div className="vision-text">
                  <p>Baap Company was built on a bold idea that talent has no geography. With the right vision and discipline, rural India can create technology that competes with the best in the world.</p>
                  <p>Today, Baap Company stands as a distributed engineering ecosystem delivering scalable digital infrastructure, AI solutions, enterprise platforms, and performance-driven technology systems.</p>
                  <p className="vision-quote">"Distributed Engineering. Rural Roots. Global Impact."</p>
                </div>
                <div className="founder-info">
                  <h3 className="founder-name">Raosaheb Ghuge</h3>
                  <p className="founder-title">Founder and CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-stats">
                  <div className="stat-card">
                      <h3>10+</h3>
                      <p>Years Experience</p>
                  </div>
                  <div className="stat-card">
                      <h3>50+</h3>
                      <p>Expert Engineers</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
          <div className="container">
              <h2 className="section-title text-center">We Build Solutions That Create Real Impact</h2>
              <div className="row mt-5">
                  <div className="col-md-6 mb-4">
                      <div className="approach-card">
                          <h3 className="card-title">Our Approach</h3>
                          <p>At Baap Company, we design scalable and secure digital systems that solve real operational challenges. Our focus is on structured engineering, practical execution, and long-term performance.</p>
                          <ul className="focus-list">
                              <li>Scalable Architecture</li>
                              <li>Secure Infrastructure</li>
                              <li>AI Automation</li>
                              <li>Enterprise Platforms</li>
                              <li>Performance Optimization</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-md-6 mb-4">
                      <div className="direction-card">
                          <h3 className="card-title">Our Direction</h3>
                          <p>We are building a globally respected technology company rooted in rural Maharashtra. Through distributed engineering, we deliver enterprise-grade solutions while creating opportunities for rural talent.</p>
                          <ul className="focus-list">
                              <li>Distributed Engineering</li>
                              <li>Rural Empowerment</li>
                              <li>Enterprise Standards</li>
                              <li>Cost Efficiency</li>
                              <li>Sustainable Growth</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
          <div className="container">
              <h2 className="section-title text-center">Why Enterprises Choose Baap Company</h2>
              <div className="row mt-5">
                  <div className="col-lg-4 mb-4">
                      <div className="choose-card">
                          <div className="choose-icon">🚀</div>
                          <h3>Enterprise Systems</h3>
                          <p>Scalable ERP, AI, and platform solutions built for real-world deployment and operational stability.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                      <div className="choose-card">
                          <div className="choose-icon">📋</div>
                          <h3>Structured Delivery</h3>
                          <p>Clear milestones, transparent processes, and performance-driven execution across every project lifecycle.</p>
                      </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                      <div className="choose-card">
                          <div className="choose-icon">⭐</div>
                          <h3>Proven Expertise</h3>
                          <p>Cross-domain capabilities in AI, analytics, web infrastructure, and enterprise software engineering.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default About;
