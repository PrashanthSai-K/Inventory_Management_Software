import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const getUserRole = () => {
    // Implement logic to fetch the user's role from your authentication system
    // For demonstration purposes, let's assume the user is an 'admin'
    return 'admin';
  };

const PrivateRoute = ({ roles, ...props }) => {
  // Check user roles and authorization logic
  const userRole = getUserRole(); // Implement this function to get the user's role
  const isAuthorized = roles.includes(userRole);

  if (!isAuthorized) {
    // Redirect or show unauthorized message
    return <Navigate to="/error" />;
  }

  // If authorized, render the specified element
  return <Route {...props} />;
};

export default PrivateRoute;
