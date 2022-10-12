import React from 'react';
import PrivateRoute from '../lib/PrivateRoute';

function Admin() {
  return <div></div>;
}

export default function AdminPrivateRoute({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <PrivateRoute
      component={Admin}
      redirectLink='/'
      isAuthenticated={isAuthenticated}
    />
  );
}
