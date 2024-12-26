import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from '../pages/admin';

function AdminViewRoutes() {
  return (
    <>
          <BrowserRouter>
        <Routes>
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AdminViewRoutes;
