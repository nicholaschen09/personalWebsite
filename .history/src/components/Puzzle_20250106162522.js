import React from 'react';
import './Puzzle.css';
import final from './final.jpg';

const Puzzle = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="puzzle">
                <h1>Puzzle Project</h1>
                <div className="content">
                    <p>Welcome to the Puzzle project page. This is where you'll find information about our innovative tool for predicting TikTok video views.</p>

                    <h3>About the Project</h3>
                    <p>TikTok View Predictor is a machine learning-based tool that predicts the number of views a TikTok video will receive based on various features.</p>
                    <img src={final} alt="Final Design" className="project-image" />

                    <h3>Key Features</h3>
                    <ul>
                        <li>Accurate view predictions</li>
                        <li>Data analysis of video features</li>
                        <li>Machine learning model training</li>
                        <li>Interactive user interface</li>
                    </ul>

                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/yourusername/TikTokViewPredictor" target="_blank" rel="noopener noreferrer">TikTok View Predictor GitHub Repository</a>.</p>

                    <h3>Creating the Model in SolidWorks</h3>
                    <p>We started by creating a detailed 3D model of our design in SolidWorks. This involved mapping out the exact dimensions of each component to ensure a precise fit.</p>
                    <p>Once the model was complete, we used the dimensions to create individual pieces. Each piece was carefully cut and then sanded down to ensure a smooth finish and accurate fit.</p>
                    <p>Our goal was to assemble the entire structure without the use of glue or tape. This required meticulous attention to detail and precise craftsmanship to ensure that all pieces fit together perfectly.</p>

                    <h3>Project Images</h3>
                    <div className="image-container">
                        <img src="/images/puzzle-1.jpg" alt="TikTok View Predictor interface" className="project-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Puzzle;