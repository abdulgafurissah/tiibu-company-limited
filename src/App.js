import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientViewRoutes from '../src/routes/client-view-routes';
import DashBoard from '../src/pages/admin/dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<ClientViewRoutes />} />
        <Route path='/dashboard/*' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

