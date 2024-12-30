import { Routes, Route } from 'react-router-dom';
import AdminHeader from '../components/admin-view-header';
import Admin from '../admin-pages/admin';
import AddBlog from '../admin-pages/addBlog';
import AddProject from '../admin-pages/addProjects';
import AddServices from '../admin-pages/addServices.js';
import MessageView from '../admin-pages/messageView';
import ViewApplications from '../admin-pages/viewApplications'


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
      </Routes>
    </>

  );
}

export default AdminViewRoutes;
