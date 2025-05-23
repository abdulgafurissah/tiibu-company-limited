// File: tiibu-frontend/src/pages/SingleBlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostById } from '../utils/api';
import '../styles/SingleBlogPost.css';

function SingleBlogPost() {
  const { id } = useParams();
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

  if (loading) {
    return <p className="loading-message">Loading blog post...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (!blogPost) {
    return <p className="not-found-message">Blog post not found.</p>;
  }

  return (
    <div className="single-blog-post-container">
      <h2 className="single-blog-post-title">{blogPost.title}</h2>
      <p className="single-blog-post-meta">
        By <span className="author">{blogPost.author}</span> on {new Date(blogPost.createdAt).toLocaleDateString()}
        <span className={`status-badge status-${blogPost.status}`}>{blogPost.status}</span>
      </p>

      {blogPost.imageUrl && (
        <div className="single-blog-post-image-wrapper">
          <img
            src={`http://localhost:5000${blogPost.imageUrl}`}
            alt={blogPost.title}
            className="single-blog-post-image"
          />
        </div>
      )}

      <div className="single-blog-post-content">
        <p>{blogPost.content}</p>
      </div>

      <div className="single-blog-post-tags">
        <strong>Tags: </strong>
        {blogPost.tags && blogPost.tags.length > 0 ? (
          blogPost.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))
        ) : (
          <span>No tags</span>
        )}
      </div>

      <div className="single-blog-post-actions">
        <Link to={`/blog/edit/${blogPost._id}`} className="button edit-button">Edit Post</Link>
        <Link to={`/blog/delete/${blogPost._id}`} className="button delete-button">Delete Post</Link>
        <Link to="/blog" className="button back-button">Back to Blog</Link>
      </div>
    </div>
  );
}

export default SingleBlogPost;