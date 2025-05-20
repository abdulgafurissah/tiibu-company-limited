import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
      {project.imageUrl && (
        <img
          src={`http://localhost:5000${project.imageUrl}`}
          alt={project.title}
        />
      )}
      <Link to={`/edit/${project._id}`} className="edit-link">Edit</Link>
      <Link to={`/delete/${project._id}`} className="delete-link">delete</Link>
    </div>
  );
}

export default ProjectCard;