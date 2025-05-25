// File: tiibu-frontend/src/pages/BlogList.js
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../../utils/api';
import BlogPostCard from '../../components/BlogPostCard.js';
import '../../assests/styles/BlogList.css';

function BlogList() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6; // Posts per page

  const getPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBlogPosts(currentPage, limit, search, statusFilter);
      setBlogPosts(data.data);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message || 'Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  }, [currentPage, limit, search, statusFilter]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <p className="loading-message">Loading blog posts...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-heading">Blog Posts</h2>
      <div className="blog-list-header-actions">
        <Link to="/dashboard/addplogpost" className="button add-blog-post-button">Create New Post</Link>
        <div className="blog-filters">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />
          <select value={statusFilter} onChange={handleStatusFilterChange} className="status-filter">
            <option value="">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      <div className="blog-posts-grid">
        {blogPosts.length > 0 ? (
          blogPosts.map(post => (
            <BlogPostCard key={post._id} post={post} />
          ))
        ) : (
          <p className="no-blog-posts-message">No blog posts found. Create one!</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`pagination-button ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;