import React from 'react';
import './Experience.css';
import RBCxLogo from './RBCx.png';
import OwnrLogo from './ownr.jpeg';
import UWAFTLogo from './uwaft.png';
import RBCLogo from './images.png';
import MetaHashCapitalLogo from './metahashcapital.jpeg';
import VolunTrackLogo from './voluntrack.webp';

const Experience = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    const experiences = [
        {
            role: "Software Developer Intern",
            company: "RBCx (Co-op)",
            duration: "Jan 2025 – Present (1 mo)",
            location: "Toronto, Ontario, Canada (Hybrid)",
            description: "Incoming winter 2025 @ Ownr",
            logo: RBCxLogo,
        },
        {
            role: "Software Developer Intern",
            company: "Ownr (Co-op)",
            duration: "Jan 2025 – Present (1 mo)",
            location: "Toronto, Ontario, Canada (Hybrid)",
            description: "Ownr is an RBC Ventures company associated with RBCx",
            logo: OwnrLogo,
        },
        {
            role: "Electrical Engineer",
            company: "University of Waterloo EcoCAR Team (UWAFT) (On-Call)",
            duration: "Sep 2024 – Present (5 mos)",
            location: "Waterloo, Ontario, Canada (Hybrid)",
            description: "Helping build an alternative fuel car that is eco-friendly and efficient",
            logo: UWAFTLogo,
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
        {
            role: "UX/UI Design Intern",
            company: "VolunTrack Org. (On-Call)",
            duration: "Mar 2022 – Oct 2022 (8 mos)",
            location: "Richmond Hill, Ontario, Canada (Hybrid)",
            description: "Developed and designed intuitive user interfaces and screens for the mobile application",
            skills: "Figma",
            logo: VolunTrackLogo,
        },
    ];

    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="experience">
                <h1>My Experience</h1>
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
    );
};

export default Experience;