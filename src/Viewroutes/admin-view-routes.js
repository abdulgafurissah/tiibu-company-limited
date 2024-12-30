import { Routes, Route } from 'react-router-dom';
import AdminHeader from '../components/admin-view-header';
import Admin from '../adminPages/admin';
import AddBlog from '../adminPages/addBlog';
import AddProject from '../adminPages/addProjects';
import AddServices from '../adminPages/addServices';
import MessageView from '../adminPages/messageView';
import ViewApplications from '../adminPages/viewApplications';

function AdminViewRoutes() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/blog' element={<AddBlog />} />
        <Route path='/admin/services' element={<AddServices />} />
        <Route path='/admin/projects' element={<AddProject />} />
        <Route path='/admin/messages' element={<MessageView />} />
        <Route path='/admin/jobs' element={<ViewApplications />} />
        <Route path="*" element={<div>Error 404: Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default AdminViewRoutes;

