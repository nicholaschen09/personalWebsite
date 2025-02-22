import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Blog.css';
import Blog1 from './Blog1.js';

const Blog = () => {
    return (
        <div>
            <div className="blog">
                <h1>blogs</h1>
                <p>here is a collection of all my blogs.</p>
                <Link to="/blog/blog1">
                    <button className="blog-button">Balancing School and Your Career</button>
                </Link>
            </div>
            <Routes>
                <Route path="/blog/blog1" element={<Blog1 />} />
            </Routes>
        </div >
    );
};

export default Blog;