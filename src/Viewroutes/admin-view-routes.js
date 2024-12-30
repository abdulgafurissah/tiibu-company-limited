import { Routes, Route } from 'react-router-dom';
import Admin from '../admin-pages/admin';
import AddBlog from '../admin-pages/addBlog';
import AddServices from '../admin-pages/addServices';

function AdminViewRoutes() {
  return (
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/add-blog' element={<AddBlog />} />
        <Route path='/admin/add-services' element={<AddServices />} />
      </Routes>

  );
}

export default AdminViewRoutes;