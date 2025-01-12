// Import necessary libraries
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../assests/styles/dashboard.css';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/services">Services</Link></li>
            <li><Link to="/dashboard/projects">Projects</Link></li>
            <li><Link to="/dashboard/blog-posts">Blog Posts</Link></li>
            <li><Link to="/dashboard/job-applications">Job Applications</Link></li>
            <li><Link to="/dashboard/messages">Messages</Link></li>
        </ul>
      </nav>
    </div>
  );
};

// Dashboard Content Component
const DashboardContent = () => {
  return (
    <div className="content">
      <h1>Welcome to the Dashboard</h1>
      <p>Select an option from the sidebar to get started.</p>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/dashboard" element={<DashboardContent />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

