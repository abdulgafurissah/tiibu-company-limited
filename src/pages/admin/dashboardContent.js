import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust path
import '../../assests/styles/dashboardContent.css'
const DashboardContent = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };
  return (
    <div className="dashboard-home">
      <h1>Tiibu Company Limited</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>New Messages</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Active Services</h3>
          <p>8</p>
        </div>
      </div>
      <button onClick={handleLogout} style={{ margin: '20px auto', display: 'block', padding: '10px' }}>
        Logout
      </button>
    </div>
  );
};


export default DashboardContent;