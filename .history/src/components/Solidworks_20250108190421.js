import React from 'react';
import './Solidworks.css';
import shape1 from './shape1.png';
import shape2 from './shape2.png';
import shape3 from './shape3.png';
import shape4 from './shape4.png';
import shape5 from './shape5.png';
import shape6 from './shape6.png';
import shape7 from './shape7.png';
import shape8 from './shape8.png';
import shape9 from './shape9.png';
import shape10 from './shape10.png';
import spreadpieces from './spreadpieces.png';
import stick from './stick.png';
import stomach from './stomach.png';
import spinflower from './spinflower.png';
import puzzlepieces from './puzzlepieces.png';

const Solidworks = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="engineeringportfolio">
                <h1>Engineering Portfolio</h1>
                <div className="content">
                    <p>Welcome to my engineering portfolio page. This page has images and description for my engineering projects done in CAD and SOLIDWORKS.</p>

                    <h3>About the Project</h3>
                    <p>Throughout my visual communications course, I explored a lot of the tools and functions within SOLIDWORKS and CAD where I designed and modelled many 3D pieces and parts for projects and summatives.</p>

                    <h3>Modelling</h3>
                    <img src={shape1} alt="shape1" className="project-image" />

                    <img src={shape2} alt="shape2" className="project-image" />

                    <img src={shape3} alt="shape3" className="project-image" />

                    <img src={shape4} alt="shape4" className="project-image" />

                    <img src={shape5} alt="shape5" className="project-image" />

                    <img src={shape6} alt="shape6" className="project-image" />

                    <img src={shape7} alt="shape7" className="project-image" />

                    <img src={shape8} alt="shape8" className="project-image" />

                    <img src={shape9} alt="shape9" className="project-image" />

                    <img src={shape10} alt="shape10" className="project-image" />

                    <img src={dimen1} alt="dimen1" className="project-image" />

                    <img src={dimen2} alt="dimen2" className="project-image" />

                    <img src={dimen3} alt="dimen3" className="project-image" />

                    <img src={dimen4} alt="dimen4" className="project-image" />

                    <img src={dimen5} alt="dimen5" className="project-image" />

                    <img src={dimen6} alt="dimen6" className="project-image" />

                    <img src={dimen7} alt="dimen7" className="project-image" />

                    <img src={dimen8} alt="dimen8" className="project-image" />

                    <img src={dimen8} alt="dimen8" className="project-image" />

                    

                    <img src={puzzlepieces} alt="puzzlepieces" className="project-image" />

                    <img src={spinflower} alt="spinflower" className="project-image" />

                    <img src={stick} alt="stick" className="project-image" />

                    <img src={stomach} alt="stomach" className="project-image" />

                    <img src={car} alt="car" className="project-image" />

                    <img src={carbody} alt="carbody" className="project-image" />

                    <img src={cardimen} alt="cardimen" className="project-image" />

                    <img src={cardimen2} alt="cardimen2" className="project-image" />

                    <img src={carplate} alt="carplate" className="project-image" />

                    <img src={carwheel} alt="carwheel" className="project-image" />

                </div>
            </div>
        </div>
    );
}


export default Solidworks;