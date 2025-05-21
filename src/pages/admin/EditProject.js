import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getProjectById, updateProject } from '../../utils/api';

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjectById(id)
      .then(data => {
        setProject(data);
        setTitle(data.title);
        setDescription(data.description);
        setStatus(data.status);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to fetch project');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('status', status);
    if (image) {
      formData.append('image', image);
    }

    try {
      await updateProject(id, formData);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update project');
    }
  };

  if (loading) {
    return <p>Loading project details...</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <h2>Edit Project</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {project.imageUrl && (
            <img
              src={`http://localhost:5000${project.imageUrl}`}
              alt={project.title}
              style={{ maxWidth: '100px', marginTop: '10px' }}
            />
          )}
        </div>
        <button type="submit">Update Project</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default EditProject;