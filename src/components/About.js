import React from 'react';
import './About.css';
import GithubLogo from './pinkgithub.png'; 
import LinkedinLogo from './pinklinkedin.png'; 
import ArtWebsiteLogo from './ArtWebsiteLogo.jpg';

const About = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div>
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="about">
                <h1 className="titleabout">about me</h1>
                <div className="about-content">
                    <p>hi, i'm nic!</p>
                    <p>i'm studying systems design engineering at the university of waterloo.</p>
                    <p>my email is n224chen@uwaterloo.ca</p>
                    <p>resume available upon request.</p>
                    <div className="social-links">
                        <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                            <img src={GithubLogo} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinLogo} alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://nicholaschen243.wixsite.com/nicholas-chen" target="_blank" rel="noopener noreferrer">
                            <img src={ArtWebsiteLogo} alt="Art Website" className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="bordered-section">
                    <div className="education">
                        <h2>education</h2>
                        <p>University of Waterloo</p>
                        <p>Bachelor of Applied Science in Systems Design Engineering</p>
                        <p>Expected Graduation Date: May 2029</p>
                        <p>Waterloo, Ontario</p>

                        <p>President’s Scholarship of Distinction worth $5000</p>
                        <p>Relevant Courses: Introduction to Design, Digital Computation, Elementary Engineering Math, Visual Communications</p>

                    </div>
                    <div className="skills">
                        <h2>technical skills</h2>
                        <p><strong>Languages:</strong> Python, Java, C++, HTML/CSS, JavaScript, Kotlin, SQL, MATLAB</p>
                        <p><strong>Developer Tools:</strong> VS Code, Eclipse, Android Studio, IntelliJ, Jupyter Notebook</p>
                        <p><strong>Technologies/Frameworks:</strong> GitHub, Firebase, React, React Native, Node.js, Flask, Numpy, Pandas, MongoDB, PyTorch, TensorFlow</p>
                        <p><strong>Design:</strong> Figma, Procreate, Adobe, SOLIDWORKS, AutoCAD, Fusion 360</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;