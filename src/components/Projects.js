import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div> 
            <div className="projects">
                <div className="projecttitle">
                    <h1>personal projects </h1>
                </div>
                <p>here is a collection of all my projects.</p>

                <Link to="/projects/engineering"><button>engineering</button></Link>

                <Link to="/projects/design"><button>design</button></Link>

                <Link to="/projects/miscellaneous"><button>miscellaneous</button></Link>
            </div>
        </div>
    );
};

export default Projects;