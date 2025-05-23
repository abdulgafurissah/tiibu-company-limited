// File: tiibu-frontend/src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogForm.css';

function BlogForm({ onSubmit, initialData = {}, isEditing = false, formTitle }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [author, setAuthor] = useState(initialData.author || 'Admin');
  const [tags, setTags] = useState(initialData.tags ? initialData.tags.join(', ') : '');
  const [status, setStatus] = useState(initialData.status || 'draft');
  const [image, setImage] = useState(null); // File object
  const [imageUrlPreview, setImageUrlPreview] = useState(initialData.imageUrl ? `http://localhost:5000${initialData.imageUrl}` : '');
  const [removeCurrentImage, setRemoveCurrentImage] = useState(false);

  useEffect(() => {
    // Only update state if initialData changes for editing scenarios
    if (isEditing && initialData._id) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
      setAuthor(initialData.author || 'Admin');
      setTags(initialData.tags ? initialData.tags.join(', ') : '');
      setStatus(initialData.status || 'draft');
      setImageUrlPreview(initialData.imageUrl ? `http://localhost:5000${initialData.imageUrl}` : '');
      setRemoveCurrentImage(false); // Reset on initial data load
    }
  }, [initialData, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    formData.append('tags', tags); // Send as comma-separated string
    formData.append('status', status);

    if (image) {
      formData.append('image', image);
    } else if (isEditing && removeCurrentImage) {
        formData.append('imageUrl', ''); // Signal to backend to remove image
    }

    onSubmit(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrlPreview(URL.createObjectURL(file)); // Create a local URL for preview
      setRemoveCurrentImage(false); // If new image is selected, don't remove old one
    } else {
      setImage(null);
      if(!isEditing || removeCurrentImage) { // Clear preview if no file and not editing or intended removal
          setImageUrlPreview('');
      }
    }
  };

  const handleRemoveImageCheckbox = (e) => {
      setRemoveCurrentImage(e.target.checked);
      if (e.target.checked) {
          setImage(null); // Clear selected file if checkbox checked
          setImageUrlPreview(''); // Clear preview
      } else if (initialData.imageUrl && isEditing) {
          setImageUrlPreview(`http://localhost:5000${initialData.imageUrl}`); // Restore original preview if unchecked
      }
  };


  return (
    <div className="blog-form-container">
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., react, javascript, webdev"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/jpeg,image/png,image/gif"
            onChange={handleImageChange}
          />
          {imageUrlPreview && (
            <div className="image-preview-wrapper">
              <img src={imageUrlPreview} alt="Blog Post Preview" className="image-preview" />
              <div className="remove-image-checkbox">
                <input
                  type="checkbox"
                  id="removeCurrentImage"
                  checked={removeCurrentImage}
                  onChange={handleRemoveImageCheckbox}
                />
                <label htmlFor="removeCurrentImage">Remove current image</label>
              </div>
            </div>
          )}
        </div>
        <div className="form-actions">
          <button type="submit" className="button submit-button">{isEditing ? 'Update Post' : 'Create Post'}</button>
          <Link to="/blog" className="button cancel-button">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;