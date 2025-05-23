import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProjects = async (page = 1, limit = 10, search = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects?page=${page}&limit=${limit}&search=${search}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/projects`, projectData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/projects/${id}`, projectData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// --- Blog Posts API (NEW) ---
export const fetchBlogPosts = async (page = 1, limit = 10, search = '', status = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogposts?page=${page}&limit=${limit}&search=${search}&status=${status}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBlogPostById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogposts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBlogPost = async (blogPostData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/blogposts`, blogPostData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBlogPost = async (id, blogPostData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/blogposts/${id}`, blogPostData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBlogPost = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/blogposts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};