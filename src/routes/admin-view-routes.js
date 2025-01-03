import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AdminViewHeader from '../components/admin-view-header';
import Dashboard from '../pages/admin/dashboard';
import Services from '../pages/admin/addServices';
import Projects from '../pages/admin/addProjects';
import BlogPosts from '../pages/admin/addBlog';
import JobApplications from '../pages/admin/viewApplications';
import Messages from '../pages/admin/messageView';

function AdminViewRoutes() {
  return (
    <div className="flex">
      <div className="flex-grow p-4">
        <AdminViewHeader />
        <Routes>
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/dashboard/services' element={<Services />} />
          <Route path='/dashboard/projects' element={<Projects />} />
          <Route path='/dashboard/blog-posts' element={<BlogPosts />} />
          <Route path='/dashboard/job-applications' element={<JobApplications />} />
          <Route path='/dashboard/messages' element={<Messages />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminViewRoutes;

