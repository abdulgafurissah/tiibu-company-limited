import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientViewRoutes from '../src/routes/client-view-routes';
import DashBoard from '../src/routes/admin-view-routes';
import LoginPage  from '../../frontend/src/pages/admin/LoginPage';
import PrivateRoute from '../../frontend/src/components/auth/PrivateRoute';

import './App.css';

function App() {
  return (
   
     <BrowserRouter>
      <Routes>
        {/* Public Client Routes */}
        <Route path='/*' element={<ClientViewRoutes />} />

        {/* Login Route - Public */}
        <Route path='/login' element={<LoginPage />} />

        {/* Protected Admin Dashboard Routes */}
        <Route element={<PrivateRoute />}> {/* This is the wrapper */}
          <Route path='/dashboard/*' element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;