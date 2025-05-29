import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust path
// import './LoginPage.css'; // Optional: for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await login(username, password);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error || 'Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="login-page-container" style={{ /* Basic styles */
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '80vh'
    }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} style={{ /* Basic styles */
          display: 'flex', flexDirection: 'column', width: '300px', gap: '10px'
      }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;