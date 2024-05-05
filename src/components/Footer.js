import "./FooterStyles.css";

import React from 'react';

import { 
    FaGithub, 
    FaHome, 
    FaKaggle, 
    FaLinkedin, 
    FaMailBulk, 
    FaPhone, 
    FaTwitter 
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Godhra, Gujarat, </p> 
                        <p>India - 389001. </p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    +91 96013-94325</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}} />
                    kashyappatel1429@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>To connect with me</h4>
                <p>Let's explore data-driven insights together! I'm Kashyap Patel, an enthusiastic data scientist ready for vibrant discussions.</p>
                <div className="social">
                    <a href="https://linkedin.com/in/kashyap1429" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>
                    <a href="https://x.com/Kashyap_1429" target="_blank" rel="noopener noreferrer">
                        <FaTwitter 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>
                    <a href="https://github.com/kashyap1429" target="_blank" rel="noopener noreferrer">
                        <FaGithub 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>
                    <a href="https://www.kaggle.com/kashyap14" target="_blank" rel="noopener noreferrer">
                        <FaKaggle 
                            size={30} 
                            style={{ color:"#fff", marginRight: "1rem" }} 
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer