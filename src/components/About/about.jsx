import React from 'react';
import aboutCss from "./about.module.css";
import aboutImage from "../../assets/images/aboutImage.jpg";

function About() {
    return (
        <div className={aboutCss.section}>
        <div className={aboutCss.content}>
    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#4A90E2' }}>  🌍 About Me</h2>
    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', textAlign: 'justify' }}>
        I’m a  Computer Science and Engineering student at 
        ASTU in <strong style={{ color: '#4A90E2' }}>Ethiopia</strong>. Driven by a passion for technology, I strive to create 
        innovative solutions  that make a difference. With skills in 
        programming and web development , I’m excited to tackle 
        real-world challenges and explore the endless possibilities in tech. 
        <br /><br />
        <strong style={{ color: '#4A90E2' }}>I want to be impactful in the world.</strong>
    </p>
    <blockquote  style={{
        borderLeft: '4px solid #4A90E2',
        paddingLeft: '20px',
        color: '#4A90E2', 
        fontStyle: 'italic',
        fontSize: '1.1rem',
    }}>
        <p>
            "Creativity is just connecting things." <br />
            — <strong style={{ color: '#4A90E2' }}>Steve Jobs</strong>
        </p>
    </blockquote>
</div>
<div className={aboutCss.image_container}>
        <img  src={aboutImage} />
        </div>
        </div>
        
    );
}

export default About;
