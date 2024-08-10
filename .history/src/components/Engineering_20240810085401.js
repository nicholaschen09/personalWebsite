import React from 'react';
import './Engineering.css'; // Ensure you have this CSS file in your project

const Engineering = () => {
    return (
        <div className="engineering">
            <h1>engineering projects</h1>
            <p>all my school/side projects</p>
            <div className="projects-container">
                <a href="/project1" className="project">BasketBin</a>
                <a href="/project2" className="project">BoomBox</a>
                <a href="/project3" className="project">Academates</a>
                <a href="/project4" className="project">VolunTrack</a>
                {/* Add more projects as needed */}
            </div>
        </div>
    );
};

export default Engineering;