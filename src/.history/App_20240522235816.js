import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Experience from './components/Experience.js';
import Blog from './components/Blogs.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Blog />} />
          <Route path="/" element={<Experience />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;