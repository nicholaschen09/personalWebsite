import React from 'react';
import './Photography.css';
import pic1 from '../images/DSCN3832 2.JPG';
import pic2 from '../images/DSCN4095.JPG';
import pic3 from '../images/DSCN4514 2.jpg';

const Photography = () => {
    const images = [
        pic1,
        pic2,
        pic3,
    ];

    return (
        <div>
            <div className="photography">
                <h1>photography</h1>
                <div className="content">
                    <p>all my photography stuff</p>
                    <div className="image-gallery">
                        {images.map((image, index) => (
                            <div key={index} className="image-container">
                                <img src={image} alt={`Photography ${index + 1}`} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photography;