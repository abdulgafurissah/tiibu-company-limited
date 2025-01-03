import { Routes, Route } from 'react-router-dom';
import Dashboard from '../adminPages/admin';
import Services from '../adminPages/addServices';
import Projects from '../adminPages/addProjects';
import BlogPosts from '../adminPages/addBlog';
import JobApplications from '../adminPages/viewApplications';
import Messages from '../adminPages/messageView';

function AdminViewRoutes() {
  return (
    <div className="flex">
      <div className="flex-grow p-4">
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/services' element={<Services/>}/>
          <Route path='/dashboard/projects' element={<Projects/>}/>
          <Route path='/dashboard/blog-posts' element={<BlogPosts/>}/>
          <Route path='/dashboard/job-applications' element={<JobApplications/>}/>
          <Route path='/dashboard/messages' element={<Messages/>}/>
        </Routes>
      </div>
    </div>
  );
}

function RouteNotFound({ location }) {
  throw new Error(`No route matches location: ${location.pathname}`);
}

export default AdminViewRoutes;

