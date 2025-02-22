import React from 'react';
import './Experience.css';
import OwnrLogo from './ownr.jpeg';
import RBCLogo from './images.png';
import MetaHashCapitalLogo from './metahashcapital.jpeg';

const Experience = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    const experiences = [
        {
            role: "Software Engineer Intern",
            company: "Ownr (RBCx) (Co-op)",
            duration: "Jan 2025 – Present (1 mo)",
            location: "Toronto, Ontario, Canada (Hybrid)",
            description: "Ownr is an RBC Ventures company associated with RBCx",
            logo: OwnrLogo,
        },

        {
            role: "Innovation Developer Intern",
            company: "RBC (Internship)",
            duration: "Jul 2024 – Aug 2024 (2 mos)",
            location: "Toronto, Ontario, Canada (Hybrid)",
            description: "Built a machine learning model using linear regression for better resource allocation within the technology support team",
            skills: "Python, NumPy, Pandas, Machine Learning",
            logo: RBCLogo,
        },
        {
            role: "UX Design Intern",
            company: "Meta Hash Capital (Internship)",
            duration: "Apr 2023 – Sep 2023 (6 mos)",
            location: "Markham, Ontario, Canada (Hybrid)",
            description: "Designed wireframes and prototypes using Figma for the company’s product to allow for better user experience",
            skills: "Design, Figma, User Experience (UX)",
            logo: MetaHashCapitalLogo,
        },
    ];

    return (
        <div className="experience">
            <div className="center-wrapper">
                <button className="back-button" onClick={handleGoBack}>
                    Back
                </button>
                <div className="experience1">
                    <div className="titleabt">
                        <h1>my experience</h1>
                        </div>
                    <div className="content">
                        {experiences.map((exp, index) => (
                            <div key={index} className="job">
                                <img src={exp.logo} alt={`${exp.company} logo`} className="job-logo" />
                                <div className="job-details">
                                    <h2>{exp.role}</h2>
                                    <h3>{exp.company}</h3>
                                    <p><strong>Duration:</strong> {exp.duration}</p>
                                    <p><strong>Location:</strong> {exp.location}</p>
                                    <p><strong>Description:</strong> {exp.description}</p>
                                    {exp.skills && <p><strong>Skills:</strong> {exp.skills}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;