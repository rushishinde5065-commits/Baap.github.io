import React from 'react';
import '../Style/Blogs.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Blogs = () => {
    const blogList = [
        {
            title: "Republic Day Is Not About Freedom Anymore. It’s About Responsibility.",
            date: "January 26, 2024",
            excerpt: "Building institutions is the highest form of patriotism. As we celebrate Republic Day, let's reflect on the responsibility each of us carries to build a better future.",
            link: "#"
        },
        {
            title: "Hard Work Stops Working After a Point And Institutions Are Afraid to Admit It",
            date: "January 15, 2024",
            excerpt: "The transition from hard work to structured systems is critical for growth. Discover why scaling requires more than just effort—it requires architecture.",
            link: "#"
        },
        {
            title: "Schools Don’t Fail Because of Teachers or Students they Fail Because of Broken Systems",
            date: "December 28, 2023",
            excerpt: "Educational outcomes are tied to operational efficiency. Learn how integrated ERP systems are transforming the way schools manage their academics and administration.",
            link: "#"
        },
        {
            title: "Why Rural India Is Still Ignored in the Tech Revolution",
            date: "December 10, 2023",
            excerpt: "The digital divide is real, but so is the potential. Exploring the untapped talent of rural India and how distributed engineering is bridging the gap.",
            link: "#"
        }
    ];

    return (
        <div className="blogs-container">
            {/* Hero Section */}
            <section className="blogs-hero">
                <div className="hero-glow"></div>
                <div className="content-wrapper">
                    <div className="blogs-badge">Insights & Stories</div>
                    <h1 className="hero-title">Our Blogs</h1>
                    <p className="hero-lead">
                        Insights uncovering technology-driven solutions for rural innovation, local enterprises, startups, and community growth.
                    </p>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="blog-posts-section">
                <div className="container">
                    <div className="blog-grid">
                        {blogList.map((blog, index) => (
                            <div className="blog-card" key={index}>
                                <div className="blog-image-placeholder">
                                    <div style={{ color: '#8b2cf5', fontSize: '40px', fontWeight: 'bold' }}>BAAP</div>
                                </div>
                                <div className="blog-content">
                                    <span className="blog-date">{blog.date}</span>
                                    <h2 className="blog-title">{blog.title}</h2>
                                    <p className="blog-excerpt">{blog.excerpt}</p>
                                    <a href={blog.link} className="read-more-link">
                                        Read More <span><HiOutlineArrowNarrowRight /></span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section placeholder */}
            <section style={{ padding: '80px 6%', textAlign: 'center' }}>
                <div style={{ 
                    background: 'rgba(139, 44, 245, 0.05)', 
                    padding: '60px', 
                    borderRadius: '30px', 
                    border: '1px solid rgba(139, 44, 245, 0.1)',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Stay in the Loop</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>Subscribe to get latest updates on rural innovation and technology.</p>
                    <div style={{ display: 'flex', gap: '15px', maxWidth: '500px', margin: '0 auto' }}>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            style={{ 
                                flexGrow: 1, 
                                padding: '15px 25px', 
                                borderRadius: '50px', 
                                background: 'rgba(255,255,255,0.05)', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none'
                            }} 
                        />
                        <button style={{ 
                            background: '#8b2cf5', 
                            color: 'white', 
                            padding: '15px 35px', 
                            borderRadius: '50px', 
                            border: 'none', 
                            fontWeight: '700' 
                        }}>Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
