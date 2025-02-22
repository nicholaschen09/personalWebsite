import React from 'react';
import './BasketBin.css';
import shape1 from '../images/shape1.png';
import shape2 from '../images/shape2.png';
import shape3 from '../images/shape3.png';
import shape4 from '../images/shape4.png';
import shape5 from '../images/shape5.png';
import shape6 from '../images/shape6.png';
import shape7 from '../images/shape7.png';
import shape8 from '../images/shape8.png';
import shape9 from '../images/shape9.png';
import shape10 from '../images/shape10.png';
import dimen1 from '../images/dimen1.png';
import dimen2 from '../images/dimen2.png';
import dimen3 from '../images/dimen3.png';
import dimen4 from '../images/dimen4.png';
import dimen5 from '../images/dimen5.png';
import dimen6 from '../images/dimen6.png';
import dimen7 from '../images/dimen7.png';
import dimen8 from '../images/dimen8.png';
import dimen9 from '../images/dimen9.png';
import dimen10 from '../images/dimen10.png';
import puzzlepieces from '../images/puzzlepieces.png';
import spinflower from '../images/spinflower.png';
import stick from '../images/stick.png';
import carbody from '../images/carbody.png';
import carplate from '../images/carplate.png';
import carwheel from '../images/carwheel.png';
import car from '../images/car.png';
import cardimen from '../images/cardimen.png';
import cardimen2 from '../images/cardimen2.png';
import cardimen3 from '../images/cardimen3.png';
import nintendo from '../images/nintendo.png';

const BasketBin = () => {
    return (
        <div className="center-wrapper">
            <div className="engineeringportfolio">
                <h1>Engineering Portfolio</h1>
                <div className="content">
                    <p>This is my engineering portfolio. Everything from 3D modelling to design that I've done in my engineering classes is here.</p>
                    <h4>3D Modelling</h4>
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
                    <h4>Dimensioning</h4>
                    <img src={dimen1} alt="dimen1" className="project-image" />
                    <img src={dimen2} alt="dimen2" className="project-image" />
                    <img src={dimen3} alt="dimen3" className="project-image" />
                    <img src={dimen4} alt="dimen4" className="project-image" />
                    <img src={dimen5} alt="dimen5" className="project-image" />
                    <img src={dimen6} alt="dimen6" className="project-image" />
                    <img src={dimen7} alt="dimen7" className="project-image" />
                    <img src={dimen8} alt="dimen8" className="project-image" />
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
                    <h4>Car Dimension</h4>
                    <img src={cardimen3} alt="cardimen3" className="project-image" />
                    <h4>Nintendo Switch</h4>
                    <img src={nintendo} alt="nintendo" className="project-image" />
                </div>
            </div>
        </div>
    );
}

export default BasketBin;