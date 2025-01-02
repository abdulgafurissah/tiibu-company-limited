import '../styles/service.css'
function Services() {
    return(
        <>
         <section class="hero">
        <h1>Our Services</h1>
    </section>

    <section class="services">
        <h2>What We Offer</h2>
        <div class="services-grid">
            <div class="service-card">
                <img src="service1.png" alt="Building Construction"/>
                <h3>Building Construction</h3>
                <p>We specialize in high-quality residential, commercial, and industrial construction projects.</p>
            </div>
            <div class="service-card">
                <img src="service2.png" alt="Renovation & Remodeling"/>
                <h3>Renovation & Remodeling</h3>
                <p>Transforming spaces with expert renovation and remodeling solutions tailored to your needs.</p>
            </div>
            <div class="service-card">
                <img src="service3.png" alt="Civil Engineering"/>
                <h3>Civil Engineering</h3>
                <p>Providing comprehensive civil engineering services for infrastructure and development projects.</p>
            </div>
            <div class="service-card">
                <img src="service4.png" alt="Project Management"/>
                <h3>Project Management</h3>
                <p>Ensuring efficient project delivery through meticulous planning and execution.</p>
            </div>
            <div class="service-card">
                <img src="service5.png" alt="Interior Design"/>
                <h3>Interior Design</h3>
                <p>Creating stunning interior spaces that combine functionality with aesthetics.</p>
            </div>
            <div class="service-card">
                <img src="service6.png" alt="Custom Construction"/>
                <h3>Custom Construction</h3>
                <p>Bespoke construction solutions to meet unique client requirements.</p>
            </div>
        </div>
    </section>
        </>
    )
    
}
export default Services;