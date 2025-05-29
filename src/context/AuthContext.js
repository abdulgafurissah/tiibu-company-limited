import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// API base URL
const API_URL = 'http://localhost:5000/api/auth'; // Your backend URL

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // For initial check
  const [token, setToken] = useState(localStorage.getItem('tiibu_token'));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // You could add a verify token endpoint on your backend and call it here
      // to ensure the token is still valid and get user data.
      // For now, we'll assume if a token exists, the user is "logged in" on the client.
      // A proper implementation would verify the token with the backend.
      // For simplicity, we are not fetching user details here on load, but you should.
      setCurrentUser({ token }); // Placeholder, ideally fetch user details
    }
    setLoading(false);
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      if (response.data.success && response.data.token) {
        localStorage.setItem('tiibu_token', response.data.token);
        setToken(response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        setCurrentUser({ token: response.data.token }); // Placeholder
        return { success: true };
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      return { success: false, error: error.response ? error.response.data.error : 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('tiibu_token');
    setToken(null);
    delete axios.defaults.headers.common['Authorization'];
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    token,
    login,
    logout,
    isAuthenticated: !!token, // Or !!currentUser based on your logic
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};