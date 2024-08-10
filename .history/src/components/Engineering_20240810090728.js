import React from 'react';
import './Engineering.css'; // Ensure you have this CSS file in your project

const Engineering = () => {
    return (
        <div className="engineering">
            <h1>engineering projects</h1>
            <p>all my school/side projects</p>
            <div className="projects-container">
                <Link to="/projects/engineering"><button>engineering</button></Link>
                <Link to="/projects/design"><button>design</button></Link>
                <Link to="/projects/miscellaneous"><button>miscellaneous</button></Link>
            </div>
        </div>
    );
};

export default Engineering;