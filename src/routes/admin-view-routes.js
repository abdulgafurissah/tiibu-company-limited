import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard';
import Services from '../pages/admin/addServices';
import Projects from '../pages/admin/addProjects';
import BlogPosts from '../pages/admin/addBlog';
import JobApplications from '../pages/admin/viewApplications';
import Messages from '../pages/admin/messageView';

function AdminViewRoutes() {
  return (
    <>
      <div className="flex">
        <div className="flex-grow p-4">
          {/* Ensure AdminViewHeader component is properly imported and displays correctly */}
          <Dashboard />
        </div>
      </div>

      <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog-posts" element={<BlogPosts />} />
          <Route path="job-applications" element={<JobApplications />} />
          <Route path="messages" element={<Messages />} />
        </Routes>
    </>
  );
}
        
    
export default AdminViewRoutes;

