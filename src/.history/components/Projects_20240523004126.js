import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h1>welcome to my personal projects. </h1>
            <p>here is a collection of all my projects.</p>

            <Link to ="/projects/miscellaneous"><button>miscellaneous</button></Link>

            <button>engineering</button>

            <button>design</button>
          
        </div>
    );
};

export default Projects;