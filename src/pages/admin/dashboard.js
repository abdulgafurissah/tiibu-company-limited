import { Routes, Route, Link } from 'react-router-dom';
import '../../assests/styles/admin.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/services">Services</Link></li>
          <li><Link to="/dashboard/projects">ProjectCard</Link></li>
          <li><Link to="/dashboard/addprojects">Add Projects</Link></li>
          <li><Link to="/dashboard/blog-posts">Blog Posts</Link></li>
          <li><Link to="/dashboard/job-applications">Job Applications</Link></li>
          <li><Link to="/dashboard/messages">Messages</Link></li>
        </ul>
      </nav>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="dashboard-home">
      <h1>Welcome to the Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>New Messages</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Active Services</h3>
          <p>8</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <DashboardContent />
        
      </div>
    </div>
  );
};

export default Dashboard;