// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen! </h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>

            <Link to ="/projects/engineering"><button>engineering</button></Link>
        </div>
    );
};

export default Home;