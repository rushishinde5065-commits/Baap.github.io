import React from "react";
import "../Style/Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaArrowUp
} from "react-icons/fa";
import {
  MdLocationOn,
  MdPhone,
  MdEmail
} from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import baapLogo from "../assets/baap logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate=useNavigate()
  const  ogForm=()=>{
       navigate("/contact")
  }

  

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={baapLogo} alt="Baap Company Logo" className="footer-logo" />
          <p className="brand-description">
            The Baap Company works at the intersection of <br /> technology, education,
            agriculture, and community development, creating real opportunities
            rooted in rural Maharashtra.
          </p>
          <div className="social-links">
            <a href="#" className="social-box instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-box linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="social-box facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-box youtube" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Software Engineering</li>
              <li>AI Systems</li>
              <li>Digital Infrastructure</li>
              <li>Data Intelligence</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Baap</li>
              <li>Products</li>
              <li>Partnership</li>
              <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link></li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Initiatives</h4>
            <ul>
              <li>Education</li>
              <li>Gao Gotha</li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h4>Contact Us</h4>
            <div className="contact-item address-item">
              <MdLocationOn className="contact-icon" />
              <span>
                The Baap Company At Paregaon,<br />
                Tal. Sangamner, Maharashtra,<br />
                422611, India
              </span>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <span>+91 9105868788</span>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>info@baapcompany.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider" /> <hr />

      <div className="footer-bottom">
        <div className="legal-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="copyright">
          {currentYear} © Baap Services Private Limited
        </div>
      </div>

      <div className="floating-actions">
        <button onClick={ogForm} className="book-demo-btn">Book A Demo</button>
        <a href="https://wa.me/919105868788" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp />
        </a>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;