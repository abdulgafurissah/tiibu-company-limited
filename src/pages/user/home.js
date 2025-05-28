import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProjects, fetchBlogPosts as getAllBlogPosts  } from '../../utils/api';
import '../../assests/styles/home.css';
import '../../assests/styles/problog.css'
import One from '../../assests/images/1.png'

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
                    <img src={One} alt="Project 1" className="active" />
                    <img src= {One} alt="Project 2" />
                    <img src={One} alt="Project 3" />
                </div>
                <div className="overlay"></div>
                <div>
                    <h1>Building Dreams, Constructing Reality</h1>
                    <p>Delivering Excellence in Construction</p>
                </div>
            </section>

            <section className="quick-nav">
                <NavLink to="/blog">Publication</NavLink>
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
                    <BlogListPage />
                </section>
            </div>
        </>
    );
}
function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogPosts();
        setPosts(response.data);
        setError(null);
      } catch (err) {
        const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch blog posts';
        setError(errorMessage);
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="container"><p>Loading blog posts...</p></div>;
  if (error) return <div className="container"><p className="error-message">Error: {error}</p></div>;

  return (
    <div className="container public-blog-list-container">
      {posts.length === 0 ? (
        <p>No blog posts available at the moment. Check back soon!</p>
      ) : (
        <div className="public-blog-posts-grid">
          {posts.map(post => (
            <div key={post._id} className="public-blog-post-card">
              {post.imageUrl && (
                <img src={`http://localhost:5000${post.imageUrl}`} alt={post.title} className="public-blog-post-card-image" />
              )}
              <h3 className="public-blog-post-card-title">{post.title}</h3>
              <p className="public-blog-post-card-meta">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
              <p className="public-blog-post-card-excerpt">{`${post.content.substring(0, 100)}...`}</p>
              <Link to={`/blog/${post._id}`} className="button read-more-button">Read More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
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
                    <Link to={`/projects/${project._id}`} className="project-title-link">
                         {project.imageUrl && (
                        <img
                            src={`http://localhost:5000${project.imageUrl}`}
                            alt={project.title}
                            style={{ maxWidth: '300px' }}
                        />
                    )}
                    <p>{project.description.substring(0, 100)}...</p> {/* Short description */}
                     <h3>Read more</h3>
                    </Link>
                   
                </div>
            ))}
        </div>
    );
}

export default Home;
