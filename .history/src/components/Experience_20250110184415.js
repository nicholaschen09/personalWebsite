import React from 'react';
import './Blog.css';

const Blog = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="blog">
                <h1>blogs</h1>
                <p>blog.</p>

            </div>
        </div>
    );
};

export default Blog;