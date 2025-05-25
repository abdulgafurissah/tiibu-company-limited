import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts as getAllBlogPosts } from '../../utils/api'; // We'll add this function next
import '../../assests/styles/PublicBlogList.css'; // We'll create this CSS file

function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogPosts();
        setPosts(response.data);
        setError(null);
      } catch (err) {
        const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch blog posts';
        setError(errorMessage);
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="container"><p>Loading blog posts...</p></div>;
  if (error) return <div className="container"><p className="error-message">Error: {error}</p></div>;

  return (
    <div className="container public-blog-list-container">
      <h1 className="page-title">Our Blog</h1>
      {posts.length === 0 ? (
        <p>No blog posts available at the moment. Check back soon!</p>
      ) : (
        <div className="public-blog-posts-grid">
          {posts.map(post => (
            <div key={post._id} className="public-blog-post-card">
              {post.imageUrl && (
                <img src={`http://localhost:5000${post.imageUrl}`} alt={post.title} className="public-blog-post-card-image" />
              )}
              <h3 className="public-blog-post-card-title">{post.title}</h3>
              <p className="public-blog-post-card-meta">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
              <p className="public-blog-post-card-excerpt">{`${post.content.substring(0, 100)}...`}</p>
              <Link to={`/blog/${post._id}`} className="button read-more-button">Read More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogListPage;