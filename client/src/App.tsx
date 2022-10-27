import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

import GlobalStyles from './lib/globalStyles';
import { useRecoilValue } from 'recoil';
import userAtom from './atom/user';
import AdminPrivateRoute from './pages/Admin';
import { Helmet } from 'react-helmet-async';
import ModalRender from './ModalRender';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const user = useRecoilValue(userAtom);
  const isAuthenticated = useMemo(() => user.isLoggedIn, [user]);

  return (
    <BrowserRouter>
      <Helmet>
        <title>대건세끼</title>
      </Helmet>
      <GlobalStyles />
      <ModalRender />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/admin'
          element={<AdminPrivateRoute isAuthenticated={isAuthenticated} />}
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
