import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../../utils/api';
import '../../assests/styles/home.css';
import '../../assests/styles/problog.css'

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

function Home({project}) {
    return (
        <>
            <section className="hero">
                <div className="slider">
                    <img src="../../assests/images/logo.png" alt="Project 1" className="active" />
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
                <NavLink to="/career">Careers</NavLink>
                <NavLink to="/projects"> Projects Portfolio</NavLink>
                <NavLink to="/contact"> Get in Touch</NavLink>
            </section>

            <div className="home-dynamic-sections">
                <section className="projects-preview">
                    <h2>Featured Projects</h2>
                    <ProjectList />
                </section>
                <section className='homeBlogSection'>
                    <h2>Latest Blog Posts</h2>
                    <article>
                        <h3>5 Tips for Sustainable Construction</h3>
                        <i>lorem sepium</i>
                    </article>
                </section>
            </div>
        </>
    );
}

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects()
            .then(data => {
                setProjects(data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message || 'Failed to fetch projects');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="project-list">
            {projects.slice(0, 3).map(project => ( // Displaying only the first 3 projects as a preview
                <div key={project._id} className="project-card">
                    <h3>{project.title}</h3>
                    {project.imageUrl && (
                        <img
                            src={`http://localhost:5000${project.imageUrl}`}
                            alt={project.title}
                            style={{ maxWidth: '300px' }}
                        />
                    )}
                    <p>{project.description.substring(0, 100)}...</p> {/* Short description */}
                     <Link to={`/projects/${project._id}`} className="project-title-link">
                        {project.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
