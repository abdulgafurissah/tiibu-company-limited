import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminViewRoutes from './Viewroutes/admin-view-routes';
import ClientViewRoutes from './Viewroutes/client-view-routes';

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

