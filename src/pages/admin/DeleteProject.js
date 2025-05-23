// File: tiibu-frontend/src/pages/DeleteProject.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getProjectById, deleteProject } from '../../utils/api';
import '../../assests/styles/delete.css';

function DeleteProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch project details for deletion');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProject(id);
      navigate('/'); // Redirect to project list after successful deletion
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete project');
    }
  };

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
    <div className="delete-project-container">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete the project:</p>
      <h3>"{project.title}"?</h3>
      <p>Description: {project.description}</p>
      {project.imageUrl && (
        <div className="project-image-preview">
          <img
            src={`http://localhost:5000${project.imageUrl}`}
            alt={project.title}
          />
        </div>
      )}
      <div className="delete-actions">
        <button className="delete-button" onClick={handleDelete}>Delete</button>
        <Link to="/" className="cancel-button">Cancel</Link>
      </div>
    </div>
  );
}

export default DeleteProject;