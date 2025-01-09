import React from 'react';
import styles from './PsychAI.css';
import original5 from './original5.png';
import original6 from './original6.png';

const PsychAI = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="psychai">
                <h1>Academates</h1>
                <div className="content">
                    <p>Welcome to the Academates project page. This is where you'll find information about our innovative school and homework help app.</p>

                    <h3>About the Project</h3>
                    <p>Academates is an app similar to Discord for school and homework help, using JavaScript, HTML, CSS, and SCSS.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Real-time chat for homework help</li>
                        <li>Group study sessions</li>
                        <li>Resource sharing</li>
                        <li>Mobile app for students and tutors</li>
                    </ul>

                    <h3>GitHub Repository</h3>
                    <p>You can find the source code for this project on GitHub at: <a href="https://github.com/nicholaschen09/Academates" target="_blank" rel="noopener noreferrer">Academates Github Repository</a>.</p>

                    <h3>Images of the Product</h3>
                    <p>The chat interface of the website</p>
                    <img src={original5} alt="original5" className="project-image" />
                    <p>The product logo and welcome page</p>
                    <img src={original6} alt="original6" className="project-image" />

                    <h3>Hackathon</h3>
                    <p>Psych AI</p>
                    <p>JavaScript, CSS, SCSS, HTML | May 2023</p>
                    <ul>
                        <li>Created an app similar to Discord for school and homework help, using JavaScript, HTML, CSS, and SCSS.</li>
                        <li>Implemented Firebase OAuth for easy sign-up and login, achieving a 25% increase in active users over six months.</li>
                        <li>Designed each screen using Figma, improving user engagement by 40% through intuitive interface design.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PsychAI;