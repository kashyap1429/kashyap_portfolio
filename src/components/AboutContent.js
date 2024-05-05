import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';

import pro4 from "../assets/pic4.png"
import pro5 from "../assets/pic5.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>  
          <p>I'm a mathematician turned data scientist, unraveling patterns and crafting insights.</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro5} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={pro4} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent