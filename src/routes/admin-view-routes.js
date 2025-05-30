import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path
import Dashboard from '../pages/admin/dashboard';
import Services from '../pages/admin/addServices';
import Projects from '../pages/admin/addProjects';
import JobApplications from '../pages/admin/viewApplications';
import Messages from '../pages/admin/messageView';
import ProjectCard from '../pages/admin/projects';
import EditProject from '../pages/admin/EditProject';
import DashboardContentPage from '../pages/admin/dashboardContent' 
import DeleteProject from '../pages/admin/DeleteProject';
import BlogList from '../pages/admin/BlogList';
import AddBlogPost from '../pages/admin/AddBlogPost';
import EditBlogPost from '../pages/admin/EditBlogPost'
import DeleteBlogPost from '../pages/admin/DeleteBlogPost'
import { Navigate } from 'react-router-dom';


// This is your existing Sidebar component from your 'dashboard.js'
const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          {/* Links are now relative to /dashboard/* */}
         <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/services">Services</Link></li>
          <li><Link to="/dashboard/projects">ProjectCard</Link></li>
          <li><Link to="/dashboard/addprojects">Add Projects</Link></li>
          <li><Link to="/dashboard/job-applications">Job Applications</Link></li>
          <li><Link to="/dashboard/messages">Messages</Link></li>
          <li><Link to="/dashboard/blogposts">BlogList</Link></li>
          <li><Link to="/dashboard/addblogpost">Add blog post</Link> </li>
        </ul>
      </nav>
      <button onClick={handleLogout} style={{ margin: '20px auto', display: 'block', padding: '10px' }}>
        Logout
      </button>
    </div>
  );
};

// This is your existing Dashboard component, now acting as a layout for admin routes
const AdminLayout = () => {
  return (
    <div className="flex"> {/* Your existing flex div */}
          <DashboardContentPage />
      <Sidebar />

      <div className="flex-grow p-4"> {/* Your existing content area */}
        {/* Nested routes will render their element here via <Outlet /> implicitly */}
        <Routes>
          {/* Default page for /dashboard */}
          <Route path="*"  element={<Dashboard />} />
          <Route path="content" element={<DashboardContentPage />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<ProjectCard />} />
          <Route path="addprojects" element={<Projects />} />
          <Route path="edit/:id" element={<EditProject />} />
          <Route path="job-applications" element={<JobApplications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="delete/:id" element={<DeleteProject />} />
          <Route path="blogposts" element={<BlogList />} />
          <Route path="addblogpost" element={<AddBlogPost />} />
          <Route path="editblogpost/:id" element={<EditBlogPost />} />
          <Route path="deleteblogpost/:id" element={<DeleteBlogPost />} />
          {/* Add a catch-all for /dashboard/* if needed, or redirect to dashboard index */}
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </div>
    </div>
  );
};

// The main exported function for admin routes
function AdminViewRoutes() { // Renamed from AdminViewRoutes to match App.js usage
  
  return <AdminLayout />;
}
    
export default AdminViewRoutes;
