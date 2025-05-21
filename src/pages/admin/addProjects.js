import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../utils/api';
import '../../assests/styles/addproject.css'

const Projects = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'ongoing',
    image: null
  });
  const [preview, setPreview] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    
    try {
      await createProject(data);
      navigate('/dashboard/projects');
      alert('Project created successfully!');
    } catch (error) {
      alert('Error creating project');
    }
  };

  return (
    <div className="projects-management">
      <h1>Manage Projects</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Project Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {preview && <img src={preview} alt="Preview" className="image-preview" />}
        </div>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default Projects;