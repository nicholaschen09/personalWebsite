import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Home.css';
import './Background.css';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <div className="section">
                <div className="homebuttons">
                    <Link to="projects"><button>projects</button></Link>
                    <Link to="blog"><button>blogs</button></Link>
                    <Link to="about"><button>about</button></Link>
                </div>
            </div>
            <div className="section">
                <h3>links</h3>
                <div className="links">
                    <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                        <button>github</button>
                    </a>
                    <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer">
                        <button>linkedin</button>
                    </a>
                    <a href="https://nicholaschen243.wixsite.com/nicholas-chen" target="_blank" rel="noopener noreferrer">
                        <button>art website</button>
                    </a>
                </div>
            </div>
            <Routes>
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="experience" element={<Experience />} />
            </Routes>
        </div>
    );
};

export default Home;