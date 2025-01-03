import "../../assests/styles/about.css";

function About() {
    return (
        <div>
            <section className="hero">
                <h1>About Us</h1>
            </section>

            <section className="about">
                <h2>Who We Are</h2>
                <p>Tiibu Company Limited is a leading construction firm dedicated to delivering innovative and sustainable solutions. With a rich history spanning decades, we have built a reputation for excellence and reliability in the industry.</p>
                <h2>Our Mission</h2>
                <p>To transform visions into reality through exceptional construction services, fostering long-term partnerships with our clients based on trust, quality, and innovation.</p>
            </section>
            <section className="about">
                <h2>Meet Our Team</h2>
                <div className="team">
                    <div className="team-card">
                        <img src="team1.jpg" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-card">
                        <img src="team2.jpg" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Head of Operations</p>
                    </div>
                    <div className="team-card">
                        <img src="team3.jpg" alt="Team Member 3" />
                        <h3>Michael Brown</h3>
                        <p>Lead Engineer</p>
                    </div>
                </div>
            </section>

            <section className="certifications">
                <h2>Our Certifications</h2>
                <div className="cert-list">
                    <div className="cert-card">
                        <img src="cert1.png" alt="Certification 1" />
                        <h3>ISO 9001</h3>
                        <p>Quality Management Certification</p>
                    </div>
                    <div className="cert-card">
                        <img src="cert2.png" alt="Certification 2" />
                        <h3>LEED Certified</h3>
                        <p>Sustainable Building Certification</p>
                    </div>
                    <div className="cert-card">
                        <img src="cert3.png" alt="Certification 3" />
                        <h3>Safety Award</h3>
                        <p>Excellence in Safety Standards</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;