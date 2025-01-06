import React from 'react';
import './TikTokViewPredictor.css';

const TikTokViewPredictor = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="tiktokviewpredictor">
                <h1>TikTok View Predictor</h1>
                <div className="content">
                    <p>Welcome to the TikTok View Predictor project page. This is where you'll find information about our innovative tool for predicting TikTok video views.</p>

                    <h3>About the Project</h3>
                    <p>TikTok View Predictor is a machine learning-based tool that predicts the number of views a TikTok video will receive based on various features.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Accurate view predictions</li>
                        <li>Data analysis of video features</li>
                        <li>Machine learning model training</li>
                        <li>Interactive user interface</li>
                    </ul>

                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/yourusername/TikTokViewPredictor" target="_blank" rel="noopener noreferrer">TikTok View Predictor GitHub Repository</a>.</p>

                    <h3>Project Images</h3>
                    <div className="image-container">
                        <img src="/images/tiktokviewpredictor-1.jpg" alt="TikTok View Predictor interface" className="project-image" />
                        <img src="/images/tiktokviewpredictor-2.jpg" alt="TikTok View Predictor data analysis" className="project-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TikTokViewPredictor;