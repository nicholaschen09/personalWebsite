import React from 'react';
import './BasketBin.css';
import fernando from './fernando.jpg';

const Fernando = () => {
    return (
        <div className="center-wrapper">
            <div className="basketbin">
                <h1>Fernando</h1>
                <div className="content">
                    <p>
                        Welcome to the Posture Checker Robot project – a smart solution designed to monitor your posture in real time and provide corrective feedback.
                    </p>
                    <img src={fernando} alt="fernando" className="project-image" />
                    
                    <h3>About the Project</h3>
                    <p>
                        The Posture Checker Robot integrates advanced sensors and intelligent algorithms to detect poor posture and alert users instantly.
                        By leveraging IoT technology, this system aims to help users maintain a healthy posture and prevent long-term musculoskeletal issues.
                    </p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        <li>Real-time posture monitoring using IMU sensors</li>
                        <li>Accurate sensor data processing</li>
                        <li>Instant feedback through haptic/visual alerts</li>
                        <li>User-friendly interface for monitoring progress</li>
                        <li>Mobile integration for on-the-go use</li>
                    </ul>
                    
                    <h3>GitHub Repository</h3>
                    <p>
                        Explore the complete source code and documentation on GitHub:{' '}
                        <a href="https://github.com/enxilium/posture-checker-robot" target="_blank" rel="noopener noreferrer">
                            Posture Checker Robot GitHub Repository
                        </a>.
                    </p>
                    
                    <h3>Technical Details</h3>
                    <ul>
                        <li>Hardware: IMU sensors, microcontroller (e.g., Arduino or Raspberry Pi)</li>
                        <li>Software: Python and C++ for sensor integration and data processing</li>
                        <li>Algorithms: Real-time analysis for posture detection</li>
                        <li>Feedback: Haptic and visual alerts for posture correction</li>
                    </ul>
                    
                    <h3>Project Demonstration</h3>
                    <p>Watch a demonstration video of the Posture Checker Robot in action:</p>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/your_video_id"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Fernando;