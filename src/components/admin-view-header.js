import { NavLink } from 'react-router-dom';
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
                const sectionId = link.getAttribute('href').split('/').pop(); // Get the last part of the URL path
                document.getElementById(sectionId).style.display = 'block';
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
                <NavLink to="/admin/projects">Manage Projects</NavLink>
                <NavLink to="/admin/blog">Manage Blog Posts</NavLink>
                <NavLink to="/admin/messages">View Messages</NavLink>
                <NavLink to="/admin/jobs">Job Applications</NavLink>
                <NavLink to="/admin/logout">Logout</NavLink>
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

