import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/admin-view-header';
import Dashboard from '../adminPages/admin';
import Services from '../adminPages/addServices';
import Projects from '../adminPages/addProjects';
import BlogPosts from '../adminPages/addBlog';
import JobApplications from '../adminPages/viewApplications';
import Messages from '../adminPages/messageView';

function AdminViewRoutes() {
  const location = useLocation();
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/dashboard" exact>
          <Dashboard/>
            <Route index element={<Outlet />} /> 
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="blog-posts" element={<BlogPosts />} />
          <Route path="job-applications" element={<JobApplications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="*" element={<RouteNotFound location={location} />} />
        </Routes>
      </div>
    </div>
  );
}

function RouteNotFound({ location }) {
  throw new Error(`No route matches location: ${location.pathname}`);
}

export default AdminViewRoutes;

