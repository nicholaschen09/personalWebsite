import React from 'react';
import './DesignProject.css';

const DesignProject = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="designproject">
                <h1>Design Project</h1>
                <div className="content">
                    <p>In creating the QFD chart to visualize the customer requirements for the design project, the weightings were chosen based on what was believed to be the best fit for the stakeholder in question. For each customer requirement, three stakeholders were considered: the Waterloo Community, the Waterloo Ecosystem, and UWaterloo students, faculty, and staff. The chosen weightings reflect what the stakeholders would value out of the project.</p>

                    <h3>Stakeholder Considerations</h3>
                    <p>Safety and accessibility were given moderate importance, while the accurate portrayal of the astronomical and cultural elements was prioritized since that was the core purpose of the installation. While safety and accessibility are crucial, inaccurate cultural representation can cause more social harm and inaccurate astronomical portrayals are not ideal because they spread misinformation.</p>

                    <h3>Weightings and Priorities</h3>
                    <p>As a result, the Waterloo Community and the University of Waterloo shared similar requirements and weightings, especially for the accuracy and representation of the installation. On the other hand, the ecosystem may place less emphasis on the accuracy of cultural or astronomical details but would prioritize a safe, durable structure.</p>
                </div>
            </div>
        </div>
    );
}

export default DesignProject;