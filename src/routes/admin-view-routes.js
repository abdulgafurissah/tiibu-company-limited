import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard';
import Services from '../pages/admin/addServices';
import Projects from '../pages/admin/addProjects';
import JobApplications from '../pages/admin/viewApplications';
import Messages from '../pages/admin/messageView';
import ProjectCard from '../pages/admin/projects';
import EditProject from '../pages/admin/EditProject';
import DashboardContent from '../pages/admin/dashboardContent' 
import DeleteProject from '../pages/admin/DeleteProject';
import BlogList from '../pages/admin/BlogList';

function AdminViewRoutes() {
  return (
    <>
      <div className="flex">
        <div className="flex-grow p-4">
          {/* Ensure AdminViewHeader component is properly imported and displays correctly */}
          <Dashboard />
          <DashboardContent />
        </div>
      </div>

      <Routes>
          <Route path="*" element={<Dashboard />}  />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<ProjectCard />} />
          <Route path="addprojects" element={<Projects />} />
          <Route path="edit/:id" element={<EditProject />} /> 
          <Route path="job-applications" element={<JobApplications />} />
          <Route path="messages" element={<Messages />} />
          <Route path="delete/:id" element={<DeleteProject />} />
          <Route path="blogposts" element={<BlogList />} />         
        </Routes>
    </>
  );
}
        
    
export default AdminViewRoutes;
