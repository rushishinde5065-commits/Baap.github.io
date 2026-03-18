import React from 'react';
import '../Style/Education.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Education = () => {
    const courses = [
        {
            title: "11th & 12th",
            desc: "Foundational education in Science, Commerce, and Arts with a focus on preparing students for higher technical education and career excellence."
        },
        {
            title: "BCA",
            desc: "A comprehensive program of 3 years covering software development, programming languages, and database management."
        },
        {
            title: "MCA",
            desc: "Advanced training of 2 years in software engineering, AI, and cloud computing for the next generation of tech leaders."
        }
    ];

    const admissionSteps = [
        { title: "Choose Program", desc: "Choose from available programs (11th & 12th, BCA, MCA)" },
        { title: "Check Eligibility", desc: "For 10th, 12th, or Graduate based on the selected course." },
        { title: "Apply", desc: "Complete the form with details and attached documents." },
        { title: "Interview", desc: "Qualify for the interview session (Only for MCA)." },
        { title: "Confirmation", desc: "Receive your Admission offer letter." },
        { title: "Fee Payment", desc: "Pay the Admission Fee within the deadline." },
        { title: "Commencement", desc: "Attend the orientation session and start learning." }
    ];

    const highlights = [
        { title: "Career-Ready", desc: "Guaranteed job placement program connecting you with top tech companies." },
        { title: "Impactful", desc: "Committed to fostering growth in rural education and farming ecosystems." },
        { title: "Supportive", desc: "A strong community network to collaborate and share knowledge." },
        { title: "Transformative", desc: "Educational experiences designed to make you future-proof." }
    ];

    const approach = [
        { title: "Hands-On Learning", desc: "Equip yourself with practical skills through real-world coding and live problem-solving." },
        { title: "Industry-Ready", desc: "Transform into a global tech leader while embracing rural empowerment." }
    ];

    return (
        <div className="education-container">
            {/* Hero Section */}
            <section className="education-hero">
                <div className="hero-glow"></div>
                <div className="content-wrapper">
                    <div className="education-badge">Learning for Impact</div>
                    <h1 className="hero-title">Rural Innovators</h1>
                    <p className="hero-lead">
                        The Baap Company offers practical education programs focused on technology skills, rural innovation, and community empowerment.
                    </p>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <div className="container">
                    <span className="section-label">Empowering Education</span>
                    <h2 style={{ fontSize: '42px', fontWeight: '800' }}>Education Courses</h2>
                    <div className="courses-grid">
                        {courses.map((course, index) => (
                            <div className="course-card" key={index}>
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>
                                <a href="#" className="enroll-btn">Enroll Now <HiOutlineArrowNarrowRight /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process Section */}
            <section className="admission-section">
                <div className="container">
                    <h2 className="text-center" style={{ fontSize: '42px', fontWeight: '800', marginBottom: '10px' }}>Admissions at The Baap</h2>
                    <p className="text-center" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto 50px' }}>
                        Your Path to Joining The Baap Company – Follow These Simple Steps to Begin Your Journey
                    </p>
                    
                    <div className="steps-container">
                        {admissionSteps.map((step, index) => (
                            <div className="step-item" key={index}>
                                <div className="step-number">{index + 1}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach & Why Us */}
            <section className="why-why-not-section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '40px' }}>Our Approach</h2>
                            {approach.map((item, index) => (
                                <div className="info-card mb-4" key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-7">
                            <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '40px' }}>Why Choose Us?</h2>
                            <div className="info-grid">
                                {highlights.map((item, index) => (
                                    <div className="info-card" key={index}>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
