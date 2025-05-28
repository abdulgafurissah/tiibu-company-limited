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
import AddBlogPost from '../pages/admin/AddBlogPost';
import EditBlogPost from '../pages/admin/EditBlogPost'
import DeleteBlogPost from '../pages/admin/DeleteBlogPost'
import { useAuth } from '../context/AuthContext';
import LoginPage from '../pages/admin/LoginPage';


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
          <Route path='addplogpost' element={<AddBlogPost/>}/>   
          <Route path='editblogpost/:id' element={<EditBlogPost/>}/>
          <Route path='deleteblogpost/:id' element={<DeleteBlogPost/>}/>
          <Route path='login' element={<LoginPage/>}/>
          
          
        </Routes>
    </>
  );
}
        
    
export default AdminViewRoutes;
