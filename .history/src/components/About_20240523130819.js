import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="column">
            <h1>about me</h1>
            <p>resume available upon request.</p>
            <p>hi, i’m nicholas! i am a grade 12 student currently enrolled in the visual arts claude watson 
                program at earl haig secondary school. this fall I will be studying @ university of 
                waterloo for systems design engineering and doing an internship @ RBC this summer.</p>
            <p>email: nic95857@gmail.com</p>
            <p>thank you for taking the time to learn more about me.</p>
            <img src={process.env.PUBLIC_URL + '/file.jpg'}alt="profilePic" className="profilePic" />
            </div>
            <div className="column">
            <h1>work experience</h1>
            </div>

            </div>

       
    );
};
    


export default About;