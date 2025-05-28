// File: tiibu-frontend/src/pages/EditBlogPost.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlogForm from '../../components/BlogForm';
import { getBlogPostById, updateBlogPost } from '../../utils/api';
import '../../assests/styles/FormPage.css'; // Reusing general form page styles

function EditBlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getBlogPostById(id);
        setBlogPost(data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch blog post details');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateBlogPost(id, formData);
      navigate('/dashboard/blogposts'); // Redirect to blog list
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update blog post');
    }
  };

  if (loading) {
    return <p className="loading-message">Loading blog post details...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (!blogPost) {
    return <p className="not-found-message">Blog post not found.</p>;
  }

  return (
    <div className="form-page-container">
      {error && <p className="error-message">{error}</p>}
      <BlogForm
        onSubmit={handleSubmit}
        initialData={blogPost}
        isEditing={true}
        formTitle="Edit Blog Post"
      />
    </div>
  );
}

export default EditBlogPost;