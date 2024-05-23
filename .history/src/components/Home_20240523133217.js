// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen. </h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <img src={process.env.PUBLIC_URL + '/DSCN3098_2.jpg'}alt="DinnerImage" className="DinnerImage" />

            <h1> i am currently...</h1>
            <p> * studying systems design engineering at the university of waterloo</p>

            <h1>i have...</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
        </div>
        );

        
    
    };
         <div className="column">
         <h1>work experience</h1>
         </div>
   

export default Home;