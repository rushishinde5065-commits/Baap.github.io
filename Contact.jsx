import React, { useState } from 'react';
import '../Style/Contact.css';

const Contact = () => {
    const [businessName, setBusinessName] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [product, setProduct] = useState("");
    const [service, setService] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [timeline, setTimeline] = useState("");
    const handal = (e) => {
    e.preventDefault();
    console.log("Business Name:", businessName);
    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Product:", product);
    console.log("Service:", service);
    console.log("Company Size:", companySize);
    console.log("Timeline:", timeline);
    };

    return (
        <div className="contact-container">
            <div className="contact-form-wrapper">
                <h1 className="contact-title">Business Requirement</h1>

                <form className="form-grid" onSubmit={handal}>
                    
                    <div className="form-group">
                        <label>Organization / Business Name*</label>
                        <input 
                            type="text" 
                            placeholder="Enter Organization Name" 
                            required 
                            value={businessName}
                            onChange={(e)=>setBusinessName(e.target.value)} 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Contact Person*</label>
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            required 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Designation*</label>
                        <input type="text" placeholder="Founder / Director / Manager" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Official Email*</label>
                        <input type="email" placeholder="Official Email Address" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Contact Number*</label>
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            required 
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>City / State*</label>
                        <input type="text" placeholder="City / State" required />
                    </div>
                    
                    <div className="form-group">
                        <label>Select Product*</label>
                        <select 
                            required 
                            value={product} 
                            onChange={(e)=>setProduct(e.target.value)}
                        >
                            <option value="" disabled>Select Product (if applicable)</option>
                            <option value="product1">Product 1</option>
                            <option value="product2">Product 2</option>
                            <option value="product3">Product 3</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Select Service*</label>
                        <select 
                            required 
                            value={service} 
                            onChange={(e)=>setService(e.target.value)}
                        >
                            <option value="" disabled>Select Service (if applicable)</option>
                            <option value="service1">Service 1</option>
                            <option value="service2">Service 2</option>
                            <option value="service3">Service 3</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Company Size*</label>
                        <select 
                            required 
                            value={companySize} 
                            onChange={(e)=>setCompanySize(e.target.value)}
                        >
                            <option value="" disabled>Select Company Size</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="200+">200+</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label>Project Timeline*</label>
                        <select 
                            required 
                            value={timeline} 
                            onChange={(e)=>setTimeline(e.target.value)}
                        >
                            <option value="" disabled>Select Timeline</option>
                            <option value="immediate">Immediate</option>
                            <option value="1-3-months">1-3 Months</option>
                            <option value="3-6-months">3-6 Months</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>
                    
                    <div className="form-group full-width">
                        <label>Business Requirement*</label>
                        <textarea 
                            placeholder="Describe your requirement..." 
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn">
                        Submit Requirement
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Contact;