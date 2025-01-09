import React from 'react';
import './BasketBin.css';
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
import dimen1 from './dimen1.png';
import dimen2 from './dimen2.png';
import dimen3 from './dimen3.png';
import dimen4 from './dimen4.png';
import dimen5 from './dimen5.png';
import dimen6 from './dimen6.png';
import dimen7 from './dimen7.png';
import dimen8 from './dimen8.png';
import dimen9 from './dimen9.png';
import dimen10 from './dimen10.png';
import puzzlepieces from './puzzlepieces.png';
import spinflower from './spinflower.png';
import stick from './stick.png';
import carbody from './carbody.png';
import carplate from './carplate.png';
import carwheel from './carwheel.png';
import car from './car.png';
import cardimen from './cardimen.png';
import cardimen2 from './cardimen2.png';

const BasketBin = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="basketbin">
                <h1>BasketBin</h1>
                <div className="content">
                    <p>This is BasketBin. Our innovative waste management solution.</p>
                    <h3>Modelling</h3>
                    <h4>Shape 1: Initial Design Concept</h4>
                    <img src={shape1} alt="shape1" className="project-image" />
                    <h4>Shape 2: Refined Design with Adjustments</h4>
                    <img src={shape2} alt="shape2" className="project-image" />
                    <h4>Shape 3: Detailed View of the Base</h4>
                    <img src={shape3} alt="shape3" className="project-image" />
                    <h4>Shape 4: Top View of the Model</h4>
                    <img src={shape4} alt="shape4" className="project-image" />
                    <h4>Shape 5: Side Profile with Dimensions</h4>
                    <img src={shape5} alt="shape5" className="project-image" />
                    <h4>Shape 6: 3D Perspective View</h4>
                    <img src={shape6} alt="shape6" className="project-image" />
                    <h4>Shape 7: Exploded View of Components</h4>
                    <img src={shape7} alt="shape7" className="project-image" />
                    <h4>Shape 8: Assembly of Parts</h4>
                    <img src={shape8} alt="shape8" className="project-image" />
                    <h4>Shape 9: Final Design with Annotations</h4>
                    <img src={shape9} alt="shape9" className="project-image" />
                    <h4>Shape 10: Rendered Image</h4>
                    <img src={shape10} alt="shape10" className="project-image" />
                    <h4>Dimension 1: Height Measurement</h4>
                    <img src={dimen1} alt="dimen1" className="project-image" />
                    <h4>Dimension 2: Width Measurement</h4>
                    <img src={dimen2} alt="dimen2" className="project-image" />
                    <h4>Dimension 3: Depth Measurement</h4>
                    <img src={dimen3} alt="dimen3" className="project-image" />
                    <h4>Dimension 4: Diagonal Measurement</h4>
                    <img src={dimen4} alt="dimen4" className="project-image" />
                    <h4>Dimension 5: Internal Dimensions</h4>
                    <img src={dimen5} alt="dimen5" className="project-image" />
                    <h4>Dimension 6: External Dimensions</h4>
                    <img src={dimen6} alt="dimen6" className="project-image" />
                    <h4>Dimension 7: Tolerance Specifications</h4>
                    <img src={dimen7} alt="dimen7" className="project-image" />
                    <h4>Dimension 8: Material Thickness</h4>
                    <img src={dimen8} alt="dimen8" className="project-image" />
                    <h4>Dimension 9: Hole Sizes</h4>
                    <img src={dimen9} alt="dimen9" className="project-image" />
                    
                    <img src={dimen10} alt="dimen10" className="project-image" />
                    <h4>Puzzle Pieces: Interlocking Mechanism</h4>
                    <img src={puzzlepieces} alt="puzzlepieces" className="project-image" />
                    <h4>Spin Flower: Rotational Component</h4>
                    <img src={spinflower} alt="spinflower" className="project-image" />
                    <h4>Stick: Support Rod</h4>
                    <img src={stick} alt="stick" className="project-image" />
                    <h4>Car Body: Main Structure</h4>
                    <img src={carbody} alt="carbody" className="project-image" />
                    <h4>Car Plate: Base Plate</h4>
                    <img src={carplate} alt="carplate" className="project-image" />
                    <h4>Car Wheel: Wheel Design</h4>
                    <img src={carwheel} alt="carwheel" className="project-image" />
                    <h4>Car: Assembled Car Model</h4>
                    <img src={car} alt="car" className="project-image" />
                    <h4>Car Dimensioning</h4>
                    <img src={cardimen} alt="cardimen" className="project-image" />
                    <h4>Car Dimension</h4>
                    <img src={cardimen2} alt="cardimen2" className="project-image" />
                </div>
            </div>
        </div>
    );
}

export default BasketBin;