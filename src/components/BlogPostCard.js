// File: tiibu-frontend/src/components/BlogPostCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogPostCard.css';

function BlogPostCard({ post }) {
  // Truncate content for display in the card
  const truncatedContent = post.content.length > 150
    ? post.content.substring(0, 150) + '...'
    : post.content;

  return (
    <div className="blog-post-card">
      {post.imageUrl && (
        <div className="blog-post-card-image-wrapper">
          <img src={`http://localhost:5000${post.imageUrl}`} alt={post.title} className="blog-post-card-image" />
        </div>
      )}
      <Link to={`/blog/${post._id}`} className="blog-post-card-title-link">
        <h3 className="blog-post-card-title">{post.title}</h3>
      </Link>
      <p className="blog-post-card-meta">
        By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="blog-post-card-content">{truncatedContent}</p>
      <div className="blog-post-card-tags">
        {post.tags && post.tags.map(tag => (
          <span key={tag} className="blog-post-card-tag">{tag}</span>
        ))}
      </div>
      <div className="blog-post-card-actions">
        <Link to={`/blog/${post._id}`} className="button view-button">Read More</Link>
        <Link to={`/blog/edit/${post._id}`} className="button edit-button">Edit</Link>
        <Link to={`/blog/delete/${post._id}`} className="button delete-button">Delete</Link>
      </div>
    </div>
  );
}

export default BlogPostCard;