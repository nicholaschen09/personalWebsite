import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Blog1 from '../'

const Blog = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="projects">

                <h1>blogs</h1>
                <p>here is a collection of all my blogs.</p>

                <Link to="/blog1"><button>Balancing School and Your Career</button></Link>

            </div>
        </div>
    );
};

export default Blog;