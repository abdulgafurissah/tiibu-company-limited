import '../styles/admin.css';
function Admin() {

    // JavaScript to toggle active section
    const links = document.querySelectorAll('.sidebar button');
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

    return (
        <>
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <button className="active" data-link="#services">Manage Services</button>
                <button data-link="#projects">Manage Projects</button>
                <button data-link="#blog">Manage Blog Posts</button>
                <button data-link="#messages">View Messages</button>
                <button data-link="#jobs">Job Applications</button>
                <button data-link="#logout">Logout</button>
            </div>

            <div className="main-content">
                <section id="services">
                    <h1>Manage Services</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Building Construction</td>
                                <td>High-quality residential and commercial construction services.</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Add New Service</h2>
                    <form className="form">
                        <input type="text" placeholder="Service Name" required/>
                        <textarea rows="5" placeholder="Description" required></textarea>
                        <button type="submit">Add Service</button>
                    </form>
                </section>

                <section id="projects">
                    <h1>Manage Projects</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Luxury Villas</td>
                                <td>Residential</td>
                                <td>Completed</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Add New Project</h2>
                    <form className="form">
                        <input type="text" placeholder="Project Name" required/>
                        <input type="text" placeholder="Type (e.g., Residential)" required/>
                        <input type="text" placeholder="Status (e.g., Ongoing, Completed)" required/>
                        <button type="submit">Add Project</button>
                    </form>
                </section>

                <section id="blogs">
                    <h1>Manage Blog Posts</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Published Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5 Tips for Sustainable Construction</td>
                                <td>2024-12-01</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>Add New Blog Post</h2>
                    <form className="form">
                        <input type="text" placeholder="Blog Title" required/>
                        <textarea rows="5" placeholder="Content" required></textarea>
                        <button type="submit">Add Blog Post</button>
                    </form>
                </section>

                <section id="messages">
                    <h1>View Messages</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>Interested in your services.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="applications">
                    <h1>Job Applications</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Applicant Name</th>
                                <th>Email</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jane Smith</td>
                                <td>jane@example.com</td>
                                <td><a href="resume.pdf" download>Download Resume</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}

export default Admin;

