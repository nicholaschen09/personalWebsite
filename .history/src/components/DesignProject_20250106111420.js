import React from 'react';
import './DesignProject.css';

const DesignProject = () => {
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
                    <p>Welcome to the Design project page. This is where you'll find information about our innovative tool for predicting TikTok video views.</p>

                    <h3>About the Project</h3>
                    <p>TikTok View Predictor is a machine learning-based tool that predicts the number of views a TikTok video will receive based on various features.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Accurate view predictions</li>
                        <li>Data analysis of video features</li>
                        <li>Machine learning model training</li>
                        <li>Interactive user interface</li>
                    </ul>

                    <h3>Machine Learning Model</h3>
                    <p>The core of our project is a sophisticated machine learning model that analyzes various features of TikTok videos to predict their view counts. We used a combination of regression algorithms and neural networks to achieve high accuracy.</p>
                    <p>Key features considered include:</p>
                    <ul>
                        <li>Video length</li>
                        <li>Hashtags used</li>
                        <li>Number of likes and comments</li>
                        <li>Time of posting</li>
                        <li>Music and effects used</li>
                    </ul>

                    <h3>Team Members</h3>
                    <p>Our project was developed by a dedicated team of data scientists and software engineers:</p>
                    <ul>
                        <li>John Doe - Project Lead</li>
                        <li>Jane Smith - Data Scientist</li>
                        <li>Emily Johnson - Frontend Developer</li>
                        <li>Michael Brown - Backend Developer</li>
                    </ul>

                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/yourusername/TikTokViewPredictor" target="_blank" rel="noopener noreferrer">TikTok View Predictor GitHub Repository</a>.</p>

                    <h3>Project Images</h3>
                    <div className="image-container">
                        <img src="/images/designproject-1.jpg" alt="TikTok View Predictor interface" className="project-image" />
                        <img src="/images/designproject-2.jpg" alt="TikTok View Predictor data analysis" className="project-image" />
                        <img src="/images/designproject-3.jpg" alt="Team working on the project" className="project-image" />
                    </div>

                    <h3>Future Work</h3>
                    <p>We have several plans for future improvements to the TikTok View Predictor:</p>
                    <ul>
                        <li>Incorporating more features for better accuracy</li>
                        <li>Improving the user interface for better user experience</li>
                        <li>Adding support for other social media platforms</li>
                        <li>Implementing real-time prediction capabilities</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The TikTok View Predictor is a powerful tool that leverages machine learning to provide accurate predictions of video views. Our team is committed to continuous improvement and expanding the capabilities of this project. Thank you for visiting our project page!</p>
                </div>
            </div>
        </div>
    );
}

export default DesignProject;