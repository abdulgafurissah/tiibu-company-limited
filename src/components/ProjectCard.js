import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card-item">
      <h3>{project.title}</h3>
      <p>Status: {project.status}</p>
      {project.imageUrl && (
        <img
          src={`http://localhost:5000${project.imageUrl}`}
          alt={project.title}
        />
      )}
      <p>{project.description}</p>
      
      <Link to="/dashboard/addprojects" className="add-link">Add New Project</Link>
      <Link to={`/dashboard/edit/${project._id}`} className="edit-link">Edit</Link>
      <Link to={`/dashboard/delete/${project._id}`} className="delete-link">delete</Link>
    </div>
  );
}

export default ProjectCard;