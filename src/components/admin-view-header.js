import { Link , NavLink} from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/admin.css';

function AdminHeader() {
    useEffect(() => {
        // JavaScript to toggle active section
        const links = document.querySelectorAll('.sidebar a');
        const sections = document.querySelectorAll('.main-content section');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                sections.forEach(section => section.style.display = 'none');
                document.querySelector(link.getAttribute('href')).style.display = 'block';
            });
        });

        // Default display
        sections.forEach((section, index) => section.style.display = index === 0 ? 'block' : 'none');
    }, []);

    return (
        <>
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <NavLink to="/admin/services" className="active">Manage Services</NavLink>
                <Link to="/admin/projects">Manage Projects</Link>
                <Link to="/admin/blog">Manage Blog Posts</Link>
                <Link to="/admin/messages">View Messages</Link>
                <Link to="/admin/jobs">Job Applications</Link>
                <Link to="/admin/logout">Logout</Link>
            </div>

            <div className="main-content">
                <section id="services">
                    <h1>Manage Services</h1>
                </section>
                <section id="projects">
                    <h1>Manage Projects</h1>
                </section>
                <section id="blog">
                    <h1>Manage Blog Posts</h1>
                </section>
                <section id="messages">
                    <h1>View Messages</h1>
                </section>
                <section id="jobs">
                    <h1>Job Applications</h1>
                </section>
                <section id="logout">
                    <h1>Logout</h1>
                </section>
            </div>
        </>
    );
}

export default AdminHeader;

