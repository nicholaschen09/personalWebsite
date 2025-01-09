import React from 'react';
import './BasketBin.css';
import h66 from './h66.JPG';
import h65 from './h65.JPG';
import h64 from './h64.JPG';
import h63 from './h63.jpg';
import h62 from './h62.JPG';
import h6 from './h6.JPG';
import screen1 from './screen1.PNG';
import screen2 from './screen2.PNG';
import screen3 from './screen3.PNG';

const BasketBin = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="basketbin">
                <h1>BasketBin</h1>
                <div className="content">
                    <p>This is BasketBin. Our innovative waste management solution.</p>
                    <img src={h66} alt="h66" className="project-image" />
                    <h3>About the Project</h3>
                    <p>BasketBin is a smart waste management system that uses IoT technology to optimize garbage collection routes and schedules. Our goal is to make waste management more efficient, cost-effective, and environmentally friendly.</p>
                    <img src={h65} alt="h65" className="project-image" />
                    <h3>Key Features</h3>
                    <ul>
                        <li>Real-time fill level monitoring</li>
                        <li>Optimized collection routes</li>
                        <li>Data analytics for waste management insights</li>
                    </ul>
                    <img src={h64} alt="h64" className="project-image" />
                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/DerrickHa/ht6" target="_blank" rel="noopener noreferrer">BasketBin Github Repository</a>.</p>
                    <img src={h63} alt="h63" className="project-image" />
                    <h3>Technical Details</h3>
                    <img src={h62} alt="h62" className="project-image" />
                    <p>The BasketBin system is built using the latest technologies to ensure reliability and scalability. Here are some of the technical details:</p>
                    <ul>
                        <li>IoT sensors for real-time monitoring</li>
                        <li>Cloud-based data storage and processing</li>
                        <li>Machine learning algorithms for route optimization</li>
                        <li>Mobile app built with React Native</li>
                        <li>Web portal built with React and Node.js</li>
                    </ul>
                    <img src={h6} alt="h6" className="project-image" />
                    <h3>Hack the 6ix Hackathon</h3>
                    <p>BasketBin @ Hack the 6ix Hackathon</p>
                    <p>Python, HTML, C++, JavaScript, CSS | August 2024</p>
                    <ul>
                        <li>Built a garbage sorter with hardware including sensors and servos connected to an ESP32 microcontroller.</li>
                        <li>Developed a Python program integrating with hardware, utilizing a trained computer vision model with Flask to classify waste, achieving 90% accuracy in recycling detection.</li>
                        <li>Implemented a leaderboard and user management system using Supabase, HTML, and CSS, leading to a 15% increase in recycling participation.</li>
                    </ul>
                    <p>The BasketBin system is built on a website as well that features </p>
                    <img src={screen1} alt="screen1" className="project-image" />
                    <img src={screen2} alt="screen2" className="project-image" />
                    <img src={screen3} alt="screen3" className="project-image" />
                    <h3>Project Video</h3>
                    <p>Watch the project video on YouTube:</p>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/6YRTP7_Oet8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasketBin;