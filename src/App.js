import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientViewRoutes from './Viewroutes/client-view-routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<ClientViewRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

