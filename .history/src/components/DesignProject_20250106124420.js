import React from 'react';
import './DesignProject.css';
import domeImage from './domeImage.jpg'; // Example local image import
import mirrorsImage from './mirror.png'; // Example local image import
import cardboard from './cardb'

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
                    <p>Our SYDE 161 project is an interactive public installation designed to reconnect the University of Waterloo community with the beauty and wonder of the night sky...</p>

                    {/* Example image integration */}
                    <img src={domeImage} alt="Dome Design" className="project-image" />

                    <p>To meet this challenge, our team developed two innovative design concepts...</p>

                    <h3>Innovative Design Concepts</h3>
                    <img src={mirrorsImage} alt="Reflective Mirrors Concept" className="project-image" />

                    <p>The first was a dome-like structure and the second was a reflective surface...</p>

                    <p>Our SYDE 161 project is an interactive public installation designed to reconnect the University of Waterloo community with the beauty and wonder of the night sky. Imagine strolling through campus on a sunny afternoon and suddenly finding yourself surrounded by projections of the night sky. Constellations light up the ground, creating an experience that is both magical and educational.</p>

                    <p>As engineers, our work goes beyond technical problem-solving. It’s also about storytelling and communicating ideas that inspire curiosity, foster community, and promote sustainability. This project connects urban life and nature, exploring the wonders of the night sky in a way that is engaging, inclusive, and environmentally responsible.</p>

                    <p>Modern life often makes it difficult to connect with the stars. Light pollution obscures the night sky, while busy schedules and limited public spaces leave little room for reflection. Our goal was to design an installation that reintroduces the wonder of the cosmos to the campus, creating a space that is both educational and accessible.</p>

                    <h3>Innovative Design Concepts</h3>
                    <p>To meet this challenge, our team developed two innovative design concepts. The first was a dome-like structure and the second was a reflective surface. The dome features precise cutouts representing constellations. As sunlight filters through these openings, star patterns are projected onto the ground, creating an immersive and dynamic experience. Poles inside the dome are labeled with constellation names, images, and shapes, including descriptions in Braille to ensure accessibility for visually impaired users. This design transforms the daytime sky into a celestial wonderland, connecting users to the universe in a deeply personal way.</p>

                    <p>The second concept uses triangular mirrors positioned to reflect sunlight onto large walls. The reflective surfaces are obstructed except for gaps arranged in the patterns of constellations, creating striking light and shadow displays. The result is a beautiful interplay of design and function, offering an engaging way to experience the stars during the day.</p>

                    <h3>Eco-Friendly Materials</h3>

                    <p>Both designs incorporate eco-friendly materials to minimize environmental impact. Bamboo, known for its renewable qualities, provides a natural aesthetic and structural strength. Bendable concrete adds durability and versatility, while galvanized steel ensures resistance to weather with minimal maintenance. The installation’s placement on the V1 Green campus area aligns with sustainable building standards, emphasizing energy efficiency and resource conservation.</p>
                    <img src={cardboard} alt="Cardboard" className="project-image" />
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

                    <h3>Written Summaries</h3>
                    <h4>Faucet + Info Links</h4>
                    <p>The Rate of Technological Advancements faucet controls the flow from Technological Advancements into Galvanized Steel and Bendable Concrete, increasing Resources, while Construction decreases Resources. It also informs the stock of Bamboo. The information boxes pointing to the Rate of Technological Advancements refer to fields relevant to the outflow of the faucet. Metallurgy, mining, agriculture, and composites refer to the makeup of the materials utilised while manufacturing deals with producing these materials. Ergonomics and human factors affect all outputs as humans are integral to any process. Finally, assembly refers to the combination of the outputs to create the installation.</p>

                    <h4>Feedback Loop</h4>
                    <p>A reinforcing feedback loop links the stock of installation users back to a faucet representing the process in which a person becomes interested in the installation. This faucet then governs the stock of people formally considering perusing the installation. The feedback loop is informed by word of mouth, virtual or otherwise; as the quantity of installation users increases, word of mouth from these users about the installation increases as well. This adds to the number of potential users’ interest and awareness of the installation and continues to increase the stock of people considering and then acting on a visit to the installation. The cycle repeats, continuing to increase levels of users.</p>

                    <h4>Two Different Flows from One Stock to Another</h4>
                    <p>A flow in the system map involves the first stock of potential sponsors being a major contributor to continuing the cycle. Based on their interest levels, possible sponsors must choose whether or not they want to fund the project, affecting the levels of funding available - the second crucial stock. In the case that funding is provided, the flow continues in which teams can move forward with projects and other initiatives to drive the entire system forward. As these different teams grow and develop, they become more productive and expand on resources such as knowledge, tools, and materials; which enhances growth.</p>

                    <p>Gross Domestic Product (GDP), another stock in the system, also plays an integral role in increasing the resources stock that are available for the project. The political environment that influences GDP decides how easily funding flows, potentially affecting the availability of resources and project support that connect the flows. This circular flow also means that the increase in funding will boost GDP through greater economic activity, which may return higher taxes, and then contribute to grants that eventually flow back to sponsors. This cyclical flow from sponsors to interest, funding, and resources, and back to sponsors via grants reinforces the system’s growth and productivity.</p>

                    <h4>Overall Explanation</h4>
                    <p>The map details a subsystem based on the inflow and outflow of primary users of the installation, including students, alumni, and staff of the University of Waterloo, locals to the City of Waterloo, and visitors/tourists. These potential users’ interest in the installation is informed by several information links internal and external to each person, including personal interest in art and astronomy, which may itself be informed by presence of educational resources/institutions, as well as word of mouth about the installation. Interested persons must then consider whether or not they will visit the installation. The number of potential users considering this constitutes another stock, which may flow to a stock representing levels of actual users or one representing the number of people deciding not to pursue the installation. Ease of access to the installation, perhaps with regard to disability or age, is an information link that could contribute to the acceptance process, while other information links such as poor weather and the presence of unpopular animals such as bugs and aggressive geese may contribute to the rejection process by potential users.</p>

                    <p>A large section of the map is centered around resources. Technological advancement is a key factor that establishes the amount of resources available for the use of the project. The rate of technological advancement includes information links such as metallurgy, ergonomics, human factors, mining, composites, manufacturing, assembly, and agriculture. All of these elements affect the rate at which resources, such as galvanized steel, bendable concrete, and bamboo, will be created and stored in the inventory for the design project. The availability of these materials also contributes to the decrease in resources. By utilizing what is in the inventory for the installation, the overall resources will decrease as it’s used.</p>

                    <p>Climate quality is also affected by Technological Advancements, both to its benefit and detriment. Technological advancements in green energy and production would increase climate quality, while construction would decrease it. In addition to climate quality, vegetation, and animals are also a part of the Environment, a key information block for the stock of bamboo. It can also affect the amount of users through factors such as bugs and nesting season for geese.</p>

                    <p>In the system map, the sponsors, which include alumni, faculty, and other members, are in charge of providing funding for the system. Sponsors can also generate interest in the project, thereby garnering more funding. All funding is affected by taxes, the rate of which is informed by the political environment. In addition to this, the political environment influences the GDP, Educational and Research Institutes, and Technological Advancements.</p>
                    <h3>Link to FigJam</h3>
                    <p><a href="https://www.figma.com/board/m63yGJeyzfUCMbqtY3c16f/SYDE-161---Systems-Mapping-Diagram-S1G1?node-id=0-1&t=s9YNodh2zpIhvu4J-1" target="_blank" rel="noopener noreferrer">SYDE 161 - Systems Mapping Diagram S1G1</a></p>
                </div>
            </div>
        </div>
    );
}

export default DesignProject;