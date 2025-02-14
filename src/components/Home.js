import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Home.css';
import './Background.css';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import GithubLogo from './githubLogo.png';
import LinkedinLogo from './linkedinLogo.png';
import WebsiteLogo from './NC-4.png';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <div className="section">
                <div className="homebuttons">
                    <Link to="experience"><button>experience</button></Link>
                    <Link to="projects"><button>projects</button></Link>
                    <Link to="blog"><button>blogs</button></Link>
                    <Link to="about"><button>about</button></Link>
                </div>
            </div>
            <div className="section">
                <div className="links">
                    <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo} alt="GitHub" style={{ width: 32, height: 32 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinLogo} alt="GitHub" style={{ width: 32, height: 32 }} />
                    </a>
                    <a href="https://nicholaschen243.wixsite.com/nicholas-chen" target="_blank" rel="noopener noreferrer">
                        <img src={WebsiteLogo} alt="GitHub" style={{ width: 32, height: 32 }} />
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