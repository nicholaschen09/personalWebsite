import React from 'react';
import './Experience.css';

const Experience = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="puzzle">
                <h1>Puzzle Project</h1>
                <div className="content">
                    <p>Welcome to the Puzzle project page. Here you'll find out more about the puzzle project my first year engineering group and I designed and built.</p>

                    <h3>About the Project</h3>
                    <p>The Bear Body SolidWorks Puzzle Piece project involves designing a 3D puzzle piece representing a bear's body using SolidWorks. The concept is to create an educational and engaging puzzle that, when assembled, forms a complete bear model. The design process includes creating detailed drawings and defining precise dimensions and constraints to ensure each piece fits together seamlessly. The puzzle piece is not only a fun activity but also serves as a learning tool to understand 3D modeling, spatial relationships, and the importance of precision in design. The final model is exported for 3D printing, allowing for physical testing and iteration to achieve a perfect fit. This project combines creativity with technical skills, resulting in a meaningful and interactive educational tool.</p>
                    <img src={final} alt="Final Design" className="project-image" />

                    <h3>Key Features</h3>
                    <ul>
                        <li>Accurate view predictions</li>
                        <li>Data analysis of video features</li>
                        <li>Machine learning model training</li>
                        <li>Interactive user interface</li>
                    </ul>

                    <h3>Creating the Model in SolidWorks</h3>
                    <img src={bearbody} alt="bearbody" className="project-image" />

                    <p>We began by conceptualizing our design and translating it into a detailed 3D model using SolidWorks. This software allowed us to visualize the final product and make necessary adjustments before physical construction. Each component was meticulously designed with precise dimensions to ensure a perfect fit.</p>
                    <img src={sketch2} alt="sketch2" className="project-image" />
                    <p>After finalizing the 3D model, we moved on to mapping out the dimensions of each piece. This step was crucial as it involved detailed measurements and calculations to ensure that every part would fit together seamlessly. We used SolidWorks to generate technical drawings that guided us through the cutting process.</p>
                    <img src={measurement} alt="measurement" className="project-image" />
                    <p></p>
                    <img src={stomach} alt="stomach" className="project-image" />
                    <p></p>
                    <img src={model} alt="model" className="project-image" />
                    <p></p>
                    <img src={model2} alt="model2" className="project-image" />
                    <p>With the dimensions mapped out, we proceeded to create the individual pieces. </p>
                    <img src={measure} alt="measure" className="project-image" />
                    <p></p>
                    <img src={measurept2} alt="measure pt2" className="project-image" />
                    <p>We sel    <p>Throughout the project, we encountered several challenges, such as ensuring the structural integrity of the design and achieving the desired level of precision. However, by leveraging the capabilities of SolidWorks and employing meticulous craftsmanship, we were able to overcome these obstacles and create a functional and visually appealing final product.</p>

                </div>
            </div>
        </div>
    );
}

export default Experience;