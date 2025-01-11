import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
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

                <Link to="/blog1"><button>balanc</button></Link>

            </div>
        </div>
    );
};

export default Blog;