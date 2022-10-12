import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.FC;
  isAuthenticated: boolean;
  redirectLink?: string;
}

export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  redirectLink,
}: PrivateRouteProps) {
  if (!Component) return null;

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to={redirectLink || '/'} />
  );
}
