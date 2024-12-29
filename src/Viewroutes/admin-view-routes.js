import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from '../admin-pages/admin';
import AddBlog from '../admin-pages/addBlog';
import AddServices from '../admin-pages/addServices'

function AdminViewRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Admin />} />
        <Route path="admin/blog" element={<AddBlog />} />
        <Route path='admin/services' element={<AddServices/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AdminViewRoutes;
