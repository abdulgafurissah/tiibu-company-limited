import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from '../admin-pages/admin';
import AddBlog from '../admin-pages/addBlog';

function AdminViewRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Admin />} />
        <Route path="blogs" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AdminViewRoutes;
