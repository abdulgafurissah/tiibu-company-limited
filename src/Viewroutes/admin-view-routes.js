import { Routes, Route } from 'react-router-dom';
import Admin from '../admin-pages/admin';
import AddBlog from '../admin-pages/addBlog';
import AddServices from '../admin-pages/addServices.js';

function AdminViewRoutes() {
  return (
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/blog' element={<AddBlog />} />
        <Route path='/admin/services' element={<AddServices />} />
      </Routes>

  );
}

export default AdminViewRoutes;