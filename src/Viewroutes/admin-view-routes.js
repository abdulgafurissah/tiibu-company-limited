import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/admin-view-header';
import Dashboard from '../adminPages/admin';
import Services from '../adminPages/addServices';
import Projects from '../adminPages/addProjects';
import BlogPosts from '../adminPages/addBlog';
import JobApplications from '../adminPages/viewApplications';
import Messages from '../adminPages/messageView';

function AdminViewRoutes() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/services" element={<Services />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/blog-posts" element={<BlogPosts />} />
          <Route path="/admin/job-applications" element={<JobApplications />} />
          <Route path="/admin/messages" element={<Messages />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminViewRoutes;
