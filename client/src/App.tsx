import 'react-datepicker/dist/react-datepicker.min.css';

import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import GlobalStyles from './lib/globalStyles';
import { useRecoilValue } from 'recoil';
import userAtom from './atom/user';
import AdminPrivateRoute from './pages/Admin';

export default function App() {
  const user = useRecoilValue(userAtom);
  const isAuthenticated = useMemo(() => user.isLoggedIn, [user]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/admin'
          element={<AdminPrivateRoute isAuthenticated={isAuthenticated} />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
