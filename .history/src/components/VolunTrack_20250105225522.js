import React from 'react';
import './VolunTrack.css';

const VolunTrack = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="voluntrack">
                <h1>Voluntrack</h1>
                <div className="content">
                    <p>Welcome to the VolunTrack project page. This is where you'll find information about our innovative volunteer management solution.</p>

                    <h3>About the Project</h3>
                    <p>VolunTrack is a comprehensive volunteer management system that helps organizations track volunteer hours, manage events, and generate reports.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Volunteer hour tracking</li>
                        <li>Event management</li>
                        <li>Automated reporting</li>
                        <li>Mobile app for volunteers and organizers</li>
                    </ul>

                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/VolunTrack/Web" target="_blank" rel="noopener noreferrer">VolunTrack GitHub Repository</a>.</p>

                    <h3>Project Images</h3>
                    <div className="image-container">
                        <img src="/images/voluntrack-1.jpg" alt="VolunTrack dashboard" className="project-image" />
                        <img src="/images/voluntrack-2.jpg" alt="VolunTrack mobile app" className="project-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VolunTrack;