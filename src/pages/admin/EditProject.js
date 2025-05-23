import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getProjectById, updateProject } from '../../utils/api';
import '../../assests/styles/editproject.css'

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null); // Clear previous errors
    getProjectById(id)
      .then(response => {
        // Handle APIs that might return data directly or nested under a 'data' key
        const projectData = response.data || response;
        if (projectData) {
          setProject(projectData);
          setTitle(projectData.title || '');
          setDescription(projectData.description || '');
          setStatus(projectData.status || 'ongoing');
          if (projectData.imageUrl) {
            setImagePreview(`http://localhost:5000${projectData.imageUrl}`);
          }
        } else {
          setError('Project data not found in response.');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.error || err.message || 'Failed to fetch project');
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
      navigate('/dashboard/projects'); // Navigate to project list after update
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update project');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      // If no file is selected, revert to original project image if available
      setImagePreview(project && project.imageUrl ? `http://localhost:5000${project.imageUrl}` : '');
    }
  };

  if (loading) {
    return <p>Loading project details...</p>;
  }

  // If an error occurred during fetch and project is still null or not properly loaded
  if (error && !project) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className='edit-project-container'>
      <h2>Edit Project</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
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
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '100px', marginTop: '10px' }}
            />
          )}
        </div>
        <button type="submit">Update Project</button>
        <Link to="/dashboard/projects" className="cancel-button">Cancel</Link>
      </form>
    </div>
  );
}

export default EditProject;