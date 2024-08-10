import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import Miscellaneous from './components/Miscellaneous.js';
import Design from './components/Design.js';
import Engineering from './components/Engineering.js';
import { BasketBin } from './components/BasketBin';

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
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/projects/miscellaneous" element={<Miscellaneous />} />
          <Route path="/projects/design" element={<Design />} />
          <Route path="/projects/engineering" element={<Engineering />} />
          <Route path="/projects/basketbin" element={<BasketBin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;