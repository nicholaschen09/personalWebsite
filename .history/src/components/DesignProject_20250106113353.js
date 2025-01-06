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
                    <p>Our SYDE 161 project is an interactive public installation designed to reconnect the University of Waterloo community with the beauty and wonder of the night sky. Imagine strolling through campus on a sunny afternoon and suddenly finding yourself surrounded by projections of the night sky. Constellations light up the ground, creating an experience that is both magical and educational.</p>

                    <p>As engineers, our work goes beyond technical problem-solving. It’s also about storytelling and communicating ideas that inspire curiosity, foster community, and promote sustainability. This project connects urban life and nature, exploring the wonders of the night sky in a way that is engaging, inclusive, and environmentally responsible.</p>

                    <p>Modern life often makes it difficult to connect with the stars. Light pollution obscures the night sky, while busy schedules and limited public spaces leave little room for reflection. Our goal was to design an installation that reintroduces the wonder of the cosmos to the campus, creating a space that is both educational and accessible.</p>

                    <h3>Innovative Design Concepts</h3>
                    <p>To meet this challenge, our team developed two innovative design concepts. The first was a dome-like structure and the second was a reflective surface. The dome features precise cutouts representing constellations. As sunlight filters through these openings, star patterns are projected onto the ground, creating an immersive and dynamic experience. Poles inside the dome are labeled with constellation names, images, and shapes, including descriptions in Braille to ensure accessibility for visually impaired users. This design transforms the daytime sky into a celestial wonderland, connecting users to the universe in a deeply personal way.</p>

                    <p>The second concept uses triangular mirrors positioned to reflect sunlight onto large walls. The reflective surfaces are obstructed except for gaps arranged in the patterns of constellations, creating striking light and shadow displays. The result is a beautiful interplay of design and function, offering an engaging way to experience the stars during the day.</p>

                    <h3>Eco-Friendly Materials</h3>
                    <p>Both designs incorporate eco-friendly materials to minimize environmental impact. Bamboo, known for its renewable qualities, provides a natural aesthetic and structural strength. Bendable concrete adds durability and versatility, while galvanized steel ensures resistance to weather with minimal maintenance. The installation’s placement on the V1 Green campus area aligns with sustainable building standards, emphasizing energy efficiency and resource conservation.</p>

                    <h3>Accessibility and Inclusivity</h3>
                    <p>Our project was designed with accessibility in mind. Features like Braille-labeled poles allow visually impaired individuals to engage with the installation, creating a truly inclusive experience. By combining visual and tactile elements, the project encourages all users to explore the stars, sparking curiosity and fostering a sense of connection.</p>

                    <h3>Challenges and Solutions</h3>
                    <p>The journey from concept to design was not without its obstacles, requiring perseverance and innovative problem-solving. Selecting materials that balanced sustainability, strength, and cost-effectiveness necessitated careful research, detailed comparisons, and repeated testing to ensure the final choices would meet all design criteria. After extensive evaluation, bamboo and bendable concrete stood out as ideal options due to their renewability, durability, and versatility.</p>

                    <p>Incorporating accessible features, such as Braille descriptions, added another layer of complexity, as it required precise planning to ensure these elements were both functional and durable without compromising the installation’s aesthetic appeal or usability. These challenges, while daunting, ultimately pushed our team to approach problems with creativity and adaptability, leading to a design solution that exceeded initial expectations.</p>

                    <h3>Future Improvements</h3>
                    <p>While the current designs are functional and impactful, there are opportunities for improvement and iteration. Adding solar-powered lighting would allow the installation to be used at night, enhancing its stargazing appeal. Augmented reality (AR) technology could provide detailed information about constellations, offering users an interactive learning experience. Additionally, the design could be adapted for other locations, making it scalable and versatile for broader use.</p>

                    <h3>Community Impact</h3>
                    <p>Research has shown that public art installations enhance community connection and cultural awareness. Our project brings these benefits to life, providing a space where students, faculty, and visitors can gather, reflect, and engage with the cosmos. Sparking curiosity about astronomy and promoting sustainability allows this installation to enrich campus life and scenery.</p>

                    <p>Our SYDE 161 project combines technical innovation with storytelling to create an interactive installation that bridges the gap between day and night. By reconnecting people with the stars in an inclusive and environmentally conscious way, this project inspires wonder and strengthens community bonds. Approving its implementation on campus will leave a lasting impact on the University of Waterloo, encouraging reflection, connection, and exploration for years to come.</p>
                </div>
            </div>
        </div>
    );
}

export default DesignProject;