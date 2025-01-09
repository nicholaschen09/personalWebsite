import React from 'react';
import './Solidworks.css';
import shape1 from './shape1.png';
import shape2 from './h'

const Solidworks = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="engineeringportfolio">
                <h1>Engineering Portfolio</h1>
                <div className="content">
                    <p>Welcome to my engineering portfolio page. This page has images and description for my engineering projects done in CAD and SOLIDWORKS.</p>

                    <h3>About the Project</h3>
                    <p>Throughout my visual communications course, I explored a lot of the tools and functions within SOLIDWORKS and CAD where I designed and modelled many 3D pieces and parts for projects and summatives.</p>

                    <h3>Modelling</h3>
                    <img src={shape1} alt="shape1" className="project-image" />

                    <img src={shape2} alt="shape2" className="project-image" />

                    <img src={shape3} alt="shape3" className="project-image" />
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


export default Solidworks;