import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Design.css';
import VolunTrack from './VolunTrack';

const Design = () => {
    return (
        <div className="design">
            <h1>design projects</h1>
            <p style={{ fontSize: '0.3em' }}>all my artistic and creative projects.</p>
                <Link to="voluntrack">
                    <button className="voluntrack-button">voluntrack</button>
                </Link>
            
            <Routes>
                <Route path="voluntrack" element={<VolunTrack />} />
            </Routes>
        </div>
    );
};

export default Design;