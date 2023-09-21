import { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../../layouts/main/layout';
import SplashScreen from '../../components/loading-screen/splash-screen';
import { mainRoutes, HomePage } from './main';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <HomePage />
          </Suspense>
        </MainLayout>
      ),
    },

    ...mainRoutes,

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
