import { NavLink } from 'react-router-dom';
import '../styles/home.css'

// Ensure DOM elements are loaded before attaching event listeners
window.onload = () => {
    // Function to change the slide
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    function changeSlide() {
        if (slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }

    setInterval(changeSlide, 3000); // Change slide every 3 seconds
};

function Home() {
    return (
        <>
            <section className="hero">
                <div className="slider">
                    <img src="project1.jpg" alt="Project 1" className="active" />
                    <img src="project2.jpg" alt="Project 2" />
                    <img src="project3.jpg" alt="Project 3" />
                </div>
                <div className="overlay"></div>
                <div>
                    <h1>Building Dreams, Constructing Reality</h1>
                    <p>Delivering Excellence in Construction</p>
                </div>
            </section>
            <section className="quick-nav">
                <a href="#services"><NavLink to="career">Careers</NavLink></a>
                <a href="#projects"><NavLink to="projets"> Projects Portfolio</NavLink></a>
                <a href="#contact"><NavLink to="contact"> Get in Touch</NavLink></a>
            </section>
        </>
    );
}

export default Home;

