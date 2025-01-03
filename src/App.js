import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientViewRoutes from '../src/routes/client-view-routes';
import DashBoard from '../src/routes/admin-view-routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ClientViewRoutes />} />
        <Route path='/*' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

