import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BasketBin from './BasketBin';
import TikTokViewPredictor from './TikTokViewPredictor';
import Academates from './Academates';
import Solidworks from './Solidworks';
import Puzzle from './Puzzle';
import DesignProject from './DesignProject.js';
import PsychAI from './PsychAI.js';
import './Engineering.css';

const Engineering = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div>
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="engineering">
                <h1>Engineering Projects</h1>
                <p>All my school/side projects</p>
                <Link to="basketbin"><button>BasketBin</button></Link>
                <Link to="academates"><button>Academates</button></Link>
                <Link to="tiktokviewpredictor"><button>TikTok View Predictor</button></Link>
                <Link to="solidworks"><button>Engineering Portfolio</button></Link>
                <Link to="puzzle"><button>Puzzle Project</button></Link>
                <Link to="designproject"><button>Design Project</button></Link>
                <Link to="psychai"><button>Psych AI</button></Link>
            </div>

            <Routes>
                <Route path="basketbin" element={<BasketBin />} />
                <Route path="academates" element={<Academates />} />
                <Route path="tiktokviewpredictor" element={<TikTokViewPredictor />} />
                <Route path="solidworks" element={<Solidworks />} />
                <Route path="puzzle" element={<Puzzle />} />
                <Route path="designproject" element={<DesignProject />} />
                <Route path="P" element={<PsychAI />} />
            </Routes>
        </div>
    );
};

export default Engineering;