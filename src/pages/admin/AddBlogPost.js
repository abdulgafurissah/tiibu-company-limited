// File: tiibu-frontend/src/pages/AddBlogPost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../../components/BlogForm';
import { createBlogPost } from '../../utils/api';
import '../../assests/styles/BlogForm.css'; // Reusing general form page styles

function AddBlogPost() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createBlogPost(formData);
      navigate('/blog'); // Redirect to blog list
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create blog post');
    }
  };

  return (
    <div className="form-page-container">
      {error && <p className="error-message">{error}</p>}
      <BlogForm onSubmit={handleSubmit} formTitle="Add New Blog Post" />
    </div>
  );
}

export default AddBlogPost;