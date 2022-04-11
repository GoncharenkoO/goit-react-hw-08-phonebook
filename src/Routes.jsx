import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoaderComponent from './components/Loader';
import PublicRoute from './shared/components/PublicRoute';
import PrivateRoute from './shared/components/PrivateRoute';
import Container from './components/Container';
import LayoutPage from './components/LayoutPage/LayoutPage';
import HomePage from './pages/HomePage/HomePage';
import PhonebookPage from './pages/PhonebookPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

const Routers = () => {
  return (
    <Container>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="signup" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<PhonebookPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
};

export default Routers;
