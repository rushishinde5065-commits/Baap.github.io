import React from 'react';
import '../Style/Products.css';
import { 
  MdDashboard, MdSchool, MdPeople, MdAccountBalance, 
  MdAssignment, MdInventory, MdCloudUpload, MdSettings, 
  MdDescription, MdLibraryBooks, MdEventNote, MdDirectionsBus,
  MdShoppingCart, MdTask, MdPhoneInTalk, MdLocationOn,
  MdChat, MdReport, MdPayment, MdAttachMoney
} from "react-icons/md";

const Products = () => {
    const products = [
        {
            title: "ERP Web + School Book App",
            desc: "Comprehensive ERP platform for schools to manage academics, administration, transport, library, documents, exams, and daily operations through a single web and mobile system designed for efficiency, accuracy, and transparency.",
            modules: [
                { name: "Dashboard", icon: <MdDashboard /> },
                { name: "Admission & Fees", icon: <MdAccountBalance /> },
                { name: "Academic Settings", icon: <MdSettings /> },
                { name: "Exams", icon: <MdEventNote /> },
                { name: "Library", icon: <MdLibraryBooks /> },
                { name: "Transport", icon: <MdDirectionsBus /> },
                { name: "Assignments", icon: <MdAssignment /> },
                { name: "Reports", icon: <MdReport /> }
            ]
        },
        {
            title: "HRMS + Office Book App",
            desc: "Comprehensive HRMS platform to manage employee attendance, payroll, leave, assets, expenses, and compliance while streamlining internal operations through centralized records and automated workflows.",
            modules: [
                { name: "Payroll Management", icon: <MdPayment /> },
                { name: "Attendance", icon: <MdPeople /> },
                { name: "Tax Management", icon: <MdAttachMoney /> },
                { name: "Asset Management", icon: <MdInventory /> },
                { name: "User Management", icon: <MdSettings /> },
                { name: "Documents", icon: <MdDescription /> }
            ]
        },
        {
            title: "CRM + CRM App",
            desc: "Advanced CRM system designed to strengthen customer relationships, manage leads, automate sales processes, and provide insightful analytics for business growth.",
            modules: [
                { name: "Leads Management", icon: <MdPeople /> },
                { name: "Chats & Communication", icon: <MdChat /> },
                { name: "Appointments", icon: <MdEventNote /> },
                { name: "Vendor Management", icon: <MdPeople /> },
                { name: "Expenses", icon: <MdAttachMoney /> }
            ]
        },
        {
            title: "E-commerce",
            desc: "Scalable e-commerce infrastructure supporting seamless online transactions, inventory control, automated delivery systems, and robust performance for sustainable digital expansion.",
            modules: [
                { name: "Store Management", icon: <MdShoppingCart /> },
                { name: "Delivery Tracking", icon: <MdDirectionsBus /> },
                { name: "Inventory", icon: <MdInventory /> },
                { name: "Payment Gateway", icon: <MdPayment /> }
            ]
        },
        {
            title: "Task Management + App (Office Book)",
            desc: "Advanced task tracking and project management system designed for operational clarity, team collaboration, and real-time progress monitoring.",
            modules: [
                { name: "Projects", icon: <MdAssignment /> },
                { name: "Task Assignment", icon: <MdTask /> },
                { name: "Progress Tracking", icon: <MdReport /> },
                { name: "Team Overview", icon: <MdPeople /> }
            ]
        },
        {
            title: "Janhit App + Web",
            desc: "A community governance and citizen engagement platform simplifying how people report issues, track public projects, and communicate with local authorities.",
            modules: [
                { name: "Complaints", icon: <MdReport /> },
                { name: "Public Projects", icon: <MdAssignment /> },
                { name: "Notices & Updates", icon: <MdDescription /> },
                { name: "AI Chatbot", icon: <MdChat /> }
            ]
        },
        {
            title: "Sangamner AI",
            desc: "A unified local-services platform connecting users with nearby businesses while helping owners manage operations from one app. Combines location-based discovery and AI assistance.",
            modules: [
                { name: "Local Discovery", icon: <MdLocationOn /> },
                { name: "AI Assistant", icon: <MdChat /> },
                { name: "Business Dashboard", icon: <MdDashboard /> },
                { name: "Appointments", icon: <MdPhoneInTalk /> }
            ]
        }
    ];

    return (
        <div className="products-container">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="hero-glow"></div>
                <div className="content-wrapper">
                    <div className="products-badge">Our Innovation</div>
                    <h1 className="hero-title">Smart System. Real Results.</h1>
                    <p className="hero-lead">Delivering measurable value through structured system architecture and scalable engineering.</p>
                </div>
            </section>

            {/* Products Listing */}
            <div className="products-list">
                {products.map((product, pIndex) => (
                    <section className="product-section" key={pIndex}>
                        <div className="container">
                            <div className="product-header">
                                <h2 className="product-title">{product.title}</h2>
                                <p className="product-desc">{product.desc}</p>
                            </div>
                            
                            <h4 className="mb-4" style={{ fontWeight: 600, opacity: 0.9 }}>Core Modules</h4>
                            <div className="modules-grid">
                                {product.modules.map((module, mIndex) => (
                                    <div className="module-card" key={mIndex}>
                                        <div className="module-icon">{module.icon}</div>
                                        <span className="module-name">{module.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Ready Section */}
            <section className="ready-section">
                <div className="container">
                    <div className="ready-box">
                        <h2>Ready to Build Something That Works?</h2>
                        <p>Share your business objectives with our team and let's architect your digital future together.</p>
                        <a href="#" className="contact-btn">Contact Our Team</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
