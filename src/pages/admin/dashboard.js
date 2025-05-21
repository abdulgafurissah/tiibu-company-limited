import { Link } from 'react-router-dom';
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


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
      </div>
    </div>
  );
};

export default Dashboard;