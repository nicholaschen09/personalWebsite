// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen! </h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <img src={process.env.PUBLIC_URL + '/DSCN3098_2.jpg'}alt="DinnerImage" className="DinnerImage" />
            <img src={process.env.PUBLIC_URL + '/IMG_2827_2.jpg'}alt="StudyBox" className="StudyBox" />
            <img src={process.env.PUBLIC_URL + '/IMG_9174 2.JPG'}alt="WhiteSelfie" className="WhiteSelfie" />
        </div>
        );
    
    };
         <div className="column">
         <h1>work experience</h1>
         </div>
   

export default Home;