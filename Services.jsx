import React from 'react';
import '../Style/Services.css';
import { 
  HiOutlineLightningBolt, 
  HiOutlineShieldCheck, 
  HiOutlineSparkles, 
  HiOutlineDatabase, 
  HiOutlineUserGroup, 
  HiOutlineGlobeAlt,
  HiOutlineArrowNarrowRight
} from "react-icons/hi";

const Services = () => {
  const serviceList = [
    {
      title: "Digital Growth Infrastructure",
      desc: "Data-driven digital growth frameworks designed to enhance visibility, optimize acquisition funnels, and deliver measurable revenue performance.",
      icon: <HiOutlineLightningBolt />,
      link: "#"
    },
    {
      title: "Software Engineering",
      desc: "Secure and modular enterprise software systems engineered for scalable deployment, operational stability, and long-term reliability.",
      icon: <HiOutlineShieldCheck />,
      link: "#"
    },
    {
      title: "AI Systems",
      desc: "Intelligent automation engines and predictive architectures developed to enhance decision-making and streamline enterprise workflows.",
      icon: <HiOutlineSparkles />,
      link: "#"
    },
    {
      title: "Data Intelligence",
      desc: "Enterprise analytics infrastructures transforming raw operational data into actionable insights and strategic executive decision-support systems.",
      icon: <HiOutlineDatabase />,
      link: "#"
    },
    {
      title: "Talent Infrastructure",
      desc: "Scalable technical workforce solutions providing vetted engineering professionals aligned with structured enterprise delivery standards.",
      icon: <HiOutlineUserGroup />,
      link: "#"
    },
    {
      title: "Web Engineering",
      desc: "High-performance web platforms engineered for speed, security, and sustainable long-term digital expansion across the global ecosystem.",
      icon: <HiOutlineGlobeAlt />,
      link: "#"
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-glow"></div>
        <div className="content-wrapper">
          <div className="services-badge">Our Expertise</div>
          <h1 className="hero-title">Enterprise Digital Solutions</h1>
          <p className="hero-lead">
            We deliver scalable digital infrastructure solutions designed to enhance operational efficiency, automation, and long-term performance.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {serviceList.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={service.link} className="read-more-btn">
                  Read More <HiOutlineArrowNarrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Capability Section */}
      <section className="capability-section">
        <div className="container">
          <div className="capability-card">
            <div className="capability-content">
              <h2>Global Delivery Capability</h2>
              <p>
                Our delivery framework supports clients across regional and international markets, including North America, Europe, and Asia-Pacific. With a distributed engineering model and scalable infrastructure approach, we ensure consistent execution standards across geographies.
              </p>
            </div>
            <div className="capability-visual">
                <HiOutlineGlobeAlt style={{ fontSize: '120px', color: 'rgba(139, 44, 245, 0.4)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="services-cta">
          <div className="cta-box">
              <h2>Let’s Architect Your Digital Transformation</h2>
              <p>Share your business objectives with our team, and we will design scalable technology architecture and performance-driven solutions.</p>
              <a href="#" className="strategy-btn">Schedule Strategy Call</a>
          </div>
      </section>
    </div>
  );
};

export default Services;
