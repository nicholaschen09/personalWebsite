import React from 'react';
import './TikTokViewPredictor.css';
import csv from './csv.png';
import code1 from './code1.png';
import output1 from './output1.png';
import output2 from './output1.png';
import output3 from './output1.png';
import output4 from './output1.png';



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
                    <p>Then I began extracting the data from the csv file and putting it into a dataset using pandas in python where I then use that to plot the graph</p>
                    <img src={code1} alt="code1" className="project-image" />
                    <img src={output1} alt="output1" className="project-image" />
                    <p></p>
                    <img src={code2} alt="code2" className="project-image" />
                    <img src={output2} alt="output2" className="project-image" />
                    <p>Then I began extracting the data from the csv file and putting it into a dataset using pandas in python where I then use that to plot the graph</p>
                    <img src={code3} alt="code3" className="project-image" />
                    <img src={output3} alt="output3" className="project-image" />
                    <p>Then I began extracting the data from the csv file and putting it into a dataset using pandas in python where I then use that to plot the graph</p>
                    <img src={code4} alt="code4" className="project-image" />
                    <img src={output4} alt="output4" className="project-image" />
                    <p>Then I began extracting the data from the csv file and putting it into a dataset using pandas in python where I then use that to plot the graph</p>
                    <img src={code5} alt="code5" className="project-image" />
                    <img src={output5} alt="output5" className="project-image" />
                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/nicholaschen09/tiktok-view-predictor" target="_blank" rel="noopener noreferrer">TikTok View Predictor GitHub Repository</a>.</p>

                </div>
            </div>
        </div>
    );
}

export default TikTokViewPredictor;