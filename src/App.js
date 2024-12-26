import './App.css';
import AdminViewRoutes from './Viewroutes/admin-view-routes';
import ClientViewRoutes from './Viewroutes/client-view-routes';
function App() {
  return (
    <div className="App">
      <AdminViewRoutes />
      <ClientViewRoutes />
    </div>
  );
}

export default App;
