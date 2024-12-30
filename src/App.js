import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminViewRoutes from './Viewroutes/admin-view-routes';
import ClientViewRoutes from './Viewroutes/client-view-routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/*' element={<AdminViewRoutes />} />
        <Route path='/*' element={<ClientViewRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

