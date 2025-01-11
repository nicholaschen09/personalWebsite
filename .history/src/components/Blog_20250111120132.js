import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="projects">

                <h1>personal projects </h1>
                <p>here is a collection of all my projects.</p>

                <Link to="/projects/engineering"><button>engineering</button></Link>

                <Link to="/projects/design"><button>design</button></Link>

                <Link to="/projects/miscellaneous"><button>miscellaneous</button></Link>
            </div>
        </div>
    );
};

export default Projects;