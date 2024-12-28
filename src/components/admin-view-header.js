import { Link } from 'react-router-dom';
import '../styles/admin.css';
function AdminHeader() {

    return (
        <>
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <Link to="/admin/services" className="active">Manage Services</Link>
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
    )
}

export default AdminHeader;

