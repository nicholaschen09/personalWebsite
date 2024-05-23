import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>about me</h1>
            <p>resume available upon request.</p>
            <p>hi, i’m nicholas! i am a grade 12 student currently enrolled in the visual arts claude watson 
                program at earl haig secondary school. this fall I will be studying @ university of 
                waterloo for systems design engineering and doing an internship @ RBC this summer.</p>
            <p>email: nic95857@gmail.com</p>
            <p>thank you for taking the time to learn more about me.</p>
            <h1>work experience</h1>
             <img src={process.env.PUBLIC_URL + '/path/to/image.jpg'}alt="profile pic" /> {}
   
        </div>
       
    );
};
    

export default About;