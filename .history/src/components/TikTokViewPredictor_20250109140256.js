import React from 'react';
import './TikTokViewPredictor.css';
import csv from './csv.png';
import code1 from './code1.png';

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
                    <p>Welcome to the TikTok View Predictor project page. This is where you'll find information about this innovative tool for predicting TikTok video views.</p>

                    <h3>About the Project</h3>
                    <p>TikTok View Predictor is a machine learning-based tool that predicts the number of views a TikTok video will receive based on various features.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Accurate view predictions</li>
                        <li>Data analysis of video features</li>
                        <li>Machine learning model training</li>
                        <li>Interactive user interface</li>
                    </ul>

                    <h3>Here's a look into the process of creating this program</h3>
                    <p>I began with collecting data from my tiktok account and collected the dates so I could sort them into a spreasheet and download a csv file</p>
                    <img src={csv} alt="csv" className="project-image" />
                    <p>Then I began extracting the data from the csv file and putting it into a </p>
                    <img src={code1} alt="code1" className="project-image" />
                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/nicholaschen09/tiktok-view-predictor" target="_blank" rel="noopener noreferrer">TikTok View Predictor GitHub Repository</a>.</p>

                </div>
            </div>
        </div>
    );
}

export default TikTokViewPredictor;