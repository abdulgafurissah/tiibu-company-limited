import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they
    // login, which is a nicer user experience than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />; // If authenticated, render the child routes
};

export default PrivateRoute;