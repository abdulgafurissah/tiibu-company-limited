function Projects() {
    return (
        <>
            <div className="main-content">
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
                        <input type="text" placeholder="Project Name" required />
                        <input type="text" placeholder="Type (e.g., Residential)" required />
                        <input type="text" placeholder="Status (e.g., Ongoing, Completed)" required />
                        <button type="submit">Add Project</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Projects;
