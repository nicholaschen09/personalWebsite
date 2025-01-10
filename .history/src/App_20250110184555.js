import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import Miscellaneous from './components/Miscellaneous.js';
import Design from './components/Design.js';
import Engineering from './components/Engineering.js';
import BasketBin from './components/BasketBin.js';
import Academates from './components/Academates.js';
import TikTokViewPredictor from './components/TikTokViewPredictor.js';
import VolunTrack from './components/VolunTrack.js';
import Photography from './components/Photography.js';
import Solidworks from './components/Solidworks.js';
import Puzzle from './components/Puzzle.js';
import DesignProject from './components/DesignProject.js';
import NC from './components/NC-3.png';
import PsychAI from './components/PsychAI.js';
import 
import './App.css';

function App() {
  const linkStyle = {
    color: 'rgba(255, 0, 144, 0.733)',
  };
  return (
    <Router>
      <div>
        <img src={NC} alt="NC" className="top-right-image" />
        <nav>
          <ul className="horizontal-menu">
            <li>
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle}>About</Link>
            </li>
            <li>
              <Link to="/projects" style={linkStyle}>Projects</Link>
            </li>
            <li>
              <Link to="/blog" style={linkStyle}>Blogs</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects/miscellaneous" element={<Miscellaneous />} />
          <Route path="/projects/design" element={<Design />} />
          <Route path="/projects/engineering/*" element={<Engineering />} />
          <Route path="/projects/engineering/basketbin" element={<BasketBin />} />
          <Route path="/projects/engineering/academates" element={<Academates />} />
          <Route path="/projects/engineering/solidworks" element={<Solidworks />} />
          <Route path="/projects/engineering/tiktokviewpredictor" element={<TikTokViewPredictor />} />
          <Route path="/projects/design/voluntrack" element={<VolunTrack />} />
          <Route path="/projects/miscellaneous/photography" element={<Photography />} />
          <Route path="/projects/engineering/puzzle" element={<Puzzle />} />
          <Route path="/projects/engineering/designproject" element={<DesignProject />} />
          <Route path="/projects/engineering/psychai" element={<PsychAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;