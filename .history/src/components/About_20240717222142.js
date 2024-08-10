import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>about me</h1>
            <p>resume available upon request.</p>
            <p>hi, i’m nicholas! i completed my grade twelve year in the visual arts claude watson 
                program at earl haig secondary school. i'm currently studying @ the university of 
                waterloo for systems design engineering and just finished up my internship with RBC as
                an innovation developer this summer.</p>

            <p>email: n224chen@uwaterloo.ca</p>
            <p>thank you for taking the time to learn more about me.</p>
            <img src={process.env.PUBLIC_URL + '/file.jpg'}alt="profilePic" className="profilePic" />
            </div>
            

       
    );
};
    


export default About;