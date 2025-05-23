import React from 'react';
import { Link } from 'react-router-dom';
import '../../assests/styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card-item">
      <h3>{project.title}</h3>
      <p>{project.description.substring(0, 100)}...</p>
      <p>Status: {project.status}</p>
      {project.imageUrl && (
        <img
          src={`http://localhost:5000${project.imageUrl}`}
          alt={project.title}
        />
      )}
       <Link to={`/projects/${project._id}`} className="project-title-link">
        {project.title}
      </Link>
    </div>
  );
}

export default ProjectCard;