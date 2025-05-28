// File: tiibu-frontend/src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || null);
  const [user, setUser] = useState(null); // Store user info like username, role
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [loading, setLoading] = useState(true); // To check initial token validity

  axios.defaults.baseURL = 'http://localhost:5000/api'; // Set base URL for all axios requests

  // Set Authorization header for all future requests if token exists
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      // Optional: Decode token to get user info or make a request to /api/admin/dashboard-status
      const fetchUser = async () => {
        try {
          const res = await axios.get('/admin/dashboard-status'); // Use protected route to verify token
          setUser(res.data.user);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Token verification failed:', error.response?.data?.message || error.message);
          logout(); // Invalid token, log out
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const res = await axios.post('/auth/login', { username, password });
      setToken(res.data.token);
      localStorage.setItem('adminToken', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      return true; // Success
    } catch (err) {
      console.error('Login error:', err.response?.data?.error || err.message);
      return err.response?.data?.error || 'Login failed'; // Return error message
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminToken');
    delete axios.defaults.headers.common['x-auth-token']; // Remove header
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);