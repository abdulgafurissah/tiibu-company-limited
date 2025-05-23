// File: tiibu-frontend/src/pages/SingleProjectView.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../../utils/api'; // Import deleteProject for direct delete option
import '../../assests/styles/SingleProjectView.css'; // Import specific CSS for this page

function SingleProjectView() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch project details');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);


  if (loading) {
    return <p className="loading-message">Loading project details...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (!project) {
    return <p className="not-found-message">Project not found.</p>;
  }

  return (
    <div className="single-project-container">
      <h2 className="project-detail-title">{project.title}</h2>
      {project.imageUrl && (
        <div className="project-detail-image-wrapper">
          <img
            src={`http://localhost:5000${project.imageUrl}`}
            alt={project.title}
            className="project-detail-image"
          />
        </div>
      )}
      <p className="project-detail-description"><strong>Description:</strong> {project.description}</p>
      <p className="project-detail-status"><strong>Status:</strong> <span className={`status-${project.status}`}>{project.status}</span></p>
      <p className="project-detail-dates">
        <strong>Created At:</strong> {new Date(project.createdAt).toLocaleDateString()}
      </p>
      <p className="project-detail-dates">
        <strong>Last Updated:</strong> {new Date(project.updatedAt).toLocaleDateString()}
      </p>
      <div className="project-detail-actions">
        <Link to="/" className="button back-button">Back to Projects</Link>
      </div>
    </div>
  );
}

export default SingleProjectView;