import React from 'react';
import './Experience.css';

const Experience = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="bl">
                <h1>blogs</h1>
                <p>blog.</p>

            </div>
        </div>
    );
};

export default Experience;