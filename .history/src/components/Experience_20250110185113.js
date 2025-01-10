import React from 'react';
import './Experience.css';

const Experience = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="experience">
                <h1>my experience</h1>
                <div className="content">
                    <p>Welcome to the Puzzle project page. Here you'll find out more about the puzzle project my first year engineering group and I designed and built.</p>


                </div>
            </div>
        </div>
    );
}

export default Experience;