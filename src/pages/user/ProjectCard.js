import React from 'react';
import '../../assests/styles/ProjectCard.css';

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
    </div>
  );
}

export default ProjectCard;