import React from 'react';
import './DesignProject.css';
import domeImage from './domeImage.jpg'; // Example local image import
import mirrorsImage from './images/mirrors.png'; // Example local image import

const DesignProject = () => {3
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="designproject">
                <h1>Design Project</h1>
                <div className="content">
                    <p>Our SYDE 161 project is an interactive public installation designed to reconnect the University of Waterloo community with the beauty and wonder of the night sky...</p>

                    {/* Example image integration */}
                    <img src={domeImage} alt="Dome Design" className="project-image" />

                    <p>To meet this challenge, our team developed two innovative design concepts...</p>

                    <h3>Innovative Design Concepts</h3>
                    <img src={mirrorsImage} alt="Reflective Mirrors Concept" className="project-image" />

                    <p>The first was a dome-like structure and the second was a reflective surface...</p>

                    {/* You can add more images in a similar way */}
                    <h3>Eco-Friendly Materials</h3>
                    <p>Both designs incorporate eco-friendly materials...</p>

                    <h3>Accessibility and Inclusivity</h3>
                    <p>Our project was designed with accessibility in mind...</p>

                    <h3>Challenges and Solutions</h3>
                    <p>The journey from concept to design was not without its obstacles...</p>

                    <h3>Future Improvements</h3>
                    <p>While the current designs are functional and impactful...</p>

                    <h3>Community Impact</h3>
                    <p>Research has shown that public art installations enhance community connection...</p>

                    <h3>Link to FigJam</h3>
                    <p><a href="https://www.figma.com/board/m63yGJeyzfUCMbqtY3c16f/SYDE-161---Systems-Mapping-Diagram-S1G1?node-id=0-1&t=s9YNodh2zpIhvu4J-1" target="_blank" rel="noopener noreferrer">SYDE 161 - Systems Mapping Diagram S1G1</a></p>
                </div>
            </div>
        </div>
    );
}

export default DesignProject;
