import React from 'react';
import './About.css';
import GithubLogo from '../images/pinkgithub.png';
import LinkedinLogo from '../images/pinklinkedin.png';
import ArtWebsiteLogo from '../images/ArtWebsiteLogo.jpg';
import uw from '../images/uw.png';

const About = () => {
  return (
    <div className="about">
      <h1 className="titleabout">about me</h1>
      <div className="about-content">
        <p>
          hi, i'm{' '}
          <span
            style={{
              fontSize: '1em',
              fontFamily: "'BrigendsExpanded', sans-serif"
            }}
          >
            nic
          </span>
          !
        </p>
        <p>my email is n224chen@uwaterloo.ca</p>
        <p>resume available upon request</p>
        <div className="social-links">
          <a
            href="https://github.com/nicholaschen09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubLogo} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="https://nicholaschen243.wixsite.com/nicholas-chen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ArtWebsiteLogo} alt="Art Website" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="bordered-section">
        <div className="education">
          <h2>education</h2>
          <h3 style={{ fontSize: '0.5em' }}>University of Waterloo</h3>
          <img
            src={uw}
            alt="University of Waterloo"
            style={{ width: '80px', display: 'block', marginTop: '5px', marginBottom: '25px', marginLeft: 'auto', marginRight: 'auto' }}
/>
          <p
            style={{
              fontSize: '0.25em',
              fontFamily: "'BrigendsExpanded', sans-serif"
            }}
          >
            Bachelor of Applied Science in Systems Design Engineering
          </p>
          <p>Expected Graduation Date: 2029</p>
          <p>President’s Scholarship of Distinction worth $5000</p>
          <p>
            Relevant Courses: Introduction to Design, Digital Computation, Elementary Engineering Math, Visual Communications
          </p>
        </div>
        <div className="skills">
          <h2>technical skills</h2>
          <p>
            <strong>Languages:</strong> Python, Java, C++, HTML/CSS, JavaScript, TypeScript, Kotlin, SQL, MATLAB
          </p>
          <p>
            <strong>Developer Tools:</strong> VS Code, Eclipse, IntelliJ, Android Studio, Postico, Jupyter Notebook, Git, GitHub, <br /><br />
            Docker, Heroku, Jira, Confluence, AWS, CircleCI, Bash, Zsh
          </p>
          <p>
            <strong>Technologies/Frameworks:</strong> React, React Native, Node.js, Express.js, Nest.js, Supabase, Firebase, Flask, PostgreSQL, <br /><br />
            MongoDB, Redis, RabbitMQ, Jest, PyTorch, TensorFlow, Numpy, Pandas, REST APIs, Puppeteer, Tailwind CSS
          </p>
          <p>
            <strong>Design:</strong> Figma, Procreate, Adobe Creative Suite, SOLIDWORKS, AutoCAD, Fusion 360
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;