// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Email icon
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Social media icons
import './Sidebar.css'; // Importing CSS for the sidebar
import logo from '../assets/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" /> {/* Use the imported logo */}
            <h2>Aryan Jamatia</h2>
        </div>

            
            <ul className="sidebar-menu">
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/academic">Academic Details</Link></li>
                <li><Link to="/certification">Certification</Link></li>
            </ul>
            <h6>Contact</h6>
            <div className="contact-details">
                
                <a href="mailto:aryanjamatia9862@gmail.com" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://www.linkedin.com/in/aryan-jamatia-540017287/" className="contact-link">
                    <FontAwesomeIcon icon={faLinkedin} /> 
                </a>
                <a href="https://github.com/aryanjamatia" className="contact-link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/ary_anjm?igsh=MWdxODQ1eG52bHgyMQ==" className="contact-link">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
