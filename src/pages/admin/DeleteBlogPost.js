// File: tiibu-frontend/src/pages/DeleteBlogPost.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getBlogPostById, deleteBlogPost } from '../../utils/api';
import '../../assests/styles/BlogDeletePage.css'; // Reusing general delete page styles

function DeleteBlogPost() {
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
        setError(err.response?.data?.error || 'Failed to fetch blog post details for deletion');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBlogPost(id);
      navigate('/dashboard/blogposts'); // Redirect to blog list after successful deletion
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete blog post');
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
    <div className="delete-page-container">
      <h2>Confirm Blog Post Deletion</h2>
      <p>Are you sure you want to delete the blog post:</p>
      <h3>"{blogPost.title}"?</h3>
      <p>Author: {blogPost.author}</p>
      {blogPost.imageUrl && (
        <div className="item-image-preview">
          <img
            src={`http://localhost:5000${blogPost.imageUrl}`}
            alt={blogPost.title}
          />
        </div>
      )}
      <div className="delete-actions">
        <button className="button delete-button" onClick={handleDelete}>Delete Permanently</button>
        <Link to="/blog" className="button cancel-button">Cancel</Link>
      </div>
    </div>
  );
}

export default DeleteBlogPost;